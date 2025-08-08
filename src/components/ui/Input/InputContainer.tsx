import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type InputContainerProps = ComponentProps<"label">;

export const InputContainer = ({
  children,
  className,
  ...props
}: InputContainerProps) => {
  return (
    <label className={cn("flex w-full flex-col gap-2", className)} {...props}>
      {children}
    </label>
  );
};
