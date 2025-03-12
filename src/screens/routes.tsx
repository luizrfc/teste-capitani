import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Header from '@src/containers/header';
import Auth from './Auth';

const {Navigator, Screen} = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Auth"
        screenOptions={{
          animation: 'fade',
          header: () => <Header />,
        }}>
        <Screen name="Auth" component={Auth} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
