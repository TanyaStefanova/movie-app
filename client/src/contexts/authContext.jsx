import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext } from "react";

const AuthContext = createContext();

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as authService from '../services/authService';
import * as movieService from '../services/movieService';
import * as favouriteService from '../services/favouriteService';

export const AuthProvider = ({
    children,
}) => {
    const [showModal, setShowModal] = useState(false);
    const [auth, setAuth] = useState({});
    const [favourites, setFavourites] = useState([]);
    const [searched, setSearched] = useState([]);

    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/movies');

        } catch (error) {
            alert(error.message)
        }
    }

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/movies');
        } catch (error) {
            alert(error.message)
        }

    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const onClickOpen = () => {
        setShowModal(true);
    };

    const onClickClose = () => {
        setShowModal(false);
    };

  const notify = () => toast("Succesfully added to favourites!");

    const addFavouriteMovie = (movie) => {
        movie.isFavouredBy = auth._id;
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        favouriteService.create(movie);
        notify();
    }

    const seacrhSubmitHandler = async ({ search }) => {
        try {
            const list = await movieService.getSearchedValues(search);
            setSearched(list);
            navigate('/movies/search');
        } catch (error) {
            console.log(error);
        }
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        seacrhSubmitHandler,
        onClickOpen,
        onClickClose,
        showModal,
        ownerId: auth._id,
        isAuthenticated: !!auth.accessToken,
        addFavouriteMovie,
        favourites,
        searched,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;
