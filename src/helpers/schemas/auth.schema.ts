import * as yup from 'yup';
import {validateEmail} from '@src/utils/validators';

export const authSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório')
    .test('email', 'Email inválido', (value: string) => validateEmail(value)),
  password: yup.string().required('Senha é obrigatória'),
});

export interface IAuthSchema {
  email: string;
  password: string;
}

export const authInitialValues = {
  email: '',
  password: '',
};
