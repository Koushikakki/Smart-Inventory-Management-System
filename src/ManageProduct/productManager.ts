import { Product } from "../Types/types";
import { products , suppliers } from "../Data/data";
import {v4 as uuidv4} from 'uuid';

export function addProduct(name : string, category :string, stock : number, supplierId?: string):void {
    const product: Product = {
    id: uuidv4(),
    name,
    category,
    stock,
    supplierId,
  };
  products.push(product);
  console.log(` Product '${name}' added.`);
}


