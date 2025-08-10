import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

export const SectionHero = () => {
  return (
    <section>
      <div className="bg-black-100 main-grid h-[calc(95dvh-88px)] px-4 pt-10 md:h-[calc(95dvh-136px)]">
        <div className="main-cell-position relative flex justify-center overflow-hidden md:justify-between">
          <div className="mt-10 flex flex-col items-center justify-center gap-4 self-baseline text-center md:mt-0 md:items-baseline md:self-auto md:text-start">
            <h2 className="text-dark-100 text-xl font-semibold">Pro.Beyond.</h2>
            <h1 className="text-white-100 text-4xl font-thin md:text-6xl lg:text-8xl">
              IPhone 14 <span className="font-semibold">Pro</span>
            </h1>
            <h2 className="text-lg font-medium text-neutral-300 md:text-sm lg:text-lg">
              Created to change everything for the better. For everyone
            </h2>
            <Link href={"/catalog"} prefetch={false}>
              <Button variant={"light"}>Shop Now</Button>
            </Link>
          </div>

          <div className="absolute -bottom-[555px] min-h-[789px] min-w-[288] md:relative md:-bottom-[15%] lg:absolute lg:right-0 lg:-bottom-1/2">
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

      <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-[328px_272px]">
        <div className="hero-cell bg-white-500 flex-col justify-center lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 lg:flex-row lg:justify-end lg:overflow-hidden lg:px-14">
          <Image
            src={"/images/apple-airpods-max.png"}
            alt="apple-airpods-max-image"
            width={200}
            height={200}
            className="h-[200px] w-[200px] max-w-none flex-shrink-0 lg:h-[270px] lg:w-auto"
          />

          <div className="flex max-w-[420] flex-col justify-center gap-4 text-center md:w-fit lg:w-[160px] lg:min-w-[160px] lg:text-start">
            <h1 className="text-black-500 text-3xl font-light">
              Apple AirPods <span className="font-medium">Max</span>
            </h1>
            <h2 className="text-neutral-300">
              {`Computational audio. Listen, it's powerful`}
            </h2>
          </div>
        </div>

        <div className="hero-cell bg-dark-700 flex-col justify-center lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:flex-row lg:justify-end lg:overflow-hidden lg:px-14">
          <Image
            src="/images/apple-vision-pro.png"
            alt="apple-vision-pro-image"
            width={300}
            height={200}
            className="h-[200px] w-[300px] max-w-none flex-shrink-0 lg:h-[190px] lg:w-auto"
          />

          <div className="flex max-w-[420] flex-col justify-center gap-4 text-center md:w-fit lg:w-[160px] lg:min-w-[160px] lg:text-start">
            <h1 className="text-white-100 text-3xl font-light">
              Apple Vision <span className="font-medium">Pro</span>
            </h1>
            <h2 className="text-neutral-300">
              An immersive way to experience entertainment
            </h2>
          </div>
        </div>

        <div className="hero-cell bg-white-100 flex-col justify-center lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:flex-row lg:justify-end lg:overflow-hidden lg:px-14">
          <Image
            src="/images/playstation.png"
            alt="playstation-image"
            width={300}
            height={200}
            className="h-[200px] w-[300px] max-w-none flex-shrink-0 lg:h-[340px] lg:w-auto"
          />

          <div className="flex max-w-[420] flex-col justify-center gap-4 text-center md:w-fit lg:w-[330px] lg:min-w-[330px] lg:text-start">
            <h1 className="text-black-500 text-3xl font-light lg:text-5xl lg:font-medium">
              Playstation <span className="font-medium">5</span>
            </h1>
            <h2 className="text-neutral-300">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </h2>
          </div>
        </div>

        <div className="hero-cell bg-white-500 flex-col justify-center lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:flex-row-reverse lg:justify-end lg:overflow-hidden lg:px-14">
          <Image
            src="/images/macbook-air.png"
            alt="macbook"
            width={300}
            height={200}
            className="h-[200px] w-[300px] max-w-none flex-shrink-0 lg:h-[100%] lg:w-auto"
          />

          <div className="flex max-w-[420px] flex-col justify-center gap-4 text-center md:w-fit lg:w-[360px] lg:min-w-[360px] lg:text-start">
            <h1 className="text-black-500 text-3xl font-light lg:text-[64px] lg:font-medium">
              <span className="font-medium lg:font-thin">Macbook</span> Air
            </h1>
            <h2 className="text-neutral-300">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </h2>

            <Link href="/catalog">
              <Button variant="dark" className="lg:w-fit">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
