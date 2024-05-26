import React from 'react';

import {TagModel} from '@contexts/models/Repositories';

import {Label} from '@components/atoms';
import {IconButtonPlus, IconButtonClose} from '@assets/svg';
import * as S from './styles';

type TagButtonProps = {
  tag?: TagModel;
  onPress?: (tag: TagModel) => void;
  icon?: boolean;
  labelTag?: string;
};

const TagButton: React.FC<TagButtonProps> = ({
  tag,
  onPress,
  icon,
  labelTag,
}) => {
  const isActive = tag?.isActive;

  const renderWithIconContainer = () => {
    return (
      <S.TagContainer onPress={onPress && tag ? () => onPress(tag) : undefined}>
        <Label type="info" color="primary" mr="xs">
          {tag?.label}
        </Label>
        {isActive ? <IconButtonClose /> : <IconButtonPlus />}
      </S.TagContainer>
    );
  };

  const renderWithoutIconContainer = () => {
    return (
      <S.TagContainer disabled>
        <Label type="info" color="primary" mr="xs">
          {labelTag}
        </Label>
      </S.TagContainer>
    );
  };

  return <>{icon ? renderWithIconContainer() : renderWithoutIconContainer()}</>;
};

export default TagButton;
