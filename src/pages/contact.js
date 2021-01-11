import * as React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/contactform";

const PageStyling = styled("div")`
  background: rgb(69, 66, 66);
  background: linear-gradient(
    135deg,
    rgba(69, 66, 66, 1) 5%,
    rgba(131, 98, 98, 1) 20%,
    rgba(201, 148, 148, 1) 32%,
    rgba(228, 202, 202, 1) 44%,
    rgba(231, 187, 187, 1) 53%,
    rgba(231, 142, 142, 1) 67%,
    rgba(204, 84, 84, 1) 78%,
    rgba(222, 64, 64, 1) 86%,
    rgba(218, 39, 39, 1) 96%
  );
  padding-bottom: 4rem;
  padding-top: 10rem;
`;

const PageHeader = styled("h1")`
  text-shadow: 0 0 2px darkred, 0 0 2px darkred, 0 0 7px darkred,
    0 0 1px darkred;
  text-decoration: underline;
  color: white;
`;

const ContactText = styled("text")`
  font-family: "Oswald";
  font-size: 1rem;
  color: white;
  text-shadow: 0 0 2px red, 0 0 2px red, 0 0 7px red, 0 0 1px red;

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
            <CenteredCol xs={12}>
              <ContactText>
                Message us at McCarron Auto with any questions or to inquire
                about bringing your vehicle in for servicing
              </ContactText>
            </CenteredCol>
            <CenteredCol>
              <ContactText>
                You can also reach us by phone at{" "}
                <a href="tel:+14136524132">413-652-4132</a>
              </ContactText>
            </CenteredCol>
          </Row>
        </Container>
        <ContactForm />
      </PageStyling>
    </Layout>
  );
};

export default ContactPage;
