import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/favourites';


export const getAllFavourites = async (ownerId) => {
    const query = new URLSearchParams({
        where: `isFavouredBy="${ownerId}"`,
    })
    const result = await request.get(`${baseUrl}?${query}`);
    
    return result;
}

export const create = async (movie) => {
    const newFavouriteMovie = await request.post(baseUrl, {...movie});
    console.log(newFavouriteMovie);
}