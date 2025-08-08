import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input">;

export const InputField = ({ className, ...props }: InputFieldProps) => {
  return (
    <input
      className={cn(
        "w-full [appearance:textfield] text-sm font-normal outline-none placeholder:text-neutral-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
        className,
      )}
      {...props}
    />
  );
};
