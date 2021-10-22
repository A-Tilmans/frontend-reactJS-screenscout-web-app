import React from 'react';
import { Logo } from '../index' ;
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="logo-container">
                <Logo />
            </div>
        </div>
    );
}

export default Footer;
