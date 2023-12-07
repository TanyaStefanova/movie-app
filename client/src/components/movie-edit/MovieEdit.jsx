import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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


export default function MovieEdit() {
    // const [formValues, setFormValues] = useState(formInitialState);
    const { showModal, onClickClose } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState({
        title: '',
        year: '',
        posterUrl: '',
        type: '',
        genres: '',
        plot: '',
    });

      // TODO handle error
    useEffect(() => {
        movieService.getOne(id)
            .then(result => {
                setMovie(result)
            });
    }, [id]);



    const editSubmitHandler = async (e) => {
        e.preventDefault();

        // TODO handle error
        try {
            await movieService.edit(id, movie);
            navigate('/movies');
        } catch (error) {
            console.error(error);
        }
    }

    const changeHandler = (e) => {
        // console.log(e.target.value);
        let value = e.target.value;

        if (e.target.type === 'number') {
            value = Number(e.target.value);
        }

        setMovie(state => ({
            ...state,
            [e.target.name]: value,
        }));

        // setFormValues(state => ({
        //     ...state,
        //     [e.target.name]: value,
        // }));
    }

    return (
        <>
            <Modal show={showModal} onHide={onClickClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editSubmitHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Title</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.title}
                                value={movie.title}
                                onChange={changeHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Year</Form.Label>
                            <Form.Control
                                type="number"
                                name={FORM_KEYS.year}
                                value={movie.year}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Poster Url</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.posterUrl}
                                value={movie.posterUrl}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="type"
                                name={FORM_KEYS.type}
                                value={movie.type}
                                onChange={changeHandler}
                            >
                                {/* <option>Type</option> */}
                                <option value="movie">Movie</option>
                                <option value="tv-show">TV Show</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="genres"
                                name={FORM_KEYS.genres}
                                value={movie.genres}
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
                                value={movie.plot}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={editSubmitHandler}>
                        Edit
                    </Button>
                    <Button variant="secondary" onClick={onClickClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}