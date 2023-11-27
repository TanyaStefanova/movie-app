import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function MovieCreate({ show, onClose }) {


    return (
        //     <form >
        //     <label htmlFor="title">Title:</label>
        //     <input type="text" id="title" name="title" />

        //     <label htmlFor="title">Title:</label>
        //     <input type="text" id="title" name="title" />

        //     <label htmlFor="title">Title:</label>
        //     <input type="text" id="title" name="title" />

        //     <label htmlFor="title">Title:</label>
        //     <input type="text" id="title" name="title" />

        //     <label htmlFor="category">Category:</label>
        //     <select id="category" name="category" >
        //         <option value="movie">Movie</option>
        //         <option value="book">Book</option>
        //         <option value="music">Music</option>
        //     </select>

        //     <label htmlFor="description">Description:</label>
        //     <textarea id="description" name="description" rows="4"></textarea>

        //     <button type="submit">Create Resource</button>
        // </form>
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            {/* <Modal show={show} onHide={handleClose}> */}
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Fast and Furious"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="1974"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Poster Url</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select aria-label="Default select example">
                                <option>Types</option>
                                <option value="movie">Movie</option>
                                <option value="tv-show">TV Show</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Select aria-label="Default select example">
                                <option>Genres</option>
                                <option value="crime">Crime</option>
                                <option value="drama">Drama</option>
                                <option value="adventure">Adventure</option>
                                <option value="comedy">Comedy</option>
                                <option value="history">History</option>
                                <option value="thriller">Thriller</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Plot</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={onClose}>
                       Add Movie
                    </Button>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}