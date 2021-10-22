import React, {useContext} from 'react';
import {NavLink, Route} from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './NavBar.css'


const NavBar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    return (
        <section className="navbar">
            <NavLink exact to="/" className="navbar-item" activeClassName="selected">Home</NavLink>
            <NavLink exact to="/tv-suggestions" className="navbar-item" activeClassName="selected">Popular shows</NavLink>
            <NavLink exact to="/movie-suggestions" className="navbar-item" activeClassName="selected">Popular movies</NavLink>
            {user !== null &&
                <NavLink  onClick={logOutUser} exact to="/" className="navbar-item" activeClassName="log-out">Log out</NavLink>}
        </section>
    );
}

export default NavBar;