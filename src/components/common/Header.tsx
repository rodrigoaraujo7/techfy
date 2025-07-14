import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full h-[88px] main-cell-position flex justify-between items-center py-4">
      <Image src={"/logo.png"} alt="" width={96} height={32} />
    </header>
  );
};
