import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BookingComponent = ({ hotelId }) => {
    const [customerDetails, setCustomerDetails] = useState({ name: '', contact: '' });
    const [roomTypes, setRoomTypes] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState('');
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState('');
    const [bookingDates, setBookingDates] = useState({ checkInDate: '', checkOutDate: '' });
    const [bookedDates, setBookedDates] = useState([]);

    useEffect(() => {
        // Fetch room types and rooms based on hotelId
        // This is a placeholder. Replace with your API call to fetch room types and rooms
        const fetchRoomData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/hotels/${hotelId}`);
                if (response.data) {
                    setRoomTypes(response.data.freeRoomsWithTypes.map(room => room.roomType));
                    setRooms(response.data.freeRoomsWithTypes);
                }
            } catch (error) {
                console.error('Error fetching room data:', error);
            }
        };
        fetchRoomData();
    }, [hotelId]);

    const handleCustomerDetailsChange = (e) => {
        setCustomerDetails({ ...customerDetails, [e.target.name]: e.target.value });
    };

    const handleRoomTypeChange = (e) => {
        setSelectedRoomType(e.target.value);
        // Filter rooms based on selected room type
        setRooms(rooms.filter(room => room.roomType === e.target.value));
    };

    const handleRoomChange = (e) => {
        setSelectedRoom(e.target.value);
        // Fetch booked dates for the selected room
        // This is a placeholder. Replace with your API call
        const fetchBookedDates = async () => {
            // Fetch booked dates for the selected room
        };
        fetchBookedDates();
    };

    const handleDateChange = (e) => {
        setBookingDates({ ...bookingDates, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submit booking details
        // This is a placeholder. Replace with your API call
        const bookingPayload = {
            customerDetails,
            hotelId,
            roomType: selectedRoomType,
            roomNumber: selectedRoom,
            ...bookingDates,
            // Add other booking details as needed
        };
        try {
            const response = await axios.post('http://localhost:5000/api/bookRoom', bookingPayload);
            if (response.data.success) {
                alert('Booking Successful!');
            } else {
                alert('Booking Failed');
            }
        } catch (error) {
            console.error('Error during booking:', error);
            alert('An error occurred while booking');
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="customerName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={customerDetails.name}
                                onChange={handleCustomerDetailsChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="customerContact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="text"
                                name="contact"
                                value={customerDetails.contact}
                                onChange={handleCustomerDetailsChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="roomType">
                    <Form.Label>Room Type</Form.Label>
                    <Form.Control as="select" value={selectedRoomType} onChange={handleRoomTypeChange} required>
                        <option value="">Select Room Type</option>
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="roomNumber">
                    <Form.Label>Room Number</Form.Label>
                    <Form.Control as="select" value={selectedRoom} onChange={handleRoomChange} required>
                        <option value="">Select Room</option>
                        {rooms.map((room, index) => (
                            <option key={index} value={room.roomNumber}>
                                {room.roomNumber}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="checkInDate">
                            <Form.Label>Check-in Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="checkInDate"
                                value={bookingDates.checkInDate}
                                onChange={handleDateChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="checkOutDate">
                            <Form.Label>Check-out Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="checkOutDate"
                                value={bookingDates.checkOutDate}
                                onChange={handleDateChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">
                    Book Now
                </Button>
            </Form>
        </Container>
    );
};

export default BookingComponent;
