import { Button } from "../Button";

type ProductButtonProps = React.ComponentProps<"button">;

export const ProductButton = ({ ...props }: ProductButtonProps) => {
  return (
    <Button size="sm" className="w-full min-w-0 justify-end md:w-48" {...props}>
      Buy Now
    </Button>
  );
};
