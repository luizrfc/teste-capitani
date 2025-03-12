import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';

interface ContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  scrollEnabled?: boolean;
  style?: object;
}

function Container({children, scrollEnabled = false, style}: ContainerProps) {
  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      style={{
        padding: 24,
        ...style,
      }}>
      {children}
    </ScrollView>
  );
}

export default Container;
