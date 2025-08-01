export const ProductTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="line-clamp-2 w-full text-base font-medium lg:line-clamp-3">
      {children}
    </h1>
  );
};
