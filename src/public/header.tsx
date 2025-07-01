import React from 'react';
import './header.css'; // Import a CSS file for styling
import Main_logo from  './../assets/Main_logo.png' // Import the logo image
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const Header: React.FC = () => {
    return (
        <header className="header">
           <div className="logo">
                <img src={Main_logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
            </div>
               
           
            {/* <div>
            <button className="login" onClick={() => alert('Explore our products!')}>
                Login
                </button>
                </div> */}
            <nav className="menu">
            
                <ul className="menu-list">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/services">SERVICES</a></li>
                    <li><a href="/contact">CONTACT US</a></li>
                    <li><a href="/contact">ABOUT US</a></li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <SearchIcon />
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <PersonIcon />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;