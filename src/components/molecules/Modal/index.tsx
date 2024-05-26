import React, {useCallback} from 'react';
import {TouchableOpacity, TextInputProps} from 'react-native';
import {useTagsContext} from '@contexts/tags.context';
import {TagModel} from '@contexts/models/Repositories';
import {RoundedButton, TagSelector} from '@components/molecules';
import {Label} from '@components/atoms';
import * as S from './styles';

export type ModalProps = TextInputProps & {
  testID?: string;
  onPressCancel?: () => void;
  onPressSave?: () => void;
  uri?: string;
  sugestions: TagModel[];
};

const Modal: React.FC<ModalProps> = ({
  testID,
  onPressCancel,
  onPressSave,
  sugestions,
}) => {
  const {saveTags} = useTagsContext();

  const handleSelectedTagsChange = useCallback(
    (tags: TagModel[]) => {
      saveTags(tags);
    },
    [saveTags],
  );

  const handleSave = () => {
    onPressSave?.();
  };

  return (
    <S.Container testID={testID}>
      <Label type="title" mb="md">
        Adicionar tags
      </Label>

      <TagSelector
        initialTags={sugestions}
        onSelectedTagsChange={handleSelectedTagsChange}
      />

      <RoundedButton
        type="full"
        label="Salvar"
        background="secondary"
        mt="xxl"
        mb="md"
        onPress={handleSave}
      />
      <TouchableOpacity onPress={onPressCancel}>
        <Label type="body" align="center">
          Cancelar
        </Label>
      </TouchableOpacity>
    </S.Container>
  );
};

export default Modal;
