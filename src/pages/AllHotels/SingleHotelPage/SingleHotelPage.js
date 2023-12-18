import React, { useState } from 'react';
import { Container, Image, Form, Button, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleHotelPage.css';
import HotelServiceCard from '../../../Components/HotelServiceCard/HotelServiceCard';
import BookingComponent from '../../../Components/BookingComponent/BookingComponent';
const SingleHotelPage = ({ data }) => {
    const { hotelId } = useParams();
    const hotelDetails = data.find((hotel) => hotel.id == hotelId);
    const serviceImages = hotelDetails.details.serviceImages;
    const serviceNames = hotelDetails.details.services;
    

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
                                {serviceNames.map((service, index) => (
                                    <Col key={index}>
                                        <HotelServiceCard
                                            name={service}
                                            image={serviceImages[index]}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                    <BookingComponent hotelId={hotelId} />
                    {/* hi */}
                </div>
            </Container>
        </div>
    );
};

export default SingleHotelPage;
