import React, {ReactNode} from 'react';
import {ImageBackgroundProps, ScrollViewProps} from 'react-native';

import {Header} from '@components/molecules';
import * as S from './styles';

type ScreenRootProps = ScrollViewProps & {
  children: ReactNode;
};

type ScreenImageBackgroundProps = ImageBackgroundProps & {
  children: ReactNode;
  scrollEnabled?: boolean;
};

type ScreenHeaderProps = {
  children: ReactNode;
  type?: 'new-user' | 'arrow-back' | 'thumbnail';
  uri?: string;
  onPress?: () => void;
};

const ScreenRoot = ({children}: ScreenRootProps) => {
  return <S.Container>{children}</S.Container>;
};

const ScreenScroll = ({children}: ScreenRootProps) => {
  return <S.ScrollContainer>{children}</S.ScrollContainer>;
};

const ScreenHeader = ({children, type, uri, onPress}: ScreenHeaderProps) => {
  return (
    <S.Container>
      <Header type={type} uri={uri} onPress={onPress} />
      {children}
    </S.Container>
  );
};

const ScreenImage = ({children, ...rest}: ScreenImageBackgroundProps) => {
  return <S.ImageContainer {...rest}>{children}</S.ImageContainer>;
};

ScreenRoot.Header = ScreenHeader;
ScreenRoot.ImageBackground = ScreenImage;
ScreenRoot.ScrollEnabled = ScreenScroll;

export default ScreenRoot;
