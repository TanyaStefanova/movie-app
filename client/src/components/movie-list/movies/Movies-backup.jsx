import styles from './Movies.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import { Carousel } from 'react-bootstrap';
import * as request from "../../../lib/request";



export default function Movies({ movies }) {
    const { showModal, onClickOpen, addFavouriteMovie } = useContext(AuthContext);
    const [currentMovies, setCurrentMovies] = useState([]);
    const [offset, setOffset] = useState(0);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const getCurrentMovies = async () => {
        const query = new URLSearchParams({
            offset: `${offset}`,
            pageSize: 9
        })

        const result = await request.get(`http://localhost:3030/data/movies?${query}`);
        // setCurrentMovies(result)
        return result;
    }

    // console.log(currentMovies);
    useEffect(() => {
        getCurrentMovies()
            .then(setCurrentMovies);

        console.log(currentMovies);
    }, [index]);

 
    const rightButtonClickHandler = () => {
        setOffset(state => state - 5);
    }

    const leftButtonClickHandler = () => {
        setOffset(state => state + 5);
    }

    return (
        <>
            <h3>Movies</h3>
            <Carousel className={styles.containerFluid} activeIndex={index} onSelect={handleSelect}>
                <button className={`${styles.handle} ${styles.leftHandle}`} onClick={leftButtonClickHandler}></button>
            <Carousel.Item>
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
                </Carousel.Item>
                <button className={`${styles.handle} ${styles.rightHandle}`} onClick={rightButtonClickHandler}></button>
            </Carousel>
        </>
    );
}