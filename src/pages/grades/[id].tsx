import GradeCard from "@/components/GradeCard";
import { Grade } from "@/interfaces/Grade";
import { School } from "@/interfaces/School";
import { GetServerSidePropsContext } from "next";

interface Props {
    grades: Grade[],
    school: School
}

const Grades = ({grades, school}: Props) => {
    return (
        <div className=" bg-slate-50  py-5">
        <div className="container mx-auto">
            <div className="font-semibold xsm:justify-center xsm:flex sm:justify-normal">{school.name}</div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 gap-4 bg-center py-4 justify-stretch">
            {grades.map((grade) => (
                <GradeCard key={grade.id} grade={grade} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Grades

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id
    console.log(id)
    const res = await fetch(`${process.env.API_URL}/grades/school/${id}`)
    const grades = await res.json()
    const resSchool = await fetch(`${process.env.API_URL}/schools/${id}`)
    const school = await resSchool.json()
    console.log(grades,school)
    
    return {
        props: {
            grades,
            school
        }
    }
}

