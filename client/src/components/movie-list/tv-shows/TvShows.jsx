// import styles from './TvShows.module.css'
// import AddFavourites from '../../add-favourites/AddFavourites';
// import { Link } from 'react-router-dom'
// import { useContext } from 'react';
// import AuthContext from '../../../contexts/authContext';

// export default function TvShows({ tvShows }) {
//     const { showModal, onClickOpen, addFavouriteMovie } = useContext(AuthContext);

//     return (
//         <>
//             <h3>TV Shows</h3>
//             <div className={styles.containerFluid}>

//                 <div className={styles.row} >

//                     {tvShows.map(movie => (
//                         <div className={styles.imageContainer} key={movie._id}>
//                            <Link to={`/movies/${movie._id}`} onClick={onClickOpen}><img
                               
//                                 src={movie.posterUrl}
//                                 className={styles.rowPoster}
//                                 alt={movie.name}
//                                 style={{ width: '11em', height: '100%' }} /></Link>
//                             <div onClick={() => addFavouriteMovie(movie)} className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites /></div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </>
//     );
// }

import styles from './TvShows.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../contexts/authContext';
import * as request from "../../../lib/request";



export default function TvShows() {
    const { onClickOpen, addFavouriteMovie } = useContext(AuthContext);
    const [currentShows, setCurrentShows] = useState([]);
    const [offset, setOffset] = useState(0);
    const [error, setError] = useState(null);

    const getCurrentShows = async () => {
        const query = new URLSearchParams({
            offset: `${offset}`,
            pageSize: 9
        })

        const result = await request.get(`http://localhost:3030/data/tvshows?${query}`);
        setCurrentShows(result)
        return result;
    }

    // TODO test error
    useEffect(() => {
        getCurrentShows()
            .then(setCurrentShows)
            .catch(error => {
                setError('An error occurred while fetching data. Please try again later.')
            });

        // console.log(currentShows);
    }, [offset]);

    const rightButtonClickHandler = () => {
        setOffset(state => state + 3);
        if(currentShows.length <=4) {
            setOffset(0);
        }
    }

    const leftButtonClickHandler = () => {
        setOffset(state => state - 5);
        if(currentShows.length <=5) {
            setOffset(0);
        }
    }

    return (
        <>
            <h3>Tv Shows</h3>
            {error && <p>{error}</p>}
            <div className={styles.containerFluid} >

                <button className={`${styles.handle} ${styles.leftHandle}`} onClick={leftButtonClickHandler}></button>
                <div className={styles.row} >

                    {currentShows.map(movie => (
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