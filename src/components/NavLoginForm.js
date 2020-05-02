import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

class NavLoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      password: '',
      logged: props.logged
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit (event) {
    console.log(this.state.user)
    event.preventDefault()
    this.setState({ logged: true })
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  render (values) {
    if (this.state.logged) {
        // Ups.. todavía no esta programado
        window.alert("Usuario y/o contraseña incorrectos")
    }
    return (
      <Nav>
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            name='user'
            type='text'
            value={this.state.user}
            placeholder='Usuario o email'
            className=' mr-sm-2'
            onChange={this.handleInputChange}
          />
          <FormControl
            name='password'
            type='password'
            value={this.state.password}
            placeholder='Contraseña'
            className=' mr-sm-2'
            onChange={this.handleInputChange}
          />
          <Button type='submit'>Iniciar Sesión</Button>
        </Form>
      </Nav>
    )
  }
}

export default NavLoginForm
