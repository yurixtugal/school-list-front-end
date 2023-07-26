import ProductCard from "@/components/ProductCard"
import { Product } from "@/interfaces/Product"

interface Props {
    products: Product[]
}

const Products = ({products}: Props) => {
  return (
    <div className=" bg-slate-50  py-5">
        <div className="container mx-auto">
            <div className="font-semibold">Lista de productos</div>
            <div className=" grid grid-cols-3 gap-4 bg-center py-4">
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
    
    const res = await fetch("http://localhost:3000/products")
    const products = await res.json()
    
    return {
        props: {
            products
        }
    }
}

