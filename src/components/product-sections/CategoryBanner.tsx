import Image from "next/image";
import Link from "next/link";

interface CategoryBannerProps {
  title: string;
  image: string;
  href: string;
  buttonText?: string;
}

const CategoryBanner = ({
  title,
  image,
  href,
  buttonText = "Source now",
}: CategoryBannerProps) => {
  return (
    <Link
      href={href}
      className="group relative hidden lg:flex h-full w-[280px] shrink-0 flex-col overflow-hidden border-r border-slate-200 bg-slate-100"
    >
      <Image
        src={image}
        alt=""
        fill
        unoptimized
        sizes="280px"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 z-10 flex flex-col justify-between p-5">
        <h2 className="text-base font-semibold text-slate-800 leading-snug max-w-[210px] drop-shadow-sm">
          {title}
        </h2>
        <span className="inline-flex w-fit items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-ui font-medium text-slate-800 shadow-sm group-hover:bg-slate-50 transition-colors duration-200">
          {buttonText}
        </span>
      </div>
    </Link>
  );
};

export default CategoryBanner;
