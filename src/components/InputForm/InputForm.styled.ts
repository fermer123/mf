import styled from 'styled-components';

import {TextField} from '@mui/material';

const InputFormContent = styled(TextField)(({theme}) => ({
  '& .MuiInputLabel-outlined': {
    color: theme.primaryColor,
    borderColor: `${theme.primaryColor}`,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    color: `${theme.primaryColor}`,
    borderColor: `${theme.primaryColor}`,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.primaryColor}`, // или другой цвет по вашему выбору
  },
  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.primaryColor}`,
    borderWidth: '1px',
  },
  '& .MuiInputBase-input': {
    color: `${theme.primaryColor}`,
  },
  '& input:-webkit-autofill': {
    '-webkit-text-fill-color': `${theme.primaryColor}`, // текст при авто заполнении
    '-webkit-box-shadow': `0 0 0 100px ${theme.backGroundColor} inset`, // задний фон при автозаполнении
  },
}));
export default InputFormContent;
