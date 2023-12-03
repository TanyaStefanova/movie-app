import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as movieService from '../../services/movieService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../contexts/authContext';
import { Modal } from 'react-bootstrap';

export default function MovieDetails() {

    const { showModal, onClickClose } = useContext(AuthContext);
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    useEffect(() => {
        movieService.getOne(id)
            .then(setMovie);
    }, [id])

    return (
        <Modal show={showModal} onHide={onClickClose}>
            <Card style={{ width: '32rem' }}>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.plot}
                    </Card.Text>
                    <Card.Text> 
                        Genre: {movie.genres}
                    </Card.Text>
                    <Card.Text> 
                        Year: {movie.year}
                    </Card.Text>
                    {/* TODO Show only for the owner */}
                    {/* <Button variant="primary">Edit</Button>
                    <Button variant="primary">Delete</Button> */}
                </Card.Body>
            </Card>
        </Modal>
    );
}