import { Product } from "@/components/ui/Product";

export const SectionProducts = () => {
  return (
    <section className="main-grid bg-white-100 py-14">
      <div className="main-cell-position">
        <div className="grid grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-4 xl:px-0">
          {Array.from({ length: 8 }).map((_, index) => (
            <Product.Card key={index}>
              <Product.FavoriteButton />

              <Product.Title>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                doloribus?
              </Product.Title>

              <Product.Price>200</Product.Price>

              <Product.Button />
            </Product.Card>
          ))}
        </div>
      </div>
    </section>
  );
};
