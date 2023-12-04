import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as movieService from "../../services/movieService";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AuthContext from "../../contexts/authContext";

const FORM_KEYS = {
    title: 'title',
    year: 'year',
    posterUrl: 'posterUrl',
    type: 'type',
    genres: 'genres',
    plot: 'plot',
}

const formInitialState = {
    [FORM_KEYS.title]: '',
    [FORM_KEYS.year]: '',
    [FORM_KEYS.posterUrl]: '',
    [FORM_KEYS.type]: 'Movie',
    [FORM_KEYS.genres]: 'Crime',
    [FORM_KEYS.plot]: '',
}


export default function MovieCreate() {
    const [formValues, setFormValues] = useState(formInitialState);
    const navigate = useNavigate();
    const {showModal, onClickClose} = useContext(AuthContext);


    const changeHandler = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        let value = e.target.value;

        if (e.target.type === 'number') {
            value = Number(e.target.value);
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    }

    const resetFormHandler = (e) => {
        setFormValues(formInitialState);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        resetFormHandler();

        // TODO handle error
        try {
            await movieService.create(formValues);
            navigate('/movies');
        } catch (error) {
            console.log(error);
        }
        console.log(formValues);
    }


    return (
        <>
            <Modal show={showModal} onHide={onClickClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Title</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.title}
                                // id="title"
                                value={formValues.title}
                                onChange={changeHandler}
                                placeholder="Fast and Furious"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Year</Form.Label>
                            <Form.Control
                                type="number"
                                name={FORM_KEYS.year}
                                // id="year"
                                value={formValues.year}
                                onChange={changeHandler}
                                placeholder="1974"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Poster Url</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.posterUrl}
                                // id="posterUrl"
                                value={formValues.posterUrl}
                                onChange={changeHandler}
                                placeholder="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="type"
                                placeholder="Type"
                                name={FORM_KEYS.type}
                                // id="type"
                                value={formValues.type}
                                onChange={changeHandler}
                            >
                                {/* <option>Type</option> */}
                                <option value="movie">Movie</option>
                                <option value="tvShow">TV Show</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="genres"
                                placeholder="Genres"
                                name={FORM_KEYS.genres}
                                // id="genres"
                                value={formValues.genres}
                                onChange={changeHandler}
                            >
                                {/* Genres */}
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
                                // id="plot"
                                value={formValues.plot}
                                onChange={changeHandler}
                            />
                        </Form.Group>
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