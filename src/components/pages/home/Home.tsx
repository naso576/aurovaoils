import React from 'react';
import './Home.css'; // Import a CSS file for styling
import Slide from '../slides/Slide';
import Accordian from '../accordian/accordian';

const Home: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Welcome to Our Healthy Family</h1>
            <p>Discover the finest quality oils for your family’s health and well-being.</p>
            
            <button 
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={() => alert('Explore our products!')}
            >
                Explore Products
            </button>
            <div>

                <Accordian />
                <Slide slides={[]}/>
            </div>

        </div>
    );
};

export default Home;