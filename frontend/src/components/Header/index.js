import React from 'react';
import {Navbar} from 'react-bootstrap';

function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <p>{props.children}</p>
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;