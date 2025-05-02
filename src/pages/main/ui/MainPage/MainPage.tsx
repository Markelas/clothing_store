import styles from "./MainPage.module.scss";
import { HeroBlock } from "pages/main/ui/MainPage/HeroBlock.tsx";
import { WhiteContainer } from "shared/ui/WhiteContainer/WhiteContainer.tsx";
import { ProductCarousel } from "widgets/ProductCarousel/ProductCarousel.tsx";
import { mockProducts } from "shared/fixtures/products.ts";

export function MainPage() {
  return (
    <>
      <HeroBlock />
      <WhiteContainer>
        <section className={styles.popular}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.title}>Самое популярное сейчас</h2>
            <button className={styles.viewAllBtn}>Перейти</button>
          </header>
          <div className={styles.carouselWrapper}>
            <ProductCarousel products={mockProducts} />
          </div>
        </section>
        {/*<section>*/}
        {/*  <header className={styles.sectionHeader}>*/}
        {/*    <h2 className={styles.title}>Новинки</h2>*/}
        {/*    <button className={styles.viewAllBtn}>Перейти</button>*/}
        {/*    <div className={styles.carouselWrapper}></div>*/}
        {/*  </header>*/}
        {/*</section>*/}
      </WhiteContainer>
    </>
  );
}
