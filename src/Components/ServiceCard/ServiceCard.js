import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <div className="service-card">
            <img src={service.img} alt={service.title} />
            <div className="overlay">
                <h3 className="service-title">{service.title}</h3>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired,
};

export default ServiceCard;
