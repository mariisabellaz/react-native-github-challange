export interface ProfileModel {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  company: string | null;
  location: string | null;
  bio: string | null;
}
