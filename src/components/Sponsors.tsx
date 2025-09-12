import type { FC } from "react";

const Sponsors: FC = () => {
  return (
    <section className="relative pt-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:gap-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-16 items-center">
                <img src="/img/amazon.png" alt="Sponsor 1" className="mx-auto h-12 object-contain" />
                <img src="/img/dribble.png" alt="Sponsor 2" className="mx-auto h-12 object-contain" />
                <img src="/img/hubspot.png" alt="Sponsor 3" className="mx-auto h-12 object-contain" />
                <img src="/img/notion.png" alt="Sponsor 4" className="mx-auto h-12 object-contain" />
                <img src="/img/netflix.png" alt="Sponsor 5" className="mx-auto h-12 object-contain" />
                <img src="/img/zoom.png" alt="Sponsor 6" className="mx-auto h-12 object-contain" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
