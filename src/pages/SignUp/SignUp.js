import React from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
/**
 // Define a route for retrieving the user email to check if the user exists from the request body
router.get('/users', async (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    const user = await UserDetails.findOne({ email: email });
    if (user) {
        res.json(user.email);
    } else {
        res.status(500).json({ message: "User not found" });
    }
});
 */
const validateEmail = async () => {
    const { email } = userDetails;
  
    try {
      const response = await axios.get('http://localhost:3001/api/users', { params: { email: email } });
  
      if (response.data.exists) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error('Error validating email:', error);
      return false;
    }
  };

  const validateSignUp = async () => {
    // console.log(userDetails);
    const { name, email, phone, password } = userDetails;

    if (name === '' || email === '' || phone === '' || password === '') {
      alert('Please fill all the fields');
    } else if (!(await validateEmail())) {
      alert('Email already exists');
    } else {
      try {
        const response = await axios.post('http://localhost:3001/api/users', userDetails);
        if (response.status === 201) {
          alert('User created successfully');
        } else {
          alert('Something went wrong');
        }
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Something went wrong');
      }
    }
  };

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="name" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name="email" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Enter phone" name="phone" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" name="password" onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" onClick={validateSignUp}>
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SignUp;
