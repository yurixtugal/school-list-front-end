import SchoolListCard from "@/components/SchoolListCard";
import { SchoolList } from "@/interfaces/SchoolList";

interface Props {
    schoolLists: SchoolList[]
}

const Products = ({schoolLists}: Props) => {
    console.log(schoolLists)
    return (
    <div className=" bg-slate-50  py-5">
        <div className="sm:container mx-auto">
            <div className="font-semibold xsm:justify-center xsm:flex sm:justify-normal">Listas escolares</div>
            <div className=" grid  md:grid-cols-2 ms:grid-cols-1 xl:grid-cols-3 gap-4 bg-center py-4 xsm:justify-center sm:justify-normal">
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
    
    const res = await fetch(`${process.env.API_URL}/school-list`)
    const schoolLists = await res.json()
    return {
        props: {
            schoolLists
        }
    }
}

