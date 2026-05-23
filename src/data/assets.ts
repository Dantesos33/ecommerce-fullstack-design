/**
 * Central registry for static assets in /public/assets.
 * Import paths from here instead of hardcoding strings in components.
 */
export const assets = {
  brand: {
    logo: "/assets/brand/dees-mart-logo.jpg",
    logoColored: "/assets/brand/logo-colored.png",
  },
  hero: {
    bannerElectronics: "/assets/hero/banner-electronics.png",
  },
  backgrounds: {
    group969: "/assets/backgrounds/group-969.png",
    group982: "/assets/backgrounds/group-982.png",
    image98: "/assets/backgrounds/image-98.png",
    image106: "/assets/backgrounds/image-106.png",
    image107: "/assets/backgrounds/image-107.png",
    maskGroup: "/assets/backgrounds/mask-group.png",
    maskGroup1: "/assets/backgrounds/mask-group-1.png",
  },
  categories: {
    interior: {
      product1: "/assets/categories/interior/interior-product-1.png",
      product3: "/assets/categories/interior/interior-product-3.png",
      product6: "/assets/categories/interior/interior-product-6.png",
      product7: "/assets/categories/interior/interior-product-7.png",
      product8: "/assets/categories/interior/interior-product-8.png",
      product9: "/assets/categories/interior/interior-product-9.png",
      image89: "/assets/categories/interior/interior-89.png",
      image93: "/assets/categories/interior/interior-93.png",
    },
    tech: {
      product6: "/assets/categories/tech/tech-product-6.png",
      product8: "/assets/categories/tech/tech-product-8.png",
      image23: "/assets/categories/tech/tech-23.png",
      image29: "/assets/categories/tech/tech-29.png",
      image32: "/assets/categories/tech/tech-32.png",
      image33: "/assets/categories/tech/tech-33.png",
      image34: "/assets/categories/tech/tech-34.png",
      image85: "/assets/categories/tech/tech-85.png",
      image86: "/assets/categories/tech/tech-86.png",
    },
  },
  suppliers: {
    alibaba: {
      cloth: {
        product21: "/assets/suppliers/alibaba/cloth/cloth-product-2-1.png",
        bitmap: "/assets/suppliers/alibaba/cloth/cloth-bitmap.png",
        bitmap2: "/assets/suppliers/alibaba/cloth/cloth-bitmap-2.png",
        image24: "/assets/suppliers/alibaba/cloth/cloth-24.png",
        image26: "/assets/suppliers/alibaba/cloth/cloth-26.png",
        image30: "/assets/suppliers/alibaba/cloth/cloth-30.png",
      },
      interior: {
        image90: "/assets/suppliers/alibaba/interior/alibaba-interior-90.png",
      },
      tech: {
        image85: "/assets/suppliers/alibaba/tech/alibaba-tech-85.png",
        image86: "/assets/suppliers/alibaba/tech/alibaba-tech-86.png",
      },
    },
  },
  flags: {
    ae: "/assets/flags/ae-2x.png",
    cn: "/assets/flags/cn-2x.png",
    de: "/assets/flags/de-2x.png",
    dk: "/assets/flags/dk-2x.png",
    fr: "/assets/flags/fr-2x.png",
    gb: "/assets/flags/gb-2x.png",
    icon: "/assets/flags/icon.png",
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
