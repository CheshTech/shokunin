import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { Colors, Responsive, Fonts } from "./styles";

export const Title = styled.h1`
  color: ${props =>
    props.white
      ? `${Colors.white}`
      : props.black
      ? `${Colors.black}`
      : css`
          ${Colors.darkBlue}
        `};
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 8.8px;
  font-family: ${Fonts.swordsmen};
  // line-height: 1.67;
  text-align: ${props => props.textAlign || "center"};
  margin: ${props => props.margin || ".5em 0"};
  ${props =>
    props.splash &&
    css`
      font-size: 48px;
      @media (max-width: 720px) {
        font-size: 28px;
        text-align: center;
      }
    `}
`;

export const SEOTitle = styled.h2`
  ${Responsive.sm`
  color: ${props =>
    props.white
      ? `${Colors.white}`
      : props.black
      ? `${Colors.black}`
      : css`
          ${Colors.red}
        `};
  font-family: ${Fonts.raleway};
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin || "0 0.5em 0"};
    text-align: center;
    font-size: 26px;
  `}
  ${Responsive.lg`
  font-size: ${props => (props.small ? "28px" : "44px")};
  text-align: ${props => props.textAlign || "left"};
  `}
`;

export const Subtitle = styled.h2`
  ${Responsive.sm`
    color: ${props =>
      props.white
        ? `${Colors.white}`
        : props.black
        ? `${Colors.black}`
        : css`
            ${Colors.red}
          `};
    font-size: 26px;
    font-family: ${Fonts.proxima};
    font-weight: ${props => props.fontweight || "600"};
    line-height: 1.4;
    margin: ${props => props.margin};
    text-align: ${props => props.textAlign || "left"};
    `}
  ${Responsive.lg`
font-size: ${props => (props.small ? "22px" : "24px")};
`}
`;

export const Text = styled.p`
  color: ${props =>
    props.white
      ? "#fff"
      : props.black
      ? css`
          ${Colors.black}
        `
      : css`
          ${Colors.red}
        `};
  font-size: ${props => (props.small ? "18px" : "22px")};
  font-family: ${Fonts.proxima};
  font-weight: ${props => props.fontweight};
  line-height: 1.67;
  width: ${props => props.width};
  text-align: ${props => props.textAlign || "left"};
  @media (max-width: 920px) {
    font-size: 16px;
  }
  @media (max-width: 720px) {
    font-size: 16px;
  }
  margin: ${props => props.margin || "0"};
`;

export const Nav = styled(Link)`
  color: ${props =>
    props.active
      ? css`
          ${Colors.lightBlue}
        `
      : props.black
      ? "#000"
      : props.darkBlue
      ? `${Colors.darkBlue}`
      : "#fff"};
  font-size: 16px;
  margin-left: ${props => (props.left ? "0" : "2.25em")};
  font-family: ${Fonts.proxima};
  text-decoration: none;
  padding: 0.25em 0;
  font-weight: bold;
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
  }
  @media (max-width: 380px) {
    font-size: 8px;
  }
  &:active {
    color: $;
  }
`;

export const IDXNav = styled.a`
  color: ${props =>
    props.active
      ? css`
          ${Colors.green}
        `
      : props.black
      ? "#000"
      : "#fff"};
  font-size: 16px;
  margin-right: ${props => (props.right ? "0" : "2.25em")};
  font-family: ${Fonts.sofiaBold};
  text-decoration: none;
  padding: 0.25em 0;
  border-bottom: 3px solid transparent;
  ${props =>
    props.home &&
    css`
      color: ${Colors.green};
    `};
  @media (max-width: 769px) {
    font-size: 12px;
    padding: ${props => (props.right ? "0" : ".25em")};
    margin-right: ${props => (props.right ? "0" : "1em")};
  }
  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  width: ${props => props.width || "207px"};
  height: 50px;
  background: ${props => props.background || `${Colors.offWhite}`};
  font-family: ${Fonts.proxima};
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 5px;
  color: ${props => props.color || `${Colors.red}`};
  box-sizing: border-box;
  text-transform: uppercase;
  margin: ${props => props.margin};
  cursor: pointer;
  transition: 250ms;
  &:hover {
    background: ${props => props.hover || `${Colors.red}`};
    color: ${Colors.white};
  }
`;

// export const Button = styled.button`
//   cursor: pointer;
//   // background: linear-gradient(
//   //   135deg,
//   //   ${Colors.darkBlue},
//   //   100%,
//   //   ${Colors.lightBlue},
//   //   0%
//   // );
//   background-image: linear-gradient(
//     135deg,
//     ${Colors.darkBlue},
//     ${Colors.lightBlue}
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: ${Colors.white};
//   border: 2px solid ${Colors.darkBlue};
//   border-image: linear-gradient(
//     135deg,
//     ${Colors.darkBlue},
//     100%,
//     ${Colors.lightBlue},
//     0%
//   );
//   border-image-slice: 1;
//   // Responsive Button hero style
//   // @include respond(phone) {
//   //   background-image: none;
//   //   border: 2px solid $primary-color;
//   //   -webkit-text-fill-color: linear-gradient(
//   //     135deg,
//   //     $primary-color 100%,
//   //     $secondary-color 0%
//   //   );
//   // }

//   &:after {
//     // background: linear-gradient(
//     //   135deg,
//     //   ${Colors.white},
//     //   100%,
//     //   ${Colors.lightBlue},
//     //   0%
//     // );
//     background-image: linear-gradient(
//       135deg,
//       ${Colors.white},
//       ${Colors.lightBlue}
//     );
//     -webkit-text-fill-color: #000;
//     // Responsive Button hero style
//     @include respond(phone) {
//       background-color: none;
//     }
//   }

//   &:hover {
//     -webkit-text-fill-color: #000;
//     text-decoration: none;
//     background-image: linear-gradient(
//       135deg,
//       ${Colors.darkBlue} 100%,
//       ${Colors.lightBlue} 0%
//     );
//     color: #000;
//     // Responsive Button hover hero style
//     // @include respond(phone) {
//     //   -webkit-text-fill-color: $white-color;
//     // }

//     &:after {
//       background-image: linear-gradient(
//         135deg,
//         ${Colors.darkBlue},
//         ${Colors.lightBlue}
//       );
//       width: 100%;
//     }
//   }
// `

export const Input = styled.input`
  height: 50px;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: ${Fonts.proxima};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border: ${props =>
    props.error ? `1px solid ${Colors.red}` : `1px solid ${Colors.blue}`};
  background-color: ${props => props.background || `${Colors.white}`};
  outline: none;
  margin: ${props => props.margin};
  padding: 0;
  padding-left: 8px;
  transition: 250ms;
  color: #393939;
  &:focus {
    border: solid 1px ${Colors.blue};
  }
  &::placeholder {
    color: ${props => props.inputcolor || `${Colors.red}`};
  }
`;

export const Select = styled.select`
  height: 34px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  border: ${props => (props.error ? "1px solid red" : "1px solid #c4c9d0")};
  background-color: #ffffff;
  outline: none;
  margin: ${props => props.margin};
  padding: 0;
  padding-left: 8px;
  transition: 250ms;
  margin-bottom: 20px;
  color: #393939;
  &:focus {
    border: solid 1px #8a919c;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 115px;
  border-radius: 5px;
  border: ${props => props.inputborder};
  // border: ${props =>
    props.error ? `1px solid ${Colors.blue}` : `1px solid ${Colors.white}`};
  background-color: ${props => props.inputbackground || `${Colors.white}`};
  font-family: ${Fonts.proxima};
  outline: none;
  padding: 10px 16px;
  margin-top: 12px;
  transition: 250ms;
  &:focus {
    border: solid 1px ${Colors.blue};
  }
  &::placeholder {
    color: ${props => props.inputcolor || `${Colors.red}`};
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: ${Fonts.proxima};
  line-height: 1;
  color: ${props => props.color || `${Colors.white}`};
  // color: ${props => (props.red ? `${Colors.red}` : `${Colors.white}`)};
  margin-bottom: ${props => props.marginbottom || "10px"};
  text-align: left;
`;

// Containers

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: ${props => props.width || 100};
  justify-content: ${props => props.justifycontent};
  align-items: ${props => props.alignitems};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: ${props => props.justifycontent};
  // align-items: ${props => props.alignitems || "center"};
  align-items: ${props => props.alignitems};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  align-content: ${props => props.aligncontent};
`;

export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  max-width: 1400px;
`;

export const Wrapper = styled.div`
  ${Responsive.sm`
width: 100%;
margin: 0 auto;
background: ${props =>
    props.black
      ? `${Colors.black}`
      : props.white
      ? `${Colors.white}`
      : props.red
      ? `${Colors.red}`
      : `none`};
padding: 50px 0;
`}
  ${Responsive.lg`
padding: 75px 0;
`}
`;
