export const ProductPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="justify-end text-2xl font-semibold">${children}</span>
  );
};
