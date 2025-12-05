export interface ProfileData {
  name: string;
  tagline: string;
  shortBio: string;
  about: string[];
  avatarUrl: string;
  location: string;
  email: string;
}

export type Platform = 'Instagram' | 'LinkedIn' | 'Facebook' | 'X' | 'Github' | 'Website' | 'Email' | 'YouTube' | 'Substack';

export interface SocialLink {
  platform: Platform;
  url: string;
  username: string;
}

export interface NavCard {
  id: string;
  title: string;
  description: string;
  url: string;
  isExternal: boolean;
  theme: 'blue' | 'purple' | 'emerald' | 'neutral' | 'pink' | 'orange' | 'yellow';
  socials?: SocialLink[];
}
