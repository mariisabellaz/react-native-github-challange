import React from 'react';
import {FlatList} from 'react-native';
import uuid from 'react-native-uuid';

import {RepoModel} from '@contexts/models/Repositories';

import {RepositoriesCard} from '@components/molecules';
import {Label} from '@components/atoms';
import * as S from './styles';

type RepositoriesListProps = {
  repositories: RepoModel[];
};

const RepositoriesList = ({repositories}: RepositoriesListProps) => {
  return (
    <FlatList
      data={repositories}
      keyExtractor={index => `${uuid.v4()}+${index}`}
      renderItem={({item}) => <RepositoriesCard repository={item} />}
      ListEmptyComponent={
        <S.Center>
          <Label type="body" align="center" italic>
            {
              'Oi, o usuário selecionado nao possui nenhum repositório \nencontrado'
            }
          </Label>
        </S.Center>
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RepositoriesList;
