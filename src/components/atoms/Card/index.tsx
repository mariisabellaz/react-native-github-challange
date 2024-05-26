import React from 'react';
import {ViewProps} from 'react-native';

import * as S from './styles';

type CardProps = ViewProps & {
  testID?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({children, testID, ...rest}) => {
  return (
    <S.CardContainer testID={testID} {...rest}>
      {children}
    </S.CardContainer>
  );
};

export default Card;
