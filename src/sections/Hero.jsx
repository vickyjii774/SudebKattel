
import siteData from "../data/siteData";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

export default function Hero() {
  const { name, role, introduction, image, resumeUrl } =
    siteData.profile;

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#F2F6F1]"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#588157]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28">
        <div className="relative z-10">
          

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#588157]">
            Hello, I'm
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            {name}
            
          </h1>

          <h2 className="mt-4 text-lg font-medium text-gray-700 sm:text-xl">
            {role}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
            {introduction}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#about"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#588157] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#588157]/20 transition hover:-translate-y-1 hover:bg-[#3F6240]"
            >
              Know More
              <ArrowUpRight size={17} />
            </a>

           
          </div>

          <button
            onClick={() =>
              document.getElementById("experience")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-12 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#588157]"
          >
            Explore More
            <ArrowDown size={16} />
          </button>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-4 rotate-6 rounded-[2rem] bg-[#588157]/15" />

          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-gray-900/10">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#E8EFE7] via-white to-[#DCE8DA] p-8 text-center">
                <span className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-[#588157] text-6xl font-bold text-white shadow-xl shadow-[#588157]/20">
                  {name?.charAt(0)?.toUpperCase() || "S"}
                </span>
                <p className="mt-7 text-2xl font-bold text-gray-900">
                  {name}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  {role}
                </p>
              </div>
            )}
          </div>

          
        </div>
      </div>
    </section>
  );
}
