import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import image from "./Albina.jpg";

function Header() {
  return (
    <Navbar className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <img
          src={image}
          alt="Image"
          weight="60"
          height="60
        "
        />
        <div className="navbar">
          <Navbar.Brand>Stupul de miere</Navbar.Brand>
        </div>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end flex-grow-1 pe-5 mt-3 gap-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#stupina">Stupina</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
