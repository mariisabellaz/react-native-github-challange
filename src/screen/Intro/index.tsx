import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {AppNavigatorRoutesProps} from '@routes/app.router';

import {CommonScreen} from '@components/organisms';
import {Label} from '@components/atoms';
import {RoundedButton} from '@components/molecules';

import * as S from './styles';

export const Intro = () => {
  const insets = useSafeAreaInsets();
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const onNavigate = () => {
    navigate('login');
  };

  return (
    <CommonScreen.ImageBackground source={require('@assets/images/splash.png')}>
      <S.Container>
        <S.Git source={require('@assets/images/git.png')} />
      </S.Container>
      <S.Bottom bottom={insets.bottom}>
        <Label type="slogan" mb="xl">
          Easy ways to manage your GitHub
        </Label>
        <RoundedButton label="Get Started" type="full" onPress={onNavigate} />
      </S.Bottom>
    </CommonScreen.ImageBackground>
  );
};
