import React from 'react';
import {ImageSourcePropType, ImageProps} from 'react-native';

import * as S from './styles';

type AvatarProps = ImageProps &
  S.AvatarProps & {
    source?: ImageSourcePropType | string | undefined;
    uri?: string;
    testID?: string;
  };

const Thumbnail: React.FC<AvatarProps> = ({uri, source, testID, ...rest}) => {
  const imageSource = source || (uri ? {uri} : undefined);

  if (!imageSource) {
    console.warn('CustomImage: A source or uri must be provided');
    return null;
  }

  return <S.ImageContainer testID={testID} source={imageSource} {...rest} />;
};

export default Thumbnail;
