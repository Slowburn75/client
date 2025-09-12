import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research & Strategy",
    description:
      "Our team dives deep into market research, analyzes competitors, and develops a winning strategy for your business.",
  },
  {
    title: "Planning",
    description:
      "We map out clear milestones, deliverables, and timelines to ensure everything stays on track.",
  },
  {
    title: "Execution",
    description:
      "Our experts bring the plan to life, executing every detail with precision and creativity.",
  },
  {
    title: "Testing & Review",
    description:
      "We rigorously test and review to ensure the best quality before final delivery.",
  },
  {
    title: "Delivery & Support",
    description:
      "We deliver the final product and offer ongoing support to help your business thrive.",
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pt-32 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-start gap-8 mb-10">
          <h2 className="inline-block bg-lime-300 text-2xl rounded-md px-4 py-2 font-bold">
            Our Working Process
          </h2>
          <p className="text-gray-600 max-w-xl">
            Step-by-Step Guide to Achieving Your Business Goals          </p>
        </div>

            <div className="space-y-4 pb-3">
                {steps.map((step, index) => {
                const isOpen = openIndex === index;
                return (
                    <div
                    key={index}
                    className={`rounded-2xl border shadow-[0_4px_0_#000] p-6 transition-colors duration-300 cursor-pointer ${
                        isOpen ? "bg-lime-300" : "bg-gray-50"
                    }`}
                    onClick={() => toggleStep(index)}
                    >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <button className="bg-white border border-black rounded-full w-8 h-8 flex items-center justify-center">
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </button>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                    >
                        <div className="border-t border-black/30 pt-4 text-gray-700 text-sm">
                        {step.description}
                        </div>
                    </div>
                    </div>
                );
                })}
            </div> 
        </div>

    </section>
  );
}
