import styled from 'styled-components';
import {View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from '@rneui/base';

const HeaderGradient = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  align-content: center;
  height: ${Dimensions.get('window').height - 12};
`;

const LogoImage = styled(Image)`
  width: 250;
  height: 55;
`;

const Separator = styled(View)`
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

export {HeaderGradient, LogoImage, Separator, SeparatorItem};
