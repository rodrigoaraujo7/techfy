import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="h-[calc(95dvh-88px)] md:h-[calc(95dvh-136px)] px-4 pt-10  bg-black-100 main-grid">
        <div className="relative flex justify-center overflow-hidden main-cell-position md:justify-between">
          <div className="flex flex-col items-center justify-center gap-4 mt-10 text-center self-baseline md:items-baseline md:text-start md:mt-0 md:self-auto">
            <h2 className="text-xl font-semibold text-dark-100">Pro.Beyond.</h2>
            <h1 className="text-6xl font-thin text-white-100 lg:text-8xl">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <h2 className="text-lg font-medium text-neutral-300 md:text-sm lg:text-lg">
              Created to change everything for the better. For everyone
            </h2>
            <Button variant={"light"}>Shop Now</Button>
          </div>

          <Image
            priority
            src={"/images/iphone.png"}
            alt="iphone-image"
            width={321}
            height={789}
            className="absolute -bottom-4/5 md:relative md:-bottom-[15%] lg:absolute lg:right-0 lg:-bottom-1/2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-[365px_365px_365px_365px] lg:grid-cols-4 lg:grid-rows-[328px_272px]">
        <div className="hero-cell bg-white-500 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
          apple air pods max
        </div>
        <div className="hero-cell bg-dark-700 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
          apple vision pro
        </div>
        <div className="hero-cell bg-white-100 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          playstation 5
        </div>
        <div className="hero-cell bg-white-500 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3">
          macbook pro
        </div>
      </div>
    </section>
  );
}
