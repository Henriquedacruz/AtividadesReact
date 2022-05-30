/*rfce atalho*/
import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function index() {
  return (
    <Navbar bg="light" expand="lg">
  <Container >
    <Navbar.Brand href="#home">Games shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
        <Nav.Link href="#link">Suporte</Nav.Link>
        <NavDropdown title="Shop" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">PS4</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">XBOX</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">PC</NavDropdown.Item>
          <NavDropdown.Item> <Link to='/Login'>Login</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default index