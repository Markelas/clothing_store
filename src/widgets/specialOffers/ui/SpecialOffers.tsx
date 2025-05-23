import styles from "./SpecialOffers.module.scss";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import BestPrice from "../images/best_price.jpg";
import Style from "../images/style.jpg";
import Social from "../images/social.jpg";
import Shops from "../images/shops.jpg";
import { SpecialOffersCard } from "widgets/SpecialOffers/ui/SpecialOffersCard.tsx";

interface Props {
  className?: string;
}

const offers = [
  {
    id: 1,
    name: "Гарантия лучшей цены",
    img: BestPrice,
  },
  {
    id: 2,
    name: "Большое комьюнити",
    img: Social,
  },
  {
    id: 3,
    name: "Только оригинальные бренды",
    img: Style,
  },
  {
    id: 4,
    name: "Большая сеть магазинов",
    img: Shops,
  },
];
export function SpecialOffers({ className }: Props) {
  return (
    <section className={cn(styles.root, className)}>
      <Swiper
        modules={[Autoplay, Scrollbar]}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        scrollbar={{ hide: true }}
        className={styles.swiper}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <SpecialOffersCard
              sourceImage={offer.img}
              productName={offer.name}
              className={styles.card}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
