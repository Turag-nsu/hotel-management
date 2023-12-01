import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './AllHotels.css';
import SingleHotelCard from '../../Components/SingleHotelCard/SingleHotelCard';

const AllHotels = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredHotels, setFilteredHotels] = useState(data);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Filter hotels based on the search term
        const filtered = data.filter((hotel) =>
            hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHotels(filtered);
    };

    return (
        <div style={{ paddingTop: '6.5rem' }}>
            <Container>
                <div className="search-bar">
                    <Form onSubmit={handleSearchSubmit}>
                        <Row>
                            <Col xs="auto">
                                <Form.Control
                                    type="text"
                                    placeholder="Search by hotel name"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>


                <Row xs={1} md={3} className="g-4">
                    {filteredHotels.map((hotel) => (
                        <Col key={hotel.id}>
                            <SingleHotelCard hotel={hotel} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllHotels;
