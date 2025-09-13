import type { FC } from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: string;
  note: string;
}

const team: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    image: "/img/Picture.png",
    social: "/img/Social icon.png",
    note: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    image: "/img/Picture (1).png",
    social: "/img/Social icon.png",
    note: "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
  },
  {
    name: "Micheal Johnson",
    role: "Senior SEO Specialist",
    image: "/img/Picture (2).png",
    social: "/img/Social icon.png",
    note: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
  },
  {
    name: "Emily Johnson",
    role: "PCC Manager",
    image: "/img/Picture (3).png",
    social: "/img/Social icon.png",
    note: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
  },
  {
    name: "Bryan Williams",
    role: "Social Media Strategist",
    image: "/img/Picture (4).png",
    social: "/img/Social icon.png",
    note: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    image: "/img/Picture (5).png",
    social: "/img/Social icon.png",
    note: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries"
  },
];

const Team: FC = () => {
  return (
    <section className="relative pt-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-start gap-8 mb-10">
          <h2 className="inline-block bg-primary text-2xl rounded-md px-4 py-2 font-bold">
            Team
          </h2>
          <p className="text-black max-w-xl">
            Meet the skilled and experienced team behind our <br /> successful digital marketing strategies          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_0_#000] border border-black p-6 flex flex-col"
            >
              {/* Top Section */}

                <div className="flex justify-between gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div className="flex flex-col justify-end">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <div>
                    <img
                    src={member.social}
                    className="w-7 h-7 object-cover"
                    />
                  </div>
                </div>

              {/* Divider */}
              <div className="border-t border-black my-4"></div>

              {/* Bottom Section */}
              <p className="text-gray-600 text-sm leading-relaxed">{member.note}</p>
            </div>
          ))}
        </div>
                    <div className="mt-8 flex flex-wrap items-right justify-right gap-4 lg:justify-end">
              <button className="px-6 py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black border border-black transition">
                See all team
              </button>
            </div>
      </div>
    </section>
  );
};

export default Team;
