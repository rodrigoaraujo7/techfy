import { Button } from "@/components/ui/Button";

export const SectionBanner = () => {
  return (
    <section className="grid h-fit grid-cols-1 md:h-[calc(100dvh-136px)] md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white-100 flex h-full flex-col items-center justify-end gap-4 p-8 py-14 text-center lg:items-start lg:text-start">
        {/* TODO: ADD IMAGES */}

        <h1 className="text-black-500 text-5xl font-light md:text-3xl">
          Popular Products
        </h1>
        <h2 className="text-sm font-medium text-neutral-300 md:text-base">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </h2>
        <Button variant="dark" size="sm" className="w-fit">
          Shop Now
        </Button>
      </div>

      <div className="bg-white-300 flex h-full flex-col items-center justify-end gap-4 p-8 py-14 text-center lg:items-start lg:text-start">
        <h1 className="text-black-500 text-5xl font-light md:text-3xl">
          Ipad Pro
        </h1>
        <h2 className="text-sm font-medium text-neutral-300 md:text-base">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </h2>
        <Button variant="dark" size="sm" className="w-fit">
          Shop Now
        </Button>
      </div>

      <div className="bg-white-800 flex h-full flex-col items-center justify-end gap-4 p-8 py-14 text-center lg:items-start lg:text-start">
        <h1 className="text-black-500 text-5xl font-light md:text-3xl">
          Samsung Galaxy{" "}
        </h1>
        <h2 className="text-sm font-medium text-neutral-300 md:text-base">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </h2>
        <Button variant="dark" size="sm" className="w-fit">
          Shop Now
        </Button>
      </div>

      <div className="bg-dark-800 flex h-full flex-col items-center justify-end gap-4 p-8 py-14 text-center lg:items-start lg:text-start">
        <h1 className="text-white-100 text-5xl font-light md:text-3xl">
          Macbook Pro
        </h1>
        <h2 className="text-sm font-medium text-neutral-300 md:text-base">
          iPad combines a magnificent 10.2-inch Retina display, incredible
          performance, multitasking and ease of use.
        </h2>
        <Button variant="light" size="sm" className="w-fit">
          Shop Now
        </Button>
      </div>
    </section>
  );
};
