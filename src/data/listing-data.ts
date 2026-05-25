import { assets } from "@/data/assets";

export type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  image: string;
  freeShipping: boolean;
  description: string;
  brand: string;
};

export const products: Product[] = [
  { id: 1,  title: "Canon Cmera EOS 2000, Black 10x zoom", price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.smartphone,        freeShipping: true,  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", brand: "Samsung" },
  { id: 2,  title: "GoPro HERO6 4K Action Camera - Black",  price: 986, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.smartphone2,      freeShipping: true,  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Apple" },
  { id: 3,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.headset,        freeShipping: false, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Poco" },
  { id: 4,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.laptop,    freeShipping: true,  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Samsung" },
  { id: 5,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.smartwatch,  freeShipping: true,  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Apple" },
  { id: 6,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.gopro,      freeShipping: false, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Poco" },
  { id: 7,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.headphones,      freeShipping: true,  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Samsung" },
  { id: 8,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.camera,      freeShipping: true,  description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Apple" },
  { id: 9,  title: "GoPro HERO6 4K Action Camera - Black",  price: 998, originalPrice: 1128.00, rating: 7.5, reviews: 154, image: assets.products.smartphone,         freeShipping: false, description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", brand: "Poco" },
];