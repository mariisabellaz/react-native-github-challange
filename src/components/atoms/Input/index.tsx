import React from 'react';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';
import {useTheme} from 'styled-components/native';

import {IconUser} from '@assets/svg';
import {Label} from '@components/atoms';
import * as S from './styles';

type InputProps = TextInputProps & {
  control: Control<any>;
  name: string;
  error: string | undefined;
};

const Input = ({control, name, error, ...rest}: InputProps) => {
  const theme = useTheme();

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => (
          <S.Container>
            <IconUser />
            <S.Input
              {...rest}
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              placeholder="@username"
              placeholderTextColor={theme.colors.text.secondary}
            />
          </S.Container>
        )}
      />

      {error && (
        <Label type="error" mt="xs">
          {error}
        </Label>
      )}
    </>
  );
};

export default Input;
