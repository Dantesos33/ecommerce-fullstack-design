import { assets } from "@/data/assets";

export type CategoryProduct = {
  id: string;
  name: string;
  priceLabel: string;
  image: string;
  href: string;
};

export type CategorySectionData = {
  id: string;
  title: string;
  mobileTitle?: string;
  bannerImage: string;
  sourceHref: string;
  products: CategoryProduct[];
};

export const homeOutdoorSection: CategorySectionData = {
  id: "home-outdoor",
  title: "Home and outdoor",
  bannerImage: assets.backgrounds.outdoorBg,
  sourceHref: "/categories/home-outdoor",
  products: [
    {
      id: "ho-1",
      name: "Polo Shirt",
      priceLabel: "From USD 45",
      image: assets.products.polo,
      href: "/products/1",
    },
    {
      id: "ho-2",
      name: "Jacket",
      priceLabel: "From USD 89",
      image: assets.products.jacket,
      href: "/products/2",
    },
    {
      id: "ho-3",
      name: "Kitchen Pot Set",
      priceLabel: "From USD 79",
      image: assets.products.pot,
      href: "/products/8",
    },
    {
      id: "ho-4",
      name: "Smart Watch Ultra",
      priceLabel: "From USD 599",
      image: assets.products.smartwatch,
      href: "/products/12",
    },
    {
      id: "ho-5",
      name: "Travel Backpack",
      priceLabel: "From USD 79",
      image: assets.products.backpack,
      href: "/products/5",
    },
    {
      id: "ho-6",
      name: "Headphones",
      priceLabel: "From USD 149",
      image: assets.products.headphones,
      href: "/products/7",
    },
    {
      id: "ho-7",
      name: "Business Suit",
      priceLabel: "From USD 199",
      image: assets.products.suit,
      href: "/products/3",
    },
    {
      id: "ho-8",
      name: "Electric Kettle",
      priceLabel: "From USD 39",
      image: assets.products.kettle,
      href: "/products/9",
    },
  ],
};

export const electronicsSection: CategorySectionData = {
  id: "electronics",
  title: "Consumer electronics and gadgets",
  mobileTitle: "Consumer electronics",
  bannerImage: assets.backgrounds.gadgetsBg,
  sourceHref: "/categories/electronics",
  products: [
    {
      id: "el-1",
      name: "Smart Watch Ultra",
      priceLabel: "USD 599",
      image: assets.products.smartwatch,
      href: "/products/12",
    },
    {
      id: "el-2",
      name: "Canon Camera",
      priceLabel: "USD 998",
      image: assets.products.camera,
      href: "/products/13",
    },
    {
      id: "el-3",
      name: "Headphones",
      priceLabel: "USD 149",
      image: assets.products.headphones,
      href: "/products/7",
    },
    {
      id: "el-4",
      name: "Smartphone Pro Max",
      priceLabel: "USD 1299",
      image: assets.products.smartphone,
      href: "/products/10",
    },
    {
      id: "el-5",
      name: "Wireless Headset",
      priceLabel: "USD 129",
      image: assets.products.headset,
      href: "/products/16",
    },
    {
      id: "el-6",
      name: "Gaming Laptop",
      priceLabel: "USD 1499",
      image: assets.products.laptop,
      href: "/products/14",
    },
    {
      id: "el-7",
      name: "Smartphone Model",
      priceLabel: "USD 899",
      image: assets.products.smartphone2,
      href: "/products/11",
    },
    {
      id: "el-8",
      name: "Electric Kettle",
      priceLabel: "USD 39",
      image: assets.products.kettle,
      href: "/products/9",
    },
  ],
};
