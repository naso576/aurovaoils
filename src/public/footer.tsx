import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© {new Date().getFullYear()} Aurova Oils. All rights reserved.</p>
                <p style={styles.text}>Contact us: saiargoandfoodproducts@gmail.com | +91 8235693569</p>
                <p style={styles.text}>Address: #72-11-12, Subbarao Peta mainroad, Lala Cheruvu, Rajamahendravaram, East Godavari, Andhra Pradesh, PinCode:-533103</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center' as const,
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 15px',
    },
    text: {
        margin: '5px 0',
        fontSize: '14px',
    },
};

export default Footer;