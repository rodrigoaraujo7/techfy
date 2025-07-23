export const ProductTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="w-full text-base font-medium line-clamp-2 lg:line-clamp-3">
      {children}
    </h1>
  );
};
