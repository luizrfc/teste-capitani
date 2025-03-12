import React, {Fragment} from 'react';

import {
  HeaderGradient,
  LanguageContainer,
  LanguageImage,
  LogoImage,
  Separator,
  SeparatorItem,
} from '@src/styles/header.style';

export default function Header() {
  return (
    <Fragment>
      <HeaderGradient
        colors={['#DE473C', '#FDD042']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <LogoImage source={require('@src/assets/logo.png')} />

        <LanguageContainer>
          <LanguageImage source={require('@src/assets/br-flag.png')} />
          <LanguageImage source={require('@src/assets/eng-flag.png')} />
        </LanguageContainer>
      </HeaderGradient>
      <Separator>
        <SeparatorItem color="#FDD042" />
        <SeparatorItem color="#DE473C" />
      </Separator>
    </Fragment>
  );
}
