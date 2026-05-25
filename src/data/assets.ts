/**
 * Central registry for static assets in /public/assets.
 * Import paths from here instead of hardcoding strings in components.
 */
export const assets = {
  brand: {
    logo: "/assets/brand/dees-mart-logo.jpg",
  },
  products: {
    polo: "/assets/products/polo.png",
    jacket: "/assets/products/jacket.png",
    suit: "/assets/products/suit.png",
    wallet: "/assets/products/wallet.png",
    backpack: "/assets/products/backpack.png",
    shorts: "/assets/products/shorts.png",
    headphones: "/assets/products/headphones.png",
    pot: "/assets/products/pot.png",
    kettle: "/assets/products/kettle.png",
  },
  backgrounds: {
    customizeBg: "/assets/backgrounds/customize-bg.png",
    gadgetsBg: "/assets/backgrounds/gadgets-bg.png",
    industryBg: "/assets/backgrounds/industry-bg.png",
    inspectionBg: "/assets/backgrounds/inspection-bg.png",
    outdoorBg: "/assets/backgrounds/outdoor-bg.png",
    rfqBg: "/assets/backgrounds/rfq-bg.png",
    shippingBg: "/assets/backgrounds/shipping-bg.png",
    heroBg: "/assets/backgrounds/hero-bg.png",
  },
  categories: {
    interior: {
      softChairs: "/assets/categories/interior/soft-chair.png",
      sofaChair: "/assets/categories/interior/sofa-chair.png",
      kitchenDishes: "/assets/categories/interior/pot.png",
      smartWatch: "/assets/categories/interior/smartwatch.png",
      kitchenMixer: "/assets/categories/interior/mixer.png",
      blender: "/assets/categories/interior/lamp.png",
      homeAppliance: "/assets/categories/interior/outdoor.png",
      coffeeMaker: "/assets/categories/interior/coffeemaker.png",
    },
    tech: {
      cameras: "/assets/categories/tech/camera.png",
      laptops: "/assets/categories/tech/laptop.png",
      smartphones: "/assets/categories/tech/smartphone.png",
      gopro: "/assets/categories/tech/go-pro.png",
      headphones: "/assets/categories/tech/headphones.png",
      smartWatch: "/assets/categories/tech/smartwatch.png",
      headset: "/assets/categories/tech/headset.png",
    },
  },
  flags: {
    ae: "/assets/flags/ae-2x.png",
    cn: "/assets/flags/cn-2x.png",
    de: "/assets/flags/de-2x.png",
    dk: "/assets/flags/dk-2x.png",
    fr: "/assets/flags/fr-2x.png",
    gb: "/assets/flags/gb-2x.png",
    au: "/assets/flags/au-2x.png",
    it: "/assets/flags/it-2x.png",
    ru: "/assets/flags/ru-2x.png",
    us: "/assets/flags/us-2x.png",
  },
  icons: {
    search: "/assets/icons/search-vector.png",
    searchAlt: "/assets/icons/search-vector-alt.png",
  },
  misc: {
    group: "/assets/misc/group.png",
    marketButton: "/assets/misc/market-button.png",
  },
} as const;
