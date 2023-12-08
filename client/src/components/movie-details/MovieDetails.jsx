import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as movieService from '../../services/movieService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../contexts/authContext';
import { Modal } from 'react-bootstrap';

export default function MovieDetails() {

    const { showModal, onClickClose, ownerId } = useContext(AuthContext);

    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOne(id)
            .then(setMovie)
            .catch(error => {
                setError('An error occurred while fetching data. Please try again later.')
            });
        
    }, [id]);

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${movie.title}?`);

        if (hasConfirmed) {
            try {
                const response = await movieService.remove(id, movie.type);
                navigate('/movies');
            } catch (error) {
                console.error('An error occured:', error);
            }

        }
    }
    return (
        <>
            {error && <p>{error}</p>}
            <Modal show={showModal} onHide={onClickClose}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={movie.posterUrl} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.plot}
                        </Card.Text>
                        <Card.Text>
                            Genre: {movie.genre}
                        </Card.Text>
                        <Card.Text>
                            Released in {movie.year}
                        </Card.Text>

                        {ownerId === movie._ownerId && (
                            <div>
                                <Link to={`/movies/${id}/edit`}><Button variant="primary" style={{marginRight: '20px'}}>Edit</Button></Link>
                                <Button variant="primary" onClick={deleteButtonClickHandler}>Delete</Button>
                                <Button variant="primary" onClick={onClickClose} style={{float: 'inline-end'}}>Close</Button>
                            </div>
                        )}
                          {ownerId !== movie._ownerId && (
                            <div>
                                <Button variant="primary" onClick={onClickClose} style={{float: 'inline-end'}}>Close</Button>
                            </div>
                        )}
                    </Card.Body>
                </Card>
            </Modal>
        </>
    );
}