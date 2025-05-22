import styles from "./CategoryGrid.module.scss";
import ClothesImage from "./images/clothes.jpg";
import ShoesImage from "./images/shoes.jpg";
import AccessoriesImage from "./images/accessories.jpg";
import BagsImage from "./images/bags.jpg";
import SportImage from "./images/sport.jpg";
import cn from "classnames";

interface Props {
  className: string;
}
export function CategoryGrid({ className }: Props) {
  return (
    <div className={cn(styles.root, className)}>
      <div className={`${styles.item} ${styles.large}`}>
        <img src={ClothesImage} className={styles.img} alt="Clothes" />
        <span>одежда</span>
      </div>
      <div className={`${styles.item} ${styles.large}`}>
        <img src={ShoesImage} className={styles.img} alt="Shoes" />
        <span>обувь</span>
      </div>
      <div className={styles.item}>
        <img src={AccessoriesImage} className={styles.img} alt="Accessories" />
        <span>аксессуары</span>
      </div>
      <div className={styles.item}>
        <img src={BagsImage} className={styles.img} alt="Bags" />
        <span>сумки</span>
      </div>
      <div className={styles.item}>
        <img src={SportImage} className={styles.img} alt="Sport" />
        <span>для спорта</span>
      </div>
    </div>
  );
}
