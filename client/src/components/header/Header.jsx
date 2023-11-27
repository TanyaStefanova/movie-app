import { useState } from 'react';

import { Link } from 'react-router-dom';
import styles from './Header.module.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header({ onClickOpen }) {

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <h2><Link to="/" className={styles.logo}>Filmster</Link></h2>
        <Nav>
          <Link className={styles.navLink} to="/movies">Movies</Link>
          <Link className={styles.navLink} to="/movies/create" onClick={onClickOpen}>Add Movie</Link>
          <Link className={styles.navLink} to="/logout">Logout</Link>
          <Link className={styles.navLink} to="/login" onClick={onClickOpen}>Login</Link>
          <Link className={styles.navLink} to="/register" onClick={onClickOpen}>Register</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}