import { useContext } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

export default function Register() {
    const { registerSubmitHandler, showModal, onClickClose } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        repeatPassword: '',
    });

    return (
        <Modal show={showModal} onHide={onClickClose}>
            <Modal.Header closeButton>
                <Modal.Title>Register</Modal.Title>
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
                                name="password"
                                value={values.password}
                                onChange={onChange}
                                placeholder="Password"
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Repeat Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="password"
                                name="repeatPassword"
                                value={values.repeatPassword}
                                onChange={onChange}
                                placeholder="Password"
                            />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {/* TODO make the link to not refresh the page + style*/}
                <p>Click <a href="/login">here</a> if you already have an account</p>
                <Button variant="primary" type="submit" onClick={onSubmit}>
                    Register
                </Button>
                <Button variant="secondary" onClick={onClickClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}