import styled, { css } from 'styled-components';

export const Header = styled.header`
  background-color: rebeccapurple;
  padding: 2em;
`;

export const Headline = styled.h1`
  color: #281505;
  margin: 0;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 2.15rem;
  line-height: 2.8rem;
  text-align: center;

  ${props =>
    props.white &&
    css`
      color: white;
  `};
`;
