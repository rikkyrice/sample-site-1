import { User } from '@/models/user';

export interface FilmReviewList {
  matched: number;
  filmReviews: FilmReview[];
}

export interface FilmReview {
  id: string;
  title: string;
  content: string;
  createdBy: User;
  createdAt: string;
  updatedAt: string;
}