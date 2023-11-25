import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import styles from './Home.module.css'

export default function Home() {
    return (
        <Container fluid className={styles.heroContainer}>
            <Row>
                <Col>
                    <h1>Your Hero Title</h1>
                    <p>Your hero description goes here. You can add more content or customize as needed.</p>
                    <p>Your hero description goes here. You can add more content or customize as needed.</p>
                    <p>Your hero description goes here. You can add more content or customize as needed.</p>
                    <p>Your hero description goes here. You can add more content or customize as needed.</p>
                    <p>Your hero description goes here. You can add more content or customize as needed.</p>
                    <p>Your hero description goes here. You can add more content or customize as needed.</p>
                    <Container className="mt-4">
                        <Form inline >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{
                                display: 'inline',
                                width: '80%',
                                borderRadius: '50px'
                            }} />
                            <Button variant="primary" className={styles.searchButton}>Search</Button>
                        </Form>
                    </Container>

                    <p>Your hero description goes here. You can add more content or customize as needed.</p>

                </Col>
            </Row>
        </Container>
    );
}