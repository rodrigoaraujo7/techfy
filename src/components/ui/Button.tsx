import { ComponentProps } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "min-w-[150px] p-4 rounded-[6px] border-[1px] text-base font-medium",
  variants: {
    variant: {
      light: "border-white-100 bg-transparent text-white-100",
      dark: "border-black-500 bg-transparent text-black-500",
      solid: "border-black-500 bg-black-500 text-white-100",
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    children: React.ReactNode;
  };

export const Button = ({
  children,
  variant,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={button({ variant, className })} {...props}>
      {children}
    </button>
  );
};
