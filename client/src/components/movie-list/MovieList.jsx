import { useContext, useEffect, useState } from 'react';


import Movies from './movies/Movies';
import TvShows from './tv-shows/TvShows';
import AuthContext from '../../contexts/authContext';

export default function MovieList() {
    const { isAuthenticated } = useContext(AuthContext);
    // const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

  
    // useEffect(() => {
    //     movieService.getAllMovies()
    //         .then(result => setMovies(result))
    //         .catch(err => console.log(err));
    // }, []);
    // console.log(movies);


    return (
        <>

            {/* {isAuthenticated && (
                <Favourites />
            )} */}

            <Movies />

            {/* <TvShows movies={movies} /> */}
            {/* <TvShows tvShows={tvShows} /> */}
            <TvShows />
        </>
    );
}