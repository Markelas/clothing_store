import styles from "./SectionWithCarousel.module.scss";
import { ProductCarousel } from "../../ProductCarousel";
import { Product } from "entities/product/types.ts";
import cn from "classnames";

interface Props {
  title: string;
  buttonText?: string;
  products: Product[];
  onButtonClick?: () => void;
  carouselId: string;
  className: string;
}

export function SectionWithCarousel({
  title,
  buttonText = "Перейти",
  products,
  onButtonClick,
  carouselId,
  className,
}: Props) {
  return (
    <section className={cn(styles.section, className)}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.button} onClick={onButtonClick}>
          {buttonText}
        </button>
      </header>
      <div className={styles.carouselWrapper}>
        <ProductCarousel products={products} carouselId={carouselId} />
      </div>
    </section>
  );
}
