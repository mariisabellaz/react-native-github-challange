export interface RepoModel {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string;
  fork: boolean;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  pushed_at: string;
}

export interface OwnerModel {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
}

export interface GitHubModel {
  owner: OwnerModel;
  starredRepo: RepoModel[];
}

export interface TagModel {
  id: string;
  label: string;
  isActive: boolean;
}
