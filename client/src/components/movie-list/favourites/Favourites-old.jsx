import RemoveFromFavourites from '../../remove-favourites/RemoveFromFavourites';
import styles from './Favourites.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as favouriteService from "../../../services/favouriteService";


export default function Favourites() {
  const { onClickOpen, ownerId, favourites } = useContext(AuthContext);
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // TODO test error
    useEffect(() => {
        favouriteService.getAllFavourites(ownerId)
        .then(setFavouriteMovies)
        .catch(error => {
            setError('An error occurred while fetching data. Please try again later.')
        });
    }, [ownerId, favourites]);

    const removeFavouriteHandler = async (movieId, title) => {
   
        const hasConfirmed = confirm(`Are you sure you want to remove ${title} from favourites?`);

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
            {error && <p>{error}</p>}
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
                                <div onClick={() => removeFavouriteHandler(movie._id, movie.title)} className={`${styles.overlay} d-flex align-items-center justify-content-center`}><RemoveFromFavourites movie={movie}/></div>
                                </div>
                        )) }
                        
                </div>
            </div>
        </>
        
    );
}