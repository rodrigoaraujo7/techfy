import { motion, MotionProps } from "motion/react";

type ProductCardProps = React.ComponentProps<"div"> & MotionProps;

export const ProductCard = ({ children, ...props }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white-600 flex flex-col items-center justify-between gap-2 rounded-[9px] px-3 py-6 text-center lg:gap-4 lg:px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
