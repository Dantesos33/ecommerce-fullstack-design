import { assets } from "@/data/assets";

export type FlashSaleProduct = {
  id: string;
  name: string;
  image: string;
  discount: string;
  href: string;
};

/** ISO date string for the flash sale countdown target */
export const flashSaleEndDate = "2026-06-15T23:59:59.000Z";

export const flashSale = {
  title: "Deals and offers",
  subtitle: "Hygiene equipments",
  mobileSubtitle: "Electronic equipments",
  endDate: flashSaleEndDate,
  products: [
    {
      id: "flash-1",
      name: "Smart watches",
      image: assets.categories.tech.smartWatch,
      discount: "-25%",
      href: "/products/12",
    },
    {
      id: "flash-2",
      name: "Laptops",
      image: assets.categories.tech.laptops,
      discount: "-25%",
      href: "/products/14",
    },
    {
      id: "flash-3",
      name: "GoPro",
      image: assets.categories.tech.gopro,
      discount: "-25%",
      href: "/products/15",
    },
    {
      id: "flash-4",
      name: "Headphones",
      image: assets.categories.tech.headphones,
      discount: "-25%",
      href: "/products/7",
    },
    {
      id: "flash-5",
      name: "Cameras",
      image: assets.categories.tech.cameras,
      discount: "-25%",
      href: "/products/13",
    },
  ] satisfies FlashSaleProduct[],
};
