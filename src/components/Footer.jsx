import siteData from "../data/siteData";
import Container from "../components/Container";

export default function Footer() {
  const { name, image, navbarImage, location } = siteData.profile;
  const brandImage = navbarImage || image || "/images/uploads/1.jpeg";

  return (
    <footer className="border-t border-gray-200 bg-[#F8FAF7]">
      <Container>
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-between gap-3 px-5 py-7 sm:px-8 lg:px-12">
          <a href="#home" className="inline-flex min-w-0 shrink items-center gap-2 font-bold tracking-tight text-gray-900 transition hover:text-[#588157]">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white bg-white shadow-md">
              <img src={brandImage} alt={`${name} brand image`} className="h-full w-full object-cover" />
            </span>
            <span className="truncate">{name}</span>
          </a>
          <p className="shrink-0 text-right text-xs text-gray-500 sm:text-sm">© {new Date().getFullYear()} {name} - {location}</p>
        </div>
      </Container>
    </footer>
  );
}
