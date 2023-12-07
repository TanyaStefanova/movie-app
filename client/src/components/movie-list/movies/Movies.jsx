import styles from './Movies.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as request from "../../../lib/request";



export default function Movies() {
    const { onClickOpen, addFavouriteMovie } = useContext(AuthContext);
    const [currentMovies, setCurrentMovies] = useState([]);
    const [offset, setOffset] = useState(0);

    const getCurrentMovies = async () => {
        const query = new URLSearchParams({
            offset: `${offset}`,
            pageSize: 9
        })

        const result = await request.get(`http://localhost:3030/data/movies?${query}`);
        setCurrentMovies(result)
        return result;
    }

    // TODO handle error
    useEffect(() => {
        getCurrentMovies()
            .then(setCurrentMovies)
            .catch(error => console.error(error));

        // console.log(currentMovies);
    }, [offset])

    const rightButtonClickHandler = () => {
        setOffset(state => state + 3);
        if(currentMovies.length <=4) {
            setOffset(0);
        }
    }

    const leftButtonClickHandler = () => {
        setOffset(state => state - 5);
        if(currentMovies.length <=5) {
            setOffset(0);
        }
    }

    return (
        <>
            <h3>Movies</h3>
            <div className={styles.containerFluid} >

                <button className={`${styles.handle} ${styles.leftHandle}`} onClick={leftButtonClickHandler}></button>
                <div className={styles.row} >

                    {currentMovies.map(movie => (
                        <div className={styles.imageContainer} key={movie._id}>
                            <Link to={`/movies/${movie._id}`} onClick={onClickOpen}><img
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: '11em', height: '100%' }} /></Link>
                            <div onClick={() => addFavouriteMovie(movie)} className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites /></div>
                        </div>
                    ))}

                </div>
                <button className={`${styles.handle} ${styles.rightHandle}`} onClick={rightButtonClickHandler}></button>

            </div>
        </>
    );
}