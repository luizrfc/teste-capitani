import * as yup from 'yup';
import {validateEmail} from '@src/utils/validators';

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
    .test('email', 'Email inválido', (value: string) => validateEmail(value)),
  password: yup.string().required(),
});
