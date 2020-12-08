import React from 'react';
import './styles.css';
import {Navbar} from 'react-bootstrap';

function Footer() {
    return (
        <Navbar bg="primary" variant="dark" fixed="bottom">
            <Navbar.Brand>
                <p>Felipe Valério de Ramos</p>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Footer;