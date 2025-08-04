import { products } from "../Data/data";
import { Product } from "../Types/types";
import { findProductByName } from "../utils/utils";

export function addProduct(name: string, category: string, stock: number): void {
  const product = findProductByName(products, name);
  if (product) {
    console.log(" Product already exists.");
    return;
  }
  const newProduct: Product = { name, category, stock };
  products.push(newProduct);
  console.log(` Product '${name}' added.`);
}




export function listProducts(): void {
  if (products.length === 0) {
    console.log(" No products found.");
    return;
  }
  console.log(" Product List:");
  products.forEach((product, index) => {
    console.log(
      `${index + 1}. ${product.name} - Category: ${product.category}, Stock: ${product.stock}` +
      `${product.promotion ? ` - Promotion: ${product.promotion.discountPercentage}% off till ${product.promotion.endDate}` : ""}`
    );
  });
}




export function showProductDetails(name: string): void {
  const product = findProductByName(products, name);
  if (!product) {
    console.log(" Product not found.");
    return;
  }
  console.log(`Details for '${product.name}':`);
  console.log(`Category: ${product.category}`);
  console.log(`Stock: ${product.stock}`);
  if (product.promotion) {
    console.log(`Promotion: ${product.promotion.discountPercentage}% off until ${product.promotion.endDate}`);
  }
}




export function restockProduct(name: string, quantity: number): void {
  const product = findProductByName(products, name);
  if (!product) {
    console.log(" Product not found.");
    return;
  }
  product.stock += quantity;
  console.log(`'${product.name}' restocked by ${quantity}. Total stock: ${product.stock}`);
}
