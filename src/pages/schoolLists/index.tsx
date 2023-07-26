import SchoolListCard from "@/components/SchoolListCard";
import { SchoolList } from "@/interfaces/SchoolList";

interface Props {
    schoolLists: SchoolList[]
}

const Products = ({schoolLists}: Props) => {
    console.log(schoolLists)
    return (
    <div className=" bg-slate-50  py-5">
        <div className="container mx-auto">
            <div className="font-semibold text-2xl">Listas escolares</div>
            <div className=" grid grid-cols-3 gap-4 bg-center py-4">
            {schoolLists.map((schoolList) => (
                <SchoolListCard key={schoolList.id} schoolList={schoolList} />
            ))}
            </div>
        </div>       
    </div>
  );
}

export default Products

export const getServerSideProps = async () => {
    
    const res = await fetch("http://localhost:3000/school-list")
    const schoolLists = await res.json()
    console.log(schoolLists)
    return {
        props: {
            schoolLists
        }
    }
}

