import { Product } from "entities/product/types";
import nikeTechHeraImage1 from "./images/nike_tech_hera/nike_tech_hera_image_1.jpg";
import nikeRevolutionImage1 from "./images/nike_revolution_7/nike_revolution_7_image_1.jpg";
import nikeAirForceLV8Image1 from "./images/nike_air_force_1_LV8/nike_air_force_1_LV8_image_1.jpg";
import jordanAirJordan4RM from "./images/jordan_air_jordan_4_RM/jordan_air_jordan_4_RM_image_1.jpg";
import jordanAirJordan1MMLow from "./images/jordan_air_jordan_1_MM_Low/jordan_air_jordan_1_MM_Low_image_1.jpg";
import newBalance550 from "./images/new_balance_550/new_balance_550_image_1.jpg";
import vansKnuSkoolBlack from "./images/vans_knu_skool/black/vans_knu_skool_black_image_1.jpg";

export const mockPopularProducts: Product[] = [
  {
    id: 1,
    name: "Кроссовки Nike Tech Hera",
    price: 11499,
    image: nikeTechHeraImage1,
    color: "Розовый",
    badge: "HOT",
  },
  {
    id: 2,
    name: "Кроссовки Nike Revolution 7",
    price: 10199,
    image: nikeRevolutionImage1,
    color: "Серый",
    badge: "HOT",
  },
  {
    id: 3,
    name: "Кроссовки Nike Air Force 1 LV8",
    price: 16799,
    image: nikeAirForceLV8Image1,
    color: "Бежевый",
    badge: "SALE",
  },
  {
    id: 4,
    name: "Кроссовки Jordan Air Jordan 4 RM",
    price: 24999,
    image: jordanAirJordan4RM,
    color: "Зеленый",
    badge: "SALE",
  },
  {
    id: 5,
    name: "Кроссовки New Balance 550",
    price: 17999,
    image: newBalance550,
    color: "Бежевый",
    badge: null,
  },
  {
    id: 6,
    name: "Кроссовки Jordan Air Jordan 1 MM Low",
    price: 21999,
    image: jordanAirJordan1MMLow,
    color: "Синий",
    badge: null,
  },
  {
    id: 7,
    name: "Кеды Vans Knu Skool",
    price: 7799,
    image: vansKnuSkoolBlack,
    color: "Черный",
    badge: "SALE",
  },
];
