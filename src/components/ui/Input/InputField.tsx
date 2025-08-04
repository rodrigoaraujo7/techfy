import { ComponentProps } from "react";

type InputFieldProps = ComponentProps<"input">;

export const InputField = ({ ...props }: InputFieldProps) => {
  return (
    <input
      className="w-full [appearance:textfield] text-sm font-normal outline-none placeholder:text-neutral-500 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      {...props}
    />
  );
};
