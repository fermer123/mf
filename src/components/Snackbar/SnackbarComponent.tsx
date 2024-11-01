import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  SyntheticEvent,
  useCallback,
} from 'react';

import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';

export interface ISnackbarComponentProps {
  message: string;
  error: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SnackbarComponent: FC<ISnackbarComponentProps> = ({
  open,
  setOpen,
  message,
  error,
}) => {
  const handleClose = useCallback(
    (event: SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    },
    [setOpen],
  );

  const action = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleClose}>
      <CloseIcon fontSize='small' />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      action={action}
      onClose={handleClose}>
      <MuiAlert severity={error ? 'error' : 'success'} sx={{width: '100%'}}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default memo(SnackbarComponent);
