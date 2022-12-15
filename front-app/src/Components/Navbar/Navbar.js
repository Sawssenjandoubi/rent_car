import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.jpg'
import {Link} from 'react-router-dom'


function NavScrollExample() {
 
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <img src={logo} alt='logo'  className="img-fluid rounded float-start" width={'20%'} height={'20%'}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            
            <Nav.Link as={Link} to="/Nos_service" >Nos services</Nav.Link>
            <Nav.Link as={Link} to="/aide">Aide</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            {/*<Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
  />*/}
            <Button 
            variant="outline-success"
            >
             <Link to="/connecter" style={{textDecoration:'none'}}> Connecter </Link>
             </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;