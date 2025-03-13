import {
  authInitialValues,
  authSchema,
  IAuthSchema,
} from '@src/helpers/schemas/auth.schema';
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

interface IAuthHook {
  control: Control<IAuthSchema>;
  reset: () => void;
  handleSubmit: UseFormHandleSubmit<IAuthSchema>;
  onSubmit: SubmitHandler<IAuthSchema>;
  isValid: boolean;
}

const useAuthHook = (): IAuthHook => {
  const isFocused = useIsFocused();
  const {
    control,
    reset,
    handleSubmit,
    formState: {isValid},
  } = useForm<IAuthSchema>({
    resolver: yupResolver(authSchema),
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: authInitialValues,
  });

  const onSubmit = (data: IAuthSchema) => {
    Keyboard.dismiss();
    console.log('🚀 ~ useAuthHook ~ data:', data);
  };

  const resetFields = () => {
    reset(authInitialValues, {keepErrors: false, keepValues: false});
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

export default useAuthHook;
