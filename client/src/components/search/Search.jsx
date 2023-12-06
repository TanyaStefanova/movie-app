import styles from './Search.module.css'

export default function Search({ searchedMovies }) {

    return (
        <>
            <h1>Search Results</h1>
            <div className="container">
                {searchedMovies.map(movie => (
                    <div key={movie._id} className="card v4 tight">
                        <div className="wrapper">
                            <div className={styles.image} >
                                <div><img style={{width: '94px', height: '141px'}} src={movie.posterUrl} alt="movie-poster" /></div>
                                        <div>
                                           <div className="title" ><h2>{movie.title}</h2></div>
                                        <div className="plot" ><p>{movie.plot}</p></div>   
                                        </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}