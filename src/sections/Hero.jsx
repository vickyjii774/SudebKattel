
import siteData from "../data/siteData";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Container from "../components/Container";


export default function Hero() {
  const { name, role, introduction, image } = siteData.profile;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F2F6F1]"
    >
            <Container>

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#588157]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-3 px-3 py-12 sm:gap-12 sm:px-8 sm:py-24 lg:gap-20 lg:px-12 lg:py-28">

        {/* Hero Text */}
        <div className="relative z-10 min-w-0">
          <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-[#588157] sm:mt-8 sm:text-sm sm:tracking-[0.2em]">
नमस्ते, म
          </p>

          <h2 className="mt-2 text-xs font-medium leading-snug text-gray-700 sm:mt-4 sm:text-xl">
            {role}
          </h2>

          <h1 className="mt-2 whitespace-nowrap text-[clamp(14px,4vw,22px)] font-bold leading-tight tracking-tight text-gray-950 sm:mt-3 sm:text-6xl lg:text-7xl">
            {name}
          </h1>

          <p className="mt-3 text-xs leading-5 text-gray-600 sm:mt-6 sm:max-w-xl sm:text-lg sm:leading-8">
            {introduction}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-9 sm:gap-3">
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#588157] px-3 py-2 text-[10px] font-semibold text-white shadow-lg shadow-[#588157]/20 transition hover:-translate-y-1 hover:bg-[#3F6240] sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Know More
              <ArrowUpRight size={14} className="sm:h-[17px] sm:w-[17px]" />
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto w-full min-w-0 max-w-sm">
          <div className="absolute inset-2 rotate-6 rounded-[1.25rem] bg-[#588157]/15 sm:inset-4 sm:rounded-[2rem]" />

          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border border-white bg-white shadow-2xl shadow-gray-900/10 sm:rounded-[2rem]">
            {image ? (
              <img
              src="/images/uploads/1.jpeg"
              alt="A personal photo"
              className="aspect-[16/16] w-full rounded-2xl object-cover shadow-md"
            />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#E8EFE7] via-white to-[#DCE8DA] p-2 text-center sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#588157] text-2xl font-bold text-white sm:h-32 sm:w-32 sm:rounded-[2rem] sm:text-6xl">
                  {name?.charAt(0)?.toUpperCase() || "S"}
                </span>

                <p className="mt-2 text-xs font-bold text-gray-900 sm:mt-7 sm:text-2xl">
                  {name}
                </p>

                <p className="mt-1 text-[9px] text-gray-500 sm:mt-2 sm:text-sm">
                  {role}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
            </Container>

    </section>
  );
}
