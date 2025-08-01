import * as readline from 'readline';
import { addProduct, listProducts, restockProduct, showProductDetails } from './ManageProduct/productManager';
import { addSupplier, listSuppliers, showSupplierDetails } from './ManageSupplier/supplierManager';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`\n=========  Smart Inventory System =========
1. Add Product
2. View All Products
3. View Product Details
4. Restock Product
5. Add Supplier
6. View All Suppliers
7. View Supplier Details
0. Exit`);
}

function ask(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  while (true) {
    showMenu();
    const choice = await ask("Select an option: ");
    switch (choice.trim()) {

      case "1": {
        const name = await ask("Product name: ");
        const category = await ask("Category: ");
        const stock = parseInt(await ask("Initial stock: "), 10);
        addProduct(name, category, stock);
        break;
      }


      case "2":
        listProducts();
        break;


      case "3": {
        const searchName = await ask("Product name: ");
        showProductDetails(searchName.trim());
        break;
      }


      case "4": {
        const restockName = await ask("Product name to restock: ");
        const qty = parseInt(await ask("Quantity to add: "), 10);
        restockProduct(restockName.trim(), qty);
        break;
      }


      case "5": {
        const supplierName = await ask("Supplier name: ");
        const email = await ask("Email (optional): ");
        const phone = await ask("Phone (optional): ");
        addSupplier(supplierName, email || undefined, phone || undefined);
        break;
      }


      case "6":
        listSuppliers();
        break;


      case "7": {
        const supplierSearch = await ask("Supplier name: ");
        showSupplierDetails(supplierSearch.trim());
        break;
      }


      case "0":
        rl.close();
        return;

        
      default:
        console.log(" Invalid option. Try again.");
    }
  }
}

main();
