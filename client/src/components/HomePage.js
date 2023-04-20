import React from "react";
import HomePageCarousel from "./Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiFrenchFries } from 'react-icons/gi';
import { GrMapLocation } from 'react-icons/gr';
import { TbHeartHandshake } from 'react-icons/tb';

function HomePage() {
 

  return (
    <div>
      <HomePageCarousel />
      <Container className="difference">
        <Row>
          <Col>
          <br />
          <h2>The FRIES Difference</h2></Col>
        </Row>
        <Row>
          <Col className="homePageLocallySourced">
            <GrMapLocation className="homePageIcon"/>
            <br/>
            Locally Sourced
          </Col>
          <Col className="homePageHandCrafted">
            <TbHeartHandshake className="homePageIcon"/>
            <br/>
            Hand-Crafted
          </Col>
          <Col className="homePageGuaranteedFresh"> 
            <GiFrenchFries className="homePageIcon"/>
            <br/>
            Guaranteed Fresh
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default HomePage;