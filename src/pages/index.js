import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/postpreview";
import Img from "gatsby-image";

const ContactButton = styled(Link)`
  border: 3px black;
  border-radius: 0;
  box-shadow: 1px 2px 2px 2px black;
  font-family: "Racing Sans One";
  text-shadow: 2px 1px 1px grey;
  font-size: 1.5rem;
  padding: 10px;
  color: black;
  &:hover {
    background-color: blue;
    color: white;
  }
`;

const ContainerTwo = styled("div")`
  border: 2px black;
  box-shadow: 1px 8px 8px 4px #999;
  margin: 1rem;
  text-align: center;
  justify-content: center;
  border-radius: 50%;
`;

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 34% center;
  background-size: cover;
  height: 60vh;
  max-width: 100vw;
  + * {
    margin-top: 0;
  }
`;

const IndexPage = () => {
  const posts = usePosts();

  const { ase, flag, army } = useStaticQuery(graphql`
    query {
      flag: file(relativePath: { eq: "american-flag.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: true) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ase: file(relativePath: { eq: "ase.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      army: file(relativePath: { eq: "Army_logo.png" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);


  return (
    <>
      <Layout>
        <div className="d-none d-sm-block">
          <Hero />
        </div>

        <Container fluid>
          <Row>
            <Col
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <div
                css={css`
                  //margin-right: auto;
                  padding: 3rem;
                `}
              >
                <Img
                  css={css`
                    height: 285px;
                    width: 225px;
                  `}
                  fluid={ase.sharp.fluid}
                  alt="automotive service Exellence insignia"
                />
              </div>
            </Col>
            <Col
              md={6}
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <div>
                <h5
                  css={css`
                    font-size: 2rem;
                    margin-bottom: 2rem;
                  `}
                >
                  Since 1972 independent non-profit organization ASE has worked
                  to improve the quality of vehicle repair and service by
                  testing and certifying automotive professionals. By Choosing
                  McCarron Auto for your Automotive needs you can rest assured
                  your vehicles in the best hands.
                </h5>
                <div
                  css={css`
                    display: flex;
                    justify-content: center;
                  `}
                >
                  <ContactButton to="/contact" className="d-md-none">
                    Contact Us
                  </ContactButton>
                </div>
              </div>
            </Col>
          </Row>
          <Row
            css={css`
              padding-top: 2rem;
            `}
          >
            <Col
              md={6}
              css={css`
                //background-color: orange;
                //background-image: linear-gradient(to bottom, black, white);
                display: flex;
                justify-content: center;
                padding-top: 1.5rem;
              `}
            >
              <div
                css={css`
                  padding: 1rem;
                `}
              >
                <Link to="/tutorials">
                  <h1>Tutorials</h1>
                </Link>

                {posts.slice(0, 2).map((post) => (
                  <PostPreview key={post.slug} post={post} />
                ))}
              </div>
            </Col>
            <Col
              css={css`
                //background-color: blue;
              `}
            >
              <ContainerTwo>
                <ImageBackground
                  style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                  Tag="section"
                  fluid={flag.sharp.fluid}
                  fadeIn="soft"
                >
                  <div
                    css={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      padding: 2rem;
                    `}
                  >
                    {" "}
                    <Img
                      fluid={army.sharp.fluid}
                      css={css`
                        height: 30%;
                        width: 30%;
                      `}
                    />
                    <h3
                      css={css`
                        text-shadow: 0 0 2px yellow, 0 0 2px yellow,
                          0 0 7px yellow, 0 0 1px yellow;
                        padding: 1rem;
                      `}
                    >
                      Proudly Veteran Owned and Operated
                    </h3>
                  </div>
                </ImageBackground>
              </ContainerTwo>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default IndexPage;
