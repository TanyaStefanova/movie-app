import { useState } from 'react';

import useForm from '../../hooks/useForm'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default function Login ({ show, onClose, loginSubmitHandler }){
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
    email: '',
    password: ''
  });

    return(
        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={onSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
            type="text"
            // id="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="email@example.com"
            />
          </Col>
        </Form.Group>
  
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
            type="password"
            // id="password"
            name="password"
            value={values.password}
            onChange={onChange}
            placeholder="Password"
            />
          </Col>
        </Form.Group>
      </Form>
      </Modal.Body>
                <Modal.Footer>
                    {/* TODO make the link to not refresh the page + style*/}
                    <p>Click <a href="/register">here</a> if you don't have an account</p>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                       Login
                    </Button>
                    <Button variant="secondary" onClick={onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}