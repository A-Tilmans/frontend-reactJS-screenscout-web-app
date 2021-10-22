import React from 'react';
import { NavLink } from 'react-router-dom';
import apiConfig from '../../api/ApiConfig';
import './PopularTvShow.css';

const posterBaseURL = apiConfig.posterBaseUrl;

const PopularTvShow = ({ name, id, poster_path, first_air_date, overview }) => {
    return (
        <>
            <div className="show-container">
                <NavLink to={`/tv/${id}`}>
                    <img src={posterBaseURL + poster_path} alt={name} />
                </NavLink>

                <div className="show-data">
                    <NavLink to={`/tv/${id}`} className="title-link">
                        <h3>{name}</h3>
                    </NavLink>
                </div>

                <div className="show-data-release">
                    <p>Started airing: {first_air_date}</p>
                </div>
                <div className="show-overview">
                    <h2>Overview:</h2>
                    <p>{overview}</p>
                </div>
            </div>
        </>
    );
}

export default PopularTvShow;