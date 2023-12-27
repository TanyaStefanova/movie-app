import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as authService from './services/authService';
import * as movieService from './services/movieService';
import * as favouriteService from './services/favouriteService';

import MovieList from './components/movie-list/MovieList';
import MovieCreate from './components/movie-create/MovieCreate';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthContext from './contexts/authContext';
import Logout from './components/logout/Logout';
import MovieDetails from './components/movie-details/MovieDetails';
import TvShowDetails from './components/movie-details/TvShowDetails';
import MovieEdit from './components/movie-edit/MovieEdit';
import TvShowEdit from './components/movie-edit/TvShowEdit';
import PageNotFound from './components/page-not-found/PageNotFound';
import FavouriteMovieDetails from './components/movie-details/FavouriteMovieDetails';
import Search from './components/search/Search';
import Favourites from './components/movie-list/favourites/Favourites';
import AuthGuard from './components/guards/AuthGuard';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
      <>
        <Routes>
          <Route path='/' element={<Layout onClickOpen={onClickOpen} />}>
            <Route path='movies' element={<MovieList />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='movies/:id' element={<MovieDetails />} />
            <Route path='tvshows/:id' element={<TvShowDetails />} />
            <Route path='movies/search' element={<Search searchedMovies={searched} />} />

            <Route element={<AuthGuard />}>
              <Route path='movies/create' element={<MovieCreate />} />
              <Route path='movies/favourites' element={<Favourites />} />
              <Route path='favourites/:id' element={<FavouriteMovieDetails />} />
              <Route path='movies/:id/edit' element={<MovieEdit />} />
              <Route path='tvshows/:id/edit' element={<TvShowEdit />} />
              <Route path='logout' element={<Logout />} />
            </Route>

          </Route>
          <Route path='*' element={<PageNotFound />} />

        </Routes>
      </>
    </AuthContext.Provider>
  )
}

export default App