import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav, Container } from "react-bootstrap"

import classes from "../styles/navbar.module.scss"
import LogoMobile from "../images/auiss-logo-2.png"
import { Logo } from "./image"

const NavbarCustom = () => (
  <Navbar
    className={classes.navbar}
    collapseOnSelect
    expand="lg"
    bg="#fff"
    variant="light"
  >
    <Container fluid="md">
      <Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Link to="/">
              <img
                className={classes.logoMobile}
                src={LogoMobile}
                alt="auiss-logo-mobile"
              />
              <div className={classes.logoDesktop}>
                <Logo />
              </div>
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className={classes.navbarCollapse}
      >
        <Nav className="ml-auto">
          <Nav.Item className={`${classes.navItem} nav-link`}>
            <Link to="/author">Author</Link>
          </Nav.Item>
          <Nav.Item className={`${classes.navItem} nav-link`}>
            <Link to="/plan">About us</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default NavbarCustom
