import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './MyNavbar.css';
import { Button } from 'react-bootstrap';
const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" fixed = "top" >
                <Container>
                    <Navbar.Brand href="/">Trip Advisor</Navbar.Brand>
                    <Nav className="">
                        <Nav.Link as={Link}  to='/hotels'>Hotels</Nav.Link>
                        <Nav.Link as={Link}  to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link}  to='/contact'>Contact Us</Nav.Link>
                        <Button variant="success" as={Link}  to='/login'>Login</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default MyNavbar;