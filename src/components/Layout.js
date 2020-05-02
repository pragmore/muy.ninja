import React from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
  <Container fluid='true'>
    <Header />
    {props.children}
    <Footer />
  </Container>
)

export default Layout
