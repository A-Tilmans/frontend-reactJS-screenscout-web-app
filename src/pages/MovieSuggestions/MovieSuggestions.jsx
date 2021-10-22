import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Footer, PopularMovie } from '../../components';
import './MovieSuggestions.css';

const apiKey = process.env.REACT_APP_API_KEY;
const popularMoviesUrl =  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const MovieSuggestions = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect( () => {
        async function fetchPopularMovies(){
            setError('');
            toggleLoading(true);
            try {
                const { data } = await axios.get(popularMoviesUrl);
                setPopularMovies(data.results.slice(0, 15));
            } catch (e) {
                setError('Uh-oh, something went wrong retrieving the data - try again');
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchPopularMovies();
    }, [])

    return (
        <>
            <section className="intro-container">
                {error && <p>{error}</p>}
                <h2>Wondering what to watch tonight? Don't worry, we've got you covered! </h2>
            </section>

            <section className="popular-container">
                <h3>15 popular movies right now - hover over them to learn more!</h3>
                <div className="popular-movies">
                    {loading && <p>loading</p>}
                    {popularMovies && popularMovies.map((movie) => {
                        return <PopularMovie
                            key={movie.id}
                            {...movie}
                        />
                    })}
                </div>
            </section>
        <Footer />
        </>
    );
}

export default MovieSuggestions;