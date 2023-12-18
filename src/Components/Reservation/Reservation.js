import React, { useEffect } from "react";
import './Reservation.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from "axios";
import { useState } from "react";
// import mongoose from 'mongoose';


// // Define the BookingDetails schema
// const bookingDetailsSchema = new mongoose.Schema({
//     id: Number,
//     customerDetails: {
//         name: String,
//         email: String,
//         phone: String,
//     },
//     hotelDetails: {
//         name: String,
//         location: String,
//         price: Number,
//         image: String,
//         bookedRoomsWithDates: [
//             {
//                 roomType: String,
//                 checkInDate: Date,
//                 checkOutDate: Date,
//             },
//         ],
//     },
//     paymentDetails: {
//         paymentMethod: String,
//         paymentStatus: String,
//         paymentId: String,
//     },
// });

// // Create the BookingDetails model
// const BookingDetails = mongoose.model('BookingDetails', bookingDetailsSchema);

// export default BookingDetails;





const Reservation = () => {
    const [reservation, setReservation] = useState({
        hotelName: "",
        checkInDate: "",
        checkOutDate: "",
        totalCost: "",
    });
    const [hasReservation, setHasReservation] = useState(false);
    const userDetails = JSON.parse(localStorage.getItem("user"));
    const phone = userDetails.phone;
    const getReservation = async () => {
        // console.log(phone);
        const response = await axios.get(`http://localhost:3001/api/booking/${phone}`);//{"customerDetails":{"name":"test","email":"test@test.com","phone":"00000000000"},"hotelDetails":{"bookedRoomsWithDates":[{"_id":"6575beb0a7a09bad20e6a44b","roomType":"Single Room","checkInDate":"2023-12-11T00:00:00.000Z","checkOutDate":"2023-12-13T00:00:00.000Z"}]},"paymentDetails":{"paymentMethod":"creditCard","paymentStatus":"","paymentId":"202358279"},"_id":"6575beb0a7a09bad20e6a44a","__v":0}
        if (response.data===null) return;
        const formattedDate = (date) => {
            const d = new Date(date);
            const year = d.getFullYear();
            const month = d.getMonth() + 1;
            const day = d.getDate();
            return `${day}/${month}/${year}`;
        }
        setReservation({
            hotelName: response.data.hotelDetails.name,
            checkInDate: formattedDate(response.data.hotelDetails.bookedRoomsWithDates[0].checkInDate),
            checkOutDate: formattedDate(response.data.hotelDetails.bookedRoomsWithDates[0].checkOutDate),
            totalCost: response.data.hotelDetails.price,
        });
        setHasReservation(true);
        // console.log(response);
    }
    /**
     router.delete('/booking/:phone', async (req, res) => {
    try {
        const booking = await bookingDetails.find({ "customerDetails.phone": req.params.phone });
        //delete all booking by phone
        booking.forEach(async (booking) => {
            await bookingDetails.deleteOne({ _id: booking._id });
        });
        res.json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
     */
    const deleteReservation = async () => {
        const response = await axios.delete(`http://localhost:3001/api/booking/${phone}`);
        window.location.reload();
    }
    const handleDelete = () => {
        deleteReservation();
    }
    useEffect(() => {
        getReservation();
    }, []);
    return (
        <Container style={{ paddingTop: '8rem' }}>
            {hasReservation ? <div className="reservation-card">
                <div className="reservation-details">
                    <div className="reservation-details-title">
                        <p>Reservation Details</p>
                    </div>
                    <div className="reservation-details-content">
                        <div className="reservation-details-content-left">
                            <p>Hotel Name</p>
                            <p>Check In Date</p>
                            <p>Check Out Date</p>
                            
                        </div>
                        <div className="reservation-details-content-right">
                            <p>{reservation.hotelName}</p>
                            <p>{reservation.checkInDate}</p>
                            <p>{reservation.checkOutDate}</p>
                            
                        </div>
                    </div>
                </div>

            </div>:<div>no reservation found</div>
            }
            {hasReservation ? <div className="reservation-cancel">
                <Button onClick={handleDelete}>Cancel Reservation</Button>
            </div> : null}
        </Container>
    );
}

export default Reservation;
