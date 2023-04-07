import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import Logout from "../page/Logout";
import { FiHome, FiUser } from "react-icons/fi";

function NavBar() {
  const { isLogged } = useContext(CartContext);
  return (
    <Navbar bg="secondary" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <FiHome size="2rem" /> Mastermind Academy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/catalogue"}>
              Courses
            </Nav.Link>
            <NavDropdown
              className="menu-list"
              title="Categories"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to={`/category/${"Health"}`}>
                Health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"Education"}`}>
                Education
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"Coding"}`}>
                Coding
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to={"/Contact"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="icon-container">
        {isLogged ? (
          <Logout />
        ) : (
          <Nav.Link className="logInButton" as={Link} to={"/login"}>
            <FiUser size="2rem" />
          </Nav.Link>
        )}
        <CartWidget />
      </div>
    </Navbar>
  );
}

export default NavBar;
