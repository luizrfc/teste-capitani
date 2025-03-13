import React from 'react';
import {Text as RNText} from 'react-native';

interface TextProps {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: 'normal' | 'bold';
  color?: string;
  textAlign?: 'left' | 'center' | 'right';
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
}

function Text({
  children,
  fontSize = 16,
  fontWeight = 'normal',
  color = '#000',
  textAlign = 'left',
  textTransform = 'none',
}: TextProps) {
  return (
    <RNText
      style={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        textTransform,
      }}>
      {children}
    </RNText>
  );
}

export default Text;
