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

export function listProducts(): void {
  console.log(`\n Product List:`);
  products.forEach((p) =>
    console.log(`- ${p.name} [${p.category}] | Stock: ${p.stock}`)
  );
}

export function showProductDetails(name: string): void {
  const product = products.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (!product) return console.log(` Product not found with name '${name}'.`);
  
  console.log(`\n Product Details:
Name: ${product.name}
Category: ${product.category}
Stock: ${product.stock}`);

  if (product.supplierId) {
    const supplier = suppliers.find((s) => s.id === product.supplierId);
    if (supplier) {
      console.log(`Supplier: ${supplier.name}`);
    }
  }
}



    
