import React from 'react';
import PropTypes from 'prop-types';
import './HotelServiceCard.css';

const HotelServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <img src={`images/${service.toLowerCase()}.jpg`} alt={service} />
            <div className="overlay">
                <h3 className="service-title">{service}</h3>
            </div>
        </div>
    );
};

HotelServiceCard.propTypes = {
    service: PropTypes.string.isRequired,
};

export default HotelServiceCard;
