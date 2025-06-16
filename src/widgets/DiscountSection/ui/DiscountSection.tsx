import cn from "classnames";
import styles from "./DiscountSection.module.scss";
import DiscountImage from "./images/DiscountImage.jpg";

interface Props {
  className?: string;
}
export function DiscountSection({ className }: Props) {
  return (
    <section className={cn(styles.root, className)}>
      <img
        src={DiscountImage}
        alt="Subscribe and get a discount"
        className={styles.image}
      />
      <div className={styles.overlay}>
        <span className={styles.title}>Скидка 7%</span>
        <span className={styles.description}>
          Получите скидку 7% на первую покупку при подписке
          <br />
          на наши эксклюзивные акции, обновления и новости
        </span>
        <div className={styles.bottom}>
          <input type="email" placeholder="Ваш E-mail" />
          <button>Подписаться</button>
        </div>
      </div>
    </section>
  );
}
