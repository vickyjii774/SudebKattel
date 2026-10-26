
import siteData from "../data/siteData";
import { ArrowUp, MapPin } from "lucide-react";

export default function Footer() {
  const { name, location } = siteData.profile;

  return (
    <footer className="border-t border-gray-200 bg-[#F8FAF7]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

        {/* Logo and Name */}
        <a
          href="#home"
          className="inline-flex w-fit cursor-pointer items-center gap-2 font-bold tracking-tight text-gray-900 transition hover:text-[#588157]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#588157] text-sm text-white">
            {name?.charAt(0)?.toUpperCase() || "S"}
          </span>
          {name}
        </a>


        {/* Copyright and Back to Top */}
        <p className="text-sm text-gray-500">
  © {new Date().getFullYear()} {name} - {location}
</p>
      </div>
    </footer>
  );
}
