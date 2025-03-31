import styles from "./MainPage.module.scss";

export function MainPage() {
  return (
    <>
      <section className={styles.hero}>
        <h1>Большой заголовок</h1>
      </section>
      <section className={styles.whiteBlock}>
        <div className={styles.content}>
          <p>Контент внутри 1440px</p>
        </div>
      </section>
    </>
  );
}
