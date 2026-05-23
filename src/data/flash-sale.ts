import { assets } from "@/data/assets";

export type FlashSaleProduct = {
  id: string;
  name: string;
  image: string;
  discount: string;
  href: string;
};

/** ISO date string for the flash sale countdown target */
export const flashSaleEndDate = "2026-06-01T00:00:00.000Z";

export const flashSale = {
  title: "Deals and offers",
  subtitle: "Hygiene equipments",
  mobileSubtitle: "Electronic equipments",
  endDate: flashSaleEndDate,
  products: [
    {
      id: "flash-1",
      name: "Smart watches",
      image: assets.categories.tech.product8,
      discount: "-25%",
      href: "/products/smart-watches",
    },
    {
      id: "flash-2",
      name: "Laptops",
      image: assets.categories.tech.image34,
      discount: "-25%",
      href: "/products/laptops",
    },
    {
      id: "flash-3",
      name: "GoPro",
      image: assets.categories.tech.image32,
      discount: "-25%",
      href: "/products/gopro",
    },
    {
      id: "flash-4",
      name: "Headphones",
      image: assets.suppliers.alibaba.tech.image86,
      discount: "-25%",
      href: "/products/headphones",
    },
    {
      id: "flash-5",
      name: "Cameras",
      image: assets.categories.tech.product6,
      discount: "-25%",
      href: "/products/cameras",
    },
  ] satisfies FlashSaleProduct[],
};
