import { Brand } from "./Brand";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  brandId: number;
  brand: Brand;
  image: string;
}