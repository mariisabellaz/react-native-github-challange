import React, {useState, useEffect} from 'react';
import {useTheme} from 'styled-components/native';

import {TagModel} from '@contexts/models/Repositories';
import {TagButton} from '@components/molecules';
import {Card, Label} from '@components/atoms';
import {IconSearch} from '@assets/svg';
import * as S from '../styles';

type TagSelectorProps = {
  initialTags: TagModel[];
  onSelectedTagsChange: (selectedTags: TagModel[]) => void;
};

const TagSelector: React.FC<TagSelectorProps> = ({
  initialTags,
  onSelectedTagsChange,
}) => {
  const theme = useTheme();

  const [input, setInput] = useState('');
  const [suggestedTags, setSuggestedTags] = useState<TagModel[]>(initialTags);
  const [selectedTags, setSelectedTags] = useState<TagModel[]>([]);

  useEffect(() => {
    onSelectedTagsChange(selectedTags);
  }, [selectedTags, onSelectedTagsChange]);

  const handleTagPress = (tag: TagModel) => {
    if (tag.isActive) {
      setSelectedTags(prev => prev.filter(t => t.id !== tag.id));
      setSuggestedTags(prev => [...prev, {...tag, isActive: false}]);
    } else {
      setSuggestedTags(prev => prev.filter(t => t.id !== tag.id));
      setSelectedTags(prev => [...prev, {...tag, isActive: true}]);
    }
  };

  const handleInputChange = (text: string) => {
    setInput(text);
    if (text.length >= 2) {
      const filtered = initialTags.filter(tag =>
        tag.label.toLowerCase().includes(text.toLowerCase()),
      );
      setSuggestedTags(filtered);
    } else {
      setSuggestedTags(initialTags);
    }
  };

  return (
    <S.Container>
      <S.InputContainer>
        <IconSearch />
        <S.Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Buscar uma linguagem..."
          placeholderTextColor={theme.colors.text.secondary}
          value={input}
          onChangeText={handleInputChange}
        />
      </S.InputContainer>
      <S.Wrapper>
        {selectedTags.map(tag => (
          <TagButton
            key={tag.id}
            tag={tag}
            onPress={() => handleTagPress(tag)}
            icon={true}
          />
        ))}
      </S.Wrapper>
      <Card>
        <Label type="body" color="secondary" mb="lg">
          Sugestões
        </Label>
        <S.Wrapper>
          {suggestedTags.map(tag => (
            <TagButton
              key={tag.id}
              tag={tag}
              onPress={() => handleTagPress(tag)}
              icon={true}
            />
          ))}
        </S.Wrapper>
      </Card>
    </S.Container>
  );
};

export default TagSelector;
