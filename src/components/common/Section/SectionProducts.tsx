"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../../server/products";

import { Product } from "@/components/ui/Product";

export const SectionProducts = () => {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <h1>Loading ....</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <section className="main-grid bg-white-100 py-14">
      <div className="main-cell-position">
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
          {data?.slice(0, 8).map((product) => (
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
    </section>
  );
};
