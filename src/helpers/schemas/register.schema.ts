import * as yup from 'yup';
import {validateEmail} from '@src/utils/validators';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Nome deve ter no mínimo 3 caracteres'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Email é obrigatório')
    .test('email', 'Email inválido', (value: string) => validateEmail(value)),
  password: yup.string().required('Senha é obrigatória'),
});

export interface IRegisterSchema {
  name: string;
  email: string;
  password: string;
}

export const registerInitialValues = {
  name: '',
  email: '',
  password: '',
};
