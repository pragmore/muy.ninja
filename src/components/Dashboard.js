import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTag, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import Layout from './Layout'

import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = (props) => (
  <Layout>
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

export default Dashboard
