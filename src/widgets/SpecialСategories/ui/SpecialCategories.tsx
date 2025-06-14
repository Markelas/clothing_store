import cn from "classnames";
import styles from "./SpecialCategories.module.scss";
import DealerCustom from "./images/dealer-custom.jpg";
import PreLovedByDealer from "./images/pre-loved-by-dealer.jpg";

interface Props {
  className?: string;
}

const specialCategories = [
  {
    id: 1,
    description: "закастомизируем ваш\nгардероб",
    title: "dealer.custom",
    img: DealerCustom,
  },
  {
    id: 2,
    description: "для тех, кто ценит\nосознанное потребление",
    title: "pre-loved by dealer",
    img: PreLovedByDealer,
  },
];

export function SpecialCategories({ className }: Props) {
  return (
    <section className={cn(styles.root, className)}>
      <h2 className={styles.sectionTitle}>Особенные категории</h2>
      <div className={styles.cardsWrapper}>
        {specialCategories.map((category) => (
          <a
            key={category.id}
            href="#"
            className={styles.card}
            role="link"
            tabIndex={0}
          >
            <img
              src={category.img}
              alt={category.title}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <span className={styles.cardDescription}>
                {category.description}
              </span>
              <span className={styles.cardTitle}>{category.title}</span>
              <span className={styles.link}>смотреть</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
