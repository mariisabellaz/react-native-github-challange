import React from 'react';
import {TextProps} from 'react-native';
import * as S from './styles';

type TypographyProps = S.TypographyProps &
  TextProps & {
    testID?: string;
    children?: React.ReactNode;
  };

const Typography: React.FC<TypographyProps> = ({children, testID, ...rest}) => {
  return (
    <S.Label testID={testID} {...rest}>
      {children}
    </S.Label>
  );
};

export default Typography;
