import React from 'react';
import './accordian.css'; // Import CSS for styling

const images = [
    '/src/assets/1.png', // Adjust the path as necessary
    '/src/assets/2.png',
    '/src/assets/3.png',
    '/src/assets/4.png',
    '/src/assets/5.png',
    '/src/assets/6.png',
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