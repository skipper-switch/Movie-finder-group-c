export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
};

export type CastProps = {
  cast: CastMember[];
};

export type OverviewProps = {
  overview: string;
};

export type MovieReviewsProps = {
  movieId: string;
};

export type ReviewProps = {
  id: string;
  author: string;
  avatarPath?: string;
  rating: number | null;
  content: string;
  createdAt: string;
  url: string;
};

export type Movie = {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  trailer?: boolean;
};

export type MovieProps = {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  trailer?: boolean;
};
