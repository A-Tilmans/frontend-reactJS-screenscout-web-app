import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css'

const Home = () => {
    return (
        <div className="background-container">
        <div className="container">
            <div className="welcome-container">
                <h2>Welcome to ScreenScout!</h2>
                <h3 className="sign-up-text">We're pleased you chose to use our service. Before you get started, all you need to do is create a free account!</h3>
                <NavLink
                    to='/signup'
                    className="sign-up-link">
                    Create account
                </NavLink>
                <h3 className="sign-in-text">Already have an account?</h3>
                <NavLink
                    to='/login'
                    className="sign-in-link">
                    Log in
                </NavLink>
            </div>
        </div>
        </div>
    );
}

export default Home;