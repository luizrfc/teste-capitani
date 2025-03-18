import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {colors} from '@src/styles/theme';

interface ButtonStyleProps {  
  readonly variant: 'primary' | 'secondary' | 'transparent' | 'danger';
  readonly size: 'sm' | 'md' | 'lg';
  readonly disabled: boolean;
}

const ButtonStyle = styled(TouchableOpacity)<ButtonStyleProps>`
  background-color: ${props => (props.disabled ? colors.disabled : colors[props.variant])};
  padding-vertical: ${props => (props.size === 'sm' ? 8 : props.size === 'md' ? 16 : 24)};
  padding-horizontal: ${props => (props.size === 'sm' ? 16 : props.size === 'md' ? 24 : 32)};
  border-top-left-radius: 8;
  border-top-right-radius: 8;
  border-bottom-left-radius: 8;
  border-bottom-right-radius: 8;
  border-width: 2;
  border-color: ${props => (props.disabled ? colors.grey : props.variant === 'transparent' ? colors.greyLight : colors.transparent)};
  align-items: center;
  justify-content: center;
`;

export {ButtonStyle};
