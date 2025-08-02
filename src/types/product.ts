export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
  brand: string;
  category:
    | "smartphone"
    | "camera"
    | "smartwatch"
    | "headphone"
    | "earbuds"
    | "tablet";
  specs: Record<string, string>;
};
