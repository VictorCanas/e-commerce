import React from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
        <div className="contact">
          <Form className="bgForm" style={{ margin: "auto", width: "50%" }}>
            <Form.Group controlId="formBasicName">
              <Form.Label className="textForm" htmlFor="name">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="textForm" htmlFor="email">
                Email
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="name@example.com"
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPhone">
              <Form.Label className="textForm" htmlFor="phone">
                Phone
              </Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                size="sm"
              />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label className="textForm" htmlFor="floatingTextarea2">
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                placeholder="Write your message here"
                size="sm"
              />
            </Form.Group>
            <div className="text-end">
              <Button variant="primary" type="button">
                Submit
              </Button>
            </div>
          </Form>
        </div>
    </>
  );
};

export default Contact;
