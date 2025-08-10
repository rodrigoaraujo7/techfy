"use client";

import { useEffect } from "react";

import { useCartStore } from "@/providers/cart-provider";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { motion } from "motion/react";

import * as icon from "lucide-react";

export const Sidebar = () => {
  const { products, decrementProduct, incrementProduct, handleCartView } =
    useCartStore((state) => state);

  const totalPrice = Math.floor(
    products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0),
  );

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.5 } }}
      className="pointer-events-[all] fixed inset-0 overflow-hidden bg-[#00000032]"
      onClick={handleCartView}
    >
      <motion.div
        initial={{ x: 342 }}
        animate={{ x: 0 }}
        exit={{
          x: 342,
          transition: { delay: 0, duration: 0.15 },
        }}
        className="bg-white-100 absolute top-0 right-0 bottom-0 left-[unset] flex h-full w-[342px] max-w-11/12 flex-col gap-6 px-6 py-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-medium">Cart</h1>

          <icon.X
            size={24}
            color="#aaaaaa"
            onClick={handleCartView}
            cursor={"pointer"}
          />
        </div>

        <div className="scrollbar flex flex-[1] flex-col gap-6 overflow-auto px-1">
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

                <span className="text-sm font-semibold">${product.price}</span>

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

        <div>
          <div className="mb-4 flex w-full items-center justify-between">
            <h2 className="text-xl font-medium">Total</h2>
            <h2 className="text-xl font-medium">${totalPrice}</h2>
          </div>

          <Link
            href={"/checkout"}
            className={products.length > 0 ? "" : "pointer-events-none"}
            onNavigate={handleCartView}
          >
            <Button className="w-full">Checkout</Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};
