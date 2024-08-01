import {FC, useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {z} from 'zod';

import InputForm from '@features/InputForm/InputForm';
import NavigateLabel from '@features/NavigateLabel/NavigateLabel';
import PostButton from '@features/PostButton/PostButton';
import {zodResolver} from '@hookform/resolvers/zod';
import useAppDispatch from '@shared/hooks/redux/useAppDispatch';
import {defaultAuthValues, validationAuthSchema} from '@src/shared/constants';
import {useRegisterMutation} from '@store/api/authApi/authApi';
import {IAuthDataResponse} from '@store/api/types/types';
import {setCredentials} from '@store/slice/authSlice';

import {Auth, ErrorAlert} from './Register.styled';

const {default: SnackbarComponent} = await import(
  '@features/Snackbar/SnackbarComponent'
);

const Register: FC = () => {
  const [register, {isError}] = useRegisterMutation();
  const [open, setOpen] = useState<boolean>(false);
  const push = useNavigate();
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: {isSubmitting, isValid},
  } = useForm({
    mode: 'onChange', // req
    defaultValues: defaultAuthValues,
    resolver: zodResolver(validationAuthSchema),
  });

  const onSubmit = useCallback(
    async (data: z.infer<typeof validationAuthSchema>): Promise<void> => {
      try {
        await register({
          email: data.email,
          password: data.password,
          id: uuidv4(),
        });
        reset();

        push('/');
      } catch (error) {
        setOpen(true);
      }
    },
    [dispatch, push, register, reset],
  );

  const switchAuthForm = useCallback(() => {
    push('/login');
  }, [push]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Auth>
        <Controller
          name='email'
          control={control}
          rules={{
            required: true,
          }}
          render={({field, fieldState}) => (
            <InputForm
              {...field}
              touchedFields={fieldState.isTouched}
              error={fieldState.error?.message}
              label='Введите email'
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          rules={{
            required: true,
          }}
          render={({field, fieldState}) => (
            <InputForm
              {...field}
              touchedFields={fieldState.isTouched}
              error={fieldState.error?.message}
              label='Введите пароль'
            />
          )}
        />
        <PostButton
          disabled={!isValid || isSubmitting}
          onSubmit={() => handleSubmit(onSubmit)}
          label='SIGN IN'
        />

        {isError && <ErrorAlert label={isError} color='error' />}
        <NavigateLabel
          label='already have an account?'
          switchAuth={switchAuthForm}
        />
      </Auth>
      <SnackbarComponent
        error
        message='Something goes wrong'
        open={open}
        setOpen={setOpen}
      />
    </form>
  );
};

export default Register;
