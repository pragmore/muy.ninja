import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = (props) => (
  <Row className='footer text-center text-muted'>
    <Col>
      <p>
        Hecho por {' '}
        <a href='https://pragmore.com' target='_blank' rel='noopener noreferrer'>
          Pragmore
        </a>
        {' '} | {' '}
        <FontAwesomeIcon icon={faTwitter} />
        {' '} Seguinos en {' '}
        <a href='https://twitter.com/ninja_muy' target='_blank' rel='noopener noreferrer'>
          @ninja_muy
        </a>
      </p>
    </Col>
  </Row>
)
export default Footer
