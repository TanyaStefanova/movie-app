import * as request from "../lib/request";

let baseUrl = 'http://localhost:3030/data/movies'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
}

export const getAllMovies = async () => {
    const query = new URLSearchParams({
        where: `type="movie"`,
    })

    const result = await request.get(`${baseUrl}?${query}`);
    
    return result;
}

export const getAllTvShows = async () => {
    const query = new URLSearchParams({
        where: `type="tvShow"`,
    })

    const result = await request.get(`${baseUrl}?${query}`);
    
    return result;
}

export const getSearchedValues = async (value) => {
    // const query = new URLSearchParams({
    //     where: `title LIKE "${value}"`,
    // })

    const query = encodeURIComponent(`title LIKE "${value}"`)

    const result = await request.get(`${baseUrl}?where=${query}`);
    return result;
}


export const getOne = async (movieId) => {
   
    const result = await request.get(`${baseUrl}/${movieId}`);

    return result;
}

export const getOneTvShow = async (showId) => {

    baseUrl = 'http://localhost:3030/data/tvshows';
   
    const result = await request.get(`${baseUrl}/${showId}`);

    return result;
}

export const create = async (movieData) => {

    if(movieData.type == 'tvShow'){
        baseUrl = 'http://localhost:3030/data/tvshows'
    }
    console.log(movieData);
    const result = await request.post(baseUrl, movieData);

    return result;
}

export const edit = async(movieId, movieData) => {
    if(movieData.type == 'tvShow'){
        baseUrl = 'http://localhost:3030/data/tvshows'
    }
    console.log(movieData);
    const result = await request.put(`${baseUrl}/${movieId}`, movieData);

    return result;
}

export const remove = async (movieId, type) => {
    if(type == 'tvShow'){
        baseUrl = 'http://localhost:3030/data/tvshows'
    } 
    request.remove(`${baseUrl}/${movieId}`)
};