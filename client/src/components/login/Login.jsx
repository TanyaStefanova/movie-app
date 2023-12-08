import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../hooks/useForm'
import styles from './Login.module.css'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthContext from '../../contexts/authContext';


export default function Login (){

  const { showModal, onClickClose, loginSubmitHandler } = useContext(AuthContext);

  const {values, onChange, onSubmit, formErrors} = useForm(loginSubmitHandler, {
    email: '',
    password: ''
  });

    return(
        <Modal show={showModal} onHide={onClickClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
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
            required
            placeholder="email@example.com"
            />
          </Col>
        </Form.Group>
        <p className={styles.email}>{formErrors.email}</p>
  
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
            required
            placeholder="Password"
            />
          </Col>
        </Form.Group>
        <p className={styles.password}>{formErrors.password}</p>
      </Form>
      </Modal.Body>
                <Modal.Footer className={styles.footer}>
                   <div className={styles.footerLink}><p>Click <Link to="/register">here</Link> if you don't have an account</p></div>
                    <Button variant="primary" type="submit" onClick={onSubmit}>
                       Login
                    </Button>
                    <Button variant="secondary" onClick={onClickClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    );
}