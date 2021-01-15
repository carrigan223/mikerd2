import * as React from "react";
import styled from "@emotion/styled";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const FormContainer = styled(Container)`
  padding: 2rem;
`;

const FormInputs = styled(Form.Control)`
  background-color: white;
  border-radius: 0;
  border-width: 1px;
  border-color: darkred;
  box-shadow:  3px 3px 3px #cda0a0;
`;

const FormLabel = styled(Form.Label)`
  color: white;
  font-family: "oswald";
  text-shadow: 0 0 2px red, 0 0 2px red, 0 0 7px red, 0 0 1px red;
  font-size: 1.25rem;
`;

const FormButton = styled(Button)`
  background-color: darkred;
  border: none;
  border-radius: 0;
  box-shadow: 1px 2px 2px 2px black;
  font-family: "Racing Sans One";
  text-shadow: 5px 1px 3px black;
  font-size: 1.5rem;

  :hover {
    background-color: darkgrey;
  }
`;

const ButtonContainer = styled(Row)`
  justify-content: center;
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* You still need to add the hidden input with the form name to your JSX form */}
        <input type="hidden" name="form-name" value="contact" />

        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <FormLabel>Name</FormLabel>
            <FormInputs type="text" name="name" placeholder="Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelephone">
            <FormLabel>Telephone</FormLabel>
            <FormInputs
              type="telephone"
              name="telephone"
              placeholder="Telephone"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <FormLabel>Email</FormLabel>
          <FormInputs type="email" name="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formGridSubject">
          <FormLabel>Subject</FormLabel>
          <FormInputs type="text" name="subject" placeholder="Subject" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <FormLabel>Message</FormLabel>
            <FormInputs
              as="textarea"
              name="message"
              type="text"
              rows={4}
              placeholder="What can we help you with..."
            />
          </Form.Group>
        </Form.Row>

        <ButtonContainer>
          <FormButton variant="primary" type="submit">
            Submit
          </FormButton>
        </ButtonContainer>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
