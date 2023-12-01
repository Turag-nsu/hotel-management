import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <h2>About Us</h2>
            <p>
                Welcome to our luxurious hotels, where we combine comfort, elegance, and
                exceptional service. Our hotels are strategically located in Cox's Bazar,
                Bangladesh, offering breathtaking views and a memorable experience for our guests.
            </p>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <ul>
                    <li>
                        <strong>Email:</strong> info@luxuryhotels.com
                    </li>
                    <li>
                        <strong>Phone:</strong> +1 123-456-7890
                    </li>
                    <li>
                        <strong>Address:</strong> 123 Luxury Street, Cox's Bazar, Bangladesh
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;
