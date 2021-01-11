import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";

const StyledFooter = styled("footer")`
  /* background: rgb(69, 66, 66);
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
  ); */
  color: black;
  padding: 1.75rem;
`;

const FooterCol = styled(Col)`
  display: flex;
  justify-content: center;
  font-family: "Oswald";
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <FooterCol md={4}>
          <text>
            <h5
              css={css`
                margin-bottom: 0;
              `}
            >
              McCarron Auto
            </h5>
            <br />
            Hello world
          </text>
        </FooterCol>
        <FooterCol md={4}>
          <text>Awesome text</text>
        </FooterCol>
        <FooterCol md={4}>
          <div
            css={css`
              padding-top: 1rem;
              font-size: 0.75rem;
            `}
          >
            <text
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              SITE BY CARRIGAN WEB DESIGN
            </text>
            <text>COPYRIGHT ANDREW CARRIGAN 2020©</text>
          </div>
        </FooterCol>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
