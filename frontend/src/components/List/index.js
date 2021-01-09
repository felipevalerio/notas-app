import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import api from '../../services/apiRoutes';

function List() {

    const [note, setNote] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.list();
            setNote(result.note);
        };

        fetchData();
    }, []);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Suas Notas</Card.Title>
                <ListGroup variant="flush">
                    
                        {note.map(item => (
                            <ListGroup.Item key={item.id}>
                                <p>{item.title}</p>
                            </ListGroup.Item>
                        ))}

                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default List;