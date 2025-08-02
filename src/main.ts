import * as readline from "readline";
import { addProduct, listProducts, restockProduct, showProductDetails } from "./ManageProduct/productManager";
import { addSupplier, listSuppliers, showSupplierDetails } from "./ManageSupplier/supplierManager";
import { addPromotionToProduct, showPromotion } from "./Promotions/managePromotions";
import { isValidDateFormat } from "./utils/utils";
import { Promotion } from "./Types/types";


const readLine :readline.Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`\n========= Smart Inventory System =========
1. Add Product
2. View All Products
3. View Product Details
4. Restock Product
5. Add Supplier
6. View All Suppliers
7. View Supplier Details
8. Add Promotion to Product
9. View Product Promotion
0. Exit`);
}

function ask(question: string): Promise<string> {
  return new Promise((resolve) => readLine.question(question, resolve));
}

async function main() {
  while (true) {
    showMenu();
    const choice : string = await ask("Select an option: ");
    switch (choice.trim()) {
      case "1":
        const name : string = await ask("Product name: ");
        const category : string = await ask("Category: ");
        const stock : number = parseInt(await ask("Initial stock: "), 10);
        addProduct(name, category, stock);
        break;
      case "2":
        listProducts();
        break;
      case "3":
        const productname : string = await ask("Product name: ");
        showProductDetails(productname.trim());
        break;
      case "4":
        const restockProductName : string = await ask("Product to restock: ");
        const qty : number = parseInt(await ask("Quantity: "), 10);
        restockProduct(restockProductName.trim(), qty);
        break;
      case "5":
        const supplierName : string = await ask("Supplier name: ");
        const email : string = await ask("Email (optional): ");
        const phone : string = await ask("Phone (optional): ");
        addSupplier(supplierName, email?.trim(), phone?.trim());
        break;
      case "6":
        listSuppliers();
        break;
      case "7":
        const suppliername : string = await ask("Supplier name: ");
        showSupplierDetails(suppliername.trim());
        break;
      case "8":
        const productName : string = await ask("Product name for promotion: ");
        const discount : number = parseFloat(await ask("Discount %: "));
        const endDate : string = await ask("End date (YYYY-MM-DD): ");
        
        if (!isValidDateFormat(endDate)) {
          console.log("Invalid date format.");
          break;
        }
        const promotion: Promotion = {
          discountPercentage: discount,
          endDate,
        };
        addPromotionToProduct(productName.trim(), promotion);
        break;
      case "9":
        const promotionName :string = await ask("Product name: ");
        showPromotion(promotionName.trim());
        break;
      case "0":
        readLine.close();
        return;
      default:
        console.log("Invalid option. Try again.");
    }
  }
}

main();
