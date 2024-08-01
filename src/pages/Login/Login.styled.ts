import styled from 'styled-components';

import {Box, Chip} from '@mui/material';

export const Auth = styled(Box)`
  height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  gap: 1rem;
  padding: 0 10px;
`;
export const ErrorAlert = styled(Chip)`
  margin: 0 auto;
  max-width: fit-content;
`;
