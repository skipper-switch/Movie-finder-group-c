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
  title: string;
  year: number;
  genre: string;
  rating: number;
  image: string;
  trailer?: boolean;
};
