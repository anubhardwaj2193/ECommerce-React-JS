import { Container,Navbar, Row,Col,Nav,NavDropdown, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";


const HeaderSite = ()=>{

    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="../Home/Home">Home</Nav.Link>
                <Nav.Link href="#">Store</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Cart/>
          </Container>
        </Navbar>
      );
    }
    




export default HeaderSite;
