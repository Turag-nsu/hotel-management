import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <Container>
                <Row className="footer-content">
                    <Col md={4} className="footer-section">
                        <h3>About Us</h3>
                        <p>
                            Welcome to Luxury Hotels, where we strive to provide exceptional
                            comfort and service to our guests.
                        </p>
                    </Col>
                    <Col md={4} className="footer-section">
                        <h3>Contact Information</h3>
                        <ul>
                            <li>Email: info@luxuryhotels.com</li>
                            <li>Phone: +1 123-456-7890</li>
                            <li>Address: 123 Luxury Street, Cox's Bazar, Bangladesh</li>
                        </ul>
                    </Col>
                    <Col md={4} className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <Container>
                    <p>&copy; 2023 Luxury Hotels. All rights reserved.</p>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
