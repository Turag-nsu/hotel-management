import { Button } from 'react-bootstrap';
import React from 'react';
import Card from 'react-bootstrap/Card';
import './SingleHotelCard.css';
import { useNavigate } from 'react-router-dom';
const SingleHotelCard = ({ hotel }) => {
    const navigator = useNavigate()
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={hotel.image} />
                <Card.Body>
                    <Card.Title>{hotel.name}</Card.Title>
                    <Card.Text>
                        <div className="hotel-details">
                            Location: {hotel.location}
                            <br />
                            Price: {hotel.price} TAKA
                        </div>
                        <Button
                            variant="success"
                            onClick={
                                () => navigator(`/hotels/${hotel.id}`)
                            }
                        >Book Now</Button>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleHotelCard;