import styles from "./ProductCard.module.scss";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  badge?: "HOT" | "SALE";
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.root}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}
