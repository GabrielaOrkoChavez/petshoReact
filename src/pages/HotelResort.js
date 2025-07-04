import React from 'react'
import Rotulo from '../components/Rotulo'
import { Col, Container, Row } from 'react-bootstrap'
import hs1 from '../imagens/fotos-resort/thumbnail/brincadeiras-resort.jpg'
import hs2 from '../imagens/fotos-resort/thumbnail/cascata-resort.jpg'
import hs3 from '../imagens/fotos-resort/thumbnail/creche-resort.jpg'
import hs4 from '../imagens/fotos-resort/thumbnail/equipe-resort.jpg'
import hs5 from '../imagens/fotos-resort/thumbnail/equipe2-resort.jpg'
import hs6 from '../imagens/fotos-resort/thumbnail/hotel-para-cachorros.jpg'
import hs7 from '../imagens/fotos-resort/thumbnail/niver-resort.jpg'
import hs8 from '../imagens/fotos-resort/thumbnail/parque-resort.jpg'
import hs9 from '../imagens/fotos-resort/thumbnail/parque2-resort.jpg'
import hs10 from '../imagens/fotos-resort/thumbnail/piscina-resort.jpg'
import hs11 from '../imagens/fotos-resort/thumbnail/quarto-cama-resort.jpeg'
import hs12 from '../imagens/fotos-resort/thumbnail/quarto-dubai-resort.jpg'
import hs13 from '../imagens/fotos-resort/thumbnail/quarto-resort.jpg'
import hs14 from '../imagens/fotos-resort/thumbnail/resort-cachorro.jpg'
import hs15 from '../imagens/fotos-resort/thumbnail/resort-camping.jpg'
import hs16 from '../imagens/fotos-resort/thumbnail/spa-resort.jpg'



function HotelResort() {

  const fotos = [
    {
      id: 1,
      alt:'imagem 1 do hotel Resort',
      src: `${hs1}`,
    },
    {
      id: 2,
      alt:'imagem 2 do hotel Resort',
      src: `${hs2}`,
    },
    {
      id: 3,
      alt:'imagem 3 do hotel Resort',
      src: `${hs3}`,
    },
    {
      id: 4,
      alt:'imagem 4 do hotel Resort',
      src: `${hs4}`,
    },
    {
      id: 5,
      alt:'imagem 5 do hotel Resort',
      src: `${hs5}`,
    },
    {
      id: 6,
      alt:'imagem 6 do hotel Resort',
      src: `${hs6}`,
    },
    {
      id: 7,
      alt:'imagem 7 do hotel Resort',
      src: `${hs7}`,
    },
    {
      id: 8,
      alt:'imagem 8 do hotel Resort',
      src: `${hs8}`,
    },
    {
      id: 9,
      alt:'imagem 9 do hotel Resort',
      src: `${hs9}`,
    },
    {
      id: 10,
      alt:'imagem 10 do hotel Resort',
      src: `${hs10}`,
    },
    {
      id: 11,
      alt:'imagem 11 do hotel Resort',
      src: `${hs11}`,
    },
    {
      id: 12,
      alt:'imagem 12 do hotel Resort',
      src: `${hs12}`,
    },
    {
      id: 13,
      alt:'imagem 13 do hotel Resort',
      src: `${hs13}`,
    },
    {
      id: 14,
      alt:'imagem 14 do hotel Resort',
      src: `${hs14}`,
    },
    {
      id: 15,
      alt:'imagem 15 do hotel Resort',
      src: `${hs15}`,
    },
    {
      id: 16,
      alt:'imagem 16 do hotel Resort',
      src: `${hs16}`,
    }

  ]

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <Rotulo rotulo='Hotel Resort'/>
          </Col>
        </Row>
      </Container>

      <Container className='pb-5'>
        <Row>
          <Col>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at venenatis sapien. 
              Aliquam elit odio, rutrum non risus id, faucibus convallis enim. Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Phasellus eleifend malesuada mollis. Nam sodales tellus in velit eleifend cursus. Maecenas auctor venenatis erat quis rhoncus. Sed a diam mollis, consectetur libero nec, ornare nibh.</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <h2>Conheça nosso espaço</h2>
          </Col>
        </Row>

        <Row>
          <Col className='img-hotel'>
            {
              fotos.map((foto) =>(
                <div key={ foto.id }>
                  <img src={ foto.src } alt={ foto.alt }/>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HotelResort