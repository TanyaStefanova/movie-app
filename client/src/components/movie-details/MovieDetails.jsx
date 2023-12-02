import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/authContext';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import * as movieService from '../../services/movieService'

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
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Modal>
    );
}