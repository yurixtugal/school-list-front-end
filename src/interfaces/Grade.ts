import { School } from "./School";
import { SchoolList } from "./SchoolList";

export interface Grade {
  id: number;
  name: string;
  section: string;
  year: number;
  school?: School;
  fileList?:string;
}