import { type FC, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  note: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    note: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    note: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
  },
  {
    name: "Micheal Johnson",
    role: "Senior SEO Specialist",
    note: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."
  },
];

const Testimonials: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative pt-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start gap-8 mb-10">
          <h2 className="inline-block bg-lime-300 text-2xl rounded-md px-4 py-2 font-bold">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-xl">
            Hear from Our Satisfied Clients: Real Stories of Success with Our Digital Marketing Services
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bg-black rounded-2xl p-10 lg:p-16">
          {/* Active Testimonial Card */}
          <div className="transition-opacity duration-500 border border-lime-300 rounded-2xl p-6 text-center">
            <p className="text-white italic mb-6">
              "{testimonials[currentIndex].note}"
            </p>
            </div><br />
            <div className="text-center">
             <h3 className="text-lg text-lime-300 font-bold">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-white">
              {testimonials[currentIndex].role}
            </p>               
            </div>



          {/* Navigation & Indicators */}
          <div className="flex flex-col items-center mt-6 space-y-4">
            {/* Buttons */}
            <div className="flex gap-6">
              <button
                onClick={handlePrev}
                className="p-2 text-white rounded-full hover:bg-white hover:text-black transition"
              >
                <ChevronLeft size={20} />
              </button>
                          {/* Indicator Dots */}
            <div className="flex gap-3 pt-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentIndex ? "bg-lime-300" : "bg-white"
                  }`}
                />
              ))}
              <button
                onClick={handleNext}
                className="p-2 text-white pt-3 rounded-full hover:bg-white hover:text-black transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
