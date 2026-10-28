import { useState } from "react";
import siteData from "../data/siteData";
import { ArrowUpRight, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../components/Container";

export default function Gallery() {
  const items = siteData.gallery || [];
  const [activeGallery, setActiveGallery] = useState(null);
  const [activePhoto, setActivePhoto] = useState(0);

  const getPhotos = (item) => {
    const photos = Array.isArray(item.photos)
      ? item.photos.map((photo) => (typeof photo === "string" ? photo : photo?.photo)).filter(Boolean)
      : [];
    // Keep existing gallery entries working until photos are added in the CMS.
    return photos.length ? photos : item.image ? [item.image] : [];
  };

  const openGallery = (index) => {
    setActiveGallery(index);
    setActivePhoto(0);
  };

  const closeGallery = () => setActiveGallery(null);

  const currentPhotos = activeGallery !== null ? getPhotos(items[activeGallery]) : [];
  const showPrevious = () => setActivePhoto((current) => (current - 1 + currentPhotos.length) % currentPhotos.length);
  const showNext = () => setActivePhoto((current) => (current + 1) % currentPhotos.length);

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
            {items.map((item, index) => {
              const photos = getPhotos(item);
              const cover = item.image || photos[0];

              return (
                <article
                  key={`${item.title}-${index}`}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#588157]/30 hover:shadow-xl hover:shadow-gray-900/5"
                >
                  <button
                    type="button"
                    onClick={() => openGallery(index)}
                    className="block w-full cursor-pointer overflow-hidden text-left"
                    aria-label={`View photos in ${item.title}`}
                  >
                    {cover ? (
                      <img
                        src={cover}
                        alt={item.title}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#E8EFE7] to-[#F2F6F1]">
                        <ImageIcon size={42} className="text-[#588157]/50" />
                      </div>
                    )}
                  </button>

                  <div className="flex items-center justify-between gap-4 p-5">
                    <button
                      type="button"
                      onClick={() => openGallery(index)}
                      className="min-w-0 flex-1 cursor-pointer text-left"
                    >
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      <p className="mt-2 text-xs font-medium text-[#588157]">
                        {photos.length} {photos.length === 1 ? "photo" : "photos"} · View gallery
                      </p>
                    </button>

                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open link for ${item.title}`}
                        className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#E8EFE7] text-[#3F6240] transition hover:bg-[#588157] hover:text-white"
                      >
                        <ArrowUpRight size={19} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>

      {activeGallery !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={items[activeGallery]?.title || "Gallery photos"}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeGallery}
          onKeyDown={(event) => {
            if (event.key === "Escape") closeGallery();
            if (event.key === "ArrowLeft" && currentPhotos.length > 1) showPrevious();
            if (event.key === "ArrowRight" && currentPhotos.length > 1) showNext();
          }}
          tabIndex={-1}
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <h3 className="mb-4 text-center text-xl font-semibold text-white sm:text-2xl">
              {items[activeGallery]?.title}
            </h3>
            {currentPhotos.length > 0 ? (
              <>
                <div className="relative flex min-h-[45vh] items-center justify-center">
                  <img
                    src={currentPhotos[activePhoto]}
                    alt={`${items[activeGallery]?.title} photo ${activePhoto + 1}`}
                    className="max-h-[72vh] max-w-full rounded-xl object-contain"
                  />
                  {currentPhotos.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={showPrevious}
                        aria-label="Previous photo"
                        className="absolute left-2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75 sm:left-4"
                      >
                        <ChevronLeft size={26} />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        aria-label="Next photo"
                        className="absolute right-2 rounded-full bg-black/50 p-3 text-white transition hover:bg-black/75 sm:right-4"
                      >
                        <ChevronRight size={26} />
                      </button>
                    </>
                  )}
                </div>
                <p className="mt-4 text-center text-sm text-white/75">
                  {activePhoto + 1} / {currentPhotos.length}
                </p>
                {currentPhotos.length > 1 && (
                  <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-2">
                    {currentPhotos.map((photo, photoIndex) => (
                      <button
                        key={photo}
                        type="button"
                        onClick={() => setActivePhoto(photoIndex)}
                        aria-label={`View photo ${photoIndex + 1}`}
                        className={`shrink-0 overflow-hidden rounded-lg border-2 ${photoIndex === activePhoto ? "border-white" : "border-transparent opacity-60 hover:opacity-100"}`}
                      >
                        <img src={photo} alt="" className="h-14 w-16 object-cover sm:h-16 sm:w-20" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p className="py-16 text-center text-white/80">No photos have been added to this gallery yet.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
