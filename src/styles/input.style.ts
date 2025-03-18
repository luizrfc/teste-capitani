import {View} from 'react-native';
import styled from 'styled-components';
import {colors} from '@src/styles/theme';

interface InputProps {
  readonly actived: boolean;
  readonly error: boolean;
  readonly disabled?: boolean;
  readonly icon?: boolean;
}

const InputStyle = styled(View)<InputProps>`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding-left: 8px;
  padding-right: ${props => (props.icon ? '2px' : '8px')};
  padding-vertical: 2px;
  border-width: 1px;
  border-color: ${props => (!props.error ? colors.danger : colors.greyLight)};
  background-color: ${props =>
    props.disabled ? colors.disabled : colors.white};
  border-radius: 8px;
`;

export {InputStyle};
