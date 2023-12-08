import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

import { Link } from 'react-router-dom'
import styles from './Search.module.css'

export default function Search({ searchedMovies }) {
    const { onClickOpen } = useContext(AuthContext);


    return (
        <>
            <h1 className={styles.title}>Search Results</h1>
            <div className="container">
                {searchedMovies.length == 0 && (
                    <h1 className={styles.message}>No movie with this title</h1>
                )}
                {searchedMovies.map(movie => (
                    <div key={movie._id} style={{marginTop: '20px', backgroundColor:'#212529'}} className="card v4 tight">
                        <div className="wrapper">
                            <div className={styles.image} >
                                {movie.type == 'Movie' && (
                                     <Link to={`/movies/${movie._id}`} onClick={onClickOpen}>
                                <div style={{float: 'left', width: '10%'}}> 
                                <img style={{ width: '94px', height: '141px' }}
                                src={movie.posterUrl}  alt="movie-poster" /> </div> </Link>
                                )}
                                 {movie.type == 'tvShow' && (
                                     <Link to={`/tvshows/${movie._id}`} onClick={onClickOpen}>
                                <div style={{float: 'left', width: '10%'}}> 
                                <img style={{ width: '94px', height: '141px' }}
                                src={movie.posterUrl}  alt="movie-poster" /> </div> </Link>
                                )}
                           
                                {/* <div style={{float: 'left', width: '10%'}}><img style={{ width: '94px', height: '141px' }} src={movie.posterUrl} alt="movie-poster" /> */}
                               
                                <div className={styles.details}>
                                    <div className={styles.movieTitle}><h2>{movie.title}</h2></div>
                                    <div className={styles.overview}><p>{movie.plot}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}