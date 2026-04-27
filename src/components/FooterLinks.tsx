"use client";
import { Mail } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { label: "Email",    href: "mailto:leaamartinez7@gmail.com",                         icon: "mail"     as const },
  { label: "WhatsApp", href: "https://wa.me/542622649327",                             icon: "whatsapp" as const },
  { label: "GitHub",   href: "https://github.com/leamartinez07",                       icon: "github"   as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leandro-martinez-0a7b46224", icon: "linkedin" as const },
];

function Icon({ id }: { id: typeof links[number]["icon"] }) {
  if (id === "whatsapp") return <FaWhatsapp size={15} />;
  if (id === "mail")     return <Mail size={15} strokeWidth={2} />;
  if (id === "github")   return <FaGithub size={15} />;
  if (id === "linkedin") return <FaLinkedin size={15} />;
  return null;
}

export default function FooterLinks() {
  return (
    <div className="flex items-center gap-2">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={l.label}
          title={l.label}
          className="social-btn"
        >
          <Icon id={l.icon} />
        </a>
      ))}
    </div>
  );
}
