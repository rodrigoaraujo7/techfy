import { Product } from "@/types/product";

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("/data/products.json");

  return response.json();
}
