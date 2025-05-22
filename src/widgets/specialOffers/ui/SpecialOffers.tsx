// import styles from "./SpecialOffers.module.scss";
// import cn from "classnames";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { ProductCard } from "entities/product/ui/ProductCard/ProductCard.tsx";
//
// interface Props {
//   className?: string;
// }
//
// const products = {};
// export function SpecialOffers({ className }: Props) {
//   return (
//     <section className={cn(styles.root, className)}>
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={17}
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1615: { slidesPerView: 5 },
//         }}
//         className={styles.swiper}
//       >
//         {products.map((product) => (
//           <SwiperSlide key={product.id}>
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
