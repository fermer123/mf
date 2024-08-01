import {FC, memo} from 'react';

import LoginIcon from '@mui/icons-material/Login';

import PostAuthButton from './PostButton.styled';

export interface IPostButtonProps {
  disabled: boolean;
  onSubmit: () => void;
  label: string;
}

const PostButton: FC<IPostButtonProps> = ({disabled, onSubmit, label}) => {
  return (
    <PostAuthButton
      data-testid='postData'
      type='submit'
      onClick={onSubmit}
      disabled={disabled}
      variant='outlined'
      fullWidth
      endIcon={<LoginIcon />}>
      {label}
    </PostAuthButton>
  );
};

export default memo(PostButton);
