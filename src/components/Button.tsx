import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Text} from '@src/components';
import {colors} from '@src/styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  title?: string;
  bgColor?: string;
}

const Button = ({
  children,
  title,
  variant = 'primary',
  size = 'md',
  bgColor,
  onPress,
  disabled = false,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: disabled
          ? colors.disabled
          : bgColor || colors[variant],
        padding: size === 'sm' ? 8 : size === 'md' ? 16 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      disabled={disabled}
      activeOpacity={0.6}>
      {title ? (
        <Text
          color={disabled ? colors.grey : colors[`${variant}Dark`]}
          fontWeight="bold"
          textTransform="uppercase">
          {title}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
