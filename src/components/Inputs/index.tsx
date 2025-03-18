import React, {useState} from 'react';
import {type Control, Controller, type FieldError} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import {InputStyle} from '@src/styles/input.style';
import Animated, {FadeInDown, FadeOutDown} from 'react-native-reanimated';
import {Button, Text} from '@src/components';
import {useTheme} from '@rneui/themed';
import InputText from './InputsText';
import Icon from '../Icons';
import {colors} from '@src/styles/theme';

interface IInputController extends React.ComponentProps<typeof TextInput> {
  control: Control<any>;
  name: string;
  password?: boolean;
  placeholder?: string;
  label?: string;
  multiline?: boolean;
  numberOfLines?: number;
  _value?: string;
}

const Input = ({
  control,
  name,
  password = false,
  placeholder,
  label,
  multiline = false,
  numberOfLines = 1,
  _value,
}: IInputController) => {
  const [actived, setActived] = useState(false);
  const [showError, setShowError] = useState<FieldError>();
  const [showPassword, setShowPassword] = useState(password);
  const {theme} = useTheme();

  return (
    <View style={{flexDirection: 'column', gap: 10}}>
      {label && (
        <View>
          <Text fontSize={16} fontWeight="bold" color={theme.colors.grey2}>
            {label}
          </Text>
        </View>
      )}
      <InputStyle actived={actived} error={!showError} icon={password}>
        <View style={{width: '100%', flexDirection: 'row'}}>
          <Controller
            control={control}
            name={name}
            defaultValue={_value}
            render={({
              field: {onChange, onBlur, value},
              fieldState: {error, isTouched},
            }) => {
              if (isTouched) {
                setShowError(error);
              }

              return (
                <InputText
                  defaultValue={_value}
                  value={value}
                  onChangeText={onChange}
                  onFocus={() => setActived(true)}
                  onBlur={() => {
                    onBlur();
                    setActived(true);
                  }}
                  secureTextEntry={showPassword}
                  placeholder={placeholder}
                  placeholderTextColor={theme.colors.grey4}
                  style={{
                    color: !showError ? theme.colors.grey4 : theme.colors.error,
                    letterSpacing: 0.8,
                    fontSize: 16,
                    flex: 1,
                    ...(multiline && {
                      height: 100,
                      textAlignVertical: 'top',
                    }),
                  }}
                  multiline={multiline}
                  numberOfLines={numberOfLines}
                />
              );
            }}
          />
          {password && (
            <Button
              onPress={() => setShowPassword(!showPassword)}
              bgColor="transparent"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon
                name={showPassword ? 'eye' : 'eye-blocked'}
                color={theme.colors.grey2}
                size={24}
              />
            </Button>
          )}
        </View>
      </InputStyle>

      {showError?.message && (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutDown}
          style={{
            padding: 8,
            minHeight: 16,
            backgroundColor: colors.errorBackground,
            borderRadius: 8,
          }}>
          <Text color={theme.colors.error}>{showError?.message}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Input;
