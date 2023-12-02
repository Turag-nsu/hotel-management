import React, { useState } from 'react';
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleHotelPage.css';
import HotelServiceCard from '../../../Components/HotelServiceCard/HotelServiceCard';
import BookingComponent from '../../../Components/BookingComponent/BookingComponent';
const SingleHotelPage = ({ data }) => {
    const { hotelId } = useParams();
    const [bookingDetails, setBookingDetails] = useState({
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
    });

    const handleInputChange = (e) => {
        setBookingDetails({
            ...bookingDetails,
            [e.target.name]: e.target.value,
        });
    };

    const calculateCost = () => {
        const selectedRoom = hotel.details.accommodation.find(
            (room) => room.roomType === bookingDetails.roomType
        );
    
        if (!selectedRoom) return 0;
    
        const basePrice = selectedRoom.price;
        const capacity = selectedRoom.capacity;
    
        // Adjusted price based on the number of guests and room type
        const adjustedPrice =
            basePrice * (bookingDetails.guests / capacity) +
            (bookingDetails.guests % capacity === 0 ? 0 : basePrice * 0.3);
    
        let discount = 0;
        if (bookingDetails.guests >= 4) {
            discount = 0.1;
        }else if (bookingDetails.guests >= 6){
            discount = 0.2;
        }
    
        // Apply discount to adjusted price
        const discountedPrice = adjustedPrice - adjustedPrice * discount;
    
        // Calculate total cost based on stay duration and number of guests
        const checkInDate = new Date(bookingDetails.checkInDate);
        const checkOutDate = new Date(bookingDetails.checkOutDate);
        const numberOfNights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    
        const totalCost = discountedPrice * numberOfNights;
        return totalCost.toFixed(2);
    };
    
    
    

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // Add your booking logic here
        console.log('Booking details:', bookingDetails);
        console.log('Total Cost:', calculateCost());
    };

    const hotel = data.find((hotel) => hotel.id == hotelId);

    if (!hotel) {
        return <div>Hotel not found!</div>;
    }

    return (
        <div className="single-hotel-page">
            <Container>
                <div className="hotel-details-container">
                    <div className="hotel-details">
                        <div className="hotel-name">
                            <h1>{hotel.name}</h1>
                        </div>
                        <div className="hotel-main-image">
                            <Image src={hotel.image} alt={hotel.name} fluid />
                        </div>
                        <p>{hotel.details.welcomeMessage}</p>

                    </div>
                    <div className="hotel-location">
                        <h2>Location</h2>
                        <p>{hotel.location}</p>
                    </div>
                    <div className="hotel-details-container">
                        <h2>Services</h2>
                        <div className="service-cards">
                            <Row xs={1} md={2} lg={4}>
                                {hotel.details.services.map((service, index) => (
                                    <Col key={index}>
                                        <HotelServiceCard service={service} />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                    <BookingComponent hotelId={hotelId} />
                </div>
            </Container>
        </div>
    );
};

export default SingleHotelPage;
