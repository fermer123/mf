import styled from 'styled-components';

import Button from '@mui/material/Button';

const PostAuthButton = styled(Button)(({theme}) => ({
  '&:not(.Mui-disabled)': {
    borderColor: theme.primaryColor,
    color: theme.primaryColor,
  },
  '&.Mui-disabled': {
    color: theme.primaryColor,
  },
}));
export default PostAuthButton;
