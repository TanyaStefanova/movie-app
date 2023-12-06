import styles from './Search.module.css'

export default function Search({ searchedMovies }) {

    return (
        <>
            <h1>Search Results</h1>
            <div className="container">
                {searchedMovies.length == 0 && (
                    <h1>No movie with this title</h1>
                )}
                {searchedMovies.map(movie => (
                    <div key={movie._id} style={{marginTop: '20px', backgroundColor:'#212529'}} className="card v4 tight">
                        <div className="wrapper">
                            <div className={styles.image} >
                                <div style={{float: 'left', width: '10%'}}><img style={{ width: '94px', height: '141px' }} src={movie.posterUrl} alt="movie-poster" />
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.title}><h2>{movie.title}</h2></div>
                                    <div className={styles.overview}><p>{movie.plot}</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}