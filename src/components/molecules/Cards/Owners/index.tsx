import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {OwnerModel} from '@contexts/models/Repositories';

import {Card, Label, Thumbnail} from '@components/atoms';
import {
  IconArrowRight,
  IconBusiness,
  IconDelete,
  IconPlace,
  IconStar,
} from '@assets/svg';
import * as S from './styles';

type CreditCardProps = TouchableOpacityProps & {
  testID?: string;
  owner: OwnerModel;
  starred: number;
};

const OwnersCard: React.FC<CreditCardProps> = ({
  owner,
  starred,
  testID,
  ...rest
}) => {
  return (
    <Card testID={testID}>
      <S.RowContainer>
        <S.ProfileContainer>
          <Thumbnail uri={owner?.avatar_url} width={64} height={64} rounded />
          <S.Container>
            <S.IconContainer>
              <Label type="body" mr="sm" bold>
                {owner?.name || 'não informado'}
              </Label>
              <IconArrowRight />
            </S.IconContainer>
            <Label type="caption">{`@${
              owner?.login || 'não informado'
            }`}</Label>
          </S.Container>
        </S.ProfileContainer>

        <S.ButtonCircle {...rest}>
          <IconDelete />
        </S.ButtonCircle>
      </S.RowContainer>

      <S.Top />

      <S.RowContainer>
        <S.IconContainer>
          <IconBusiness />
          <Label type="info" ml="xs">
            {owner?.company || 'não informado'}
          </Label>
        </S.IconContainer>

        <S.IconContainer>
          <IconPlace />
          <Label type="info" ml="xs">
            {owner?.location || 'não informado'}
          </Label>
        </S.IconContainer>

        <S.IconContainer>
          <IconStar />
          <Label type="info" ml="xs">
            {starred || 0}
          </Label>
        </S.IconContainer>
      </S.RowContainer>
    </Card>
  );
};

export default OwnersCard;
