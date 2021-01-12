import * as React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "../components/contactform";

const PageStyling = styled("div")`
  background: rgb(69, 66, 66);
  background: rgb(25, 24, 24);
  background: rgb(25, 24, 24);
  background: linear-gradient(
    159deg,
    rgba(25, 24, 24, 1) 0%,
    rgba(78, 25, 25, 1) 13%,
    rgba(91, 21, 21, 1) 21%,
    rgba(175, 129, 129, 1) 35%,
    rgba(254, 241, 241, 1) 54%,
    rgba(255, 255, 255, 1) 61%
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
