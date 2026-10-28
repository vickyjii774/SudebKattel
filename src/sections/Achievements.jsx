
import siteData from "../data/siteData";
import { Award, Sparkles } from "lucide-react";
import Container from "../components/Container";


export default function Achievements() {
  const items = siteData.achievements || [];

  return (
    <section id="achievements" className="scroll-mt-20 bg-[#F8FAF7]">
          <Container>

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#588157]">
          Milestones
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Achievements<span className="text-[#588157]">.</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          Recognition, milestones, and accomplishments worth celebrating.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#588157]/40 hover:shadow-xl hover:shadow-gray-900/5"
            >
              <Sparkles
                size={70}
                className="pointer-events-none absolute -right-3 -top-3 text-[#588157]/[0.07]"
              />
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE7] text-[#3F6240]">
                <Award size={24} />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#588157]">
                {item.category}
              </p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
          </Container>

    </section>
  );
}
