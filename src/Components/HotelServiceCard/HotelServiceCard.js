import React from 'react';
import PropTypes from 'prop-types';
import './HotelServiceCard.css';

const HotelServiceCard = ({ name, image }) => {
    return (
        <div className="service-card">
            <img src={image} alt={name} />
            <div className="overlay">
                <h3 className="service-title">{name}</h3>
            </div>
        </div>
    );
};

HotelServiceCard.propTypes = {
    service: PropTypes.string.isRequired,
};

export default HotelServiceCard;
