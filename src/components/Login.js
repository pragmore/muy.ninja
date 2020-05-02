
      <Row className='justify-content-md-center'>
        <Col xs lg='4' className='text-center'>
          <p>
            ¿Ya estas conectado? Inicia sesión
          </p>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Control type='text' placeholder='Usuario o email' />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control type='password' placeholder='Contraseña' />
            </Form.Group>
            <Row>
              <Col>
                <Button variant='secondary' type='submit'>
    Iniciar sesión
                </Button>
              </Col>
              <Col>
                <p><a href="#">Me olvidé la contraseña</a></p>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
