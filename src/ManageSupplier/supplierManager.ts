import { Supplier } from '../Types/types'; 
import { suppliers,products } from '../Data/data';
import { v4 as uuidv4 } from 'uuid';


export function addSupplier(name: string, email?: string, phone?: string): void {
  const supplier: Supplier = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  suppliers.push(supplier);
  console.log(` Supplier '${name}' added.`);
}



