
import siteData from "../data/siteData";

export default function About() {
  const { name,role, about } = siteData.profile;

  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">

        {/* Heading at the top */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          A little about{" "}
          <span className="text-[#588157]">me</span>
          <span className="text-[#588157]">.</span>
        </h2>

        <div className="mt-6 h-1 w-16 rounded-full bg-[#588157]" />

        {/* Image on left, text on right on all screens */}
        <div className="mt-10 flex flex-row items-start gap-4 sm:gap-8 lg:gap-12">

          {/* Personal image */}
          <div className="w-2/5 shrink-0 sm:w-1/3">
            <img
              src="/images/uploads/1.jpeg"
              alt="A personal photo"
              className="aspect-[16/16] w-full rounded-2xl object-cover shadow-md"
            />
          </div>

          {/* About text */}
          <div className="min-w-0 flex-1">
            <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-9">
              नमस्ते, म{" "}
              
              <span className="font-semibold text-gray-950">
               {role } {name}
              </span>
              . {about}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
