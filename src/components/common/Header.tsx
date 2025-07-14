"use client";

import { useState } from "react";

import Image from "next/image";

import { Sidebar } from "./Sidebar";

import * as icon from "lucide-react";

export const Header = () => {
  const [displaySidebar, setDisplaySidebar] = useState<boolean>(false);

  return (
    <>
      <header className="main-grid bg-white-100 w-full h-[88px]">
        <div className="flex items-center justify-between px-4 main-cell-position py-7 xl:px-0">
          <Image
            src={"/logo.png"}
            alt="techfy-logo"
            width={96}
            height={32}
            priority
          />

          <div className="items-center hidden gap-6 md:flex">
            <icon.Heart
              size={20}
              strokeWidth={1.5}
              className="cursor-pointer"
            />
            <icon.ShoppingCart
              size={20}
              strokeWidth={1.5}
              className="cursor-pointer"
              onClick={() => setDisplaySidebar(true)}
            />
            <icon.User size={20} strokeWidth={1.5} className="cursor-pointer" />
          </div>

          <icon.Menu
            size={32}
            strokeWidth={1.5}
            className="cursor-pointer md:hidden"
            onClick={() => setDisplaySidebar(true)}
          />
        </div>
      </header>

      <nav className="hidden bg-dark-1000 w-full h-[48px] md:grid grid-cols-1 xl:grid-cols-[1fr_1120px_1fr]">
        <div className="flex items-center justify-between gap-12 px-4 py-3 main-cell-position xl:px-0">
          <NavItem>
            <icon.Smartphone size={16} />
            <span className="text-sm">Phones</span>
          </NavItem>

          <div className="h-full w-[1px] bg-dark-300" />

          <NavItem>
            <icon.LaptopMinimal size={16} />
            <span className="text-sm">Computer</span>
          </NavItem>

          <div className="h-full w-[1px] bg-dark-300" />

          <NavItem>
            <icon.Headphones size={16} />
            <span className="text-sm">Headphones</span>
          </NavItem>

          <div className="h-full w-[1px] bg-dark-300" />

          <NavItem>
            <icon.Watch size={16} />
            <span className="text-sm">Smartwatches</span>
          </NavItem>
        </div>
      </nav>

      {displaySidebar && <Sidebar />}
    </>
  );
};

const NavItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-white-100">
    {children}
  </div>
);
