import cn from "classnames";
import styles from "./PriceFilterSection.module.scss";
import { useState } from "react";
import { mockProducts } from "shared/fixtures/products";
import { ProductCarousel } from "widgets/ProductCarousel";
import { PriceRangeSelector } from "shared/ui/PriceRangeSelector/PriceRangeSelector";

interface Props {
  className: string;
}

export function PriceFilterSection({ className }: Props) {
  const prices = mockProducts.map((p) => p.price);
  const realMinPrice = Math.min(...prices);
  const realMaxPrice = Math.max(...prices);

  const [range, setRange] = useState<[number, number]>([
    realMinPrice,
    realMaxPrice,
  ]);
  const [filtered, setFiltered] = useState(mockProducts);

  const handleFilter = () => {
    const [min, max] = range;
    const results = mockProducts.filter(
      (item) => item.price >= min && item.price <= max,
    );
    setFiltered(results);
  };

  return (
    <section className={cn(styles.root, className)}>
      <h2 className={styles.title}>Подберём пару по бюджету</h2>

      <div className={styles.box}>
        <div className={styles.controls}>
          <div className={styles.headerLine}>
            <label>
              Цена
              <PriceRangeSelector
                minLimit={realMinPrice}
                maxLimit={realMaxPrice}
                value={range}
                onChange={setRange}
              />
            </label>

            <button onClick={handleFilter} className={styles.button}>
              Подобрать
            </button>
          </div>
        </div>

        {filtered.length > 0 ? (
          <ProductCarousel
            carouselId="priceFilter"
            products={filtered}
            className={styles.carousel}
          />
        ) : (
          <div className={styles.notFound}>
            Нет товаров в этом ценовом диапазоне
          </div>
        )}
      </div>
    </section>
  );
}
