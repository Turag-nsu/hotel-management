import React from 'react';
import './HomeHero.css';

const HomeHero = ({ text, bg }) => {
    return (
        <>

            <div className="home-hero-part" style={{
                backgroundImage: `url(${bg})`,
            }}>
                <div className="home-hero-overlay"></div>
                <div className="home-hero-text-area" data-aos="zoom-in" >
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default HomeHero;