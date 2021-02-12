import React from 'react';

import { Link } from "react-router-dom";
import image from "../../Images/images";
import { Navbar, NavDropdown, Form, Button, Nav, FormControl } from "react-bootstrap";
import "../../Styles/components/Header.scss";
const Header = () => {
    return (
        <div>
            <Navbar variant="dark" className="navbar" bg="dark" expand="lg">
                <Link to="/" className="navbar-brand">
                    <img src={image.Logo} alt="logo" height="80px" />
                    <span style={{ fontFamily: "Dancing Script", marginLeft: "10px" }}>Good-D-Vine</span>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <Link to="/news" className="nav-link">
                            News
                        </Link>
                        
                        <NavDropdown title="Wines" id="basic-nav-dropdown">
                            <Link
                                to="/shop/red"
                                className="dropdown-item"                            >
                                Red Wines
                            </Link>
                            <Link
                                to="/shop/white"
                                className="dropdown-item"
                            >
                                White Wines
                            </Link>
                            <Link
                                to="/shop/rose"
                                className="dropdown-item"
                            >
                                Rose Wines
                            </Link>
                            <Link
                                to="/shop/sparkling"
                                className="dropdown-item"
                            >
                                 Sparkling wines 
                            </Link>
                            <Link
                                to="/shop/other"
                                className="dropdown-item"
                            >
                             Other 
                            </Link>
                        </NavDropdown>
                        <Link to="/cart" className="nav-link">
                            Cart
                        </Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;