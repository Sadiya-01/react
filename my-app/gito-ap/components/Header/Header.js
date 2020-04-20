import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

 class Header extends Component {
    render() {
        return (
            <div>

    <Navbar fixed ="top" bg="secondary" expand="mt">
                    <Nav className="Header">
                    <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
    </Navbar>
            </div>
        )
    }
}
export default Header;