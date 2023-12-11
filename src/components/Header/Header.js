import React from 'react'
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './header.css'

const Header = () => {
  return (
    <header>
        <Navbar className='nav-bg' variant='dark'>
            <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            Fc Marcket
                        </Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <LinkContainer to="/user">
                            <NavLink>
                                <i className='fa fa-user'></i>
                            </NavLink>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <NavLink>
                                <i className='fa fa-shopping-cart'></i>
                            </NavLink>
                        </LinkContainer>
                    </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header