import { PORTFOLIO } from "@/config/Portfiolio.config";
import ShadowTitle from "./ShadowTitle";
import { CardPortfolio } from "./CardPortfolio";

export default function Portfolio() {
  return (
    <section className=" flex flex-col items-center justify-center pt-20 mb-20" id="portfolio">
      <ShadowTitle title="Portfolio" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center p-4">
        {PORTFOLIO.map((portfolio) => (
          <CardPortfolio
            description={portfolio.description}
            image={portfolio.image}
            title={portfolio.title}
            type={portfolio.type}
            url={portfolio.url}
          />
        ))}
      </div>
    </section>
  );
}
