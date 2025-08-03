import { Product } from ".";

export const ProductSkeleton = () => {
  return (
    <div className="flex animate-pulse flex-col items-center justify-between gap-2 rounded-[9px] border-[1px] border-gray-100 px-3 py-6 text-center lg:gap-4 lg:px-4">
      <Product.FavoriteButton />

      <div className="h-[104px] w-[104px] rounded-2xl bg-gray-300 md:h-[160px] md:w-[160px]" />

      <div className="flex w-full flex-col items-center gap-1">
        <div className="h-[10px] w-full rounded-full bg-gray-300" />
        <div className="h-[10px] w-2/4 rounded-full bg-gray-300" />
      </div>

      <div className="my-[10px] h-[20px] w-2/4 rounded-full bg-gray-300" />

      <div className="h-[40px] w-full rounded-[8px] bg-gray-300" />
    </div>
  );
};
