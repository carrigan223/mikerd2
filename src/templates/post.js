import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { css } from "@emotion/react";
import Layout from "../components/layout";
import { Container, Row, Col } from "react-bootstrap";

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <Container fluid>
      <Row>
        <Col md={{ offset: 2, span: 8 }}>
          <h1>{post.frontmatter.title}</h1>
          <p
            css={css`
              font-size: 0.75rem;
            `}
          >
            Posted by {post.frontmatter.author}
          </p>
        </Col>
        <Col md={{ offset: 2, span: 8 }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default PostTemplate;
