import styles from './Movies.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../../contexts/authContext';

export default function Movies({ movies }) {
    const { showModal, onClickOpen } = useContext(AuthContext);

    return (
        <>
            <h3>Movies</h3>
            <div className={styles.containerFluid}>

                {/* {<div style={{ fontSize: "30px", color: 'white'}}>{" < "}</div>} */}
                {/* <button><div>&#8249;</div></button> */}
                <div className={styles.row}>


                    {movies.map(movie => (
                        <div className={styles.imageContainer} key={movie._id}>
                          <Link to={`/movies/${movie._id}`} onClick={onClickOpen}><img
                                
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: '11em', height: '100%' }} /></Link>
                            <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites /></div>
                        </div>
                    ))}


                    {/* {<div style={{ fontSize: "30px", color: 'white' }}>{" > "}</div>} */}
                </div>
                {/* <button><div>&#8250;</div></button> */}
            </div>
        </>
    );
}