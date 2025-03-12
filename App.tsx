import {ThemeProvider} from '@rneui/themed';
import theme from './src/styles';
import React from 'react';
import {ScrollView, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@utils/i18n';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <ScrollView>
          <Text>Hello World</Text>
        </ScrollView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
