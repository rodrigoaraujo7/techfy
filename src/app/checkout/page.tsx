"use client";

import Image from "next/image";

import { Input } from "@/components/ui/Input";

import { useCartStore } from "@/providers/cart-provider";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const { products, incrementProduct, decrementProduct } = useCartStore(
    (state) => state,
  );

  const totalPrice = Math.floor(
    products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0),
  );

  return (
    <section className="bg-white-100">
      <div className="main-grid px-4 py-10 lg:h-[calc(100dvh-136px)]">
        <div className="main-cell-position grid grid-cols-1 grid-rows-2 gap-[70px] lg:h-full lg:grid-cols-2 lg:grid-rows-1 lg:gap-12 lg:overflow-auto xl:mx-0">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-full flex-col gap-10 lg:h-full">
            <h1 className="text-2xl font-medium">Cart</h1>

            <div className="flex h-full flex-col gap-6 overflow-auto">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex w-full items-center justify-between gap-4 border-b-[0.5px] border-gray-700 pb-4"
                >
                  <div className="relative h-4/5 w-[80px] shrink-0 rounded-sm">
                    <Image
                      src={product.image}
                      fill
                      alt={product.name}
                      sizes="80px"
                    />
                  </div>

                  <div className="flex h-full flex-[1] flex-col justify-center gap-1">
                    <h2 className="line-clamp-1 w-full text-sm font-semibold break-words">
                      {product.name}
                    </h2>

                    <span className="text-sm font-semibold">
                      ${product.price}
                    </span>

                    <div className="flex items-center gap-2">
                      <Input.Container className="w-fit">
                        <Input.Wrapper>
                          <span
                            className="cursor-pointer px-2 py-0.5"
                            onClick={() => decrementProduct(product.id)}
                          >
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
                          <span
                            className="cursor-pointer px-2 py-0.5"
                            onClick={() => incrementProduct(product.id)}
                          >
                            +
                          </span>
                        </Input.Wrapper>
                      </Input.Container>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-white-500 justify-center-center col-start-1 col-end-2 row-start-2 row-end-3 flex h-fit flex-col gap-10 rounded-xl border-[1px] px-4 py-14 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:px-16">
            <h1 className="text-xl font-bold">Order Summary</h1>

            <div>
              <Input.Container>
                <Input.Label>Discount code / Promo code</Input.Label>

                <Input.Wrapper>
                  <Input.Field type="text" placeholder="Code" />
                </Input.Wrapper>
              </Input.Container>

              <div className="mt-4 flex w-full items-center justify-between">
                <h2 className="text-xl font-medium">Total</h2>
                <h2 className="text-xl font-medium">${totalPrice}</h2>
              </div>
            </div>

            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
