import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    // Navigate function from React Router
    const navigate = useNavigate();
    // Function to handle login button click
    const handleLogin = async () => {
        try {
            // Validate if email and password are entered
            if (!user.email || !user.password) {
                alert('Please enter the email and password');
                return;
            }

            // Send login request to the server
            const response = await axios.post('http://localhost:3001/api/users/login', user);
            console.log(response);
            // Assuming the server returns a success message
            if (response.data!==null) {
                // Store the user details in local storage
                localStorage.setItem('user', JSON.stringify(response.data));
                
                // Redirect to the home page on successful login
                navigate('/');
                window.location.reload();
            } else {
                // Handle invalid login credentials
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Login failed', error);
            // Handle other errors
            alert('Login failed. Please try again.');
        }
    };



    return (
        <div style={{ marginTop: '10rem' }}>
            <Form style={{ width: '30rem', margin: 'auto' }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>

                <Button onClick={handleLogin} variant="primary" type="button" style={{ marginTop: '3rem' }}>
                    Submit
                </Button>
            </Form>

            {/* Link to navigate to the signup page */}
            <Link to="/signup">Sign Up</Link>
        </div>
    );
};

export default LoginPage;
