"use client";

import { useEffect } from "react";

import { useCartStore } from "@/providers/cart-provider";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import * as icon from "lucide-react";

export const Sidebar = () => {
  const { products, decrementProduct, incrementProduct } = useCartStore(
    (state) => state,
  );

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <div className="pointer-events-[all] fixed inset-0 overflow-hidden bg-[#00000032]">
      <div className="bg-white-100 absolute top-0 right-0 bottom-0 left-8 flex h-full flex-col gap-6 px-6 py-10 sm:left-[unset] sm:max-w-[342px] sm:min-w-[300px]">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-medium">Cart</h1>

          <icon.X size={24} color="#aaaaaa" />
        </div>

        <div className="flex flex-[1] flex-col gap-6 overflow-auto px-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex w-full items-center justify-between gap-4"
            >
              <div className="h-[96px] w-[80px] shrink-0 rounded-sm bg-red-200" />

              <div className="flex h-full flex-[1] flex-col justify-center gap-1">
                <h2 className="line-clamp-1 w-full text-sm font-semibold break-words">
                  {product.name}
                </h2>

                <span className="text-sm font-semibold">${product.price}</span>

                <div className="flex items-center gap-2">
                  <Input.Container className="w-fit">
                    <Input.Wrapper>
                      <span onClick={() => decrementProduct(product.id)}>
                        -
                      </span>
                      <div className="w-[15px]">
                        <Input.Field
                          type="number"
                          value={product.quantity}
                          max={9}
                          onChange={() => {}}
                          className="text-center"
                        />
                      </div>
                      <span onClick={() => incrementProduct(product.id)}>
                        +
                      </span>
                    </Input.Wrapper>
                  </Input.Container>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="mb-4 flex w-full items-center justify-between">
            <h2 className="text-xl font-medium">Total</h2>
            <h2 className="text-xl font-medium">$00000.00</h2>
          </div>

          <Button className="w-full">Checkout</Button>
        </div>
      </div>
    </div>
  );
};
