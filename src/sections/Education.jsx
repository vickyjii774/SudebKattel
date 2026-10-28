
import siteData from "../data/siteData";
import { GraduationCap } from "lucide-react";
import Container from "../components/Container";


export default function Education() {
  const items = siteData.education || [];

  return (
    <section id="education" className="scroll-mt-20 bg-gray-200">
          <Container>

      <div className="mx-auto max-w-7xl px-5 py-2 sm:px-8 sm:py-2 lg:px-12">
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Education<span className="text-[#588157]"></span>
        </h2>

        <div className="mt-12 space-y-5">
          {items.map((item, index) => (

            
<article
  key={`${item.institution}-${index}`}
  className="flex flex-col gap-5 rounded-3xl border border-white bg-amber-50 p-6 transition duration-300 hover:border-[#588157]/40 sm:p-8"
>
  {item.image && <img src={item.image} alt={item.qualification} className="aspect-[16/7] w-full rounded-2xl object-cover" />}
  <div className="flex items-start gap-5">
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
    </div>

    <span className="inline-flex shrink-0 rounded-full bg-[#F2F6F1] px-4 py-2 text-xs font-semibold text-[#3F6240]">
      {item.period}
    </span>
  </div>

  <p className="w-full text-sm leading-7 text-gray-600">
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
