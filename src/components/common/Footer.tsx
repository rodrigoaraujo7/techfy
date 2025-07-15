import Image from "next/image";

import * as icon from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full main-grid bg-black-200 h-fit">
      <div className="px-8 py-12 text-sm text-center text-gray-500 main-cell-position xl:px-0">
        <div className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-3 md:gap-8 sm:items-start sm:text-start">
          <div className="flex flex-col items-center gap-4 sm:items-start">
            <Image
              src={"/logo.png"}
              alt="techfy-logo-invert"
              width={96}
              height={32}
              priority
              style={{ filter: "invert(1)" }}
            />

            <p className="font-medium">
              Virtual store for tech products like iPhones and MacBooks, focused
              on a modern look and easy navigation.
            </p>
          </div>

          <ul className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-base font-medium text-white-100">Services</h1>

            <FooterItem>Bonus program</FooterItem>
            <FooterItem>Gift cards</FooterItem>
            <FooterItem>Credit and payment</FooterItem>
            <FooterItem>Service contracts</FooterItem>
            <FooterItem>Non-cash account</FooterItem>
            <FooterItem>Payment</FooterItem>
          </ul>

          <ul className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-base font-medium text-white-100 font-poppins">
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

        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-6 sm:justify-start">
          <icon.Twitter />
          <icon.Facebook />
          <icon.Instagram />
        </div>
      </div>
    </footer>
  );
};

const FooterItem = ({ children }: { children: React.ReactNode }) => (
  <li className="font-light cursor-pointer hover:text-white-100">
    <p>{children}</p>
  </li>
);
