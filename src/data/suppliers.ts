import { assets } from "@/data/assets";

export type Supplier = {
  id: number;
  country: string;
  shopUrl: string;
  flag: string;
};

export const suppliers: Supplier[] = [
  { id: 1,  country: "Arabic Emirates", shopUrl: "shopname.ae", flag: assets.flags.ae },
  { id: 2,  country: "Australia",       shopUrl: "shopname.ae", flag: assets.flags.au },
  { id: 3,  country: "United States",   shopUrl: "shopname.ae", flag: assets.flags.us },
  { id: 4,  country: "Russia",          shopUrl: "shopname.ru", flag: assets.flags.ru },
  { id: 5,  country: "Italy",           shopUrl: "shopname.it", flag: assets.flags.it },
  { id: 6,  country: "Denmark",         shopUrl: "denmark.com.dk", flag: assets.flags.dk },
  { id: 7,  country: "France",          shopUrl: "shopname.com.fr", flag: assets.flags.fr },
  { id: 8,  country: "Arabic Emirates", shopUrl: "shopname.ae", flag: assets.flags.ae },
  { id: 9,  country: "China",           shopUrl: "shopname.ae", flag: assets.flags.cn },
  { id: 10, country: "Great Britain",   shopUrl: "shopname.co.uk", flag: assets.flags.gb },
];