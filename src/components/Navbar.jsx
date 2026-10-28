import siteData from "../data/siteData";
import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";

export default function Navbar() {
  const { name, image, navbarImage } = siteData.profile;
  const brandImage = navbarImage || image || "/images/uploads/1.jpeg";

  const navigateTo = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/90 shadow-sm shadow-gray-900/[0.02] backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-1 sm:h-[76px]">
        <button type="button" onClick={() => navigateTo("home")} aria-label={`${name} - Home`} className="group flex min-w-0 shrink items-center gap-1.5 sm:gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#588157] shadow-sm transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl">
            <img src={brandImage} alt={`${name} logo`} className="h-full w-full object-cover" />
          </span>
          <span className="min-w-0 truncate text-xs font-bold tracking-tight text-gray-900 sm:text-lg">{name}</span>
        </button>
        <nav aria-label="Main navigation" className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button type="button" onClick={() => navigateTo("home")} className="rounded-full px-2.5 py-1.5 text-[11px] font-medium text-gray-700 transition duration-200 hover:bg-[#E8EFE7] hover:text-[#3F6240] sm:px-5 sm:py-2 sm:text-sm">Home</button>
          <button type="button" onClick={() => navigateTo("about")} className="rounded-full px-2.5 py-1.5 text-[11px] font-medium text-gray-700 transition duration-200 hover:bg-[#E8EFE7] hover:text-[#3F6240] sm:px-5 sm:py-2 sm:text-sm">About</button>
          <button type="button" onClick={() => navigateTo("contact")} className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-[#588157] px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition duration-300 hover:bg-[#3F6240] sm:ml-1 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm">
            Contact <ArrowUpRight size={12} className="shrink-0 sm:h-4 sm:w-4" />
          </button>
        </nav>
      </Container>
    </header>
  );
}
