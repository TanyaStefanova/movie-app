import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as authService from './services/authService';

import MovieList from './components/movie-list/MovieList';
import MovieCreate from './components/movie-create/MovieCreate';
import Layout from './components/layout/Layout';
import Login from './components/login/Login';
import Register from './components/register/Register';
import AuthContext from './contexts/authContext';


function App() {
  // TODO check if you need a different state for every modal
  const [showModal, setShowModal] = useState(false);
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    // Catch the error!!!
    console.log(result);
    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);
    navigate('/');
  }

  const onClickOpen = () => {
    setShowModal(true);
  };

  const onClickClose = () => {
    setShowModal(false);
  };

  const values = {
    loginSubmitHandler,
    onClickOpen,
    onClickClose,
    showModal
  }

  return (
    <AuthContext.Provider value={values}>
      <>
        <Routes>
          <Route path='/' element={<Layout onClickOpen={onClickOpen} />}>
            <Route path='movies' element={<MovieList />} />
            <Route path='movies/create' element={<MovieCreate />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>

        </Routes>
      </>
    </AuthContext.Provider>
  )
}

export default App
