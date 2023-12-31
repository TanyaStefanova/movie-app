import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as favouriteService from '../../services/favouriteService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../contexts/authContext';
import { Modal } from 'react-bootstrap';

export default function FavouriteMovieDetails() {

    const { showModal, onClickClose, ownerId } = useContext(AuthContext);

    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        favouriteService.getOne(id)
            .then(setMovie)
            .catch(error => {
                setError('An error occurred while fetching data. Please try again later.');
                console.log(error);
            });
    }, [id]);
    
    return (
        <>
        {error && <h2 style={{color: 'white'}}>{error}</h2>}
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
                        <div>
                          <Button style={{float: 'inline-end'}} variant="primary" onClick={onClickClose}>Close</Button>
                        </div>
                  
                </Card.Body>
            </Card>
        </Modal>
        </>
    );
}