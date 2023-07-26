import { School } from "@/interfaces/School";
import Link from "next/link";

interface Props {
    school: School
}

const SchoolCard = ({school}: Props) => {
    return  <div className=" bg-white rounded-lg shadow-md p-6 border flex flex-row ">
                <div className="basis-80">
                    <div className="text-lg font-bold ">{school.name}</div>
                    <div className="text-gray-600 py-1">{school.description}</div>
                    <div className="text-gray-600 py-2">Dirección:<br/> {school.address}</div>
                    <Link href={`grades/${school.id}`} className="border  px-5 py-1 bg-sky-500">Ver grados</Link>
                </div>
                <img className="basis-20" src={school.image} width="30%" height="30%"/>
            </div>;
};

export default SchoolCard;