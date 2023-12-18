import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './MyNavbar.css';

const MyNavbar = ({ logginStatus }) => {
  const [brandName, setBrandName] = useState("Trip Advisor");
  const userName = JSON.parse(localStorage.getItem('user'))?.name;

  useEffect(() => {
    if (userName) {
      setBrandName(`Trip Advisor for ${userName}`);
    } else {
      setBrandName("Trip Advisor");
    }
  }, [userName]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.reload(false);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">{brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to='/hotels'>Hotels</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/reservation'>Reservation</Nav.Link>

          </Nav>
          <Nav>
            {!logginStatus && <Button variant="success" as={Link} to='/login'>Login</Button>}
            {logginStatus && <Button variant="danger" onClick={handleLogout}>Logout</Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
