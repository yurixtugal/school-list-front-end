import ProductCard from "@/components/ProductCard"
import { Product } from "@/interfaces/Product"

interface Props {
    products: Product[]
}

const Products = ({products}: Props) => {
  return (
    <div className=" bg-slate-50  py-5">
        <div className="sm:container  xl:mx-auto md:mx-auto xsm:mx-0">
            <div className="font-semibold xsm:justify-center xsm:flex sm:justify-normal">Lista de productos</div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-3 gap-4 bg-center py-4 ">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Products

export const getServerSideProps = async () => {
    const res = await fetch(`${process.env.API_URL}/products`)
    const products = await res.json()
    
    return {
        props: {
            products
        }
    }
}

