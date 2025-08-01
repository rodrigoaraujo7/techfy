import Image from "next/image";

import * as icon from "lucide-react";

export const Footer = () => {
  return (
    <footer className="main-grid bg-black-200 h-fit w-full">
      <div className="main-cell-position px-8 py-12 text-center text-sm text-gray-500 xl:px-0">
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 sm:items-start sm:text-start md:gap-8">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <div className="relative h-[22px] w-[96px] invert">
              <Image
                src={"/images/logo.png"}
                alt="techfy-logo"
                sizes="(min-width: 1024px) 100px, 100vw"
                fill
              />
            </div>

            <p className="font-medium">
              Virtual store for tech products like iPhones and MacBooks, focused
              on a modern look and easy navigation.
            </p>
          </div>

          <ul className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-white-100 text-base font-medium">Services</h1>

            <FooterItem>Bonus program</FooterItem>
            <FooterItem>Gift cards</FooterItem>
            <FooterItem>Credit and payment</FooterItem>
            <FooterItem>Service contracts</FooterItem>
            <FooterItem>Non-cash account</FooterItem>
            <FooterItem>Payment</FooterItem>
          </ul>

          <ul className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-white-100 font-poppins text-base font-medium">
              Assistance to the buyer
            </h1>

            <FooterItem>Find and order</FooterItem>
            <FooterItem>Terms of delivery</FooterItem>
            <FooterItem>Exchange and return of goods</FooterItem>
            <FooterItem>Guarantee</FooterItem>
            <FooterItem>Frequently asked questions</FooterItem>
            <FooterItem>Terms of use of the site</FooterItem>
          </ul>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-6 sm:justify-start">
          <icon.Twitter />
          <icon.Facebook />
          <icon.Instagram />
        </div>
      </div>
    </footer>
  );
};

const FooterItem = ({ children }: { children: React.ReactNode }) => (
  <li className="hover:text-white-100 cursor-pointer font-light">
    <p>{children}</p>
  </li>
);
