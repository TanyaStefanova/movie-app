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

    baseUrl = 'http://localhost:3030/data/movies';

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getAllTvShows = async () => {
    const query = new URLSearchParams({
        where: `type="tvShow"`,
    })

    baseUrl = 'http://localhost:3030/data/tvshows';

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getSearchedValues = async (value) => {
    // const query = new URLSearchParams({
    //     where: `title LIKE "${value}"`,
    // })

    const query = encodeURIComponent(`title LIKE "${value}"`)

    // const result = await request.get(`${baseUrl}?where=${query}`);
    const tvShowResult = await request.get(`http://localhost:3030/data/tvshows?where=${query}`);
    const movieResult = await request.get(`http://localhost:3030/data/movies?where=${query}`);
    const result = tvShowResult.concat(movieResult);

    return result;
}


export const getOne = async (movieId) => {

    baseUrl = 'http://localhost:3030/data/movies';

    const result = await request.get(`${baseUrl}/${movieId}`);

    return result;
}

export const getOneTvShow = async (showId) => {

    baseUrl = 'http://localhost:3030/data/tvshows';

    const result = await request.get(`${baseUrl}/${showId}`);

    return result;
}

export const create = async (movieData) => {

    if (movieData.type == 'tvShow') {
        baseUrl = 'http://localhost:3030/data/tvshows'
    } else if (movieData.type == 'Movie') {
        baseUrl = 'http://localhost:3030/data/movies'
    }
    // console.log(movieData);
    const result = await request.post(baseUrl, movieData);

    return result;
}

// export const edit = async (movieId, movieData) => {
//     if (movieData.type == 'tvShow') {
//         baseUrl = 'http://localhost:3030/data/tvshows'
//     } else if (movieData.type == 'movie') {
//         baseUrl = 'http://localhost:3030/data/movies'
//     }
//     console.log(movieData);
//     const result = await request.put(`${baseUrl}/${movieId}`, movieData);

//     return result;
// }

export const edit = async (movieId, movieData, initialMovieType) => {

    let result;

    if (initialMovieType == movieData.type) {
        if (movieData.type == 'tvShow') {
            baseUrl = 'http://localhost:3030/data/tvshows'
        } else if (movieData.type == 'movie' || movieData.type == 'Movie') {
            baseUrl = 'http://localhost:3030/data/movies'
        }
        result = await request.put(`${baseUrl}/${movieId}`, movieData);
        return result;
    } 

    if (movieData.type == 'tvShow') {
        baseUrl = 'http://localhost:3030/data/tvshows'
        result = await request.post(baseUrl, movieData);
        result = request.remove(`http://localhost:3030/data/movies/${movieId}`)
 
    }

    if (movieData.type == 'movie' || movieData.type == 'Movie') {
        baseUrl = 'http://localhost:3030/data/movies'
        result = request.remove(`http://localhost:3030/data/tvshows/${movieId}`)
        result = await request.post(baseUrl, movieData);
       
    }

    return result;
}

export const remove = async (movieId, type) => {
    if (type == 'tvShow') {
        baseUrl = 'http://localhost:3030/data/tvshows'
    } else if (type == 'movie') {
        baseUrl = 'http://localhost:3030/data/movies'
    }
    request.remove(`${baseUrl}/${movieId}`)
};