
import siteData from "../data/siteData";
import { ArrowUpRight, Heart, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Curiosity",
    description: "Always exploring new ideas and learning new skills.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Working toward meaningful goals with intention.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Bringing care and enthusiasm to every project.",
  },
];

export default function About() {
  const { name, about, location, email } = siteData.profile;

  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#588157]">
              Get to know me
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              A little about{" "}
              <span className="text-[#588157]">me.</span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#588157]" />

            <p className="mt-6 text-base leading-8 text-gray-600">
              Every journey begins with curiosity and a willingness to grow.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 font-semibold text-[#3F6240] transition hover:gap-3"
            >
              Let's connect
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div>
            <p className="text-lg leading-9 text-gray-600">
              I'm{" "}
              <span className="font-semibold text-gray-950">{name}</span>.
              {" "}{about}
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#588157]/15 bg-[#F2F6F1] p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#588157]">
                <ArrowUpRight size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Based in
                </p>
                <p className="mt-1 text-sm text-gray-600">{location}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {values.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#588157]/30 hover:shadow-lg hover:shadow-gray-900/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8EFE7] text-[#3F6240]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
