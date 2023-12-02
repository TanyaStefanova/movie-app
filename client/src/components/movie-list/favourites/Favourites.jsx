import { useState } from "react";
import styles from './Favourites.module.css'

export default function Favourites({ movies }) {
    

    return (
        <>
            <h2>Favourites</h2>
            <div className='container-fluid'>

                {/* {<div style={{ fontSize: "30px", color: 'white'}}>{" < "}</div>} */}
                <button><div>&#8249;</div></button>
                <div className={styles.row}>
                   
              
                        {movies.map(movie => (
                            <img
                                key={movie._id}
                                src={movie.posterUrl}
                                className={styles.rowPoster}
                                alt={movie.name}
                                style={{ width: `30em`, height: `100%`}} />
                        )) }
                        

                    {/* {<div style={{ fontSize: "30px", color: 'white' }}>{" > "}</div>} */}
                </div>
                <button><div>&#8250;</div></button>
            </div>
        </>
    );
}