import React, { useState } from 'react';
import './OfferCard.css';

const OfferCard = ({ title, description, code, discount, validUntil }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="offer-card">
            <div className="offer-card-left">
                <div className="offer-discount-bubble">
                    <span>{discount.split(' ')[0]}</span>
                    <small>{discount.split(' ').slice(1).join(' ')}</small>
                </div>
            </div>
            <div className="offer-card-right">
                <h3 className="offer-title">{title}</h3>
                <p className="offer-description">{description}</p>
                <div className="offer-details">
                    <span className="offer-validity"><i className="valid-icon">⏳</i> {validUntil}</span>
                    <button 
                        className={`offer-code-btn ${copied ? 'copied' : ''}`}
                        onClick={handleCopy}
                    >
                        {copied ? 'Copied!' : code}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;
