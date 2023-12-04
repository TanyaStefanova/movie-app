import AddFavourites from '../../add-favourites/AddFavourites';
import styles from './Favourites.module.css'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as favouriteService from "../../../services/favouriteService";


export default function Favourites() {
  const { onClickOpen, ownerId, favourites } = useContext(AuthContext);
    const [favouriteMovies, setFavouriteMovies] = useState([]);

    // TODO handle error
    useEffect(() => {
        favouriteService.getAllFavourites(ownerId)
        .then(setFavouriteMovies)
        .catch(err => console.log(err));
    }, [ownerId, favourites])

    return (
        <>
            <h2>My Favourite Movies</h2>
            <div className={styles.containerFluid}>
         
                <div className={styles.row}>
                   
                   {favouriteMovies.length == 0 && (
                    <h1>No Favourite movies yet</h1>
                   )}
              
                        {favouriteMovies.map(movie => (
                            <div className={styles.imageContainer} key={movie._id}>
                            <Link to={`/movies/${movie._id}`} onClick={onClickOpen}><img
                                
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: '11em', height: '100%'}} /></Link>
                                <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites/></div>
                                </div>
                        )) }
                        
                </div>
            </div>
        </>
        
    );
}