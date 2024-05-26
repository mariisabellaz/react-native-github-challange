import React, {createContext, useState, useContext, ReactNode} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '@services/api';
import {GITHUB_STORAGE_KEY} from '@utils/tagUtils';
import {GitHubModel, OwnerModel, RepoModel} from './models/Repositories';
import {ProfileModel} from './models/Profile';

type GithubContextData = {
  getGitHubResponse: (username: string) => void;
  removeItem: (item: GitHubModel) => void;
  loadList: () => void;
  gitList: GitHubModel[];
  loading: boolean;
  checkUserExists: (username: string) => void;
  getGithubProfile: (username: string) => void;
  error: string;
  profile: ProfileModel;
};

type Props = {
  children: ReactNode;
};

const GithubContext = createContext<GithubContextData>({} as GithubContextData);

export const GithubProvider = ({children}: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [gitList, setGitList] = useState<GitHubModel[]>([]);
  const [profile, setProfile] = useState({} as ProfileModel);

  const addItem = async (item: GitHubModel) => {
    try {
      const existingDataString = await AsyncStorage.getItem(GITHUB_STORAGE_KEY);
      const existingData: GitHubModel[] = existingDataString
        ? JSON.parse(existingDataString)
        : [];

      const newData = [...existingData, item];

      await AsyncStorage.setItem(GITHUB_STORAGE_KEY, JSON.stringify(newData));
      setGitList(newData);
    } catch (err) {
      console.error('Erro ao adicionar item:', err);
    }
  };

  const loadList = async () => {
    setLoading(true);
    try {
      const storedDataString = await AsyncStorage.getItem(GITHUB_STORAGE_KEY);
      if (storedDataString) {
        const storedData = JSON.parse(storedDataString);
        setGitList(storedData);
      }
    } catch (err) {
      console.error('Erro ao carregar lista:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (item: GitHubModel) => {
    setLoading(true);
    try {
      const existingDataString = await AsyncStorage.getItem(GITHUB_STORAGE_KEY);
      if (existingDataString) {
        const existingData: GitHubModel[] = JSON.parse(existingDataString);

        const newData = existingData.filter(
          (existingItem: GitHubModel) =>
            existingItem.owner.id !== item.owner.id,
        );

        await AsyncStorage.setItem(GITHUB_STORAGE_KEY, JSON.stringify(newData));
        setGitList(newData);
      }
    } catch (err) {
      console.error('Erro ao remover item:', err);
    } finally {
      setLoading(false);
    }
  };

  const checkUserExists = async (username: string): Promise<boolean> => {
    try {
      const existingDataString = await AsyncStorage.getItem(GITHUB_STORAGE_KEY);
      if (existingDataString) {
        const existingData: GitHubModel[] = JSON.parse(existingDataString);
        const userExists = existingData.some(
          (user: GitHubModel) => user.owner.login === username,
        );
        return userExists;
      }
      return false;
    } catch (err) {
      console.error('Erro ao verificar usuário na AsyncStorage:', err);
      return false;
    }
  };

  const getGitHubResponse = async (username: string) => {
    setLoading(true);
    setError('');

    try {
      const ownerResponse = await api.get<OwnerModel>(`users/${username}`);
      if (ownerResponse.data) {
        const starredResponse = await api.get<RepoModel[]>(
          `users/${username}/starred`,
        );

        const formattedJson: GitHubModel = {
          owner: ownerResponse.data,
          starredRepo: starredResponse.data,
        };
        await addItem(formattedJson);
      }
    } catch (err) {
      setError('Usuário não encontrado.');
      console.error('Error fetching user in github', err);
    } finally {
      setLoading(false);
    }
  };

  const getGithubProfile = async (username: string) => {
    setLoading(true);
    setError('');

    try {
      const userResponse = await api.get<OwnerModel>(`users/${username}`);
      if (userResponse?.data) {
        setProfile(userResponse?.data);
      }
    } catch (err) {
      setError('Usuário não encontrado.');
      console.error('Error fetching user in github', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GithubContext.Provider
      value={{
        getGitHubResponse,
        loadList,
        loading,
        removeItem,
        checkUserExists,
        gitList,
        error,
        getGithubProfile,
        profile,
      }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
