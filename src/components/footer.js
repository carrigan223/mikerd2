import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";

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
  align-items: center;
  font-family: "Oswald";
  font-size: 0.85rem;
  border-top: 3px solid #ddd;
  padding-top: 1rem;
`;

const StyledLinks = styled("p")``;

const FooterNav = styled(Link)`
  font-family: "Oswald";
`;

const StyledHiOutlineMail = styled(HiOutlineMail)`
  font-size: 1rem;
  margin: 0.5rem;
`;

const StyledOutlinePhone = styled(HiOutlinePhone)`
  font-size: 1rem;
  margin: 0.5rem;
`;



const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <FooterCol md={4}>
          <div>
            <text
              css={css`
                margin-bottom: 0;
                display: flex;
                justify-content: center;
                font-family: "Racing Sans One";
              `}
            >
              McCarron Auto
            </text>
            <StyledLinks>
              <FooterNav to="/"> Home</FooterNav> |
              <FooterNav to="/about"> About</FooterNav> |
              <FooterNav to="#"> Tutorials</FooterNav> |
              <FooterNav to="/contact"> Contact</FooterNav>
            </StyledLinks>
          </div>
        </FooterCol>
        <FooterCol md={4}>
          <StyledHiOutlineMail /> |
          <StyledOutlinePhone />
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
            <text
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              ANDREW CARRIGAN 2020©
            </text>
          </div>
        </FooterCol>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
