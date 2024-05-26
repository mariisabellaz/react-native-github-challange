import React, {useState, useEffect} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import {useGithubContext} from '@contexts/github.context';
import {AppNavigatorRoutesProps} from '@routes/app.router';

import {RoundedButton} from '@components/molecules';
import {Label, Input} from '@components/atoms';
import {CommonScreen} from '@components/organisms';
import * as S from './styles';

import {schema} from './schema';

type FormValues = {
  username: string;
};

export const AddUser = () => {
  const {checkUserExists, getGitHubResponse, error, loading} =
    useGithubContext();
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);
  const [responseError, setResponseError] = useState('');

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
      const exists = await checkUserExists(form.username);

      if (exists) {
        setResponseError('Usuário já existe');
      } else {
        await getGitHubResponse(form.username);

        if (error) {
          return setResponseError(error);
        } else {
          reset();
          navigate('owners');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);

  return (
    <CommonScreen.Header type="arrow-back">
      <S.Container top={statusBarHeight}>
        <S.Git source={require('@assets/images/git.png')} />
        <Label type="title" mt="xxl">
          Buscar usuário
        </Label>
        <Label type="body" mt="xs" mb="xl" color="secondary">
          Adicione seus novos usuários do GitHub
        </Label>
        <Input
          name="username"
          control={control}
          autoCapitalize="none"
          autoCorrect={false}
          error={errors.username && errors.username.message}
        />
        <RoundedButton
          type="full"
          background="secondary"
          label="Buscar"
          mt="xl"
          onPress={handleSubmit(onSend)}
          disabled={loading}
        />

        {responseError && (
          <Label type="error" mt="md" align="center">
            {responseError}
          </Label>
        )}
      </S.Container>
    </CommonScreen.Header>
  );
};
