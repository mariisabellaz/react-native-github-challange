import React, {createContext, useContext, useState, ReactNode} from 'react';
import {TagModel} from '@contexts/models/Repositories';

type TagsContextType = {
  selectedTags: TagModel[];
  saveTags: (tags: TagModel[]) => void;
};

type Props = {
  children: ReactNode;
};

const TagsContext = createContext<TagsContextType>({
  selectedTags: [],
  saveTags: () => {},
});

export const useTagsContext = () => useContext(TagsContext);

export const TagsProvider = ({children}: Props) => {
  const [selectedTags, setSelectedTags] = useState<TagModel[]>([]);

  const saveTags = (tags: TagModel[]) => {
    setSelectedTags(tags);
  };

  return (
    <TagsContext.Provider value={{selectedTags, saveTags}}>
      {children}
    </TagsContext.Provider>
  );
};
