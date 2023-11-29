import * as request from "../lib/request";

// Докато нямаме users, не може да правим рost тук: 
const baseUrl = 'http://localhost:3030/data/movies'
// const baseUrl = 'http://localhost:3030/jsonstore/movies'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
}

export const getOne = async (movieId) => {
    const result = await request.get(`${baseUrl}/${movieId}`);

    return result;
}

export const create = async (movieData) => {

    const result = await request.post(baseUrl, movieData);

    return result;
}