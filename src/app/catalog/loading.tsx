"use client";

import { Product } from "@/components/ui/Product";

import { motion } from "motion/react";

export default function CatalogLoading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="animate-pulse"
    >
      <div className="hidden w-full grid-cols-1 py-11 lg:grid lg:px-2 xl:grid-cols-[1fr_1120px_1fr] xl:px-0">
        <div className="main-cell-position flex w-full items-center gap-4">
          <div className="h-[24px] w-[44px] rounded-full bg-gray-300" />

          <div className="h-[24px] w-[58px] rounded-full bg-gray-300" />
        </div>
      </div>

      <div className="main-grid">
        <div className="main-cell-position mx-4 mt-9 mb-[72px] flex flex-col gap-5 lg:mx-2 lg:my-6 lg:flex-row lg:gap-8 xl:mx-0">
          <div className="h-[216px] w-full rounded-sm bg-gray-300 lg:sticky lg:top-[150px] lg:w-[256px]" />

          <div className="flex-1">
            <div className="mb-6 h-[24px] w-[140px] rounded-full bg-gray-300" />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <Product.Skeleton key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
