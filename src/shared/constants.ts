import {z} from 'zod';

export const defaultAuthValues = {
  email: '',
  password: '',
};
export const validationAuthSchema = z.object({
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
