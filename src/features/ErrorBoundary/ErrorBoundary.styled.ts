import styled from 'styled-components';

import {Box} from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transform: translate(-50%, -50%);
  max-width: 500px;
  text-align: center;
`;
