export const InputWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white-100 border-white-900 focus-within:border-ring focus-within:ring-ring/50 flex items-center gap-2 rounded-lg border-[1px] px-4 py-3 focus-within:ring-[3px] hover:border-slate-300 [svg]:shrink-0">
      {children}
    </div>
  );
};
