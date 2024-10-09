import React from 'react';
import './Schemes.css';

const schemes = [
    "Health Insurance Scheme A",
    "Health Insurance Scheme B",
    "Health Insurance Scheme C",
    "Health Insurance Scheme D",
    "Health Insurance Scheme E",
    "Health Insurance Scheme F",
    "Health Insurance Scheme G",
];

const Schemes = () => {
    return (
        <div className="scheme">
        <div className="schemes-container">
            {schemes.map((scheme, index) => (
                <div key={index} className="scheme-box">
                    <span><b>{scheme}</b></span>
                    <button className="view-button">Apply</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Schemes;
