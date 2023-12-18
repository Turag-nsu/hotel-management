import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BookingComponent = ({ hotelId }) => {
  const [hotel, setHotel] = useState({});
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/hotels/${hotelId}`)
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hotelId]);

  const randomPaymentId = () => {
    let paymentID = '';
    const time = new Date();
    paymentID += time.getFullYear();
    paymentID += Math.floor(Math.random() * 100000);
    return paymentID;
  };
  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  const [bookingDetails, setBookingDetails] = useState({
    hotelId: hotelId,
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    customerDetails: {
      name: localStorageUser?.name,
      email: localStorageUser?.email,
      phone: localStorageUser?.phone,
    },
    hotelDetails: {
      name: '',
      location: '',
      price: 0,
      image: '',
      bookedRoomsWithDates: [
        {
          roomType: '',
          checkInDate: '',
          checkOutDate: '',
        },
      ],
    },
    paymentDetails: {
      paymentMethod: '',
      paymentStatus: 'pending',
      paymentId: randomPaymentId(),
    },
  });

  const postBookingDetails = () => {
    console.log(bookingDetails);
    axios
      .post('http://localhost:3001/api/bookRoom', bookingDetails)
      .then((res) => {
      //on alert confirmation, redirect to homepage
        
          alert('Booking successful!');
          window.location.href = '/reservation';
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBookingDetails((prevBookingDetails) => {
      const updatedDetails = { ...prevBookingDetails };

      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        updatedDetails[parent][child] = value;
      } else {
        updatedDetails[name] = value;
      }

      return updatedDetails;
    });
  };

  useEffect(() => {
    if (hotel.details) setTotalCost(calculateCost());
  }, [hotel, bookingDetails]);

  const calculateCost = () => {
    const selectedRoom = hotel.details.accommodation.find(
      (room) => room.roomType === bookingDetails.roomType
    );

    if (!selectedRoom) return 0;

    const basePrice = selectedRoom.price;
    const capacity = selectedRoom.capacity;

    const adjustedPrice =
      basePrice * (bookingDetails.guests / capacity) +
      (bookingDetails.guests % capacity === 0 ? 0 : basePrice * 0.3);

    let discount = 0;
    if (bookingDetails.guests >= 4) {
      discount = 0.1;
    } else if (bookingDetails.guests >= 6) {
      discount = 0.2;
    }

    const discountedPrice = adjustedPrice - adjustedPrice * discount;

    const checkInDate = new Date(bookingDetails.checkInDate);
    const checkOutDate = new Date(bookingDetails.checkOutDate);
    const numberOfNights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    const totalCost = discountedPrice * numberOfNights;
    return totalCost.toFixed(2);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Book a room</h2>
            <Form>
              <Form.Group controlId="roomType">
                <Form.Label>Room type</Form.Label>
                <Form.Control
                  as="select"
                  name="roomType"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select room type</option>
                  {hotel.details &&
                    hotel.details.accommodation.map((room) => (
                      <option key={room.roomType} value={room.roomType}>
                        {room.roomType}
                      </option>
                    ))}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="checkInDate">
                <Form.Label>Check-in date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkInDate"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="checkOutDate">
                <Form.Label>Check-out date</Form.Label>
                <Form.Control
                  type="date"
                  name="checkOutDate"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="guests">
                <Form.Label>Number of guests</Form.Label>
                <Form.Control
                  type="number"
                  name="guests"
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="customerDetails.name"
                  
                  value={bookingDetails.customerDetails.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="customerDetails.email"
                  value={bookingDetails.customerDetails.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="customerDetails.phone"
                  value={bookingDetails.customerDetails.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="paymentMethod">
                <Form.Label>Payment method</Form.Label>
                <Form.Control
                  as="select"
                  name="paymentDetails.paymentMethod"
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select payment method</option>
                  <option value="cash">Cash</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>

          <Col>
            <h2>Booking details</h2>
            <p>Room type: {bookingDetails.roomType}</p>
            <p>Check-in date: {bookingDetails.checkInDate}</p>
            <p>Check-out date: {bookingDetails.checkOutDate}</p>
            <p>Number of guests: {bookingDetails.guests}</p>
            <p>Name: {bookingDetails.customerDetails.name}</p>
            <p>Email: {bookingDetails.customerDetails.email}</p>
            <p>Phone: {bookingDetails.customerDetails.phone}</p>
            <p>Payment method: {bookingDetails.paymentDetails.paymentMethod}</p>
            <p>Total cost: {totalCost}</p>
            <Button variant="primary" onClick={postBookingDetails}>
              Book
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingComponent;
