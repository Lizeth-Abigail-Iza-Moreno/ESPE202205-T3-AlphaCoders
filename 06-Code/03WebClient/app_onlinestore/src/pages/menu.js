import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import Login from '../pages/login';

const Menu = () => {
    return (
        <>
            <Navbar className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/" >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/users">Users</Nav.Link>
                            <Nav.Link as={Link} to="/journal">Journal</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}
export default Menu;