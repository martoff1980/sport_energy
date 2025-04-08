import {FilterType, BodyPart, MuscleGroup, Equipment} from "./general.types";

export type RatingRequest = {
  rate: number;
  email: string;
  review: string;
}

export type SubscriptionRequest = {
  email: string;
}

export type FilterRequest = {
  filter: FilterType;
  page: number;
  limit: number;
}

export type ExercisesRequest = {
  bodypart: BodyPart;
  muscles: MuscleGroup;
  equipment: Equipment;
  keyword: string;
  page: number;
  limit: number;
}