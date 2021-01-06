import * as React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

const PageStyling = styled("div")`
  background-image: linear-gradient(to bottom, black, white);
  padding-bottom: 4rem;
  padding-top: 10rem;
`;

const FormContainer = styled(Container)`
  padding: 2rem;
`;

const FormInputs = styled(Form.Control)`
  background-color: whitesmoke;
  border-radius: 0;
  border-width: 1px;
  border-color: red;
  box-shadow: 1px 2px 2px 2px black;
`;

const FormLabel = styled(Form.Label)`
  color: white;
  font-family: "oswald";
`;

const FormButton = styled(Button)`
  background-color: red;
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
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <FormLabel>Name</FormLabel>
            <FormInputs type="name" placeholder="Enter Name" />
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

        <Form.Group controlId="formGridAddress2">
          <FormLabel>Address 2</FormLabel>
          <FormInputs type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <FormLabel>City</FormLabel>
            <FormInputs type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <FormLabel>Zip</FormLabel>
            <FormInputs type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
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
