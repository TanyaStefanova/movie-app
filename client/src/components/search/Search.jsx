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
                                <img src='https://www.themoviedb.org/t/p/w94_and_h141_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' alt="movie-poster" />
                                <div className="details"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );

}