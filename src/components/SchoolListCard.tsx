import { SchoolList } from "@/interfaces/SchoolList";
import Link from "next/link";

interface Props {
    schoolList: SchoolList
}

const SchoolListCard = ({schoolList}: Props) => {
    return  <div className=" bg-white rounded-lg shadow-md p-6 border flex flex-row ">
                <div className="basis-80">
                    <div className="text-xl font-bold ">{schoolList.grade.school?.name}</div>
                    <div className="text-gray-600 py-4">{schoolList.grade.name} - {schoolList.grade.section}</div>
                    <Link target="_blank" href={`${schoolList.file}`} className="border text-base  px-5 py-1 bg-sky-500">Descargar lista</Link>
                    <Link href={`schoolLists/${schoolList.id}`} className="border text-base  px-5 py-1 bg-sky-500">Ver lista</Link>
                
                </div>
                <img className="basis-20" src={schoolList.grade.school?.image} width="25%" height="25%"/>

            </div>;
};

export default SchoolListCard;