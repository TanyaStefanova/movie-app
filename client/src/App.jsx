import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieList from './components/movie-list/MovieList';
import MovieCreate from './components/movie-create/MovieCreate';
import Layout from './components/layout/Layout';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='movies' element={<MovieList />} />
          <Route path='movies/create' element={<MovieCreate />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
