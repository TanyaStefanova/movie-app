import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './contexts/authContext';

import MovieList from './components/movie-list/MovieList';
import MovieCreate from './components/movie-create/MovieCreate';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Register from './components/register/Register';
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

function App() {
 
  return (
    <AuthProvider>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='movies' element={<MovieList />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='movies/:id' element={<MovieDetails />} />
            <Route path='tvshows/:id' element={<TvShowDetails />} />
            <Route path='movies/search' element={<Search />} />

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
    </AuthProvider>
  )
}

export default App