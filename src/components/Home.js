import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTag, faThumbsUp, faPlug } from '@fortawesome/free-solid-svg-icons'
import Layout from './Layout'

import 'bootstrap/dist/css/bootstrap.min.css'

const Home = (props) => (
  <Layout>
    <Row className='logo justify-content-md-center'>
      <Col xs lg='8' className='text-center'>
        <p><img src='logo.png' alt='' /></p>
      </Col>
    </Row>
    <Row className='justify-content-md-center'>
      <Col xs lg='6'>
        <Jumbotron>
          <h1>Mensajes de post venta</h1>
          <p className='lead'>
            Envía mensajes automáticos a tus clientes cada vez que te hacen una compra o su pedido ha cambiado de estado.
          </p>
          <p>
            <Button size='lg' disabled title='Próximamente...'>
              <FontAwesomeIcon icon={faPlug} />
              {' '} Conectar con MercadoLibre
            </Button>
          </p>
        </Jumbotron>
      </Col>
    </Row>
    <Row className='justify-content-md-center'>
      <Col xs lg='8'>
        <CardDeck>
          <Card>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faThumbsUp} />
                {' '} Simple
              </Card.Title>
              <Card.Text>
                  En pocos pasos configura los mensajes que queres que se envíen.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faTag} />
                {' '} Gratis
              </Card.Title>
              <Card.Text>
                  Hay un único plan y es gratuito. No hace falta tarjeta de crédito para usarlo.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faGithub} />
                {' '} Open source
              </Card.Title>
              <Card.Text>
                  Nuestro {' '}
                <a href='https://github.com/pragmore/muy.ninja' target='_blank' rel='noopener noreferrer'>
                    código
                </a>
                {' '} es open source y gratuito. Podes usarlo desde tu propio servidor.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Col>
    </Row>
  </Layout>
)

export default Home
