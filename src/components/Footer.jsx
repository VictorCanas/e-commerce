import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-container white-text">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4}>
            <div className="d-flex justify-content-start">
              <Link
                target="_blank"
                to={"https://www.instagram.com"}
                className="text-white social-icon mr-3"
              >
                <FaFacebook />
              </Link>
              <Link
                target="_blank"
                to={"https://www.facebook.com"}
                className="text-white social-icon mr-3"
              >
                <FaInstagram />
              </Link>
              <Link
                target="_blank"
                to={"https://www.twitter.com"}
                className="text-white social-icon"
              >
                <FaTwitter />
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <p className="text-right mb-0 small">
              ©{new Date().getFullYear()} Mastermind
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
