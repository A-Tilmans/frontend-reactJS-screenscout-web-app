import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Footer, PopularTvShow} from '../../components';
import './TvSuggestions.css';

const apiKey = process.env.REACT_APP_API_KEY;
const popularTvUrl =  `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;

const TvSuggestions = () => {
    const [popularTvShows, setPopularTvShows] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchPopularTV() {
            setError('');
            toggleLoading(true);
            try {
                const { data } = await axios.get(popularTvUrl);
                setPopularTvShows(data.results.slice(0, 15));
            } catch (e) {
                setError('Uh-oh, something went wrong retrieving the data - try again');
                console.error(e);
            }
            toggleLoading(false);
        }
        fetchPopularTV();
    }, [])

    return (
        <>
            <section className="intro-container">
                {error && <p>{error}</p>}
                <h2>Wondering what to watch tonight? Don't worry, we've got you covered!</h2>
            </section>

            <section className="popular-container">
                <h3>15 popular shows right now - hover over them to learn more!</h3>
                <div className="popular-tv">
                    {loading && <p>loading</p>}
                    {popularTvShows && popularTvShows.map((tvShow) => {
                        return <PopularTvShow
                            key={tvShow.id}
                            {...tvShow}
                        />
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default TvSuggestions;