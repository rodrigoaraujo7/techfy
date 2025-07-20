import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="h-[calc(95dvh-88px)] md:h-[calc(95dvh-136px)] px-4 pt-10  bg-black-100 main-grid">
        <div className="relative flex justify-center overflow-hidden main-cell-position md:justify-between">
          <div className="flex flex-col items-center justify-center gap-4 mt-10 text-center self-baseline md:items-baseline md:text-start md:mt-0 md:self-auto">
            <h2 className="text-xl font-semibold text-dark-100">Pro.Beyond.</h2>
            <h1 className="text-4xl font-thin text-white-100 md:text-6xl lg:text-8xl">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <h2 className="text-lg font-medium text-neutral-300 md:text-sm lg:text-lg">
              Created to change everything for the better. For everyone
            </h2>
            <Button variant={"light"}>Shop Now</Button>
          </div>

          <div className="absolute -bottom-4/5 md:relative md:-bottom-[15%] lg:absolute lg:right-0 lg:-bottom-1/2 min-w-[288] min-h-[789px]">
            <Image
              priority
              src={"/images/iphone.png"}
              alt="iphone-image"
              sizes="(min-width: 1024px) 321px, 100vw"
              fill
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 grid-rows-4 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[328px_272px]">
        <div className="hero-cell bg-white-500 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
          <div className="relative min-w-[200px] min-h-[200px] lg:hidden">
            <Image
              src={"/images/apple-airpods-max.png"}
              alt="apple-airpods-max-image"
              sizes="(min-width: 1024px) 245px, 100vw"
              fill
            />
          </div>

          <div className="flex flex-col justify-center gap-4 text-center max-w-[420] md:w-fit">
            <h1 className="text-3xl font-light text-black-500">
              Apple AirPods <span className="font-medium">Max</span>
            </h1>
            <h2 className="text-neutral-300">
              {`Computational audio. Listen, it's powerful`}
            </h2>
          </div>
        </div>

        <div className="hero-cell bg-dark-700 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
          <div className="relative min-w-[300px] min-h-[200px] lg:hidden">
            <Image
              src={"/images/apple-vision-pro.png"}
              alt="apple-vision-pro-image"
              sizes="(min-width: 1024px) 312px, 100vw"
              fill
            />
          </div>

          <div className="flex flex-col justify-center gap-4 text-center max-w-[420] md:w-fit">
            <h1 className="text-3xl font-light text-white-100">
              Apple Vision <span className="font-medium">Pro</span>
            </h1>
            <h2 className="text-neutral-300">
              An immersive way to experience entertainment
            </h2>
          </div>
        </div>

        <div className="hero-cell bg-white-100 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <div className="relative min-w-[300px] min-h-[200px] lg:hidden">
            <Image
              src={"/images/playstation.png"}
              alt="playstation-image"
              sizes="(min-width: 1024px) 312px, 100vw"
              fill
            />
          </div>

          <div className="flex flex-col justify-center gap-4 text-center max-w-[420] md:w-fit lg:text-start lg:w-[360px]">
            <h1 className="text-3xl font-light text-black-500">
              Playstation <span className="font-medium">5</span>
            </h1>
            <h2 className="text-neutral-300">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </h2>
          </div>
        </div>

        <div className="hero-cell bg-white-500 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:flex-row-reverse lg:justify-start lg:px-14">
          <div className="relative min-w-[300px] min-h-[200px]">
            <Image
              src={"/images/macbook-air.png"}
              alt="macbook-image"
              sizes="(min-width: 1024px) 300px, 100vw"
              fill
            />
          </div>

          <div className="flex flex-col justify-center gap-4 text-center max-w-[420] md:w-fit lg:text-start lg:w-[360px]">
            <h1 className="text-3xl font-light text-black-500">
              <span className="font-medium">Macbook</span> Air
            </h1>
            <h2 className="text-neutral-300">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </h2>

            <Button variant="dark">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
