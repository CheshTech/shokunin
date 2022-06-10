import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Colors, Fonts, Responsive } from "../theme/styles";
import { Text } from "../theme/index";

export const StyledMenu = styled.nav`
  ${Responsive.sm`
display: flex;
flex-direction: column;
justify-content: center;
background: ${Colors.black};
height: 100vh;
text-align: left;
opacity: 0.6;
width: 100%;
padding: 1rem 2rem;
font-family: ${Fonts.proxima};
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};


 
  `}
  ${Responsive.lg`
    display: none;
  `}
`;

const StyledText = styled(Text)`
  font-size: 28px;
  text-decoration: none;
  font-family: ${Fonts.proxima};
  line-height: 2.2;
`;

export const MobileMenu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledText white>Home</StyledText>
      </Link>

      <Link to="/blog" style={{ textDecoration: "none" }}>
        {" "}
        <StyledText white>Blog</StyledText>
      </Link>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        {" "}
        <StyledText white>Contact</StyledText>
      </Link>
    </StyledMenu>
  );
};
// <Link to="/" style={{ textDecoration: "none" }}>
//   {" "}
//   <StyledText white>About</StyledText>
// </Link>
