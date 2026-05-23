import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** Keep display sizes close to source asset resolution to avoid upscaling blur */
const sizeMap = {
  sm: { box: "h-[72px] w-[80px]", dim: 80, sizes: "80px" },
  md: { box: "h-24 w-24", dim: 96, sizes: "96px" },
  lg: { box: "h-28 w-32", dim: 112, sizes: "112px" },
} as const;

const ProductImage = ({
  src,
  alt,
  size = "md",
  className = "",
}: ProductImageProps) => {
  const { box, dim, sizes } = sizeMap[size];

  return (
    <div className={`relative shrink-0 ${box} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={dim}
        height={dim}
        unoptimized
        sizes={sizes}
        className="h-full w-full object-contain object-bottom object-right"
      />
    </div>
  );
};

export default ProductImage;
