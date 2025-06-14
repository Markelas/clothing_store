import { Product } from "entities/product/types";
import airImage1 from "./images/nike_air_max/air_image1.jpg";
import dunkLowBrownImage1 from "./images/nike_dunk_low_brown/nike_dunk_low_image_1.jpg";
import dunkLowPinkImage1 from "./images/nike_dunk_low_pink/nike_dunk_low_image_1.jpg";
import airMoreImage1 from "./images/nike_air_more_uptempo/air_more_image1.jpg";
import jacquemusBag from "./images/jacquemus_bag/jacquemus_bag_image1.jpg";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Кроссовки Nike Air Max 1",
    price: 25999,
    image: airImage1,
    badge: "HOT",
  },
  {
    id: 2,
    name: "Кроссовки Nike Dunk Low Brown",
    price: 21999,
    image: dunkLowBrownImage1,
    badge: "SALE",
  },
  {
    id: 3,
    name: "Кроссовки Nike Dunk Low Pink",
    price: 21999,
    image: dunkLowPinkImage1,
    badge: "SALE",
  },
  {
    id: 4,
    name: "Кроссовки Nike Air More Uptempo BG",
    price: 20199,
    image: airMoreImage1,
    badge: "SALE",
  },
  {
    id: 5,
    name: "Сумка Jacquemus Le Bambidou",
    price: 21999,
    image: jacquemusBag,
    badge: null,
  },
  {
    id: 6,
    name: "Рюкзак The North Face Borealis Tote",
    price: 21999,
    image: jacquemusBag,
    badge: null,
  },
];
