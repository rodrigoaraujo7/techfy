import { Button } from "../Button";

type ProductButtonProps = React.ComponentProps<"button">;

export const ProductButton = ({ ...props }: ProductButtonProps) => {
  return (
    <Button size="sm" className="justify-end w-full min-w-0 md:w-48" {...props}>
      Buy Now
    </Button>
  );
};
