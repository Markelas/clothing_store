import cn from "classnames";
import styles from "./SpecialOffersCard.module.scss";

interface Props {
  className?: string;
  sourceImage: string;
  productName: string;
}

export function SpecialOffersCard({
  className,
  sourceImage,
  productName,
}: Props) {
  return (
    <div className={cn(styles.root, className)}>
      <img src={sourceImage} alt={productName} className={styles.image} />
      <span className={styles.topText}>Спецпредложения</span>
      <span className={styles.bottomText}>{productName}</span>
    </div>
  );
}
