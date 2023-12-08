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
    genre: 'genre',
    plot: 'plot',
}

export default function MovieEdit() {
    const { showModal, onClickClose } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [initialTvShowType, setInitialTvShowType] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();
    const [tvShow, setTvShow] = useState({
        title: '',
        year: '',
        posterUrl: '',
        type: '',
        genre: '',
        plot: '',
    });

    useEffect(() => {
        movieService.getOneTvShow(id)
            .then(result => {
                setTvShow(result)
            })
            .catch(error => {
                setError('An error occurred while fetching data. Please try again later.')
            })
           
    }, [id]);

    useEffect(() => {
        setInitialTvShowType(tvShow.type)
    }, [tvShow.title, tvShow.year, tvShow.posterUrl,tvShow.genre, tvShow.plot])

    console.log(tvShow.type);
    console.log(initialTvShowType);
    console.log(tvShow);
    
    const editSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await movieService.edit(id, tvShow, initialTvShowType);
       
            navigate('/movies');
        } catch (error) {
            console.error(error.message);
        }
    }

    const changeHandler = (e) => {
        let value = e.target.value;

        if (e.target.type === 'number') {
            value = Number(e.target.value);
        }

        setTvShow(state => ({
            ...state,
            [e.target.name]: value,
        }));
    }

    return (
        <>
            {error && <p>{error}</p>}
            <Modal show={showModal} onHide={onClickClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Tv Show</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={editSubmitHandler}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label >Title</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.title}
                                value={tvShow.title}
                                onChange={changeHandler}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Year</Form.Label>
                            <Form.Control
                                type="number"
                                name={FORM_KEYS.year}
                                value={tvShow.year}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label >Poster Url</Form.Label>
                            <Form.Control
                                type="text"
                                name={FORM_KEYS.posterUrl}
                                value={tvShow.posterUrl}
                                onChange={changeHandler}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="type"
                                name={FORM_KEYS.type}
                                value={tvShow.type}
                                onChange={changeHandler}
                            >
                                <option value="movie">Movie</option>
                                <option value="tvShow">TV Show</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select
                                aria-label="genre"
                                name={FORM_KEYS.genre}
                                value={tvShow.genre}
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
                                value={tvShow.plot}
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