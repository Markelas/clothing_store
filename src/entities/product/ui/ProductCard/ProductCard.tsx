import styles from "./ProductCard.module.scss";
import HeartIcon from "./heart-icon.svg?react";
import { Product } from "entities/product/types.ts";
import { formatPrice } from "shared/lib";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.root}>
      <div className={styles.productHeader}>
        {product.badge && <span className={styles.badge}>{product.badge}</span>}
        <button className={styles.favorite}>
          <HeartIcon />
        </button>
      </div>
      <img className={styles.image} src={product.image} alt={product.name} />
      <div className={styles.productInfo}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formatPrice(product.price)}</p>
      </div>
    </div>
  );
}
