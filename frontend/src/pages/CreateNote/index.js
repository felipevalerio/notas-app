import React from 'react';
import Header from '../../components/Header';
import { Form, Button, Container } from 'react-bootstrap';
import './styles.css';

function CreateNote() {
    return (
        <>
            <Header>Notas-App</Header>
            <Container>
                <div>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control type="text" placeholder="Título da nota"/>
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Descrição da nota"/>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default CreateNote;