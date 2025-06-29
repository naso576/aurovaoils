import React from 'react';
import './header.css'; // Import a CSS file for styling
import Main_logo from  './../assets/Main_logo.png' // Import the logo image

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={Main_logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </div>
            <div className='heading1'>
            <h1>Aurova Oils</h1>
            <p>Your trusted partner for premium quality oils.</p>
            </div>
            {/* <div>
            <button className="login" onClick={() => alert('Explore our products!')}>
                Login
                </button>
                </div> */}
            <nav className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;