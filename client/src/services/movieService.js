const baseUrl = 'http://localhost:3030/data/movies'

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