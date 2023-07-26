import { ProductSchoolList } from "./ProductSchoolList";
import { Grade } from "./Grade";

export interface SchoolList {
  id: number;
  name: string;
  description: string;
  grade: Grade;
  year: number;
  productSchoolLists: ProductSchoolList[],
  file: string
}