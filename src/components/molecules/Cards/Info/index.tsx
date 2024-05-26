import React from 'react';

import {
  IconStar,
  IconAccessTime,
  IconLanguage,
  IconSupervisorAccount,
} from '@assets/svg';
import {Label} from '@components/atoms';
import * as S from './styles';

type InfoCardProps = {
  language: string;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
};

const IconCard = ({
  language,
  stargazers_count,
  forks_count,
  pushed_at,
}: InfoCardProps) => {
  const items = [
    {id: 1, Icon: IconLanguage, text: language},
    {id: 2, Icon: IconStar, text: stargazers_count},
    {id: 3, Icon: IconAccessTime, text: forks_count},
    {id: 4, Icon: IconSupervisorAccount, text: pushed_at},
  ];
  return (
    <S.Container>
      {items.map(item => (
        <S.Item key={item.id}>
          <item.Icon width={18} height={18} />
          <S.Wrapper>
            <Label type="info" numberOfLines={1}>
              {item.text}
            </Label>
          </S.Wrapper>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default IconCard;
