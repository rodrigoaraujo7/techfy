"use client";

import { useState } from "react";

import Image from "next/image";

import { Sidebar } from "./Sidebar";

import { Menu, User, ShoppingCart, Heart } from "lucide-react";

export const Header = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);

  return (
    <>
      <header className="bg-white-100 w-full h-[88px] main-cell-position flex justify-between items-center py-7 px-4 xl:px-0">
        <Image src={"/logo.png"} alt="" width={96} height={32} />

        <div className=" items-center gap-6 hidden md:flex">
          <Heart size={20} strokeWidth={1.5} className="cursor-pointer" />
          <ShoppingCart
            size={20}
            strokeWidth={1.5}
            className="cursor-pointer"
            onClick={() => setDisplaySidebar(true)}
          />
          <User size={20} strokeWidth={1.5} className="cursor-pointer" />
        </div>

        <Menu
          size={32}
          strokeWidth={1.5}
          className="cursor-pointer md:hidden"
          onClick={() => setDisplaySidebar(true)}
        />
      </header>

      {displaySidebar && <Sidebar />}
    </>
  );
};
