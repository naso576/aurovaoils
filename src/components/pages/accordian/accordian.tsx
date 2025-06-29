import React from 'react';
import './accordian.css'; // Import CSS for styling

const images = [
    '/assets/1.png', // Adjust the path as necessary
    '/assets/2.png',
    '/assets/3.png',
    '/assets/4.png',
    '/assets/5.png',
    '/assets/6.png',
];

const Accordian: React.FC = () => {
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};

export default Accordian;