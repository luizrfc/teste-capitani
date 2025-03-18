import {Keyboard} from 'react-native';
import {
  Control,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormSetValue,
  useForm,
} from 'react-hook-form';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCallback} from 'react';
import {useConfig} from '@src/context/config.context';

import {TodoDTO} from '@src/shared';
import {todoInitialValues, todoSchema} from '@src/helpers/schemas/todo.schema';
import {useTodo} from '@src/context/todo.context';
import {SubTaskDTO} from '@src/shared/interfaces/todo.dto';

interface IToDoHook {
  control: Control<TodoDTO>;
  data: TodoDTO | SubTaskDTO;
  resetFields: () => void;
  handleSubmit: UseFormHandleSubmit<TodoDTO>;
  onSubmit: SubmitHandler<TodoDTO>;
  onUpdate: SubmitHandler<TodoDTO>;
  isValid: boolean;
  todos: TodoDTO[];
  setValue: UseFormSetValue<TodoDTO>;
}

const useToDoHook = (): IToDoHook => {
  const isFocused = useIsFocused();
  const {handleLoading, handleModal} = useConfig();
  const {todos, loadTodos, createTodo, updateTodo} = useTodo();

  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: {isValid},
  } = useForm<TodoDTO>({
    resolver: yupResolver(todoSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: todoInitialValues,
  });

  const data = watch();

  const onSubmit = async (_data: TodoDTO) => {
    Keyboard.dismiss();
    handleLoading(true);
    setTimeout(async () => {
      try {
        await createTodo(_data);
        handleLoading(false);
        handleModal(false);
      } catch (error) {
        handleLoading(false);
      }
    }, 1000);
  };

  const onUpdate = async (_data: TodoDTO) => {
    Keyboard.dismiss();
    handleLoading(true);
    setTimeout(async () => {
      await updateTodo(_data);
      handleLoading(false);
    }, 1000);
  };

  const resetFields = () => {
    reset(todoInitialValues, {keepErrors: false, keepValues: false});
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        handleLoading(true);
        setTimeout(() => {
          loadTodos();
          handleLoading(false);
        }, 1000);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]),
  );

  return {
    control,
    handleSubmit,
    onSubmit,
    onUpdate,
    isValid,
    resetFields,
    todos,
    data,
    setValue,
  };
};

export default useToDoHook;
