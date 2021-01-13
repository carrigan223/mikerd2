import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { Row, Col } from "react-bootstrap";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";

const StyledFooter = styled("footer")`
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

const FooterTitle = styled("text")`
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  font-family: "Racing Sans One";
`;

const CreatorContainer = styled("div")`
  padding-top: 1rem;
  font-size: 0.75rem;
`;

const CreatorText = styled("text")`
  display: flex;
  justify-content: center;
`;

const ContactLinks = styled("a")`
  :hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Row>
        <FooterCol md={4}>
          <div>
            <FooterTitle>McCarron Auto</FooterTitle>
            <StyledLinks>
              <FooterNav to="/"> Home</FooterNav> |
              <FooterNav to="/about"> About</FooterNav> |
              <FooterNav to="#"> Tutorials</FooterNav> |
              <FooterNav to="/contact"> Contact</FooterNav>
            </StyledLinks>
          </div>
        </FooterCol>
        <FooterCol md={4}>
          <ContactLinks href="mailto: mccarronauto@yahoo.com">
            <StyledHiOutlineMail />
          </ContactLinks>
          |
          <ContactLinks href="tel:+14136524132">
            <StyledOutlinePhone />
          </ContactLinks>
        </FooterCol>
        <FooterCol md={4}>
          <CreatorContainer>
            <CreatorText>SITE BY CARRIGAN WEB DESIGN</CreatorText>
            <CreatorText>ANDREW CARRIGAN 2020©</CreatorText>
          </CreatorContainer>
        </FooterCol>
      </Row>
    </StyledFooter>
  );
};

export default Footer;
