import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from '@src/components';
import {colors} from '@src/styles/theme';

interface ButtonAddProps {
  onPress: () => void;
}

function ButtonAdd({onPress}: ButtonAddProps) {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        padding: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        activeOpacity={0.6}
        style={{
          borderRadius: 32,
          width: 64,
          height: 64,
          backgroundColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="add" />
      </TouchableOpacity>
    </View>
  );
}

export default ButtonAdd;
