
import siteData from "../data/siteData";
import { ArrowUpRight } from "lucide-react";
import Container from "../components/Container";

export default function Navbar() {
  const { name, image } = siteData.profile;
  const profileImage = image || "/images/uploads/1.jpeg";

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
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 shadow-sm shadow-gray-900/[0.02] backdrop-blur-xl">
      <Container>
        {/* Match the Hero's inner horizontal frame */}
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:px-8 sm:py-3 lg:px-12">

          {/* Logo and Name */}
          <button
            type="button"
            onClick={() => navigateTo("home")}
            aria-label={`${name} - Home`}
            className="group flex min-w-0 items-center gap-2 sm:gap-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#588157] shadow-sm transition duration-300 group-hover:scale-105 sm:h-10 sm:w-10 sm:rounded-2xl">
              <img
                src={profileImage}
                alt={`${name} logo`}
                className="h-full w-full object-cover"
              />
            </span>

            <span className="min-w-0 truncate text-xs font-bold tracking-tight text-gray-900 sm:text-base lg:text-lg">
              {name}
            </span>
          </button>

          {/* Navigation */}
          <nav
            aria-label="Main navigation"
            className="flex shrink-0 items-center gap-0.5 sm:gap-2"
          >
            <button
              type="button"
              onClick={() => navigateTo("home")}
              className="whitespace-nowrap rounded-full px-2 py-2 text-[11px] font-medium text-gray-700 transition hover:bg-[#E8EFE7] hover:text-[#3F6240] sm:px-4 sm:text-sm lg:px-5"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => navigateTo("about")}
              className="whitespace-nowrap rounded-full px-2 py-2 text-[11px] font-medium text-gray-700 transition hover:bg-[#E8EFE7] hover:text-[#3F6240] sm:px-4 sm:text-sm lg:px-5"
            >
              About
            </button>

            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#588157] px-2.5 py-2 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#3F6240] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              Contact
              <ArrowUpRight
                size={14}
                className="shrink-0"
              />
            </button>
          </nav>

        </div>
      </Container>
    </header>
  );
}
