import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as movieService from "../../services/movieService";
import styles from './MovieCreate.module.css'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AuthContext from "../../contexts/authContext";

const FORM_KEYS = {
    title: 'title',
    year: 'year',
    posterUrl: 'posterUrl',
    type: 'type',
    genre: 'genre',
    plot: 'plot',
}

const formInitialState = {
    [FORM_KEYS.title]: '',
    [FORM_KEYS.year]: '',
    [FORM_KEYS.posterUrl]: '',
    [FORM_KEYS.type]: 'Movie',
    [FORM_KEYS.genre]: 'Crime',
    [FORM_KEYS.plot]: '',
}


export default function MovieCreate() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [serverError, setServerError] = useState(null);
 
    const navigate = useNavigate();
    const {showModal, onClickClose} = useContext(AuthContext);

    const changeHandler = (e) => {
      
        let value = e.target.value;

        if (e.target.type === 'number') {
            value = Number(e.target.value);
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));

        setFormErrors(state => ({
            ...state,
            [e.target.name]: ''
        }));
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            
            movieService.create(formValues)
                .then(navigate('/movies'))
                .catch (error => {
                    setServerError(error);
                }) 
             
        }
    }, [formErrors]);

    const validate = (formValues) => {
        const errors = {};

            if(!formValues.title) {
                errors.title = 'Title is required!';
            }
            if(!formValues.year){
                errors.year = 'Year is required!';
            }

            if(!formValues.posterUrl){
                errors.posterUrl = 'Image url is required!';
            }
            if(!formValues.plot){
                errors.plot = 'Movie plot is required!';
            }

        return errors;

    }
    return (
        <>
        {serverError && <h2 style={{color: 'white'}}>An error occured: {serverError.message}</h2>}
            <Modal show={showModal} onHide={onClickClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Title</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.title}
                                value={formValues.title}
                                onChange={changeHandler}
                                placeholder="Fast and Furious"
                                autoFocus
                            />
                        </Form.Group>
                        <p className={styles.title}>{formErrors.title}</p>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Year</Form.Label>
                            <Form.Control
                                type="number"
                                name={FORM_KEYS.year}
                                value={formValues.year}
                                onChange={changeHandler}
                                placeholder="1974"
                            />
                        </Form.Group>
                        <p className={styles.year}>{formErrors.year}</p>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Poster Url</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.posterUrl}
                                value={formValues.posterUrl}
                                onChange={changeHandler}
                                placeholder="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
                            />
                        </Form.Group>
                        <p className={styles.posterUrl}>{formErrors.posterUrl}</p>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="type"
                                placeholder="Type"
                                name={FORM_KEYS.type}
                                value={formValues.type}
                                onChange={changeHandler}
                            >
                                <option value="movie">Movie</option>
                                <option value="tvShow">TV Show</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="genre"
                                placeholder="Genre"
                                name={FORM_KEYS.genre}
                                value={formValues.genre}
                                onChange={changeHandler}
                            >
                                <option value="crime">Crime</option>
                                <option value="drama">Drama</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="comedy">Comedy</option>
                                <option value="history">History</option>
                                <option value="thriller">Thriller</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label >Plot</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                type="text"
                                name={FORM_KEYS.plot}
                                value={formValues.plot}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <p className={styles.plot}>{formErrors.plot}</p>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={submitHandler}>
                        Add
                    </Button>
                    <Button variant="secondary" onClick={onClickClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}