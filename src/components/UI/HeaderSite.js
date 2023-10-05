import { Container,Navbar, Row,Col,Nav,NavDropdown, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";


const HeaderSite = ()=>{

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/store" className="nav-link">Store</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </Nav>
            </Navbar.Collapse>
            <Cart/>
          </Container>
        </Navbar>
      );
    }
    




export default HeaderSite;
