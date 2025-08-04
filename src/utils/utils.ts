import { Product } from "../Types/types";
import { Supplier } from "../Types/types";

export function findProductByName(products: Product[], name: string): Product | undefined{
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}


export function findSupplierByName(suppliers: Supplier[], name: string): Supplier | undefined {
  return suppliers.find(s => s.name.toLowerCase() === name.toLowerCase());
}

export function isValidDateFormat(endDate: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(endDate) && !isNaN(Date.parse(endDate));
}