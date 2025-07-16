export default function Home() {
  return (
    <section>
      <div className="h-[calc(95dvh-88px)] md:h-[calc(95dvh-136px)] bg-black-100 main-grid">
        <div className="main-cell-position"></div>
      </div>

      <div className="grid grid-cols-1 grid-rows-[365px_365px_365px_365px] lg:grid-cols-4 lg:grid-rows-[328px_272px]">
        <div className="hero-cell bg-white-500 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
          apple air pods max
        </div>
        <div className="hero-cell bg-dark-700 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
          apple vision pro
        </div>
        <div className="hero-cell bg-white-100 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          playstation 5
        </div>
        <div className="hero-cell bg-white-500 lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-3">
          macbook pro
        </div>
      </div>
    </section>
  );
}
