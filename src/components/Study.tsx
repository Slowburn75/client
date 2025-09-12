import type { FC } from "react";

const Study: FC = () => {
  return (
    <section className="relative pt-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-start gap-8 mb-10">
          <h2 className="inline-block bg-lime-300 text-2xl rounded-md px-4 py-2 font-bold">
            Case Study
          </h2>
          <p className="text-gray-600 max-w-xl">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        <div className="relative bg-black rounded-2xl p-10 lg:p-16 overflow-visible">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="p-6 text-white">
              <p className="text-white">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
              </p><br />
              <button className="text-lime-300">Learn more</button>
            </div>

            <div className="p-6 text-white">
              <p className="text-white">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p><br />
            <button className="text-lime-300">Learn more</button>

            </div>

            <div className="p-6 text-white">
              <p className="text-white">
                For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
              </p><br />
              <button className="text-lime-300">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
