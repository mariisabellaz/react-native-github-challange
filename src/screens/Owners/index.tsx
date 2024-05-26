import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useGithubContext} from '@contexts/github.context';
import {AppNavigatorRoutesProps} from '@routes/app.router';
import {GitHubModel} from '@contexts/models/Repositories';

import {CommonScreen, OwnersList, SkeletonList} from '@components/organisms';

export const Owners = () => {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();
  const {loadList, removeItem, loading, gitList} = useGithubContext();

  const onNavigate = () => {
    navigate('adduser');
  };

  const getGithubData = async () => {
    await loadList();
  };

  async function onPressCrash(item: GitHubModel) {
    try {
      await removeItem(item);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getGithubData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CommonScreen.Header type="new-user" onPress={onNavigate}>
      {loading ? (
        <SkeletonList />
      ) : (
        <OwnersList data={gitList} onPressCrash={item => onPressCrash(item)} />
      )}
    </CommonScreen.Header>
  );
};
