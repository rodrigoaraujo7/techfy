"use client";

import { useCartStore } from "@/providers/cart-provider";

import Image from "next/image";
import Link, { LinkProps } from "next/link";

import { Sidebar } from "../Sidebar";

import { AnimatePresence, motion } from "motion/react";

import * as icon from "lucide-react";

type NavItemProps = LinkProps & {
  children: React.ReactNode;
};

export const Header = () => {
  const { handleCartView, isOpened, products } = useCartStore((state) => state);

  const totalItems = Math.floor(
    products.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0),
  );

  return (
    <header className="fixed top-0 right-0 left-0 z-[1]">
      <div className="main-grid bg-white-100 h-[88px] w-full">
        <div className="main-cell-position flex items-center justify-between px-4 py-7 xl:px-0">
          <Link href={"/"} className="relative h-[22px] w-[96px]">
            <Image
              src={"/images/logo.png"}
              alt="techfy-logo"
              sizes="(min-width: 1024px) 100px, 100vw"
              fill
            />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <icon.Heart
              size={20}
              strokeWidth={1.5}
              className="cursor-pointer"
            />

            <div className="relative cursor-pointer" onClick={handleCartView}>
              <icon.ShoppingCart size={20} strokeWidth={1.5} />

              <AnimatePresence>
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{
                      scale: { duration: 0.05 },
                      type: "spring",
                    }}
                    className="bg-dark-1000 text-white-100 absolute -right-3 -bottom-3 flex h-[24px] w-[24px] items-center justify-center rounded-full text-sm"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <icon.User size={20} strokeWidth={1.5} className="cursor-pointer" />
          </div>

          <icon.Menu
            size={32}
            strokeWidth={1.5}
            className="cursor-pointer md:hidden"
            onClick={handleCartView}
          />
        </div>
      </div>

      <nav className="bg-dark-1000 hidden h-[48px] w-full grid-cols-1 md:grid xl:grid-cols-[1fr_1120px_1fr]">
        <div className="main-cell-position flex items-center justify-between gap-4 px-4 py-3 xl:px-0">
          <NavItem
            href={{ pathname: "/catalog", query: { category: "smartphone" } }}
          >
            <icon.Smartphone size={16} />
            <span className="text-sm">Phones</span>
          </NavItem>

          <div className="bg-dark-300 h-full w-[1px]" />

          <NavItem
            href={{ pathname: "/catalog", query: { category: "laptop" } }}
          >
            <icon.LaptopMinimal size={16} />
            <span className="text-sm">Computer</span>
          </NavItem>

          <div className="bg-dark-300 h-full w-[1px]" />

          <NavItem
            href={{ pathname: "/catalog", query: { category: "smartwatch" } }}
          >
            <icon.Watch size={16} />
            <span className="text-sm">Smart Watches</span>
          </NavItem>

          <div className="bg-dark-300 h-full w-[1px]" />

          <NavItem
            href={{ pathname: "/catalog", query: { category: "headphone" } }}
          >
            <icon.Headphones size={16} />
            <span className="text-sm">Headphones</span>
          </NavItem>

          <div className="bg-dark-300 h-full w-[1px]" />

          <NavItem
            href={{ pathname: "/catalog", query: { category: "earbuds" } }}
          >
            <icon.Ear size={16} />
            <span className="text-sm">Earbuds</span>
          </NavItem>
        </div>
      </nav>

      <AnimatePresence mode="wait">{isOpened && <Sidebar />}</AnimatePresence>
    </header>
  );
};

const NavItem = ({ children, ...props }: NavItemProps) => {
  return (
    <Link
      className="hover:text-white-100 flex cursor-pointer items-center gap-2 text-gray-600"
      {...props}
    >
      {children}
    </Link>
  );
};
