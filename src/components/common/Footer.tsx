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

            <p>
              Virtual store for tech products like iPhones and MacBooks, focused
              on a modern look and easy navigation.
            </p>
          </div>

          <ul className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-base font-medium text-white-100">Services</h1>

            <li>
              <p>Bonus program</p>
            </li>
            <li>
              <p>Gift cards</p>
            </li>
            <li>
              <p>Credit and payment</p>
            </li>
            <li>
              <p>Service contracts</p>
            </li>
            <li>
              <p>Non-cash account</p>
            </li>
            <li>
              <p>Payment</p>
            </li>
          </ul>

          <ul className="flex flex-col items-center gap-4 sm:items-start">
            <h1 className="text-base font-medium text-white-100 font-poppins">
              Assistance to the buyer
            </h1>

            <li>
              <p>Find and order</p>
            </li>
            <li>
              <p>Terms of delivery</p>
            </li>
            <li>
              <p>Exchange and return of goods</p>
            </li>
            <li>
              <p>Guarantee</p>
            </li>
            <li>
              <p>Frequently asked questions</p>
            </li>
            <li>
              <p>Terms of use of the site</p>
            </li>
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
