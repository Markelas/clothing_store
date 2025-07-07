import { Product } from "entities/product/types";
import airImage1 from "./images/nike_air_max/air_image1.jpg";
import dunkLowBrownImage1 from "./images/nike_dunk_low_brown/nike_dunk_low_image_1.jpg";
import dunkLowPinkImage1 from "./images/nike_dunk_low_pink/nike_dunk_low_image_1.jpg";
import airMoreImage1 from "./images/nike_air_more_uptempo/air_more_image1.jpg";
import jacquemusBag from "./images/jacquemus_bag/jacquemus_bag_image1.jpg";
import vansKnuSkoolGray from "./images/vans_knu_skool/gray/vans_knu_skool_gray_image_1.jpg";

export const mockProductsNew: Product[] = [
  {
    id: 11,
    name: "Кроссовки Nike Air Max 1",
    price: 25999,
    image: airImage1,
    color: "Серый",
    badge: "NEW",
  },
  {
    id: 12,
    name: "Кроссовки Nike Dunk Low Brown",
    price: 21999,
    image: dunkLowBrownImage1,
    color: "Коричневый",
    badge: "NEW",
  },
  {
    id: 13,
    name: "Кроссовки Nike Dunk Low Pink",
    price: 21999,
    image: dunkLowPinkImage1,
    color: "Розовый",
    badge: "NEW",
  },
  {
    id: 14,
    name: "Кроссовки Nike Air More Uptempo BG",
    price: 20199,
    image: airMoreImage1,
    color: "Белый",
    badge: "NEW",
  },
  {
    id: 15,
    name: "Сумка Jacquemus Le Bambidou",
    price: 21999,
    image: jacquemusBag,
    color: "Коричневый",
    badge: "NEW",
  },
  {
    id: 16,
    name: "Кеды Vans Knu Skool",
    price: 11699,
    image: vansKnuSkoolGray,
    color: "Серый",
    badge: "NEW",
  },
];
