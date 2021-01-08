import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import Hero from "../components/hero";
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import usePosts from "../hooks/use-posts";
import PostPreview from "../components/postpreview";

// const ContainerOne = styled("div")`
//   background-color: white;
//   border: 2px black;
//   box-shadow: 2px 8px 8px 4px #999;
//   margin: 2rem;
//   padding: 100px;
//   text-align: center;
//   //border-radius: 3%;
// `;

const ContainerTwo = styled("div")`
  //background-color: white;
  //display: flex;
  border: 2px black;
  box-shadow: 1px 8px 8px 4px #999;
  margin: 1rem;
  text-align: center;
  justify-content: center;
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

  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "american-flag.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 100, grayscale: false) {
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
              xs={6}
              css={css`
                //background-color: black;
                //background-image: linear-gradient(to bottom, black, white);
                display: flex;
                justify-content: center;
                padding-top: 1.5rem;
              `}
            >
              <div
                css={css`
                  padding: 2rem;
                  margin-left: auto;
                `}
              >
                <h2>Tutorials</h2>

                {posts.map((post) => (
                  <PostPreview key={post.slug} post={post} />
                ))}
              </div>
            </Col>
            <Col>
              <ContainerTwo>
                <ImageBackground
                  Tag="section"
                  fluid={image.sharp.fluid}
                  fadeIn="soft"
                >
                  <h1
                    css={css`
                      color: white;
                      text-shadow: 2px 2px 5px blue;
                    `}
                  >
                    Hello world
                  </h1>
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
