
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import siteData from "../data/siteData";
import SocialLinks from "../components/SocialLinks";

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
      className="scroll-mt-20 bg-white"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">

        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Let's start a
            <span className="mt-2 block text-[#588157]">
              conversation.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-gray-600">
            Send me a message.
            My inbox is open.
          </p>
        </div>

        {/* Contact Form */}
        <div className="mt-12 rounded-[2rem] border border-gray-200/80 bg-white p-6 shadow-xl shadow-gray-900/[0.04] sm:p-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-gray-700"
                >
                  Your name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={100}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm font-semibold text-gray-700"
                >
                  Email address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                  maxLength={254}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="contact-subject"
                className="text-sm font-semibold text-gray-700"
              >
                Subject *
              </label>

              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
                required
                maxLength={150}
              />
            </div>

            {/* Message */}
            <div>
              <div className="flex items-center justify-between gap-3">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-gray-700"
                >
                  Your message *
                </label>

                <span className="text-xs text-gray-400">
                  {form.message.length}/5000
                </span>
              </div>

              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} min-h-36 resize-y`}
                required
                minLength={5}
                maxLength={5000}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-[#588157] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#588157]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#3F6240] hover:shadow-xl active:translate-y-0"
            >
              Send message

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Your email app will open to send your message.
            </p>
          </form>
        </div>

        {/* Social Media */}
        {socials.length > 0 && (
          <div className="mt-8 border-t border-gray-100 pt-7">
            <p className="text-center text-sm font-medium text-gray-500">
              Connect with me
            </p>

            <div className="mt-5 flex text-2xl justify-center">
              <SocialLinks socials={socials} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
