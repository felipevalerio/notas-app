import React, { useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import api from '../../services/apiRoutes';
import trashIcon from '../../icons/garbage.png';

function List() {

    const [note, setNote] = useState([]);

    async function handleRemove(id) {
        await api.deleteNote(id)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.list();
            setNote(result);
        };

        fetchData();
    }, []);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Suas Notas</Card.Title>
                <ListGroup variant="flush" as="ul">
                    
                        {note.map(item => (
                            <ListGroup.Item key={item.id} as="li">
                                <p>{item.title} 
                                <button class="btn btn-outline-light" onClick={() => handleRemove(item.id)}><img src={trashIcon} alt=""/></button></p> 
                            </ListGroup.Item>
                        ))}

                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default List;