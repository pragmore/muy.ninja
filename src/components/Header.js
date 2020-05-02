import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavLoginForm from './NavLoginForm'
import { Link } from 'react-router-dom'

const Header = (props) => {
  const logged = false
  return (
    <Navbar bg='light' expand='lg' fixed='top'>
      <Navbar.Brand className={!logged ? 'mr-auto' : ''}>
        <Link to='/'><img src='brand.png' alt='Home' title='muy.ninja' /></Link>
      </Navbar.Brand>
      <NavLoginForm logged={logged} />
    </Navbar>
  )
}
export default Header
