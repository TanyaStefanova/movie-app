import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function MovieCreate() {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
            <Modal onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}