import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as movieService from '../../services/movieService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../contexts/authContext';
import { Modal } from 'react-bootstrap';

export default function TvShowDetails() {

    const { showModal, onClickClose, ownerId } = useContext(AuthContext);

    const [tvShow, setTvShow] = useState({});
    const [error, setError] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOneTvShow(id)
            .then(setTvShow)
            .catch(error => {
                setError('An error occurred while fetching data. Please try again later.')
            });
    }, [id]);

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${tvShow.title}?`);

        if (hasConfirmed) {
            try {
                const response = await movieService.remove(id, tvShow.type);

                navigate('/movies');
            } catch (error) {
                console.error('An error occured:', error);
            }
        }
    }

    return (
        <>
            {error && <h2 style={{color: 'white'}}>{error}</h2>}
            <Modal show={showModal} onHide={onClickClose}>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={tvShow.posterUrl} />
                    <Card.Body>
                        <Card.Title>{tvShow.title}</Card.Title>
                        <Card.Text>
                            {tvShow.plot}
                        </Card.Text>
                        <Card.Text>
                            Genre: {tvShow.genre}
                        </Card.Text>
                        <Card.Text>
                            Released in {tvShow.year}
                        </Card.Text>

                        {ownerId === tvShow._ownerId && (
                            <div>
                                <Link to={`/tvshows/${id}/edit`}><Button variant="primary" style={{marginRight: '20px'}}>Edit</Button></Link>
                                <Button variant="primary" onClick={deleteButtonClickHandler}>Delete</Button>
                                <Button variant="primary" onClick={onClickClose} style={{float: 'inline-end'}}>Close</Button>
                            </div>
                        )}
                         {ownerId !== tvShow._ownerId && (
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