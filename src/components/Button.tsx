import {Icon, Text} from '@src/components';
import {ButtonStyle} from '@src/styles/button.style';
import {colors} from '@src/styles/theme';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'transparent' | 'danger';
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
  icon,
}: ButtonProps) => {
  return (
    <ButtonStyle
      variant={variant}
      size={size}
      disabled={disabled}
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
      activeOpacity={0.6}>
      {icon && <Icon name={icon} size={24} color={colors.white} />}
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
    </ButtonStyle>
  );
};

export default Button;
