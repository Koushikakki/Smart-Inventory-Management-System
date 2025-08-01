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



export function listSuppliers(): void {
  console.log(`\n Suppliers:`);
  suppliers.forEach((s) =>
    console.log(`- ${s.name}${s.email ? ` | Email: ${s.email}` : ''}${s.phone ? ` | Phone: ${s.phone}` : ''}`));

  
}



export function showSupplierDetails(name: string): void {
  const matchingSuppliers = suppliers.filter(s =>
    s.name.toLowerCase().includes(name.toLowerCase())
  );

  if (matchingSuppliers.length === 0) {
    console.log(` No supplier found matching '${name}'.`);
    return;
  }

  console.log(`\n Matching Supplier(s):`);
  matchingSuppliers.forEach(s => {
    console.log(`\nID: ${s.id}
Name: ${s.name}
${s.email ? `Email: ${s.email}` : ''}
${s.phone ? `Phone: ${s.phone}` : ''}`);
  });
}
