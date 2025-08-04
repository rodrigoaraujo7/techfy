export const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white-100 border-white-300 focus-within:border-ring focus-within:ring-ring/50 flex items-center gap-2 rounded-lg border-[1px] px-4 py-3 focus-within:ring-[3px] [svg]:shrink-0">
      {children}
    </div>
  );
};
