import React, { useState, useEffect, Fragment } from "react";
import styled, { css } from "styled-components";
import NavLogo from "../images/shokuninsymbolXD.png";
import { Link } from "gatsby";
import { Row, Button } from "../theme/index";
import { Colors, Responsive, Fonts } from "../theme/styles";
import { MobileMenu } from "./mobilemenu";
import { Burger } from "./hamburgermenu";

const Wrapper = styled.div`
  ${Responsive.sm`
  background: ${props => props.background};
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100000;
  transition: 250ms;
  `}
  ${Responsive.lg`
  background: ${props => props.background};
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100000;
  padding: 0;
  transition: 250ms;
  `}
`;

const MobileWrapper = styled(Wrapper)`
  ${Responsive.sm`
display: flex;
height: 60px;
padding: 40px 0;
`}
  ${Responsive.lg`
display: none;
`}
`;

const Logo = styled.img`
  width: 75px;
  margin-bottom: 0px;
  border-radius: 50%;
  @media (max-width: 720px) {
    width: 50px;
  }
`;

const StyledRow = styled(Row)`
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  // @media (max-width: 767px) {
  //   flex-direction: column;
  //   align-items: center;
  // }
`;

const NavRow = styled(Row)`
  ${Responsive.sm`
  margin-bottom: 10px;
  width: 100%;
  align-items: center;
  `}
  ${Responsive.md`
    width: auto;
    margin-bottom: 0;
  `}
`;

const StyledButton = styled(Button)`
  ${Responsive.sm`
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 0 0 0 1em;
    border-radius: 5px;
    color: ${Colors.red};
    &:hover {
      background: ${Colors.red};
      color: ${Colors.white};
    }
  `}
  ${Responsive.md`
  width: 180px;
  height: 100%;
  `}
  ${Responsive.lg`
  margin: 0 0 0 4em;
`}
`;

const NavLink = styled(Link)`
  color: ${Colors.white};
  font-size: 16px;
  margin-left: ${props => (props.left ? "0" : "4em")};
  font-family: ${Fonts.montserrat};
  text-decoration: none;
  padding: 0.25em 0;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  ${props =>
    props.home &&
    css`
      color: ${Colors.green};
    `};
  @media (max-width: 769px) {
    font-size: 12px;
    padding: ${props => (props.left ? "0" : ".25em")};
    margin-left: ${props => (props.left ? "0" : "1em")};
  }
  @media (max-width: 450px) {
    font-size: 10px;
    margin-left: ${props => (props.left ? "0" : "7px")};
  }
  @media (max-width: 380px) {
    font-size: 10px;
  }
  &:active {
    color: $;
  }
`;

export const Navigation = () => {
  const [color, setNavColor] = useState("rgba(0,0,0,0)");
  const [open, setOpen] = useState(false);

  const listenScrollEvent = e => {
    if (window.scrollY > 75) {
      setNavColor(`${Colors.red}`);
    } else {
      setNavColor("rgba(0,0,0,0)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Fragment>
      <Wrapper background={color}>
        <StyledRow>
          <Row alignitems="center">
            <Link to="/">
              <Logo
                src={NavLogo}
                alt="CheshTech Digital Agency: Digital Marketing and Websites for Latino Entrepreneurs"
              />
            </Link>
          </Row>
          <NavRow>
            <NavLink to="/">Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <StyledButton>Get in Contact</StyledButton>
          </NavRow>
        </StyledRow>
      </Wrapper>
      <MobileWrapper background={color}>
        <StyledRow>
          <Row alignitems="center">
            <Link to="/">
              <Logo
                src={NavLogo}
                alt="CheshTech Digital Agency: Digital Marketing and Websites for Latino Entrepreneurs"
              />
            </Link>
          </Row>
          <Burger open={open} setOpen={setOpen} />
          <MobileMenu open={open} setOpen={setOpen} />
        </StyledRow>
      </MobileWrapper>
    </Fragment>
  );
};
