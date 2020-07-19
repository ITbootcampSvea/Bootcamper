import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Container, Card, Row, Col, } from 'react-bootstrap';
import Founders from '../../base/Founders.json'

export default function AboutUs() {
  return (
    <div className='wrapper'>
      <NavBar></NavBar>
      <Container className='aboutUsBody' fluid>
        <Row className='aboutUsHeader'>
          <Col className='aboutClm' xl={6}>
          <h1>About Bootcamper</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deserunt ab illum maxime iste, dolorem cumque ipsum nostrum delectus, molestiae exercitationem quibusdam.
      </p>
          </Col>
        </Row>
        <Row className='aboutPhotoWrapp'>
          {Founders.map(el => <Col xl={4} founder={el}>
            <Card className='aboutCard'>
              <Card.Body className='imgBx'>
                <Card.Img variant="top" src={el.photo} />
                <Card.ImgOverlay>
                <a
                    href={el.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="fa fa-linkedin-square aboutCardIcon"></i>
                  </a>
  </Card.ImgOverlay>
              </Card.Body>
              <Card.Footer className='details'>
                <h2>{el.name} {el.lastName}<br></br><span>{el.position}</span></h2>
              </Card.Footer>
            </Card>
          </Col>)}
        </Row>
      </Container>
    </div>
  )
}
