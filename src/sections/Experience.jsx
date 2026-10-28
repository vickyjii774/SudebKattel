
import siteData from "../data/siteData";
import { BriefcaseBusiness } from "lucide-react";
import Container from "../components/Container";


export default function Experience() {
  const items = siteData.experience || [];

  return (
    <section id="experience" className="scroll-mt-20 bg-[#F8FAF7]">
          <Container>

      <div className="mx-auto max-w-7xl px-5 py-2 sm:px-8 sm:py-2 lg:px-12">
       
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Experience<span className="text-[#588157]"></span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          The roles, responsibilities, and experiences that continue to shape my journey.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={`${item.company}-${index}`}
              className="group rounded-3xl border border-gray-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#588157]/40 hover:shadow-xl hover:shadow-gray-900/5 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8EFE7] text-[#3F6240]">
                  <BriefcaseBusiness size={22} />
                </span>
                <span className="rounded-full bg-[#F2F6F1] px-3 py-1.5 text-xs font-semibold text-[#3F6240]">
                  {item.period}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.role}
              </h3>
              <p className="mt-2 font-medium text-[#588157]">
                {item.company}
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-600">
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
