import { useContext, useEffect, useState } from 'react';

import * as movieService from "../../services/movieService";

import Favourites from './favourites/Favourites';
import Movies from './movies/Movies';
import TvShows from './tv-shows/TvShows';
import AuthContext from '../../contexts/authContext';

export default function MovieList() {
    const { isAuthenticated } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    // TODO handle error
    useEffect(() => {
        movieService.getAllMovies()
            .then(result => setMovies(result))
            .catch(err => console.log(err));
        }, []);
        // console.log(movies);
        
    useEffect(() => {
        movieService.getAllTvShows()
            .then(setTvShows)
            .catch(err => console.log(err));
        }, [])
        // console.log(tvShows);

    return (
        <>
            {/* Display favorites if any and only for logged in user!!!*/}

            {isAuthenticated && (
                <Favourites />
            )}

            <Movies movies={movies} />

            {/* <TvShows movies={movies} /> */}
            <TvShows tvShows={tvShows} />
        </>
    );
}