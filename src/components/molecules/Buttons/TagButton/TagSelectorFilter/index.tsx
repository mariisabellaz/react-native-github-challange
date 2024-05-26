import React, {useState} from 'react';

import {TagModel} from '@contexts/models/Repositories';
import {useTagsContext} from '@contexts/tags.context';

import {TagButton} from '@components/molecules';
import * as S from '../styles';

type TagSelectorProps = {
  initialTags: TagModel[];
};

const TagSelectorFilter: React.FC<TagSelectorProps> = ({initialTags}) => {
  const {saveTags} = useTagsContext();

  const handleTagPress = (clickedTag: TagModel) => {
    const updatedTags = initialTags.map(tag => {
      if (tag.id === clickedTag.id) {
        return {
          ...tag,
          isActive: false,
        };
      }
      return tag;
    });

    saveTags(updatedTags);
  };

  return (
    <S.Container>
      <S.Wrapper>
        {initialTags.map(tag => (
          <TagButton
            key={tag.id}
            tag={tag}
            onPress={() => handleTagPress(tag)}
            icon={true}
          />
        ))}
      </S.Wrapper>
    </S.Container>
  );
};

export default TagSelectorFilter;
