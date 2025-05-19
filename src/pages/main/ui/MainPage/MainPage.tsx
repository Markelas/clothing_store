import styles from "./MainPage.module.scss";
import { HeroBlock } from "pages/main/ui/MainPage/HeroBlock.tsx";
import { WhiteContainer } from "shared/ui/WhiteContainer/WhiteContainer.tsx";
import { mockProducts } from "shared/fixtures/products.ts";
import { mockProductsNew } from "shared/fixtures/productsNew.ts";
import { SectionWithCarousel } from "widgets/SectionWithCarousel/ui/SectionWithCarousel.tsx";
import { CategoryGrid } from "widgets/CategoryGrid";

export function MainPage() {
  return (
    <>
      <HeroBlock />
      <WhiteContainer>
        <SectionWithCarousel
          title="Самое популярное сейчас"
          products={mockProducts}
          carouselId={"popular"}
          className={styles.popular}
        />
        <SectionWithCarousel
          title="Новинки"
          products={mockProductsNew}
          carouselId={"new"}
          className={styles.new}
        />
        <CategoryGrid className={styles.categoryGrid} />
        <SectionWithCarousel
          title="Для вечерних прогулок"
          products={mockProductsNew}
          carouselId={"eveningWalk"}
          className={styles.eveningWalk}
        />
      </WhiteContainer>
    </>
  );
}
