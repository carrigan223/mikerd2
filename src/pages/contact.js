import * as React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/contactform";

const PageStyling = styled("div")`
  background-image: linear-gradient(to bottom, black, white);
  padding-bottom: 4rem;
  padding-top: 10rem;
`;

const PageHeader = styled("h1")`
  text-shadow: 0 0 2px darkred, 0 0 2px darkred, 0 0 7px darkred, 0 0 1px darkred;
  text-decoration: underline;
`;

const ContactText = styled("text")`
  font-family: "Oswald";
  font-size: 1rem;
  color: white;
`;

const CenteredCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const ContactPage = () => {
  return (
    <Layout>
      <PageStyling>
        <Container>
          <Row>
            <CenteredCol xs={12}>
              <PageHeader>Contact Us at McCarron Auto</PageHeader>
            </CenteredCol>
            <CenteredCol>
              <ContactText>Lorem Ipsum dolor sit</ContactText>
            </CenteredCol>
          </Row>
        </Container>
        <ContactForm />
      </PageStyling>
    </Layout>
  );
};

export default ContactPage;
