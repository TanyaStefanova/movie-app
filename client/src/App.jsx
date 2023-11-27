import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieList from './components/movie-list/MovieList';
import MovieCreate from './components/movie-create/MovieCreate';
import Layout from './components/layout/Layout';
import { useState } from 'react';


function App() {

  const [showCreateForm, setShowCreateForm] = useState(false);

  const onClickOpen = () => {
    setShowCreateForm(true);
  };

  const onClickClose = () => {
    setShowCreateForm(false);
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout onClickOpen={onClickOpen}/>}>
          <Route path='movies' element={<MovieList />} />
          <Route path='movies/create' element={<MovieCreate show={showCreateForm} onClose={onClickClose} />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
