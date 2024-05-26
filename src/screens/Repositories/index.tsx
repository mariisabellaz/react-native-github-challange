/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useRef, useCallback} from 'react';
import {useWindowDimensions} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {useRoute, RouteProp} from '@react-navigation/native';
import {debounce} from 'lodash';

import {useGithubContext} from '@contexts/github.context';
import {useTagsContext} from '@contexts/tags.context';
import {RepoModel, TagModel} from '@contexts/models/Repositories';

import {CommonScreen, SkeletonList, RepoList} from '@components/organisms';
import {ModalItem, Search, TagSelectorFilter} from '@components/molecules';

type Props = {
  repositories: {
    starredRepo: RepoModel[];
  };
};

export const Repositories = () => {
  const modalizeRef = useRef<Modalize>(null);
  const {height} = useWindowDimensions();
  const {profile} = useGithubContext();
  const {selectedTags} = useTagsContext();
  const {params} = useRoute<RouteProp<Props>>();

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<RepoModel[]>(
    params?.starredRepo,
  );

  const debouncedSearch = useCallback(
    debounce((repo: string) => {
      filterRepositories(repo);
    }, 300),
    [],
  );

  const filterRepositories = (repo: string) => {
    setInput(repo);
    if (selectedTags.some(tag => tag.isActive)) {
      if (repo.length >= 3) {
        const filtered = filteredData.filter(item =>
          item.full_name.toLowerCase().includes(repo.toLowerCase()),
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(params?.starredRepo);
      }
    } else {
      if (repo.length >= 3) {
        const filtered = params?.starredRepo.filter(item =>
          item.full_name.toLowerCase().includes(repo.toLowerCase()),
        );
        setFilteredData(filtered);
      } else {
        setFilteredData(params?.starredRepo);
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (selectedTags.length > 0 && selectedTags.some(tag => tag.isActive)) {
      const filtered = params?.starredRepo.filter(repo =>
        selectedTags.some(tag => tag.isActive && repo.language === tag.label),
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(params?.starredRepo);
    }
  }, [params?.starredRepo, selectedTags]);

  const onSearchRepo = (repo: string) => {
    setInput(repo);
    debouncedSearch(repo);
  };

  const onFilter = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  const onSave = () => {
    modalizeRef.current?.close();
  };

  const formatReposToTags = (repos: RepoModel[]): TagModel[] => {
    const uniqueLanguages = new Set<string>();
    repos.forEach(repo => {
      if (repo.language && repo.language.trim() !== '') {
        uniqueLanguages.add(repo.language);
      }
    });
    return Array.from(uniqueLanguages).map(language => ({
      id: language,
      label: language,
      isActive: false,
    }));
  };

  const initialTags = selectedTags.filter(tag => tag.isActive);

  const renderModal = () => {
    return (
      <Modalize
        ref={modalizeRef}
        modalHeight={height / 2}
        handleStyle={{backgroundColor: '#ccc'}}
        modalStyle={{backgroundColor: '#fff'}}
        adjustToContentHeight={false}>
        <ModalItem
          onPressCancel={onClose}
          onPressSave={onSave}
          sugestions={formatReposToTags(params?.starredRepo)}
        />
      </Modalize>
    );
  };

  return (
    <CommonScreen.Header type="thumbnail" uri={profile?.avatar_url || ''}>
      <Search value={input} onChangeText={onSearchRepo} onPress={onFilter} />
      {selectedTags && <TagSelectorFilter initialTags={initialTags} />}
      {loading ? <SkeletonList /> : <RepoList repositories={filteredData} />}
      {renderModal()}
    </CommonScreen.Header>
  );
};
