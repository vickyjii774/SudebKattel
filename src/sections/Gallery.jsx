
import siteData from "../data/siteData";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import Container from "../components/Container";


export default function Gallery() {
  const items = siteData.gallery || [];

  return (
    <section id="gallery" className="scroll-mt-20 bg-[#F8FAF7]">
          <Container>

      <div className="mx-auto max-w-7xl px-5 py-2 sm:px-8 sm:py-2 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#588157]">
          Moments & memories
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
          Gallery<span className="text-[#588157]">.</span>
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-gray-600">
          A collection of moments, projects, and experiences.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#588157]/30 hover:shadow-xl hover:shadow-gray-900/5"
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#E8EFE7] to-[#F2F6F1]">
                  <ImageIcon size={42} className="text-[#588157]/50" />
                </div>
              )}

              <div className="flex items-center justify-between gap-4 p-5">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${item.title}`}
                    className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E8EFE7] text-[#3F6240] transition hover:bg-[#588157] hover:text-white"
                  >
                    <ArrowUpRight size={19} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
          </Container>

    </section>
  );
}
