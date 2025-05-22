import styles from "./ProductPromotion.module.scss";
import BredFrMixerImage from "./images/bred_fr_mixer.jpg";
import NikeAirJordanImage from "./images/nike_air_jordan_1.jpg";
import NikeAirMaximus from "./images/nike_air_maximus.jpg";
import cn from "classnames";
import { ProductPromotionHeader } from "./ProductPromotionHeader.tsx";

interface Props {
  className?: string;
}
export function ProductPromotion({ className }: Props) {
  return (
    <section className={cn(styles.root, className)}>
      <ProductPromotionHeader />
      <div className={styles.cardBox}>
        <div className={styles.item}>
          <img
            src={BredFrMixerImage}
            className={styles.img}
            alt="Bred fr mixer"
          />
          <span>BRED FR MIXER</span>
          <button></button>
        </div>
        <div className={styles.item}>
          <img
            src={NikeAirJordanImage}
            className={styles.img}
            alt="Nike Air Jordan 1"
          />
          <span>Nike Air Jordan 1</span>
          <button></button>
        </div>
        <div className={styles.item}>
          <img
            src={NikeAirMaximus}
            className={styles.img}
            alt="Nike Air Maximus"
          />
          <span>NIKE AIR MAXIMUS</span>
          <button></button>
        </div>
      </div>
    </section>
  );
}
