import styled, {createGlobalStyle} from 'styled-components';

import {Box} from '@mui/material';

const GlobalStyle = createGlobalStyle`

body{
  font-style: normal;
  font-size: 16px;
  color: ${({theme}) => theme.primaryColor};
  background-color: ${({theme}) => theme.backGroundColor};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
   font-weight: 400;
   line-height:1;
 }
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
li,
ul,
ol {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  outline: none;
  border: none;
  &::first-letter {
    text-transform: uppercase;
  }
}
input,
button,
textarea,
select {
  font: inherit;
}
img {
  max-width: 100%;
  display: block;
}
::-webkit-scrollbar {
  width: 0;
}
`;
export const ContentContainer = styled(Box)`
  margin-top: 3rem; /* Высота хедера */
`;

export default GlobalStyle;
