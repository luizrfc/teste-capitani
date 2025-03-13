
import {Keyboard} from 'react-native';
import {
  Control,
  SubmitHandler,
  UseFormHandleSubmit,
  useForm,
} from 'react-hook-form';
import {useIsFocused, useFocusEffect} from '@react-navigation/native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useCallback} from 'react';
import { registerSchema, IRegisterSchema, registerInitialValues } from '@src/helpers/schemas/register.schema';

interface IRegisterHook {
  control: Control<IRegisterSchema>;
  reset: () => void;
  handleSubmit: UseFormHandleSubmit<IRegisterSchema>;
  onSubmit: SubmitHandler<IRegisterSchema>;
  isValid: boolean;
}

const useRegisterHook = (): IRegisterHook => {
  const isFocused = useIsFocused();
  const {
    control,
    reset,
    handleSubmit,
    formState: {isValid},
  } = useForm<IRegisterSchema>({
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: registerInitialValues,
  });

  const onSubmit = (data: IRegisterSchema) => {
    Keyboard.dismiss();
    console.log('🚀 ~ useRegisterHook ~ data:', data);
  };

  const resetFields = () => {
    reset(registerInitialValues, {keepErrors: false, keepValues: false});
  };

  const hasSavedAuth = () => {
    console.log('hasSavedAuth');
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        resetFields();
      }
      hasSavedAuth();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFocused]),
  );

  return {
    control,
    reset,
    handleSubmit,
    onSubmit,
    isValid,
  };
};

export default useRegisterHook;
