import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerAdestramento from '../imagens/adestramento/banner-adestramento.jpg'

function Adestramento() {
  return (
    <div>
      <Container  fluid className='px-0'>
        <Row>
          <Col className='BannerAdestramento'>
            <img src={BannerAdestramento} alt='Banner do Adestramento'/>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <p></p>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Adestramento