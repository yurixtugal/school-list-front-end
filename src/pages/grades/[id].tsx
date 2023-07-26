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
            <div className="font-semibold text-2xl">{school.name}</div>
            <div className=" grid grid-cols-4 gap-4 bg-center py-4">
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
    const res = await fetch(`http://localhost:3000/grades/school/${id}`)
    const grades = await res.json()
    const resSchool = await fetch(`http://localhost:3000/schools/${id}`)
    const school = await resSchool.json()
    console.log(grades,school)
    
    return {
        props: {
            grades,
            school
        }
    }
}

