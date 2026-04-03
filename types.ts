
export type AuthMode = 'login' | 'signup' | 'forgot' | 'reset-success' | 'onboarding' | 'signup-success' | 'community-feed' | 'people';

export interface TournamentRecord {
  tournament: string;
  category: string;
  year: string;
  result: string;
}

export interface PlayingMedia {
  type: 'image' | 'video';
  url: string;
}

export interface UserProfile {
  email: string;
  // Step 1
  name?: string;
  age?: string;
  gender?: string;
  playingLevel?: string;
  location?: string;
  playingSinceMonth?: string;
  playingSinceYear?: string;
  powerHand?: string;
  backHand?: string;
  duprLink?: string;
  oftenSeenPlayingAt?: string;
  coverImage?: string;
  profileImage?: string;
  // Step 2
  about?: string;
  playingStyleMedia?: (PlayingMedia | null)[];
  notableTournaments?: TournamentRecord[];
  skills?: string;
  coachName?: string;
  trainingClub?: string;
  trainingLocation?: string;
  equipment?: string;
}

export interface FeedItem extends UserProfile {
  id: number;
}

export interface AuthState {
  user: UserProfile | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null;
}
