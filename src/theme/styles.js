import { css } from "styled-components";

export const Colors = {
  lightBlue: "#4ca1af",
  red: "#9f4048",
  blue: "#133662",
  boxRed: "#FF0000CC",
  white: "#ffffff",
  offWhite: "#fcfcfc",
  black: "#000000",
  gray: "#f2f2f2"
};

export const Fonts = {
  raleway: `Allerta Stencil, sans-serif`,
  // montserrat: 'Playfair Display, serif',
  montserrat: `Montserrat, sans-serif`,
  // swordsmen: `Seven Swordsmen BB, sans-serif`,
  swordsmen: `Reggae One, cursive`,
  proxima: `Proxima Nova, sans-serif`
};

export const Responsive = {
  sm: (...args) => css`
    @media (min-width: 320px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (min-width: 767px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)};
    }
  `,
  xlg: (...args) => css`
    @media (min-width: 1400px) {
      ${css(...args)};
    }
  `
};
