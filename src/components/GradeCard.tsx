import { Grade } from "@/interfaces/Grade";
import Link from "next/link";

interface Props {
    grade: Grade
}

const GradeCard = ({grade}: Props) => {
    return  <div className=" bg-white rounded-lg shadow-md p-6 border w-80">
                <div className="text-xl font-bold">{grade.name}</div>
                <div className="text-lg py-2">Sección: {grade.section}</div>
                <div className="content-center py-1">
                <Link href={`${grade.fileList?grade.fileList:'#'}`} target="_blank" className="border text-base  px-5 py-1 bg-sky-500">Descargar lista</Link>
                <Link href={`/listByGrade/${grade.id}`} className="border text-base  px-5 py-1 bg-sky-500">Ver lista</Link>
                </div>
 
            </div> 
};

export default GradeCard;