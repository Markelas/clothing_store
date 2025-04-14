import styles from "./MainPage.module.scss";

export function MainPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.mainText}>Распродажа товаров для неё</h1>
        </div>
      </section>
      <section className={styles.whiteBlock}>
        <div className={styles.content}>
          <p>Контент внутри 1440px</p>
        </div>
      </section>
    </>
  );
}
