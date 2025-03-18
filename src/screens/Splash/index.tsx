import React, {useEffect} from 'react';
import {
  HeaderGradient,
  LogoImage,
  Separator,
  SeparatorItem,
} from '@src/styles/splash.style';
import {Dimensions, View} from 'react-native';
import {useConfig} from '@src/context/config.context';
import {useAuth} from '@src/context/auth.context';
import { navigateTo } from '@src/hooks/useLinks';

function Splash() {
  const {handleLoading} = useConfig();

  const {loadUser} = useAuth();

  useEffect(() => {
    setTimeout(async () => {
      handleLoading(true);
      loadData();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = async () => {
    setTimeout(async () => {
      const user = await loadUser();
      if (user) {
        navigateTo('Home');
      } else {
        navigateTo('Auth');
      }
      handleLoading(false);
    }, 1500);
  };

  return (
    <View
      style={{
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }}>
      <HeaderGradient
        colors={['#DE473C', '#FDD042']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <LogoImage source={require('@src/assets/logo.png')} />
      </HeaderGradient>
      <Separator>
        <SeparatorItem color="#FDD042" />
        <SeparatorItem color="#DE473C" />
      </Separator>
    </View>
  );
}

export default Splash;
