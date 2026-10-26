
import siteData from "../data/siteData";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const { name, email } = siteData.profile;

  const navigateTo = (id) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/90 shadow-sm shadow-gray-900/[0.02] backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-1 px-3 sm:h-[76px] sm:px-6 lg:px-12">

        {/* Logo and Name */}
        <button
          type="button"
          onClick={() => navigateTo("home")}
          aria-label={`${name} - Home`}
          className="group flex min-w-0 shrink items-center gap-2 sm:gap-3"
        >
          {/* Logo */}
         
<span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#588157] shadow-md shadow-[#588157]/20 transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:rounded-2xl">
  <img
    src="/images/uploads/1.jpeg"
    alt={`${name} logo`}
    className="h-full w-full object-cover"
  />
</span>


          {/* Name */}
          <span className="min-w-0 text-left">
            <span className="block truncate text-sm font-bold tracking-tight text-gray-900 sm:text-lg">
              {name}
            </span>
            
          </span>
        </button>

        {/* Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="flex shrink-0 items-center gap-0.5 sm:gap-2"
        >
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="rounded-full px-2 py-2 text-xs font-medium text-gray-700 transition duration-200 hover:bg-[#E8EFE7] hover:text-[#3F6240] sm:px-5 sm:text-sm"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => navigateTo("about")}
            className="rounded-full px-2 py-2 text-xs font-medium text-gray-700 transition duration-200 hover:bg-[#E8EFE7] hover:text-[#3F6240] sm:px-5 sm:text-sm"
          >
            About
          </button>

          <a
            onClick={() => navigateTo("contact")}
            className="ml-0.5 inline-flex items-center gap-1 rounded-full bg-[#588157] px-2.5 py-2 text-xs font-semibold text-white shadow-md shadow-[#588157]/15 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3F6240] sm:ml-1 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
          >
            Contact
            <ArrowUpRight
              size={14}
              className="shrink-0 sm:h-4 sm:w-4"
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
