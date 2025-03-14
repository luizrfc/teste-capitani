import React from 'react';
import {Image} from '@rneui/base';
import {View} from 'react-native';

import {
  HeaderGradient,
  LanguageContainer,
  BtnLanguage,
  LogoImage,
  Separator,
  SeparatorItem,
} from '@src/styles/header.style';
import useLanguage from '@src/hooks/useLanguage';

export default function Header() {
  const {handleChangeLanguage, language} = useLanguage();

  return (
    <View>
      <HeaderGradient
        colors={['#DE473C', '#FDD042']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <LogoImage source={require('@src/assets/logo.png')} />

        <LanguageContainer>
          <BtnLanguage
            onPress={() => handleChangeLanguage('ptBR')}
            selected={language === 'ptBR'}>
            <Image
              source={require('@src/assets/br-flag.png')}
              style={{width: 36, height: 24}}
            />
          </BtnLanguage>
          <BtnLanguage
            onPress={() => handleChangeLanguage('enUS')}
            selected={language === 'enUS'}>
            <Image
              source={require('@src/assets/eng-flag.png')}
              style={{width: 36, height: 24}}
            />
          </BtnLanguage>
        </LanguageContainer>
      </HeaderGradient>
      <Separator>
        <SeparatorItem color="#FDD042" />
        <SeparatorItem color="#DE473C" />
      </Separator>
    </View>
  );
}
