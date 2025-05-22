import styles from "./ProductPromotionHeader.module.scss";

export function ProductPromotionHeader() {
  return (
    <div className={styles.sectionHeader}>
      <div className={styles.line}>
        <div className={styles.bar} />
        <div className={styles.circle} />
      </div>
      <header className={styles.header}>
        <span className={styles.titleLook}>Взгляните на</span> <br />
        <span className={styles.companyName}>NIKE</span>
      </header>
      <div className={styles.line}>
        <div className={styles.circle} />
        <div className={styles.bar} />
      </div>
    </div>
  );
}
