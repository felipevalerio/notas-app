import { React, useState } from 'react';
import Header from '../../components/Header';
import { Form, Button, Container } from 'react-bootstrap';
import api from '../../services/apiRoutes';
import './styles.css';

function CreateNote() {

    const [form, setForm] = useState({
        title: '',
        description: '',
    });

    function handleChange(event) {
        setForm({...form, [event.target.name]: event.target.value})
    }

    async function handleSubmit(event) {
        event.preventDefault()
        await api.create(form)
            .then((response) => {
                console.log(response)
                setForm({title: '', description: ''})
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            <Header>Notas-App</Header>
            <Container>
                <div>
                    <Form onSubmit= {handleSubmit}>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control 
                                type="text"
                                name="title" 
                                value={form.title}
                                placeholder="Título da nota" 
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control 
                                type="text"
                                name="description"
                                value={form.description} 
                                placeholder="Descrição da nota" 
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button variant = "primary" type="submit">Salvar</Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default CreateNote;