
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import siteData from "../data/siteData";
import SocialLinks from "../components/SocialLinks";
import Container from "../components/Container";


export default function Contact() {
  const profile = siteData?._profile ?? siteData?.profile ?? {};
  const email = profile.email ?? "";
  const socials = profile.socials ?? [];

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      window.alert(
        "Please configure the contact email in siteData.js."
      );
      return;
    }

    const subject = encodeURIComponent(form.subject);

    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Email: ${form.email}\n\n` +
        `Message:\n${form.message}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-[#FAFBF9] px-4 py-3.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#588157] focus:bg-white focus:ring-4 focus:ring-[#588157]/10";

  return (
    <section
      id="contact"
      className="scroll-mt-10 bg-white"
    >
          <Container>

      <div className="mx-auto max-w-3xl px-5 py-1 sm:px-8 sm:py-1">

        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Let's { " "}
            <span className=" text-[#588157]">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-600">
            Send me a message.
          </p>
        </div>


        
     

        {/* Social Media */}
        {socials.length > 0 && (
          
           

            <div className="mt-5 flex text-2xl justify-center">
              <SocialLinks socials={socials} />
            </div>
          
        )}
      </div>
          </Container>

    </section>
  );
}
