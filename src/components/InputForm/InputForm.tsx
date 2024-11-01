import {FC, memo} from 'react';
import {ControllerFieldState, ControllerRenderProps} from 'react-hook-form';

import InputFormContent from './InputForm.styled';

export interface IInputFormProps extends ControllerRenderProps {
  error: ControllerFieldState['error']['message'];
  touchedFields: ControllerFieldState['isTouched'];
  value: string;
  label: string;
}

const InputForm: FC<IInputFormProps> = ({
  error,
  name,
  onBlur,
  onChange,
  value,
  touchedFields,
  label,
}) => {
  return (
    <InputFormContent
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      fullWidth
      name={name}
      error={!!error && !!touchedFields}
      variant='outlined'
      helperText={!!error && !!touchedFields ? error : null}
      data-testid='textField'
    />
  );
};

export default memo(InputForm);
