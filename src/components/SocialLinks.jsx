import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import siteData from "../data/siteData";

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  facebook: FaFacebook,
  tiktok: FaTiktok,
  youtube: FaYoutube,
  whatsapp: FaWhatsapp,
};

export default function SocialLinks() {
  const profile = siteData?.profile ?? siteData?._profile ?? {};
  const socials = profile.socials ?? [];

  return (
    <div className="flex flex-wrap items-center gap-5">
      {socials.map(({ label, url }) => {
        const Icon =
          socialIcons[label?.toLowerCase()] ?? FaGithub;

        return (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="text-3xl text-gray-500 transition duration-300 hover:-translate-y-1 hover:text-[#588157]"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}