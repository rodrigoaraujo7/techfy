"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../server/products";

import { Product } from "@/components/ui/Product";

function Catalog() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <section className="bg-white-100">
      <div className="hidden w-full grid-cols-1 py-11 lg:grid lg:px-2 xl:grid-cols-[1fr_1120px_1fr] xl:px-0">
        <div className="main-cell-position w-full">
          <h1>Catalog</h1>
        </div>
      </div>

      <div className="main-grid">
        <div className="main-cell-position mx-4 mt-9 mb-[72px] flex flex-col gap-5 lg:mx-2 lg:my-6 lg:flex-row lg:gap-8 xl:mx-0">
          <div className="h-[64px] w-full bg-red-100 lg:sticky lg:w-[256px]" />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:flex-1">
            {data?.map((product) => (
              <Product.Card key={product.id}>
                <Product.FavoriteButton />

                <Product.Image src={product.image} alt={product.name} />

                <Product.Title>{product.name}</Product.Title>

                <Product.Price>{product.price}</Product.Price>

                <Product.Button />
              </Product.Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
