import { Product } from "@/interfaces/Product";

interface Props {
    product: Product
}

const ProductCard = ({product}: Props) => {
    return  <div className=" bg-white rounded-lg shadow-md p-2 border flex flex-row ">
                <div className="basis-80">
                    <div className="text-xl font-bold">{product.title}</div>
                    <div className="text-gray-600 py-4">{product.description}</div>
                    <div className="text-gray-600 py-3">Precio: {product.price} S./</div>
                </div>
                
                <img  className="basis-20" src={product.image} width="30%" height="30%"/>
                

            </div>
};

export default ProductCard;