import styled from 'styled-components';

import Link from '@mui/material/Link';

const LabelNavigate = styled(Link)(({theme}) => ({
  margin: '0 auto',
  color: `${theme.primaryColor}`,
  fontSize: '0.7rem',
}));

export default LabelNavigate;
