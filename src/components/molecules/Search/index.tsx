import React from 'react';
import {TextInputProps} from 'react-native';
import {useTheme} from 'styled-components/native';

import {IconFilter, IconSearch} from '@assets/svg';
import * as S from './styles';

type SearchProps = TextInputProps & {
  onPress: () => void;
};

const Search = ({onPress, ...rest}: SearchProps) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.InputContainer>
        <IconSearch />
        <S.Input
          {...rest}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Buscar um repositório..."
          placeholderTextColor={theme.colors.text.secondary}
        />
      </S.InputContainer>

      <S.Filter onPress={onPress}>
        <IconFilter />
      </S.Filter>
    </S.Container>
  );
};

export default Search;
