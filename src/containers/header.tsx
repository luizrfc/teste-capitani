import { Image } from '@rneui/base';
import { Button, Text } from '@src/components';
import useLanguage from '@src/hooks/useLanguage';
import { navigateTo } from '@src/hooks/useLinks';
import { BtnLanguage, HeaderContainer, HeaderGradient, LanguageContainer, LogoImage, Separator, SeparatorItem, UserContainer } from '@src/styles/header.style';
import React from 'react';
import { View } from 'react-native';

import { useAuth } from '../context/auth.context';

export default function Header() {
  const {handleChangeLanguage, language} = useLanguage();

  const {user} = useAuth();

  return (
    <View>
      <HeaderGradient
        colors={['#DE473C', '#FDD042']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <LogoImage source={require('@src/assets/logo.png')} />

        <HeaderContainer hasUser={!!user}>
          {user && (
            <UserContainer>
              <Button
                size="sm"
                variant="secondary"
                onPress={() => navigateTo('Profile')}
                icon="user"
              />
              <Text color="white">{user.name}</Text>
            </UserContainer>
          )}
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
        </HeaderContainer>
      </HeaderGradient>
      <Separator>
        <SeparatorItem color="#FDD042" />
        <SeparatorItem color="#DE473C" />
      </Separator>
    </View>
  );
}
