import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { Col, Container, Row } from 'react-bootstrap';

const services = [
    {
        "title": "Transportations",
        "img": "transportations.jpg"
    },
    {
        "title": "Guide",
        "img": "guide.jpg"
    },
    {
        "title": "Discounts",
        "img": "discounts.jpg"
    },
    {
        "title": "Cashbacks",
        "img": "cashbacks.jpg"
    },
    {
        "title": "Online Support",
        "img": "online-support.jpg"
    }
]


const OurServices = () => {
    return (
        <Container>
            <div style={{marginTop: "6.5rem"}}>
            <h2>Our Services</h2>
            <div className="service-cards">
                <Row xs={1} md={2} lg={3}>
                {services.map((service, index) => (
                    <Col><ServiceCard key={index} service={service} /></Col>
                ))}
                </Row>
            </div>
        </div>
        </Container>
    );
};

export default OurServices;
