import React, {useRef} from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import {AppNavigatorRoutesProps} from '@routes/app.router';
import {SplashAnimation} from '@assets/animation';
import * as S from './styles';

export const Splash = () => {
  const animation = useRef<LottieView>(null);
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const onNavigate = () => {
    navigate('intro');
  };

  return (
    <S.Container
      ref={animation}
      source={SplashAnimation}
      loop={false}
      autoPlay
      onAnimationFinish={onNavigate}
    />
  );
};
