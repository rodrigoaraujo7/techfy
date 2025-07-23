type ProductCardProps = React.ComponentProps<"div">;

export const ProductCard = ({ children, ...props }: ProductCardProps) => {
  return (
    <div
      className="bg-white-600 py-6 px-3 rounded-[9px] flex flex-col gap-2 justify-between items-center text-center lg:px-4 lg:gap-4"
      {...props}
    >
      {children}
    </div>
  );
};
