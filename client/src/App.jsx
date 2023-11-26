import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieList from './components/movie-list/MovieList';


function App() {

  return (
    <>
      <Header />

      <Home />
      <MovieList />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/movies' element={<MovieList />} /> */}
      </Routes>
    </>
  )
}

export default App
