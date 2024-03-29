import styles from './Movies.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as request from "../../../lib/request";

import { ToastContainer } from 'react-toastify';

export default function Movies() {
    const { onClickOpen, addFavouriteMovie, ownerId } = useContext(AuthContext);
    const [currentMovies, setCurrentMovies] = useState([]);
    const [offset, setOffset] = useState(0);
    const [error, setError] = useState(null);

    const getCurrentMovies = async () => {
        try {
            const query = new URLSearchParams({
                offset: `${offset}`,
                pageSize: 9
            })

            // const result = await request.get(`http://localhost:3030/data/movies?${query}`);
            const result = await request.get(`${import.meta.env.VITE_API_URL}/data/movies?${query}`);
            setCurrentMovies(result);
            return result;
        } catch (err) {
            setError('An error occurred while fetching data. Please try again later.')
        }


    }

    useEffect(() => {
        getCurrentMovies()
            .then(setCurrentMovies)
            .catch(error => {
                setError('An error occurred while fetching data. Please try again later.')
            });

    }, [offset])


    const rightButtonClickHandler = () => {
        setOffset(state => state + 3);
        if (currentMovies.length <= 4) {
            setOffset(0);
        }
    }

    const leftButtonClickHandler = () => {
        setOffset(state => state - 3);
        if (currentMovies.length <= 4) {
            setOffset(0);
        }
    }

    return (
        <>
            <ToastContainer />
            <h3 className={styles.title}>Movies</h3>
            {error && <h2 style={{ color: 'white' }}>{error}</h2>}
            <div className={styles.containerFluid} >

                <button className={`${styles.handle} ${styles.leftHandle}`} onClick={leftButtonClickHandler}></button>
                <div className={styles.row} >

                    {currentMovies.map(movie => (
                        <div className={styles.imageContainer} key={movie._id}>
                            <Link to={`/movies/${movie._id}`} onClick={onClickOpen}><img
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: '10em', height: '100%' }} /></Link>

                            {!ownerId && (
                                <Link to="/login"><div onClick={onClickOpen} className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites /></div></Link>
                            )}

                            {ownerId && (
                                <div onClick={() => addFavouriteMovie(movie)} className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites /></div>
                            )}

                        </div>
                    ))}

                </div>
                <button className={`${styles.handle} ${styles.rightHandle}`} onClick={rightButtonClickHandler}></button>

            </div>
        </>
    );
}