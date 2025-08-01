type ProductCardProps = React.ComponentProps<"div">;

export const ProductCard = ({ children, ...props }: ProductCardProps) => {
  return (
    <div
      className="bg-white-600 flex flex-col items-center justify-between gap-2 rounded-[9px] px-3 py-6 text-center lg:gap-4 lg:px-4"
      {...props}
    >
      {children}
    </div>
  );
};
