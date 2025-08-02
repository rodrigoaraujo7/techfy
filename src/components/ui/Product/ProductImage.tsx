import Image from "next/image";

type ProductImageProps = {
  alt: string;
  src: string;
};

export const ProductImage = ({ ...props }: ProductImageProps) => {
  return (
    <div className="relative h-[104px] w-[104px] md:h-[160px] md:w-[160px]">
      <Image src={props.src} alt={props.alt} fill />
    </div>
  );
};
