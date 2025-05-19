import styles from "./CategoryGrid.module.scss";
import ClothesImage from "./images/clothes.svg?react";
import ShoesImage from "./images/shoes.svg?react";
import AccessoriesImage from "./images/accessories.svg?react";
import BagsImage from "./images/bags.svg?react";
import SportImage from "./images/sport.svg?react";
import cn from "classnames";

interface Props {
  className: string;
}
export function CategoryGrid({ className }: Props) {
  return (
    <div className={cn(styles.grid, className)}>
      <div className={`${styles.item} ${styles.large}`}>
        <ClothesImage className={styles.img} />
        <span>одежда</span>
      </div>
      <div className={`${styles.item} ${styles.large}`}>
        <ShoesImage className={styles.img} />
        <span>обувь</span>
      </div>
      <div className={styles.item}>
        <AccessoriesImage className={styles.img} />
        <span>аксессуары</span>
      </div>
      <div className={styles.item}>
        <BagsImage className={styles.img} />
        <span>сумки</span>
      </div>
      <div className={styles.item}>
        <SportImage className={styles.img} />
        <span>для спорта</span>
      </div>
    </div>
  );
}
