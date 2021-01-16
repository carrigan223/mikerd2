import * as React from "react";
import Layout from "../components/layout";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const StyledText = styled("p")`
  font-family: "Oswald";
`;

const StyledCol = styled(Col)`
  padding-top: 1.5rem;
`;

const StyledColText = styled(Col)`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledRow = styled(Row)`
  padding-top: 1.5rem;
`;

const AboutPage = () => {
  const { soldier, family } = useStaticQuery(graphql`
    query {
      soldier: file(relativePath: { eq: "soldier-pose.jpeg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      family: file(relativePath: { eq: "family.jpeg" }) {
        sharp: childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Container>
        <StyledRow>
          <StyledCol md={4}>
            <Img
              fluid={soldier.sharp.fluid}
              css={css`
                padding: 6.5rem;
                width: 100%;
                margin-right: 2rem;
                box-shadow: 1px 8px 8px 4px #999;
              `}
            />
          </StyledCol>
          <StyledColText xs={8}>
            <StyledText>
              McCarron Auto is a Berkshire county business owned and operated by
              Mike McCarron, ASE certified automotive technician. Born and
              raised in North Adams, Massachusetts to Eugene and Carol McCarron
              educators and staples of the North Adams community the same values
              carry through today. An alumni of McCann Technical High School’s
              automotive department, where following in the footsteps of his
              parents Mr. McCarron is currently an instructor. With over forty
              years of professional experience both as an instructor and
              independent owner/operator you can trust your vehicles in
              experienced hands.
            </StyledText>
            <StyledText>
              While Mr. McCarron has served the youth of Berkshire County as an
              educator he has also faithfully served his country. Sgt. McCarron
              has over twenty years of decorated service in the Army reserves
              including four tours over seas. While serving Sgt. McCarron
              automotive skills served him well in the position of Motor
              transport operator who are primarily responsible for supervising
              or operating wheel vehicles to transport personnel and cargo. You
              can rest assured knowing the safety of you and your family is in
              the hands of of the same individual who helped make sure our
              troops could do their job and get home safely.
            </StyledText>
          </StyledColText>
          <StyledCol xs={12}>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                margin-top: 1.5rem;
              `}
            >
              <StyledText>
                Whether providing for our country as a member of the millitary,
                our community through assistance to our elderly or the education
                of our youth, or his family as a devoted husband and father. You
                can be confident in knowing your choosing a reliable, honest,
                and experienced automotive technician to keep you and your
                family safe and on the road.
              </StyledText>{" "}
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                `}
              >
                <Img
                  fluid={family.sharp.fluid}
                  css={css`
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    padding: 2rem;
                    width: 60%;
                    box-shadow: 1px 8px 8px 4px #999;
                  `}
                />
              </div>
            </div>
          </StyledCol>
        </StyledRow>
      </Container>
    </Layout>
  );
};

export default AboutPage;
