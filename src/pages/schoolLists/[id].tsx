import { SchoolList } from "@/interfaces/SchoolList";
import { GetServerSidePropsContext } from "next";
import { Fragment } from "react";

interface Props {
    schoolList: SchoolList
}

const Grades = ({schoolList}: Props) => {
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
                          Descripción
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Cantidad
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {schoolList.categorySchoolLists.map((categorySchoolList,index) => (
                        <Fragment key={"F_"+index} >
                          <tr key={index} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-medium" colSpan={3}>
                              {categorySchoolList.name}
                            </td>
                          </tr>
                        
                        {categorySchoolList.detailProductCategory.map((detailProduct,index)=>(
                          <tr key={"PL_"+index} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index+1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">{detailProduct.nameProduct}</td>
                                                  <td className="whitespace-nowrap px-6 py-4">{detailProduct.quantity}</td>
                        </tr>
                        ))}
                        </Fragment>   
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

export default Grades

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const id = context.params?.id
    const res = await fetch(`${process.env.API_URL}/school-list/${id}`)
    const schoolList = await res.json()
    console.log(schoolList)
    return {
        props: {
            schoolList
        }
    }
}

