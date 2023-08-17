import SchoolCard from "@/components/SchoolCard";
import { School } from "@/interfaces/School";

interface Props {
    schools: School[]
}

const Products = ({schools}: Props) => {
    console.log(schools)
    return (
    <div className=" bg-slate-50  py-5">
        <div className="sm:container mx-auto">
            <div className="font-semibold xsm:justify-center xsm:flex sm:justify-normal">Lista de colegios</div>
            <div className=" grid  md:grid-cols-2 ms:grid-cols-1 xl:grid-cols-3 gap-4 bg-center py-4">
            {schools.map((school) => (
                <SchoolCard key={school.id} school={school} />
            ))}
            </div>
        </div>       
    </div>
  );
}

export default Products

export const getServerSideProps = async () => {
    
    const res = await fetch(`${process.env.API_URL}/schools`)
    const schools = await res.json()
    console.log(schools)
    return {
        props: {
            schools
        }
    }
}

