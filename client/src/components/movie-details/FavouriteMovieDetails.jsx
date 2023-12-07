import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import * as favouriteService from '../../services/favouriteService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AuthContext from '../../contexts/authContext';
import { Modal } from 'react-bootstrap';

export default function FavouriteMovieDetails() {

    const { showModal, onClickClose, ownerId } = useContext(AuthContext);
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    // const navigate = useNavigate();

      // TODO handle error
    useEffect(() => {
        favouriteService.getOne(id)
            .then(setMovie)
            .catch(error => console.error(error));
    }, [id]);

    // const deleteButtonClickHandler = async () => {
    //     const hasConfirmed = confirm(`Are you sure you want to delete ${movie.title}?`);

    //     if(hasConfirmed){
    //        await favouriteService.remove(id);

    //        navigate('/movies');
    //     }
    // }
    return (
        <Modal show={showModal} onHide={onClickClose}>
            <Card style={{ width: '100%' }}>
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
                        Released in {movie.year}
                    </Card.Text>
                    
                  
                        <div>
                           {/* <Link to={`/movies/${id}/edit`}><Button variant="primary">Edit</Button></Link>  */}
                          {/* <Button variant="primary" onClick={deleteButtonClickHandler}>Delete</Button> */}
                          <Button style={{float: 'inline-end'}} variant="primary" onClick={onClickClose}>Close</Button>
                        </div>
                  
                </Card.Body>
            </Card>
        </Modal>
    );
}