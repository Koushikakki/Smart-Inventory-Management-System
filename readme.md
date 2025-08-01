#  Smart Inventory Management System (Console-Based)

This is a lightweight, terminal-based inventory management system designed for a small electronics retail business. It helps manage products, suppliers, promotions, and stock levels — all through simple CLI inputs.

---

##  Features

###  Product Management
- Add new products (name, category, stock)
- Associate products with a supplier (optional)
- Attach promotional offers (optional: discount %, end date)
- View a list of all products with stock
- View full product details (including promotions & supplier info)
- Restock products

###  Supplier Management
- Add new suppliers (with optional email and phone)
- View all suppliers
- View supplier details and associated products

---

##  Tech Stack

- TypeScript
- Node.js
- `readline` module (for CLI interaction)


---

### How to Run

 1. Clone the Repo


git clone https://github.com/your-username/Smart-Inventory-Management-System.git
cd Smart-Inventory-Management-System

2. Install Dependencies

npm install

3. Compile TypeScript to JavaScript

npx tsc


4. Run the App

npx ts-node src/main.ts
