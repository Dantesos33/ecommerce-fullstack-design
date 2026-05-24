import { assets } from "@/data/assets";

export type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
}

export const recommendations: Product[] = [
  {
    id: 1,
    title: "T-shirts with multiple colors, for men",
    subtitle: "Light blue",
    price: 10.3,
    image: assets.products.polo,
  },
  {
    id: 2,
    title: "Brown winter coat medium size",
    subtitle: "Warm & stylish",
    price: 10.3,
    image: assets.products.jacket,
  },
  {
    id: 3,
    title: "Blue blazer for men",
    subtitle: "Formal collection",
    price: 12.5,
    image: assets.products.suit,
  },
  {
    id: 4,
    title: "Leather wallet",
    subtitle: "Premium quality",
    price: 34,
    image: assets.products.wallet,
  },
  {
    id: 5,
    title: "Travel backpack",
    subtitle: "Modern design",
    price: 99,
    image: assets.products.backpack,
  },
  {
    id: 6,
    title: "Jeans shorts for men",
    subtitle: "Casual wear",
    price: 9.99,
    image: assets.products.shorts,
  },
  {
    id: 7,
    title: "Wireless headphones",
    subtitle: "Noise cancellation",
    price: 8.99,
    image: assets.products.headphones,
  },
  {
    id: 8,
    title: "Clay pot",
    subtitle: "Traditional cookware",
    price: 10.3,
    image: assets.products.pot,
  },
  {
    id: 9,
    title: "Electric kettle",
    subtitle: "Fast boiling",
    price: 80.95,
    image: assets.products.kettle,
  },
  {
    id: 10,
    title: "Polo shirt slim fit",
    subtitle: "Classic style",
    price: 14.99,
    image: assets.products.polo,
  },
];