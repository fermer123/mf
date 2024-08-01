import styled from 'styled-components';

import {Box, Typography} from '@mui/material';

export const HomeContainer = styled(Box)`
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const EndGameLabel = styled(Typography)`
  margin: 0 auto;
  font-size: 2rem;
`;
