import * as React from "react";
import styled from "@emotion/styled";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const FormContainer = styled(Container)`
  padding: 2rem;
`;

const FormInputs = styled(Form.Control)`
  background-color: whitesmoke;
  border-radius: 0;
  border-width: 1px;
  border-color: darkred;
  box-shadow: 1px 2px 2px 2px black;
`;

const FormLabel = styled(Form.Label)`
  color: white;
  font-family: "oswald";
`;

const FormButton = styled(Button)`
  background-color: darkred;
  border: none;
  border-radius: 0;
  box-shadow: 1px 2px 2px 2px black;
  font-family: "Racing Sans One";
  text-shadow: 5px 1px 3px black;
  font-size: 1.5rem;
`;

const ButtonContainer = styled(Row)`
  justify-content: center;
`;

const ContactForm = () => {
  return (
    <FormContainer>
      <Form name="contact" method="POST" data-netlify="true">
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <FormLabel>Name</FormLabel>
            <FormInputs type="text" name="name" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridTelephone">
            <FormLabel>Telephone</FormLabel>
            <FormInputs type="telephone" placeholder="Enter Telephone Number" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridEmail">
          <FormLabel>Email</FormLabel>
          <FormInputs type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formGridSubject">
          <FormLabel>Subject</FormLabel>
          <FormInputs type="text" placeholder="Enter Subject" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <FormLabel>Message</FormLabel>
            <FormInputs
              as="textarea"
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
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
