import React, { useState } from 'react';
import './Offers.css';
import OfferCard from '../../components/Offercard/Offercard';

const Offers = () => {
   
    const [offers] = useState([
        {
            id: 1,
            title: "Weekend Bonanza",
            description: "Get a free soft drink with every combo meal purchased on weekends.",
            code: "MOMOWEEKEND",
            discount: "FREE Drink",
            validUntil: "Valid till Sunday"
        },
        {
            id: 2,
            title: "Student Discount",
            description: "Show your valid student ID and get flat 15% off on your total bill.",
            code: "STUDENT15",
            discount: "15% OFF",
            validUntil: "No Expiry"
        },
        {
            id: 3,
            title: "First Order Special",
            description: "Craving momos? Order for the first time and enjoy a 20% discount.",
            code: "WELCOME20",
            discount: "20% OFF",
            validUntil: "First Time Users"
        },
        {
            id: 4,
            title: "Mega Platter Deal",
            description: "Order our signature Mega Platter and save $5 off the regular price.",
            code: "MEGAMOMO",
            discount: "$5 OFF",
            validUntil: "Limited Time"
        }
    ]);

    return (
        <div className="offers-page animation-fade-in">
            <div className="offers-header">
                <h1 className="title-gradient">Exclusive Offers</h1>
                <p className="offers-subtitle">
                    Discover our latest deals and discounts. Grab a promo code and enjoy the best momos in town!
                </p>
                <div className="title-underline"></div>
            </div>

            <div className="offers-container">
        
                {offers.map(offer => (
                    <OfferCard 
                        key={offer.id}
                        title={offer.title}
                        description={offer.description}
                        code={offer.code}
                        discount={offer.discount}
                        validUntil={offer.validUntil}
                    />
                ))}
            </div>

            <div className="newsletter-section">
                <h2>Never Miss a Deal</h2>
                <p>Subscribe to our newsletter to get the latest offers directly in your inbox.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your email address..." required />
                    <button type="submit" className="subscribe-btn">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Offers;
