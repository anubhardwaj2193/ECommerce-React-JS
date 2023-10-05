import { Container,Navbar, Row,Col,Nav,NavDropdown, Button } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/CartContext";


const HeaderSite = ()=>{


  const authCtx = useContext(CartContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = ()=>{

  authCtx.logout();
  }

    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The Generics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            {isLoggedIn && <Link to="/store" className="nav-link">Store</Link>}
            
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
            {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
            {isLoggedIn && <button onClick={logoutHandler}><Link to="/" className="nav-link">Logout</Link></button>}
            
          </Nav>
            </Navbar.Collapse>
            <Cart/>
          </Container>
        </Navbar>
        <Outlet/>
        </div>
      );
    }
    




export default HeaderSite;
