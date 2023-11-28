import { useEffect, useState } from 'react';

import * as movieService from "../../services/movieService";

import Carousel from 'react-bootstrap/Carousel';

export default function MovieList() {

    const [index, setIndex] = useState(0);
    const [movies, setMovies] = useState([]);

    // TODO handle error
    useEffect(() => {
        movieService.getAll()
            .then(result => setMovies(result))
            .catch(err => console.log(err));
    }, []);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <>
            {/* Display favorites if any and only for logged in user!!!*/}
            <h3>Favourites</h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    {movies.map(movie => (
                        <img key={movie._id} src={movie.posterUrl} />
                    ))}
                </Carousel.Item>
            </Carousel>

            <h3>Movies</h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                    {movies.map(movie => (
                        <img key={movie._id} src={movie.posterUrl} />
                    ))}
                </Carousel.Item>
            </Carousel>

            <h3>TV Shows</h3>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                    {movies.map(movie => (
                        <img key={movie._id} src={movie.posterUrl} />
                    ))}
                </Carousel.Item>
            </Carousel>
        </>
    );
}