import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';

import {AppNavigatorRoutesProps} from '@routes/app.router';
import {GitHubModel, RepoModel} from '@contexts/models/Repositories';

import {OwnersCard} from '@components/molecules';
import {Label} from '@components/atoms';
import * as S from './styles';

type OwnersListProps = {
  data: GitHubModel[];
  onPressCrash: (item: GitHubModel) => void;
};

const OwnersList = ({data, onPressCrash}: OwnersListProps) => {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const onPressCard = (starredRepo: RepoModel[]) => {
    navigate('repositories', {starredRepo});
  };

  return (
    <FlatList
      data={data}
      keyExtractor={index => `${uuid.v4()}+${index}`}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onPressCard(item.starredRepo)}>
          <OwnersCard
            owner={item.owner}
            starred={item.starredRepo.length}
            onPress={() => onPressCrash(item)}
          />
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <S.Center>
          <Label type="body" align="center" italic>
            Oi, você ainda não possui nenhum contato adicionado
          </Label>
        </S.Center>
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default OwnersList;
