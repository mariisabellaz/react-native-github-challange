import React from 'react';

import {RepoModel} from '@contexts/models/Repositories';
import useFormatted from '@hooks/useFormattedDate';

import {Card, Label} from '@components/atoms';
import {TagButton, InfoCard} from '@components/molecules';
import {IconArrowRight, IconStarred, IconEdit} from '@assets/svg';
import * as S from './styles';

type CreditCardProps = {
  testID?: string;
  repository: RepoModel;
};

const RepositoriesCard: React.FC<CreditCardProps> = ({repository, testID}) => {
  const formattedDate = useFormatted(repository?.pushed_at);

  return (
    <Card testID={testID}>
      <S.RowContainer>
        <S.IconContainer>
          <S.TextWrapper>
            <Label type="body" mr="sm" bold numberOfLines={1}>
              {repository?.full_name || 'não informado'}
            </Label>
          </S.TextWrapper>
          <IconArrowRight />
        </S.IconContainer>
        <IconStarred />
      </S.RowContainer>

      <Label type="caption" mt="sm" numberOfLines={2}>
        {repository?.description || 'não informado'}
      </Label>

      <S.Tooltip>
        {repository?.language && (
          <TagButton labelTag={`#${repository?.language}`} />
        )}
        <IconEdit />
      </S.Tooltip>

      <S.Top />
      <InfoCard
        language={repository?.language}
        stargazers_count={repository?.stargazers_count}
        forks_count={repository?.forks_count}
        pushed_at={formattedDate}
      />
    </Card>
  );
};

export default RepositoriesCard;
