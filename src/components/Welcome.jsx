import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rocket from "/assets/img/rocket.png";

const Welcome = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="text-center">
            <h1 className="display-4 font-weight-bold">
              Welcome to Mastermind Academy
            </h1>
            <img className="w-50 h-50" src={rocket} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
