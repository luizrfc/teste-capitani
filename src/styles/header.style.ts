import { Image } from '@rneui/base';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

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

interface UserContainerProps {
  hasUser: boolean;
}

const HeaderContainer = styled(View)<UserContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 36;
  margin-bottom: 36;
  padding-horizontal: 24;
  flex-direction: row;
  align-items: center;
  gap: 12;
`;

const UserContainer = styled(View)`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12;
`;

const LanguageContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12;
`;

interface LanguageImageProps {
  selected: boolean;
}

const BtnLanguage = styled(TouchableOpacity)<LanguageImageProps>`
  border-width: 4;
  padding-left: 2;
  padding-right: 2;
  padding-top: 2;
  padding-bottom: 2;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
  border-bottom-left-radius: 8;
  border-bottom-right-radius: 8;
  border-color: ${props => (props.selected ? '#FFF' : 'transparent')};
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
  BtnLanguage,
  Separator,
  SeparatorItem,
  HeaderContainer,
  UserContainer,
};
