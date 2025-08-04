import { suppliers } from "../Data/data";
import { Supplier } from "../Types/types";
import { findSupplierByName } from "../utils/utils";

export function addSupplier(name: string, email?: string, phone?: string): void {
  const existing = findSupplierByName(suppliers, name);
  if (existing) {
    console.log(" Supplier already exists.");
    return;
  }
  const newSupplier: Supplier = { name, email, phone };
  suppliers.push(newSupplier);
  console.log(`Supplier '${name}' added.`);
}

export function listSuppliers(): void {
  if (suppliers.length === 0) {
    console.log(" No suppliers available.");
    return;
  }
  console.log("Supplier List:");
  suppliers.forEach((supplier, index) => {
    console.log(
      `${index + 1}. ${supplier.name}` +
      `${supplier.email ? ` - Email: ${supplier.email}` : ""}` +
      `${supplier.phone ? ` - Phone: ${supplier.phone}` : ""}`
    );
  });
}

export function showSupplierDetails(name: string): void {
  const supplier = findSupplierByName(suppliers, name);
  if (!supplier) {
    console.log(" Supplier not found.");
    return;
  }
  console.log(`Details for '${supplier.name}':`);
  if (supplier.email) console.log(`Email: ${supplier.email}`);
  if (supplier.phone) console.log(`Phone: ${supplier.phone}`);
}
