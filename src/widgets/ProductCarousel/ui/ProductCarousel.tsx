import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductCarousel.module.scss";
import { ProductCard } from "entities/product/ui/ProductCard/ProductCard.tsx";
import { Product } from "entities/product/types.ts";

interface Props {
  products: Product[];
  carouselId: string;
}

export function ProductCarousel({ products, carouselId }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navigation}>
        <div className={`${styles.prev} prev-${carouselId}`}></div>
        <div className={`${styles.next} next-${carouselId}`}></div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.prev-${carouselId}`,
          nextEl: `.next-${carouselId}`,
        }}
        spaceBetween={17}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1615: { slidesPerView: 5 },
        }}
        className={styles.swiper}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
