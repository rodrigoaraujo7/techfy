"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../server/products";

import { Product } from "@/components/ui/Product";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/Input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import * as icon from "lucide-react";

function CatalogPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const minPriceParam = searchParams.get("minPrice") ?? "";
  const maxPriceParam = searchParams.get("maxPrice") ?? "";
  const searchParam = searchParams.get("search") ?? "";
  const brandParam = searchParams.get("brand") ?? "";
  const categoryParam = searchParams.get("category") ?? "";

  const [search, setSearch] = useState(searchParam);
  const [minPrice, setMinPrice] = useState(minPriceParam);
  const [maxPrice, setMaxPrice] = useState(maxPriceParam);

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const brands = [...new Set(data?.map((product) => product.brand) ?? [])];

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (search) params.set("search", search);
    else params.delete("search");

    if (minPrice) params.set("minPrice", minPrice);
    else params.delete("minPrice");

    if (maxPrice) params.set("maxPrice", maxPrice);
    else params.delete("maxPrice");

    if (brandParam) params.set("brand", brandParam);

    router.replace(`${pathname}?${params.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, minPrice, maxPrice]);

  let filteredProducts = data ?? [];

  if (brandParam) {
    filteredProducts = filteredProducts.filter((p) => p.brand === brandParam);
  }
  if (search) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }
  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= Number(minPrice),
    );
  }
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      (p) => p.price <= Number(maxPrice),
    );
  }
  if (categoryParam) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === categoryParam,
    );
  }

  return (
    <section className="bg-white-100">
      <div className="hidden w-full grid-cols-1 py-11 lg:grid lg:px-2 xl:grid-cols-[1fr_1120px_1fr] xl:px-0">
        <div className="main-cell-position flex w-full items-center gap-4">
          <Link href={"/"}>
            <h1 className="text-zinc-200 hover:underline">Home</h1>
          </Link>
          <Link href={"/catalog"}>
            <h1
              className={
                categoryParam
                  ? "text-zinc-200 hover:underline"
                  : "text-black-500 hover:underline"
              }
            >
              Catalog
            </h1>
          </Link>
          {categoryParam && (
            <Link href={`/catalog?category=${categoryParam}`}>
              <h1 className="text-black-500 text-base hover:underline">
                {categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)}
              </h1>
            </Link>
          )}
        </div>
      </div>

      <div className="main-grid">
        <div className="main-cell-position mx-4 mt-9 mb-[72px] flex flex-col gap-5 lg:mx-2 lg:my-6 lg:flex-row lg:gap-8 xl:mx-0">
          <div className="w-full lg:sticky lg:top-[150px] lg:h-fit lg:w-[256px]">
            <Accordion type="single" defaultValue="price" collapsible>
              <AccordionItem value="price">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <div className="flex justify-between gap-3">
                    <Input.Container>
                      <Input.Label>From</Input.Label>
                      <Input.Wrapper>
                        <Input.Field
                          type="number"
                          placeholder="0"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                        />
                      </Input.Wrapper>
                    </Input.Container>

                    <Input.Container>
                      <Input.Label>To</Input.Label>
                      <Input.Wrapper>
                        <Input.Field
                          type="number"
                          placeholder="0"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                        />
                      </Input.Wrapper>
                    </Input.Container>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="brand">
                <AccordionTrigger>Brand</AccordionTrigger>
                <AccordionContent>
                  <Input.Container>
                    <Input.Wrapper>
                      <icon.Search />
                      <Input.Field
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </Input.Wrapper>
                  </Input.Container>

                  <div className="mt-4 flex flex-col gap-2">
                    {brands.map((brand, index) => {
                      const isActive = brandParam === brand;
                      const params = new URLSearchParams(searchParams);
                      if (isActive) {
                        params.delete("brand");
                      } else {
                        params.set("brand", brand);
                      }
                      return (
                        <Link
                          key={index}
                          href={`${pathname}?${params.toString()}`}
                          className="flex items-center gap-2"
                        >
                          <Checkbox id={brand} checked={isActive} />
                          <label className="cursor-pointer" htmlFor={brand}>
                            {brand}
                          </label>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="lg:flex-1">
            <div className="mb-6 flex w-full items-center justify-between">
              <h1 className="text-dark-200 text-base font-medium">
                Products Result:{" "}
                <span className="text-black-500">
                  {filteredProducts?.length}
                </span>
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {filteredProducts?.map((product) => (
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
      </div>
    </section>
  );
}

export default CatalogPage;
