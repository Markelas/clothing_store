export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: "HOT" | "SALE" | null | undefined;
}
