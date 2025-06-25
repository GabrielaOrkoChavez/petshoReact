import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function ContentImgLeft({imagem, textoimagem, texto}) {
    return (
      <Container>
        <Row>
            <Col lg='6' md='6' sm='12'>
                <img src={ imagem } alt={ textoimagem }/>
            </Col>

            <Col>
                <p>{texto}</p>
            </Col>
        </Row>
      </Container>
    )
  }
  
  export default ContentImgLeft