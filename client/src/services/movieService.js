import * as request from "../lib/request";

let baseUrl;

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
}

export const getAllMovies = async () => {
    const query = new URLSearchParams({
        where: `type="movie"`,
    })

    // baseUrl = 'http://localhost:3030/data/movies';
    baseUrl = `${import.meta.env.VITE_API_URL}/data/movies`

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getAllTvShows = async () => {
    const query = new URLSearchParams({
        where: `type="tvShow"`,
    })

    // baseUrl = 'http://localhost:3030/data/tvshows';
    baseUrl = `${import.meta.env.VITE_API_URL}/data/tvshows`


    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getSearchedValues = async (value) => {

    const query = encodeURIComponent(`title LIKE "${value}"`)

    // const tvShowResult = await request.get(`http://localhost:3030/data/tvshows?where=${query}`);
    // const movieResult = await request.get(`http://localhost:3030/data/movies?where=${query}`);

    const tvShowResult = await request.get(`${import.meta.env.VITE_API_URL}/data/tvshows?where=${query}`);
    const movieResult = await request.get(`${import.meta.env.VITE_API_URL}/data/movies?where=${query}`);

    const result = tvShowResult.concat(movieResult);

    return result;
}


export const getOne = async (movieId) => {

    // baseUrl = 'http://localhost:3030/data/movies';
    baseUrl = `${import.meta.env.VITE_API_URL}/data/movies`

    const result = await request.get(`${baseUrl}/${movieId}`);

    return result;
}

export const getOneTvShow = async (showId) => {

    // baseUrl = 'http://localhost:3030/data/tvshows';
    baseUrl = `${import.meta.env.VITE_API_URL}/data/tvshows`


    const result = await request.get(`${baseUrl}/${showId}`);

    return result;
}

export const create = async (movieData) => {

    if (movieData.type == 'tvShow') {
        // baseUrl = 'http://localhost:3030/data/tvshows'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/tvshows`

    } else if (movieData.type == 'Movie') {
        // baseUrl = 'http://localhost:3030/data/movies'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/movies`

    }
    const result = await request.post(baseUrl, movieData);

    return result;
}

export const edit = async (movieId, movieData, initialMovieType) => {

    let result;

    if (initialMovieType == movieData.type) {
        if (movieData.type == 'tvShow') {
            // baseUrl = 'http://localhost:3030/data/tvshows'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/tvshows`

        } else if (movieData.type == 'movie' || movieData.type == 'Movie') {
            // baseUrl = 'http://localhost:3030/data/movies'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/movies`

        }
        result = await request.put(`${baseUrl}/${movieId}`, movieData);
        return result;
    }

    if (movieData.type == 'tvShow') {
        // baseUrl = 'http://localhost:3030/data/tvshows'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/tvshows`

        result = await request.post(baseUrl, movieData);
        result = request.remove(`${import.meta.env.VITE_API_URL}/data/movies/${movieId}`)

    }

    if (movieData.type == 'movie' || movieData.type == 'Movie') {
        // baseUrl = 'http://localhost:3030/data/movies'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/movies`
        
        result = request.remove(`${import.meta.env.VITE_API_URL}/data/tvshows/${movieId}`)
        result = await request.post(baseUrl, movieData);

    }

    return result;
}

export const remove = async (movieId, type) => {
    if (type == 'tvShow') {
        // baseUrl = 'http://localhost:3030/data/tvshows'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/tvshows`

    } else if (type == 'movie') {
        // baseUrl = 'http://localhost:3030/data/movies'
        baseUrl = `${import.meta.env.VITE_API_URL}/data/movies`

    }
    request.remove(`${baseUrl}/${movieId}`)
};