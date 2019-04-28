import React from 'react'
import { Navbar, Container } from 'react-bootstrap/Navbar'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header className={headerStyles}>
  <Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar href="#">Navbar</Navbar>
  </Navbar>
</Container>
            </header>
    )
}

export default Header