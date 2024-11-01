import {FC, useCallback, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {z} from 'zod';

import InputForm from '@components/InputForm/InputForm';
import NavigateLabel from '@components/NavigateLabel/NavigateLabel';
import PostButton from '@components/PostButton/PostButton';
import SnackbarComponent from '@components/Snackbar/SnackbarComponent';
import {zodResolver} from '@hookform/resolvers/zod';
import {useLoginMutation} from '@store/api/authApi/authApi';

import {Auth, ErrorAlert} from './Login.styled';

export const schema = z.object({
  password: z
    .string()
    .min(3, {message: 'Слишком короткий пароль'})
    .max(20, {message: 'Слишком длинный пароль'})
    .nonempty('Поле не должно быть пустым'),
  email: z
    .string()
    .email('Неверный email')
    .nonempty('Поле не должно быть пустым'),
});

const Login: FC = () => {
  const push = useNavigate();
  const [login, {isError, error: isErrorResponse}] = useLoginMutation();
  const [open, setOpen] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: {isSubmitting, isValid},
  } = useForm({
    mode: 'onChange',
    defaultValues: {email: '', password: ''},
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback(
    async (data: z.infer<typeof schema>): Promise<void> => {
      try {
        await login({
          email: data.email,
          password: data.password,
          id: uuidv4(),
        });
        reset();
        push('/');
      } catch (error: unknown) {
        setOpen(true);
      }
    },
    [login, push, reset],
  );

  const switchAuthForm = useCallback(() => {
    push('/register');
  }, [push]);

  return (
    <>
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
            label='LOG IN'
          />
          {isError && 'data' in isErrorResponse && (
            <ErrorAlert label={isErrorResponse.data as string} color='error' />
          )}
          <NavigateLabel
            label='don`t have an account?'
            switchAuth={switchAuthForm}
          />
        </Auth>
      </form>
      <SnackbarComponent
        error
        message='Something goes wrong'
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Login;
