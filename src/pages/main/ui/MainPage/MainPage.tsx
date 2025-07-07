import styles from "./MainPage.module.scss";
import { HeroBlock } from "pages/main/ui/MainPage/HeroBlock.tsx";
import { WhiteContainer } from "shared/ui/WhiteContainer/WhiteContainer.tsx";
import { mockPopularProducts } from "shared/fixtures/products.ts";
import { mockProductsNew } from "shared/fixtures/productsNew.ts";
import { SectionWithCarousel } from "widgets/SectionWithCarousel/ui/SectionWithCarousel.tsx";
import { CategoryGrid } from "widgets/CategoryGrid";
import { ProductPromotion } from "widgets/ProductPromotion";
import { SpecialOffers } from "widgets/SpecialOffers/ui/SpecialOffers.tsx";
import { PriceFilterSection } from "widgets/PriceFilterSection/ui/PriceFilterSection.tsx";
import { SpecialCategories } from "widgets/SpecialСategories";
import { SellShoesWithUs } from "widgets/SellShoesWithUs";
import { DiscountSection } from "widgets/DiscountSection";

export function MainPage() {
  return (
    <>
      <HeroBlock />
      <WhiteContainer>
        <SectionWithCarousel
          title="Самое популярное сейчас"
          products={mockPopularProducts}
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
        <ProductPromotion className={styles.productPromotion} />
        <SpecialOffers className={styles.specialOffers} />
        <PriceFilterSection className={styles.priceFilterSection} />
        <SpecialCategories className={styles.specialCategories} />
        <hr className={styles.sectionDivider} />
        <SellShoesWithUs className={styles.sellShoesWithUs} />
        <DiscountSection className={styles.discountSection} />
      </WhiteContainer>
    </>
  );
}
