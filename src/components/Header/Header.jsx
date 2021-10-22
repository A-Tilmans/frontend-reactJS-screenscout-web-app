import React from 'react';
import { NavBar, Logo } from '../index' ;
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-top">
                <div className="logo-container">
                    <Logo />
                </div>
                <div className="header-top-navbar">
                    <div className="header-top-navigation">
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
