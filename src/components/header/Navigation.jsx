import React from "react"
import {Container, Navbar, Nav } from "react-bootstrap"
import '../../assets/css/Main.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/images/logo.PNG'


const Navigation = () => {
    return(
        <div>
            <Navbar bg="black" expand="lg">
                <Container>
                    <Navbar.Brand> <Link to="/"> <img src={Logo}/> </Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > <Link to='/menu' className="mainMenu"> Menu </Link> </Nav.Link>
                            <Nav.Link > <Link to='/about' className="mainMenu"> About </Link> </Nav.Link>
                            <Nav.Link > <Link to='/contact' className="mainMenu"> Contact </Link> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}

export default Navigation;