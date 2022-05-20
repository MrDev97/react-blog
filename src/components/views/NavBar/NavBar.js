import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg' className='my-4'>
      <Container>
        <Navbar.Brand href='/'>Blog.app</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className='justify-content-end text-center'
        >
          <Nav>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to='/about'>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
