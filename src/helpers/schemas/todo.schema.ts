import { TodoDTO } from '@src/shared';
import * as yup from 'yup';

export const todoSchema = yup.object().shape({
  title: yup.string().required('Título é obrigatório'),
  completed: yup.boolean().required('Status é obrigatório'),
});

export const todoInitialValues: TodoDTO = {
  title: '',
  description: '',
  completed: false,
};

export const todoSearchSchema = yup.object().shape({
  search: yup.string().min(3, 'Mínimo 3 caracteres'),
});

export const todoSearchInitialValues = {
  search: '',
};

export const todoListSchema = yup.array().of(todoSchema);

export const todoListInitialValues: TodoDTO[] = [];
