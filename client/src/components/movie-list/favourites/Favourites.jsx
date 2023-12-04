import RemoveFromFavourites from '../../remove-favourites/RemoveFromFavourites';
import styles from './Favourites.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as favouriteService from "../../../services/favouriteService";


export default function Favourites() {
  const { onClickOpen, ownerId, favourites } = useContext(AuthContext);
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const navigate = useNavigate();

    // TODO handle error
    useEffect(() => {
        favouriteService.getAllFavourites(ownerId)
        .then(setFavouriteMovies)
        .catch(err => console.log(err));
    }, [ownerId, favourites]);

    const removeFavouriteHandler = async (movieId) => {
        const hasConfirmed = confirm(`Are you sure you want to remove ${favouriteMovies.title} from favourites?`);

        if (hasConfirmed) {
            
            await favouriteService.remove(movieId);
            
            const newFavouriteList = favouriteMovies.filter(
                favourite => favourite._id !== movieId
            );

            setFavouriteMovies(newFavouriteList);

            navigate('/movies');
        }
    }

    return (
        <>
            <h2>My Favourite Movies</h2>
            <div className={styles.containerFluid}>
         
                <div className={styles.row}>
                   
                   {favouriteMovies.length == 0 && (
                    <h1>No Favourite Movies Added</h1>
                   )}
              
                        {favouriteMovies.map(movie => (
                            <div className={styles.imageContainer} key={movie._id}>
                            <Link to={`/favourites/${movie._id}`} onClick={onClickOpen}><img
                                
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: '11em', height: '100%'}} /></Link>
                                <div onClick={() => removeFavouriteHandler(movie._id)} className={`${styles.overlay} d-flex align-items-center justify-content-center`}><RemoveFromFavourites movie={movie}/></div>
                                </div>
                        )) }
                        
                </div>
            </div>
        </>
        
    );
}