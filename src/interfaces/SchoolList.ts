import { ProductSchoolList } from "./ProductSchoolList";
import { Grade } from "./Grade";
import { CategorySchoolList } from "./CategorySchoolList";

export interface SchoolList {
  id: number;
  name: string;
  description: string;
  grade: Grade;
  year: number;
  productSchoolLists: ProductSchoolList[],
  categorySchoolLists: CategorySchoolList[],
  file: string
}