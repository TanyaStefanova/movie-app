import styles from './Movies.module.css'
import AddFavourites from '../../add-favourites/AddFavourites';


export default function Movies({ movies }) {
    return (
        <>
            <h3>Movies</h3>
            <div className={styles.containerFluid}>

                {/* {<div style={{ fontSize: "30px", color: 'white'}}>{" < "}</div>} */}
                {/* <button><div>&#8249;</div></button> */}
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


                    {/* {<div style={{ fontSize: "30px", color: 'white' }}>{" > "}</div>} */}
                </div>
                {/* <button><div>&#8250;</div></button> */}
            </div>
        </>
    );
}