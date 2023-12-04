import { useContext, useEffect, useState } from 'react';

import * as movieService from "../../services/movieService";

import Favourites from './favourites/Favourites';
import Movies from './movies/Movies';
import TvShows from './tv-shows/TvShows';
import AuthContext from '../../contexts/authContext';

export default function MovieList() {
    const { isAuthenticated } = useContext(AuthContext);
    const [movies, setMovies] = useState([]);

    // TODO handle error
    useEffect(() => {
        movieService.getAll()
            .then(result => setMovies(result))
            .catch(err => console.log(err));
    }, []);


    return (
        <>
            {/* Display favorites if any and only for logged in user!!!*/}

            {isAuthenticated && (
                <Favourites />
            )}

            <Movies movies={movies} />

            <TvShows movies={movies} />
        </>
    );
}