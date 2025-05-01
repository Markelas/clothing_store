import styles from "./HeroBlock.module.scss";

export function HeroBlock() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.mainText}>
          Распродажа <span className={styles.discount}>скидки до 90%!</span>
          товаров для неё
        </h2>
        <button className={styles.button}>Перейти в каталог</button>
      </div>
    </section>
  );
}
