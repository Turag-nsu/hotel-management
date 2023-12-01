import React, { useState } from 'react';
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleHotelPage.css';
import HotelServiceCard from '../../../Components/HotelServiceCard/HotelServiceCard';
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
                    <div className="booking-form">
                        <h2>Book Your Stay</h2>
                        <Form onSubmit={handleBookingSubmit}>
                            <Form.Group controlId="roomType">
                                <Form.Label>Room Type</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="roomType"
                                    onChange={handleInputChange}
                                    value={bookingDetails.roomType}
                                    required
                                >
                                    <option value="">Select Room Type</option>
                                    {hotel.details.accommodation.map((room, index) => (
                                        <option key={index} value={room.roomType}>
                                            {room.roomType}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="checkInDate">
                                <Form.Label>Check-in Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="checkInDate"
                                    onChange={handleInputChange}
                                    value={bookingDetails.checkInDate}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="checkOutDate">
                                <Form.Label>Check-out Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="checkOutDate"
                                    onChange={handleInputChange}
                                    value={bookingDetails.checkOutDate}
                                    required
                                />
                            </Form.Group>
                            <Form.Group controlId="guests">
                                <Form.Label>Number of Guests</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="guests"
                                    onChange={handleInputChange}
                                    value={bookingDetails.guests}
                                    min="1"
                                    required
                                />
                            </Form.Group>
                            <div className="calculated-cost">
                                <h3>Calculated Cost</h3>
                                <p>{calculateCost()} TAKA</p>
                            </div>
                            <Button variant="primary" type="submit">
                                Book Now
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SingleHotelPage;
