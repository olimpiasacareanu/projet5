import React from 'react';
import {NavLink, Outlet} from "react-router-dom"
import Footer from '../../containers/Footer/Footer';


const NavBar = (props) => (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Projet API des établissements publics</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projet">A propos du projet</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/recherche-etablissment-public">Etablissements publics</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            <form className="d-flex">
                <input className="form-control me-sm-2" type="search" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    {/* <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand >Projet API des établissements publics</Navbar.Brand>
      </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/recherche-etablissment-public">
                <Nav.Link>Recherche établissments publics</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <Outlet />
    <Footer />
    </>
)

export default NavBar