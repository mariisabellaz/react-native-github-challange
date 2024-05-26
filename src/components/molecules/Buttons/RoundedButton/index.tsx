import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {Label} from '@components/atoms';
import * as S from './styles';

type ButtonProps = S.ButtonProps &
  TouchableOpacityProps & {
    testID?: string;
    label: string;
    icon?: boolean;
  };

const RoundedButton: React.FC<ButtonProps> = ({label, testID, ...rest}) => {
  return (
    <S.CardContainer testID={testID} {...rest}>
      <S.RowContainer>
        <Label type="button">{label}</Label>
      </S.RowContainer>
    </S.CardContainer>
  );
};

export default RoundedButton;
