import { ComponentProps } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "min-w-[150px] border-[1px] text-base font-medium",
  variants: {
    variant: {
      light: "border-white-100 bg-transparent text-white-100",
      dark: "border-black-500 bg-transparent text-black-500",
      solid: "border-black-500 bg-black-500 text-white-100",
    },
    size: {
      sm: "p-3 rounded-[8px] text-sm",
      lg: "p-4 rounded-[6px] text-base",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "lg",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    children: React.ReactNode;
  };

export const Button = ({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};
