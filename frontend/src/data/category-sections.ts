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
      name: "Soft chairs",
      priceLabel: "From USD 19",
      image: assets.categories.interior.softChairs,
      href: "/products/soft-chairs",
    },
    {
      id: "ho-2",
      name: "Sofa and chair",
      priceLabel: "From USD 19",
      image: assets.categories.interior.sofaChair,
      href: "/products/sofa-chair",
    },
    {
      id: "ho-3",
      name: "Kitchen dishes",
      priceLabel: "From USD 19",
      image: assets.categories.interior.kitchenDishes,
      href: "/products/kitchen-dishes",
    },
    {
      id: "ho-4",
      name: "Smart watches",
      priceLabel: "From USD 19",
      image: assets.categories.tech.smartWatch,
      href: "/products/smart-watches",
    },
    {
      id: "ho-5",
      name: "Kitchen mixer",
      priceLabel: "From USD 19",
      image: assets.categories.interior.kitchenMixer,
      href: "/products/kitchen-mixer",
    },
    {
      id: "ho-6",
      name: "Blenders",
      priceLabel: "From USD 19",
      image: assets.categories.interior.blender,
      href: "/products/blenders",
    },
    {
      id: "ho-7",
      name: "Home appliance",
      priceLabel: "From USD 19",
      image: assets.categories.interior.homeAppliance,
      href: "/products/home-appliance",
    },
    {
      id: "ho-8",
      name: "Coffee maker",
      priceLabel: "From USD 19",
      image: assets.categories.interior.coffeeMaker,
      href: "/products/coffee-maker",
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
      name: "Smart watches",
      priceLabel: "From USD 19",
      image: assets.categories.tech.smartWatch,
      href: "/products/smart-watches",
    },
    {
      id: "el-2",
      name: "Cameras",
      priceLabel: "From USD 89",
      image: assets.categories.tech.cameras,
      href: "/products/cameras",
    },
    {
      id: "el-3",
      name: "Headphones",
      priceLabel: "From USD 10",
      image: assets.products.headphones,
      href: "/products/headphones",
    },
    {
      id: "el-4",
      name: "Smart watches",
      priceLabel: "From USD 90",
      image: assets.categories.tech.smartWatch,
      href: "/products/smart-watches-pro",
    },
    {
      id: "el-5",
      name: "Headset",
      priceLabel: "From USD 240",
      image: assets.categories.tech.headset,
      href: "/products/headset",
    },
    {
      id: "el-6",
      name: "Laptops & PC",
      priceLabel: "From USD 19",
        image: assets.categories.tech.laptops,
      href: "/products/laptops",
    },
    {
      id: "el-7",
      name: "Smartphones",
      priceLabel: "From USD 10",
      image: assets.categories.tech.smartphones,
      href: "/products/smartphones",
    },
    {
      id: "el-8",
      name: "Electric kettle",
      priceLabel: "From USD 100",
      image: assets.products.kettle,
      href: "/products/electric-kettle",
    },
  ],
};
