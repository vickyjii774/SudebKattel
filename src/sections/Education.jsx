
import siteData from "../data/siteData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const items = siteData.education || [];

  return (
    <section id="education" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#588157]">
          Learning & growth
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Education<span className="text-[#588157]">.</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          The knowledge and learning experiences that form my foundation.
        </p>

        <div className="mt-12 space-y-5">
          {items.map((item, index) => (
            <article
              key={`${item.institution}-${index}`}
              className="flex flex-col gap-5 rounded-3xl border border-gray-200 p-6 transition duration-300 hover:border-[#588157]/40 hover:bg-[#F8FAF7] sm:flex-row sm:items-start sm:p-8"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#E8EFE7] text-[#3F6240]">
                <GraduationCap size={26} />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.qualification}
                </h3>
                <p className="mt-2 font-medium text-[#588157]">
                  {item.institution}
                </p>
                <p className="mt-2 text-sm text-gray-500">{item.period}</p>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>

              <span className="hidden rounded-full bg-[#F2F6F1] px-4 py-2 text-xs font-semibold text-[#3F6240] sm:inline-flex">
                Education
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
