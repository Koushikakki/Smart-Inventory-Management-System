export interface Supplier {
    id : string ;
    name : string ;
    email ?: string ;
    phone ?: string ; 
}


export interface Product {
    id : string;
    name : string;
    category : string;
    stock : number;
    supplierId ?: string;
}