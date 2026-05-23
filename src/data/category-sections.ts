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
  bannerImage: assets.backgrounds.group969,
  sourceHref: "/categories/home-outdoor",
  products: [
    {
      id: "ho-1",
      name: "Soft chairs",
      priceLabel: "From USD 19",
      image: assets.categories.interior.product7,
      href: "/products/soft-chairs",
    },
    {
      id: "ho-2",
      name: "Sofa and chair",
      priceLabel: "From USD 19",
      image: assets.categories.interior.product1,
      href: "/products/sofa-chair",
    },
    {
      id: "ho-3",
      name: "Kitchen dishes",
      priceLabel: "From USD 19",
      image: assets.categories.interior.product3,
      href: "/products/kitchen-dishes",
    },
    {
      id: "ho-4",
      name: "Smart watches",
      priceLabel: "From USD 19",
      image: assets.categories.tech.product8,
      href: "/products/smart-watches",
    },
    {
      id: "ho-5",
      name: "Kitchen mixer",
      priceLabel: "From USD 19",
      image: assets.categories.interior.product9,
      href: "/products/kitchen-mixer",
    },
    {
      id: "ho-6",
      name: "Blenders",
      priceLabel: "From USD 19",
      image: assets.categories.interior.product6,
      href: "/products/blenders",
    },
    {
      id: "ho-7",
      name: "Home appliance",
      priceLabel: "From USD 19",
      image: assets.categories.interior.image89,
      href: "/products/home-appliance",
    },
    {
      id: "ho-8",
      name: "Coffee maker",
      priceLabel: "From USD 19",
      image: assets.categories.interior.product8,
      href: "/products/coffee-maker",
    },
  ],
};

export const electronicsSection: CategorySectionData = {
  id: "electronics",
  title: "Consumer electronics and gadgets",
  mobileTitle: "Consumer electronics",
  bannerImage: assets.backgrounds.image98,
  sourceHref: "/categories/electronics",
  products: [
    {
      id: "el-1",
      name: "Smart watches",
      priceLabel: "From USD 19",
      image: assets.categories.tech.product8,
      href: "/products/smart-watches",
    },
    {
      id: "el-2",
      name: "Cameras",
      priceLabel: "From USD 89",
      image: assets.categories.tech.product6,
      href: "/products/cameras",
    },
    {
      id: "el-3",
      name: "Headphones",
      priceLabel: "From USD 10",
      image: assets.suppliers.alibaba.tech.image86,
      href: "/products/headphones",
    },
    {
      id: "el-4",
      name: "Smart watches",
      priceLabel: "From USD 90",
      image: assets.categories.tech.image33,
      href: "/products/smart-watches-pro",
    },
    {
      id: "el-5",
      name: "Headset",
      priceLabel: "From USD 240",
      image: assets.categories.tech.image29,
      href: "/products/headset",
    },
    {
      id: "el-6",
      name: "Laptops & PC",
      priceLabel: "From USD 19",
      image: assets.categories.tech.image34,
      href: "/products/laptops",
    },
    {
      id: "el-7",
      name: "Smartphones",
      priceLabel: "From USD 10",
      image: assets.categories.tech.image23,
      href: "/products/smartphones",
    },
    {
      id: "el-8",
      name: "Electric kettle",
      priceLabel: "From USD 100",
      image: assets.categories.tech.image85,
      href: "/products/electric-kettle",
    },
  ],
};
