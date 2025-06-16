import SellShoesWithUsImage from "./images/sell-shoes-with-us.jpg";
import cn from "classnames";
import styles from "./SellShoesWithUs.module.scss";
import { GradientButton } from "shared/ui/GradientButton/GradientButton.tsx";

interface Props {
  className?: string;
}
export function SellShoesWithUs({ className }: Props) {
  return (
    <section className={cn(styles.root, className)}>
      <img
        src={SellShoesWithUsImage}
        alt="Sell shoes with us image"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <span className={styles.title}>
          Продай свою пару
          <br />
          вместе с нами
        </span>
        <span className={styles.description}>
          Реализуем позиции, которые потеряли
          <br />
          актуальность в вашем гардеробе
        </span>
        <GradientButton
          onClick={() => {}}
          className={styles.button}
          buttonText="В каталог"
        />
      </div>
    </section>
  );
}
