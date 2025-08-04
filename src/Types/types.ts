export type Supplier = {
  name: string;
  email?: string;
  phone?: string;
};

export type Product = {
  name: string;
  category: string;
  stock: number;
  supplierId?: string;
  promotion?: Promotion;
};

export type Promotion = {
  
  discountPercentage: number;
  endDate: string; 
}
