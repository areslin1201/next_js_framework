import Link from "next/link";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav
} from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="md" className="mb-3">
      <Container>
        <Navbar.Brand>logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarControl" />
        <Navbar.Offcanvas
          id="navbarControl"
          aria-labelledby="navbarControl"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="navbarControl">
              title
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/">
                <Nav.Link as="span">Home</Nav.Link>
              </Link>
              <Link href="/page">
                <Nav.Link as="span">page</Nav.Link>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}