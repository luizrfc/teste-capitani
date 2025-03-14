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
import {
  registerSchema,
  IRegisterSchema,
  registerInitialValues,
} from '@src/helpers/schemas/register.schema';
import {useConfig} from '@src/context/config.context';
import {useAuth} from '@src/context/auth.context';
import {navigateTo} from '@src/hooks/useLinks';

interface IRegisterHook {
  control: Control<IRegisterSchema>;
  reset: () => void;
  handleSubmit: UseFormHandleSubmit<IRegisterSchema>;
  onSubmit: SubmitHandler<IRegisterSchema>;
  isValid: boolean;
}

const useRegisterHook = (): IRegisterHook => {
  const {handleLoading} = useConfig();
  const {createUser} = useAuth();

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

  const onSubmit = async (data: IRegisterSchema) => {
    handleLoading(true);
    Keyboard.dismiss();
    const user = await createUser({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    if (user) {
      setTimeout(async () => {
        navigateTo('Home');
        handleLoading(false);
      }, 1000);
    } else {
      handleLoading(false);
    }
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
