import {useConfig} from '@src/context/config.context';
import {colors} from '@src/styles/theme';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator, Dimensions, Text} from 'react-native';
import Animated, {
  FadeIn,
  FadeInUp,
  FadeOut,
  FadeOutDown,
} from 'react-native-reanimated';

function Loading() {
  const {t} = useTranslation();

  const {loading} = useConfig();

  return (
    loading && (
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
        justifyContent: 'center',
        alignItems: 'center',
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
        }}>
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={{marginBottom: 24}}
        />
        <Text>{t('components.loading.loading')}...</Text>
        </Animated.View>
      </Animated.View>
    )
  );
}

export default Loading;
