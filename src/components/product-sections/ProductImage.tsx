import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** Keep display sizes close to source asset resolution to avoid upscaling blur */
const sizeMap = {
  sm: { box: "h-[72px] w-[80px]", sizes: "80px" },
  md: { box: "h-24 w-24", sizes: "96px" },
  lg: { box: "h-28 w-32", sizes: "112px" },
} as const;

const ProductImage = ({
  src,
  alt,
  size = "md",
  className = "",
}: ProductImageProps) => {
  const { box, sizes } = sizeMap[size];

  return (
    <div className={`relative shrink-0 ${box} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className="object-contain object-bottom object-right"
      />
    </div>
  );
};

export default ProductImage;
