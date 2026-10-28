import siteData from "../data/siteData";
import Container from "../components/Container";

export default function About() {
  const { name, role, about, image, aboutImage } = siteData.profile;
  const sectionImage = aboutImage || image || "/images/uploads/1.jpeg";

  return (
    <section id="about" className="scroll-mt-20 bg-white">
      <Container>
        <div className="mx-auto max-w-7xl px-5 py-2 sm:px-8 sm:py-2 lg:px-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
            A little about <span className="text-[#588157]">me.</span>
          </h2>
          <div className="mt-6 h-1 w-16 rounded-full bg-[#588157]" />
          <div className="mt-10 flex flex-row items-start gap-4 sm:gap-8 lg:gap-12">
            <div className="w-2/5 shrink-0 sm:w-1/3">
              <img src={sectionImage} alt={`${name} about photo`} className="aspect-square w-full rounded-2xl object-cover shadow-md" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-base leading-7 text-gray-600 sm:text-lg sm:leading-9">
                नमस्ते, म{" "}
                <span className="font-semibold text-gray-950">{role} {name}</span>. {about}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
