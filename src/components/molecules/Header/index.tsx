import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {TouchableOpacity} from 'react-native';

import {IconArrowBack} from '@assets/svg';
import {RoundedButton} from '@components/molecules';
import {Thumbnail} from '@components/atoms';
import * as S from './styles';

export type HeaderProps = {
  testID?: string;
  type?: 'new-user' | 'arrow-back' | 'thumbnail';
  onPress?: () => void;
  uri?: string;
};

const Header: React.FC<HeaderProps> = ({
  testID,
  type = 'arrow-back',
  onPress,
  uri,
}) => {
  const {goBack} = useNavigation();
  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

  useEffect(() => {
    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);

  const arrowBackRender = () => {
    return (
      <S.Container top={statusBarHeight} testID={testID}>
        <TouchableOpacity onPress={goBack}>
          <IconArrowBack />
        </TouchableOpacity>
      </S.Container>
    );
  };

  const arrowBackAndThumbnailRender = () => {
    return (
      <S.Container top={statusBarHeight} testID={testID}>
        <TouchableOpacity onPress={goBack}>
          <IconArrowBack />
        </TouchableOpacity>
        <Thumbnail uri={uri} width={32} height={32} rounded />
      </S.Container>
    );
  };

  const newUserRender = () => {
    return (
      <S.Container top={statusBarHeight} testID={testID}>
        <S.Git source={require('@assets/images/git.png')} />

        <RoundedButton
          onPress={onPress}
          type="medium"
          background="secondary"
          label="Adicionar novo"
        />
      </S.Container>
    );
  };

  return (
    <>
      {type === 'new-user' && newUserRender()}
      {type === 'arrow-back' && arrowBackRender()}
      {type === 'thumbnail' && arrowBackAndThumbnailRender()}
    </>
  );
};

export default Header;
