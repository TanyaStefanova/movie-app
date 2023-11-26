import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Movies from './components/movies/Movies';


function App() {

  return (
    <>
      <Header />

      <Home />
      <Movies />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/movies' element={<Movies />} /> */}
      </Routes>
    </>
  )
}

export default App
