export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  badge?: "HOT" | "SALE" | "NEW" | null | undefined;
}
