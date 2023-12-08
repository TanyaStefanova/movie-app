import { Container, Button, Form, FormControl } from 'react-bootstrap';
import { useContext } from 'react';
import useForm from '../../hooks/useForm'
import AuthContext from '../../contexts/authContext';

import styles from './Home.module.css'

export default function Home() {

    const { seacrhSubmitHandler, ownerId } = useContext(AuthContext);

    const { values, onChange, onSubmit, formErrors } = useForm(seacrhSubmitHandler, {
        search: ''
    });

    return (
        <>
            {ownerId && (
                <Container className={styles.homeContainer}>

                    <h2 className={styles.heading}>Hi There,</h2>
                    <img src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png" alt="" />
                    <Container className="mt-4">
                        <Form onSubmit={onSubmit}>
                            <FormControl
                                type="text"
                                name='search'
                                id='search'
                                value={values.search}
                                onChange={onChange}
                                placeholder="Type movie title..."
                                className="mr-sm-2"
                                style={{
                                    display: 'inline',
                                    width: '80%',
                                    borderRadius: '50px'
                                }}
                            />
                            <Button variant="primary" className={styles.searchButton} onClick={onSubmit}>Search</Button>
                        </Form>
                        <p className={styles.searchError}>{formErrors.search}</p>
                    </Container>
                    <div>
                        <h2 style={{ color: 'white', fontSize: '3.5rem', textAlign: 'center' }}>We are glad you're here</h2>
                        <p style={{ color: 'white' }}>Millions of movies, TV shows and people to discover. Explore now.Millions of movies, TV shows and people to discover. Explore now.Millions of movies, TV shows and people to discover. Explore now.Millions of movies, TV shows and people to discover. Explore now.Millions of movies, TV shows and people to discover. Explore now.</p>
                    </div>

                </Container>
            )}
            {!ownerId && (
                <Container className={styles.homeContainer}>

                    <h2 className={styles.heading}>Welcome!</h2>
                    <img src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png" alt="" />
                    <Container className="mt-4">
                        <Form onSubmit={onSubmit}>
                            <FormControl
                                type="text"
                                name='search'
                                id='search'
                                value={values.search}
                                onChange={onChange}
                                placeholder="Type movie title..."
                                className="mr-sm-2"
                                style={{
                                    display: 'inline',
                                    width: '80%',
                                    borderRadius: '50px'
                                }}
                            />
                            <Button variant="primary" className={styles.searchButton} onClick={onSubmit}>Search</Button>
                        </Form>
                        <p className={styles.searchError}>{formErrors.search}</p>
                    </Container>

                    <h2 style={{ color: 'white', fontSize: '3.5rem' }}>Join today</h2>
                    <p style={{ color: 'white' }}>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Apple TV Plus, MUBI, and Curiosity Stream.</p>
                </Container>

            )}
        </>
    );
}