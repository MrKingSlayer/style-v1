interface FavoriteClothesType {
  id: number;
  src: string;
  category: string;
  title: string;
  price: string | number;
  off: string;
  badge: string;
}

export const FavoriteClothesElements: FavoriteClothesType[] = [
  {
    id: 1,
    src: "/static/dress1.png",
    category: "T-Shirt",
    title: "مردانه یقه گرد با پرینت خاکستری مشکی",
    price: "$12.50",
    off: "$25.15",
    badge: "32% off",
  },
  {
    id: 2,
    src: "/static/dress2.png",
    category: "T-Shirt",
    title: "مردانه یقه گرد با پرینت خاکستری مشکی",
    price: "$95.15",
    off: "$25.15",
    badge: "32% off",
  },
  {
    id: 3,
    src: "/static/dress1.png",
    category: "T-Shirt",
    title: "مردانه یقه گرد با پرینت خاکستری مشکی",
    price: "$30.15",
    off: "$25.15",
    badge: "32% off",
  },
  {
    id: 4,
    src: "/static/dress2.png",
    category: "T-Shirt",
    title: "مردانه یقه گرد با پرینت خاکستری مشکی",
    price: "$30.15",
    off: "$25.15",
    badge: "32% off",
  },
];
