"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../server/products";

import { Product } from "@/components/ui/Product";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";

function CatalogPage() {
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
          <div className="w-full lg:sticky lg:top-[150px] lg:h-fit lg:w-[256px]">
            <Accordion type="single" collapsible>
              <AccordionItem value="price">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <Input.Container>
                    <Input.Label>From</Input.Label>
                    <Input.Wrapper>
                      <Input.Field placeholder="0" />
                      <Search />
                    </Input.Wrapper>
                  </Input.Container>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="brand">
                <AccordionTrigger>Brand</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="lg:flex-1">
            <div className="mb-6 flex w-full items-center justify-between">
              <h1 className="text-dark-200 text-base font-medium">
                Products Result:{" "}
                <span className="text-black-500">{data?.length}</span>
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
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
      </div>
    </section>
  );
}

export default CatalogPage;
