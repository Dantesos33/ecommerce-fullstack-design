import { assets } from "@/data/assets";
import { FaSearch, FaBox, FaPaperPlane, FaGlobe } from "react-icons/fa";
import { ComponentType } from "react";

export type Service = {
  id: number;
  title: string;
  image: string;
  icon: ComponentType<{ size?: number; className?: string }>;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image: assets.backgrounds.industryBg,
    icon: FaSearch,
  },
  {
    id: 2,
    title: "Customize Your Products",
    image: assets.backgrounds.customizeBg,
    icon: FaBox,
  },
  {
    id: 3,
    title: "Fast, reliable shipping by ocean or air",
    image: assets.backgrounds.shippingBg,
    icon: FaPaperPlane,
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    image: assets.backgrounds.inspectionBg,
    icon: FaGlobe,
  },
];