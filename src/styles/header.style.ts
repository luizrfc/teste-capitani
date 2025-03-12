import styled from 'styled-components';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from '@rneui/base';

const HeaderGradient = styled(LinearGradient)`
  justify-content: flex-end;
  align-items: center;
  align-content: flex-end;
  height: 250;
`;

const LogoImage = styled(Image)`
  width: 250;
  height: 55;
`;

const LanguageContainer = styled(View)`
  margin-top: 36;
  margin-bottom: 36;
  flex-direction: row;
  align-items: center;
  gap: 12;
`;

const LanguageImage = styled(Image)`
  width: 36;
  height: 24;
`;

const Separator = styled(View)`
  flex: 1;
  flex-direction: row;
`;

interface SeparatorItemProps {
  color: string;
}

const SeparatorItem = styled(View)<SeparatorItemProps>`
  flex: 1;
  height: 12;
  background-color: ${props => props.color};
`;

export {
  HeaderGradient,
  LogoImage,
  LanguageContainer,
  LanguageImage,
  Separator,
  SeparatorItem,
};
