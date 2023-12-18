import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { Col, Container, Row } from 'react-bootstrap';
import service1 from '../../Images/Hotels/service-1.jpg'
import service2 from '../../Images/Hotels/service-2.jpg'
import service3 from '../../Images/Hotels/service-3.jpg'
import service4 from '../../Images/Hotels/service-4.jpg'
import service5 from '../../Images/Hotels/service-5.jpg'
const services = [
    {
        "title": "Transportations",
        "img": service1
    },
    {
        "title": "Guide",
        "img": service2
    },
    {
        "title": "Discounts",
        "img": service3
    },
    {
        "title": "Cashbacks",
        "img": service4
    },
    {
        "title": "Online Support",
        "img": service5
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
