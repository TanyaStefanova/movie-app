import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import { useState, useContext } from 'react';
import useForm from '../../hooks/useForm'
import AuthContext from '../../contexts/authContext';

import * as movieService from '../../services/movieService';
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom';
import Search from '../search/Search';

export default function Home() {

    // const [search, setSearch] = useState('');
    // const navigate = useNavigate();

    // const changeHandler = (e) => {
    //     setSearch(e.target.value);
    //     console.log(search);
    // }

    // const resetFormHandler = () => {
    //     setSearch('');
    // }

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     resetFormHandler();

    //     try {
    //         // const list = await movieService.getSearchedValues(search);
    //         const list = await movieService.getAll();
    //         const filteredList = list.filter(movie => movie.title.toLowerCase().includes(search))
    //         setSearch(filteredList);
    //         console.log(filteredList);
    //         // navigate('/movies/search')
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const { seacrhSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit, formErrors } = useForm(seacrhSubmitHandler, {
        search: ''
    });

    return (
        <>
            <Container fluid className={styles.heroContainer}>
                <Row>
                    <Col>
                        <h1>Your Hero Title</h1>
                        <p>Your hero description goes here. You can add more content or customize as needed.</p>
                        <p>Your hero description goes here. You can add more content or customize as needed.</p>
                        <p>Your hero description goes here. You can add more content or customize as needed.</p>
                        <p>Your hero description goes here. You can add more content or customize as needed.</p>
                        <p>Your hero description goes here. You can add more content or customize as needed.</p>
                        <p>Your hero description goes here. You can add more content or customize as needed.</p>
                        <Container className="mt-4">
                            <Form onSubmit={onSubmit}>
                                <FormControl
                                    type="text"
                                    name='search'
                                    id='search'
                                    value={values.search}
                                    onChange={onChange}
                                    placeholder="Search"
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

                        <p>Your hero description goes here. You can add more content or customize as needed.</p>

                    </Col>
                </Row>
            </Container>
            {/* <Container className={styles.homeContainer}>
            <h2 className={styles.heading}>Hi There,</h2>
                <img src="https://www.themoviedb.org/assets/2/v4/marketing/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png" alt="" />
                <h2 style={{color:'white', fontSize: '3.5rem'}}>Join today</h2>
                <p style={{color:'white'}}>Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Apple TV Plus, MUBI, and Curiosity Stream.</p>
        </Container> */}
        </>
    );
}