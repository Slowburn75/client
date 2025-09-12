// src/components/Services.tsx
import type { FC } from "react";

type Variant = "light" | "lime" | "dark";

const services = [
  { id: 1, title: "Search engine  optimization", img: "/img/seo.png", variant: "light" as Variant },
  { id: 2, title: "Pay-per-click advertising", img: "/img/ppc.png", variant: "lime" as Variant },
  { id: 3, title: "Social Media Marketing", img: "/img/social.png", variant: "dark" as Variant },
  { id: 4, title: "Email Marketing", img: "/img/email.png", variant: "light" as Variant },
  { id: 5, title: "Content Creation", img: "/img/content.png", variant: "lime" as Variant },
  { id: 6, title: "Analytics and Tracking", img: "/img/analytics.png", variant: "dark" as Variant },
];

const ServiceCard: FC<{ title: string; img: string; variant: Variant }> = ({ title, img, variant }) => {
  const bg =
    variant === "dark"
      ? "bg-slate-900 text-white"
      : variant === "lime"
      ? "bg-lime-300 text-black"
      : "bg-gray-100 text-black";

  const badgeBg = variant === "dark" ? "bg-lime-300 text-black" : "bg-white text-black";

  return (
    <div className="relative pt-14">
      {/* card */}
      <div className={`relative z-10 overflow-hidden ${bg} shadow-[0_4px_0_#000] rounded-[28px] border border-gray-200 p-8 min-h-[180px]`}>
        {/* title badge */}
        <span className={`inline-block ${badgeBg} px-3 py-1 rounded-md font-semibold text-lg`}>
          {title}
        </span>

        {/* illustration */}
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute right-6 top-6 w-36 h-auto object-contain opacity-95"
        />

        {/* CTA */}
        <div className="mt-28">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-medium group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span
              className={`w-9 h-9 rounded-full grid place-items-center ${variant === "dark" ? "bg-white text-2xl text-black" : "bg-black text-white"}`}
            >
              {/* simple arrow */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14" stroke={variant === "dark" ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 6l6 6-6 6" stroke={variant === "dark" ? "#000" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className={`${variant === "dark" ? "text-white" : "text-black"}`}>Learn more</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const Services: FC = () => {
  return (
    <section className="py-16 pt-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* header */}
        <div className="flex items-start gap-8 mb-10">
          <h2 className="inline-block bg-lime-300 text-2xl rounded-md px-4 py-2 font-bold">Services</h2>
          <p className="text-gray-600 max-w-xl">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} title={s.title} img={s.img} variant={s.variant} />
          ))}
        </div>
        <div className="max-w-12xl pt-20 mx-auto px-6">       
        {/* rounded card — note overflow-visible so art can extend */}
        <div className="relative bg-gray-100 rounded-2xl p-10 lg:p-16 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: content */}
            <div className="z-20">
              <h3 className="text-3xl font-bold mb-4">Let’s make things happen</h3>
              <p className="text-gray-700 max-w-xl mb-6">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>

              <a
                href="#contact"
                className="inline-block rounded-xl bg-black text-white px-6 py-3 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get your free proposal
              </a>
            </div>

            {/* Right: placeholder — on small screens we hide the big art */}
            <div className="hidden lg:block" aria-hidden="true"></div>
          </div>

          {/* Decorative illustration: absolute and allowed to overflow to the right */}
          <img
            src="/img/service.png"
            alt=""                // decorative
            aria-hidden="true"
            loading="lazy"
            className="hidden lg:block absolute top-1/2 -right-8 lg:-right-24 transform -translate-y-1/2 w-40 md:w-48 lg:w-[480px] z-10"          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
