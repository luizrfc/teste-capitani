import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {FieldError} from 'react-hook-form';

interface InputTextProps extends TextInputProps {
  defaultValue?: string;
  label?: string;
  maxLength?: number;
  placeholder?: string;
  helperText?: FieldError;
}
const InputText = ({...props}: InputTextProps) => {
  return <TextInput {...props} />;
};

export default InputText;
