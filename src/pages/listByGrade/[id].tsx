import { SchoolList } from "@/interfaces/SchoolList";
import { GetServerSidePropsContext } from "next";

interface Props {
    schoolList: SchoolList
}

const ListByGrades = ({schoolList}: Props) => {
    return (
        <div className="py-5">
        <div className="container mx-auto">
          <div className="font-semibold text-4xl flex justify-center pb-5">
            {schoolList.grade.school?.name} - {schoolList.year}
          </div>
          <div className="font-semibold text-2xl flex justify-center  pb-8">
            Lista escolar - {schoolList.grade.name} - {schoolList.grade.section}
          </div>
          <div className=" text-xl  pb-8">{schoolList.description}</div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Producto
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Cantidad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schoolList.productSchoolLists.map((productList,index)=>(
                        <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index+1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">{productList.product.title} - {productList.product.description}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{productList.quantity}</td>
                      </tr>
                      ))}
                      
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ListByGrades

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id
    console.log(id)
    const res = await fetch(`http://localhost:3000/school-list/schoolListByGrade/${id}`)
    const schoolList = await res.json()
    return {
        props: {
            schoolList
        }
    }
}