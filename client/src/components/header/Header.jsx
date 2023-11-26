import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">Filmster</Link>
          <Nav>
            <Link to="/movies">Movies</Link>
            <Nav.Link href="#features">Add Movie</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing">Register</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}