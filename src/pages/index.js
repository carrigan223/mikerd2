import * as React from "react";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { Container, Row, Col } from "react-bootstrap";

const ContainerOne = styled("div")`
  background-color: purple;
  border: 2px black;
  box-shadow: 2px 8px 8px 4px #999;
  margin: 2rem;
  padding: 100px;
  text-align: center;
`;

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Container fluid>
        <Row>
          <Col>
            <ContainerOne>Hello world</ContainerOne>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
