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
import {useAuth} from '@src/context/auth.context';
import {useConfig} from '@src/context/config.context';

import {navigateTo} from '@src/hooks/useLinks';

interface IAuthHook {
  control: Control<IAuthSchema>;
  reset: () => void;
  handleSubmit: UseFormHandleSubmit<IAuthSchema>;
  onSubmit: SubmitHandler<IAuthSchema>;
  isValid: boolean;
}

const useAuthHook = (): IAuthHook => {
  const {signIn} = useAuth();
  const {handleLoading} = useConfig();

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

  const onSubmit = async (data: IAuthSchema) => {
    handleLoading(true);
    Keyboard.dismiss();
    const response = await signIn(data.email, data.password);
    if (response) {
      setTimeout(() => {
        handleLoading(false);
        navigateTo('Home');
      }, 1000);
    } else {
      handleLoading(false);
    }
  };

  const resetFields = () => {
    reset(authInitialValues, {keepErrors: false, keepValues: false});
  };

  useFocusEffect(
    useCallback(() => {
      if (isFocused) {
        resetFields();
      }
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
