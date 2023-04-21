import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Authentication from "./Authentication";

function AboutUs() {
 


  return (
    <div>
      <Container className="difference">
        <Row>
          <Col>
          <br>
          </br>
          <br>
          </br>
          <h5>Welcome to Fry Me To The Moon, where we take your taste buds on a journey to the stars with our unique outer space-themed French fries!

Our company was founded by a group of food enthusiasts who wanted to create a one-of-a-kind dining experience.
 We realized that while there are plenty of French fry options out there, none of them truly captured the out of this world potato magic. 
 That's why we decided to create a menu that brings the wonder and excitement of exploring the galaxy to your plate.
At Fry Me To The Moon, we believe that good food should be fun and exciting. That's why we put so much effort into crafting the perfect space-themed fries. 
Each order comes with a side of our special space sauce, which is made from a blend of secret spices that give it a tangy, savory flavor that you won't find anywhere else.
</h5></Col>
        
          <Col>
          <br></br>
          <br></br>
          <img id="potato" src="https://potatogoodness.com/wp-content/uploads/POTFS201305_TatoIllustration_R2c.png"></img>
          </Col>
        </Row>
      </Container>
    </div>

  )

}

export default AboutUs;