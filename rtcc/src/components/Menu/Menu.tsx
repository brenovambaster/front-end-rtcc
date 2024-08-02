
import { Navbar, Nav } from 'react-bootstrap';

function Menu() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg p-2" >
            <Navbar.Brand href="#">RTCC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/professor">Professores</Nav.Link>
                    <Nav.Link href="/courses">Cursos</Nav.Link>
                    <Nav.Link href="/tcc">TCC</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Menu;
