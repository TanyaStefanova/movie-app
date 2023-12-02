import styles from './TvShows.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';

export default function TvShows({ movies }) {
    return (
        <>
            <h3>TV Shows</h3>
            <div className={styles.containerFluid}>

                <div className={styles.row}>

                    {movies.map(movie => (
                        <div className={styles.imageContainer}>
                            <img
                                key={movie._id}
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: '11em', height: '100%' }} />
                            <div className={`${styles.overlay} d-flex align-items-center justify-content-center`}><AddFavourites /></div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}