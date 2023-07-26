import { Grade } from "./Grade";

export interface School {
  id: number;
  name: string;
  description: string;
  address: string;
  grades: Grade[];
  image: string;
}