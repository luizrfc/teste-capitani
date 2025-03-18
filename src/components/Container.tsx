import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';

interface ContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  scrollEnabled?: boolean;
  style?: object;
  bgColor?: string;
}

function Container({
  children,
  scrollEnabled = false,
  style,
  bgColor,
}: ContainerProps) {
  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      style={{
        flex: 1,
        padding: 24,
        backgroundColor: bgColor || '#fff',
        ...style,
      }}>
      {children}
    </ScrollView>
  );
}

export default Container;
