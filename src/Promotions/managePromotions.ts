import { products } from "../Data/data";
import { Promotion } from "../Types/types";
import { findProductByName } from "../utils/utils";

export function addPromotionToProduct(productName: string, promotion: Promotion): void {
  const product = findProductByName(products, productName);
  if (!product) {
    console.log(" Product not found.");
    return;
  }
  product.promotion = promotion;
  console.log(`Promotion added to '${product.name}'`);
}

export function showPromotion(productName: string): void {
  const product = findProductByName(products, productName);
  if (!product || !product.promotion) {
    console.log(" No promotion for this product.");
    return;
  }
  const { discountPercentage, endDate} = product.promotion;
  console.log(`Promotion for ${product.name}: ${discountPercentage}% off until ${endDate}`);
}
