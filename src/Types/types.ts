export type Supplier = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  supplierId?: string;
};