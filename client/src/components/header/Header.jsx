import { useContext } from 'react';

import { Link } from 'react-router-dom';
import styles from './Header.module.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthContext from '../../contexts/authContext';

export default function Header() {

  const { onClickOpen, isAuthenticated } = useContext(AuthContext);

  return (
    <Navbar className={styles.header} data-bs-theme="dark">
      <Container>
        <h2><Link to="/" className={styles.logo}>Filmster</Link></h2>
        <Nav>
          <Link className={styles.navLink} to="/movies">Movies</Link>
          {isAuthenticated && (
            <div id='user'>
              <Link className={styles.navLink} to="/movies/create" onClick={onClickOpen}>Add Movie</Link>
              <Link className={styles.navLink} to="/movies/favourites">My Favourites</Link>
              <Link className={styles.navLink} to="/logout">Logout</Link>
            </div>
          )}

          {!isAuthenticated && (
            <div id='guest'>
              <Link className={styles.navLink} to="/login" onClick={onClickOpen}>Login</Link>
              <Link className={styles.navLink} to="/register" onClick={onClickOpen}>Register</Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}