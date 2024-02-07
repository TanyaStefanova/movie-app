import * as request from '../lib/request';

// const baseUrl = 'http://localhost:3030/users';
const baseUrl = `${import.meta.env.VITE_API_URL}/users`    


export const login = async (email, password) => {
    const result = request.post(`${baseUrl}/login`, {
        email,
        password
     });
 
     return result;
 }

 export const register = async (email, password) => {
    const result = request.post(`${baseUrl}/register`, {
        email,
        password
     });
 
     return result;
}

export const logout = () => request.get(`${baseUrl}/logout`);