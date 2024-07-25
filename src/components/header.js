import { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import image from "./Albina.jpg";
import { IoMdCart } from "react-icons/io";
import { Ctx } from "../context/store";

function Header() {
  const { cartProducts } = useContext(Ctx);

  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="light" expand="lg">
      <Container>
        <img
          src={image}
          alt="honey bee"
          weight="50"
          height="50"
        />

        <div className="navbar">
          <Navbar.Brand className="header-text">Stupul de miere</Navbar.Brand>
          <div className="position-relative">
            <Link to="/comanda"> <IoMdCart /></Link>
            <div className="position-absolute cart-qty">{cartProducts.length}</div>
          </div>
        </div>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end flex-grow-1 pe-5 mt-3 gap-3">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/stupina" className="nav-link">
              Stupina
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
