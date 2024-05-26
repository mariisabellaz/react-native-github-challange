import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useGithubContext} from '@contexts/github.context';
import {AppNavigatorRoutesProps} from '@routes/app.router';

import {CommonScreen} from '@components/organisms';
import {Input, Label} from '@components/atoms';
import {RoundedButton} from '@components/molecules';
import * as S from './styles';
import {schema} from './schema';

type FormValues = {
  username: string;
};

export const Login = () => {
  const {getGithubProfile, loading} = useGithubContext();
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSend(form: FormValues) {
    try {
      await getGithubProfile(form.username);
      reset();
      navigate('owners');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);

  return (
    <CommonScreen>
      <S.Container top={statusBarHeight}>
        <S.Git source={require('@assets/images/git.png')} />
        <Label type="title" mt="xxl">
          Buscar usuário
        </Label>
        <Label type="body" mt="xs" mb="xl" color="secondary">
          Crie sua conta através do seu usuário do GitHub
        </Label>
        <Input
          name="username"
          control={control}
          placeholder="Nome"
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.username && errors.username.message}
        />
        <RoundedButton
          type="full"
          background="secondary"
          label="Cadastrar"
          mt="xl"
          onPress={handleSubmit(onSend)}
          disabled={loading}
        />
      </S.Container>
      <S.Bottom bottom={insets.bottom}>
        <Label type="body" color="secondary" align="center">
          Termos de{' '}
          <Label type="body" color="secondary" underline>
            política{' '}
          </Label>
          <Label type="body" color="secondary">
            e{' '}
          </Label>
          <Label type="body" color="secondary" underline>
            privacidade
          </Label>
        </Label>
      </S.Bottom>
    </CommonScreen>
  );
};
