import styled, {css, keyframes} from 'styled-components';

import {Box} from '@mui/material';

const spinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled(Box)(
  ({theme}) => css`
    width: 75px;
    height: 75px;
    border: 10px solid ${theme.primaryColor};
    border-top: 10px solid ${theme.backGroundColor};
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.5s linear infinite;
  `,
);
