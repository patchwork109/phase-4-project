import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function OrderSuccess() {

    const orderProgress = () => {
        const now = 20;
            return <ProgressBar now={now} label={`${now}%`} visuallyHidden />;
    }

    return (
        <div className="orderSuccess">
            <Container>
                <Row>
                    <Col><br/>{orderProgress()}</Col>
                </Row>
                <Row>
                    <Col><br/><h1>Launch Sequence Initiated!</h1></Col>
                </Row>
                <Row>
                    <Col><p>Your order will be ready for lift off in T-minus 10 minutes.</p></Col>
                </Row>
                {/* <Image src="https://media.tenor.com/Enn7lYXb5FoAAAAi/rocket-spaceship.gif" /> */}
                <Image src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBhODFiNjFhOGY3YjFjYzY4OTQ3ZTA0YzQ1MDg1MzEzYjI3MzNhZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/3FmlLcn3j1DnqW10Ox/giphy.gif" />
            </Container>
        </div>
  )

}

export default OrderSuccess;