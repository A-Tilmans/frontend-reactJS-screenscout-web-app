import React from 'react';
import { NavLink } from 'react-router-dom';
import apiConfig from '../../api/ApiConfig';
import './PopularMovie.css';

const posterBaseURL = apiConfig.posterBaseUrl;

const PopularMovie = ({ id, title, poster_path, release_date, overview }) => {
    return (
        <>
            <div className="movie-container">
                <NavLink to={`/movie/${id}`}>
                    <img src={posterBaseURL + poster_path} alt={title} />
                </NavLink>

                <div className="movie-data">
                    <NavLink to={`/movie/${id}`} className="title-link">
                        <h3>{title}</h3>
                    </NavLink>
                </div>

                <div className="movie-data-release">
                    <p>Release date: {release_date}</p>
                </div>

                <div className="movie-overview">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
}

export default PopularMovie;