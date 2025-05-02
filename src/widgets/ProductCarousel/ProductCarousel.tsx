import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./ProductCarousel.module.scss";
import { ProductCard } from "entities/product/ui/ProductCard/ProductCard.tsx";

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  badge?: "HOT" | "SALE";
}

interface Props {
  products: Product[];
}

export function ProductCarousel({ products }: Props) {
  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
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
