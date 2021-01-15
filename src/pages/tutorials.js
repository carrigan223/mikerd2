import * as React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/react";

import usePosts from "../hooks/use-posts";
import PostPreview from "../components/postpreview";
import { Container, Row, Col } from "react-bootstrap";

const TutorialPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <div
              css={css`
                padding: 1rem;
              `}
            >
              <h1>Tutorials</h1>

              {posts.map((post) => (
                <PostPreview key={post.slug} post={post} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default TutorialPage;
