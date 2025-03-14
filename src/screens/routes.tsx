import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '@src/containers/header';
import React from 'react';

import Auth from './Auth';
import Home from './Home';
import Register from './Register';
import Splash from './Splash';
import {navigationRef} from '@src/hooks/useLinks';

const {Navigator, Screen} = createNativeStackNavigator();

function Routes() {
  return (
    // @ts-ignore
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName="Splash"
        screenOptions={{
          animation: 'fade',
          // eslint-disable-next-line react/no-unstable-nested-components
          header: () => <Header />,
        }}>
        <Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={Splash}
        />
        <Screen name="Auth" component={Auth} />
        <Screen name="Home" component={Home} />
        <Screen name="Register" component={Register} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
