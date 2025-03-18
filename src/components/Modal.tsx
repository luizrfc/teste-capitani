import {useConfig} from '@src/context/config.context';
import React from 'react';
import {Dimensions} from 'react-native';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from 'react-native-reanimated';

interface ModalProps {
  children: React.ReactNode;
  style?: object;
  position?: 'top' | 'bottom' | 'center';
}

function Modal({children, style, position = 'center'}: ModalProps) {
  const {modal} = useConfig();

  return (
    modal && (
      <Animated.View
        entering={FadeIn.duration(250)}
        exiting={FadeOut.duration(250)}
        style={{
          position: 'absolute',
          zIndex: 1000,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          ...(position === 'top' && {
            justifyContent: 'flex-start',
            alignItems: 'center',
          }),
          ...(position === 'bottom' && {
            justifyContent: 'flex-end',
            alignItems: 'center',
          }),
          ...(position === 'center' && {
            justifyContent: 'center',
            alignItems: 'center',
          }),
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <Animated.View
          entering={FadeInUp.duration(300)}
          exiting={FadeOutDown.duration(150)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            ...style,
          }}>
          {children}
        </Animated.View>
      </Animated.View>
    )
  );
}

export default Modal;
