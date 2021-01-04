import React from "react";
import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Col } from "react-bootstrap";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 34% center;
  background-size: cover;
  height: 60vh;
  max-width: 100vw;

  + * {
    margin-top: 0;
  }
`;

const ImageContainer = styled(Container)`
  padding: 0;
`;

const TextBox = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  margin-left: 1rem;
  padding-top: 3;

  h1 {
    text-shadow: 5px 1px 3px black;
    font-size: 3.55rem;
    color: white;
    margin-top: 2rem;
    text-decoration: underline;
  }

  h3 {
    color: red;
    font-family: "Oswald";
    text-shadow: 2px 2px 5px black;
  }

  p,
  a {
    color: white;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "chevy_nova.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageContainer fluid>
      <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <Col>
          <TextBox>
            <h1>McCarron Auto</h1>
            <h3>The Berskhires most trusted source for auto repairs</h3>
          </TextBox>
        </Col>
      </ImageBackground>
    </ImageContainer>
  );
};

export default Hero;
