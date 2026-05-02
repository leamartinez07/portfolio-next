"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";
import { MapPin, Mail } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function getAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age;
}

const BIRTH_DATE = new Date(2004, 1, 16); // 16 de febrero de 2004

const contactLinks = [
  { label: "Email",    href: "mailto:leaamartinez7@gmail.com",                         icon: "mail"     as const },
  { label: "WhatsApp", href: "https://wa.me/542622649327",                             icon: "whatsapp" as const },
  { label: "GitHub",   href: "https://github.com/leamartinez07",                        icon: "github"   as const },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leandro-martinez-0a7b46224", icon: "linkedin" as const },
];

function ContactIcon({ icon }: { icon: typeof contactLinks[number]["icon"] }) {
  if (icon === "whatsapp") return <FaWhatsapp size={16} />;
  if (icon === "mail")     return <Mail size={16} strokeWidth={2} />;
  if (icon === "github")   return <FaGithub size={16} />;
  if (icon === "linkedin") return <FaLinkedin size={16} />;
  return null;
}

function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {contactLinks.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target={l.href.startsWith("http") ? "_blank" : undefined}
          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={l.label}
          title={l.label}
          className="social-btn"
        >
          <ContactIcon icon={l.icon} />
        </a>
      ))}
    </div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
  };

  /* ─────────────────────────────────────────
     MOBILE LAYOUT
  ───────────────────────────────────────── */
  if (isMobile) {
    return (
      <motion.section {...fadeIn} style={{
        minHeight: "calc(100dvh - 41px)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem 1.25rem 2rem",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
      }}>
        {/* ── Top: eyebrow + name + badge ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", width: "100%", position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ justifyContent: "center", alignSelf: "center" }}>
            {lang === "es" ? "Diseño y Desarrollo Web" : "Design & Web Development"}
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            style={{ margin: 0, lineHeight: 0.88, textAlign: "center" }}
          >
            <span style={{
              display: "block",
              fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.85rem, 9.8vw, 4.2rem)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}>Leandro</span>
            <span className="gradient-text" style={{
              display: "block",
              fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(1.85rem, 9.8vw, 4.2rem)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
            }}>Martinez</span>
          </motion.h1>

          <span className="available-badge">
            <span className="available-dot" />
            {lang === "es" ? "Disponible para trabajar" : "Available for work"}
          </span>
        </div>

        {/* ── Middle: stats + location + email ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", position: "relative", zIndex: 1 }}
        >
          <p style={{
            fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{ width: "18px", height: "1px", background: "currentColor", display: "inline-block" }} />
            {lang === "es" ? "Remoto · ARG" : "Remote · ARG"}
            <span style={{ width: "18px", height: "1px", background: "currentColor", display: "inline-block" }} />
          </p>

          <div style={{ display: "flex", width: "100%", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}>
            {[
              { val: String(getAge(BIRTH_DATE)), label: lang === "es" ? "Edad" : "Age" },
              { val: "B2",  label: lang === "es" ? "Inglés" : "English" },
              { val: "Jr.", label: lang === "es" ? "Nivel"  : "Level"   },
            ].map((item, i) => (
              <div key={i} style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.4rem",
                borderLeft: i > 0 ? "1px solid var(--panel-border)" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "var(--stat-num-color)",
                  display: "inline-block",
                  transform: "scaleX(1.12) scaleY(0.82)",
                  transformOrigin: "center bottom",
                }}>{item.val}</span>
                <span style={{
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "linear-gradient(135deg, var(--lilac) 0%, var(--pink) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.84rem", color: "var(--text)", fontFamily: "var(--font-syne, sans-serif)", fontWeight: 500 }}>
            Tunuyán, Mendoza, Argentina
            <MapPin size={14} style={{ color: "var(--accent)", flexShrink: 0 }} strokeWidth={2.5} />
          </div>

          <div style={{ fontSize: "0.85rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-syne, sans-serif)", fontWeight: 500 }}>
            leaamartinez7@gmail.com
            <Mail size={14} style={{ color: "var(--accent)", flexShrink: 0 }} strokeWidth={2} />
          </div>
        </motion.div>

        {/* ── Bottom: social links ── */}
        <SocialLinks />
      </motion.section>
    );
  }

  /* ─────────────────────────────────────────
     DESKTOP LAYOUT
  ───────────────────────────────────────── */
  return (
    <motion.section {...fadeIn} style={{
      height: "calc(100dvh - 41px)",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr clamp(310px, 32vw, 460px)",
      gridTemplateRows: "1fr",
      paddingTop: "clamp(0.75rem, 2vh, 1.5rem)",
      paddingBottom: "clamp(2.5rem, 5vh, 4.5rem)",
      paddingLeft: "clamp(1.75rem, 3.2vw, 3.2rem)",
      paddingRight: "clamp(1.75rem, 3.2vw, 3.2rem)",
      overflow: "hidden",
      boxSizing: "border-box",
      position: "relative",
    }}>
      {/* ── LEFT COLUMN ── */}
      <div style={{ display: "flex", flexDirection: "column", minWidth: 0, overflow: "hidden", height: "100%", position: "relative", zIndex: 1 }}>
        <p className="eyebrow" style={{ alignSelf: "flex-start", flexShrink: 0 }}>
          {lang === "es" ? "Diseño y Desarrollo Web" : "Design & Web Development"}
        </p>
        <div style={{ flex: 1, display: "flex", alignItems: "center", minWidth: 0 }}>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
            style={{ margin: 0, lineHeight: 0.88 }}
          >
            <span style={{
              display: "block",
              fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 7.8vw, 7rem)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>Leandro</span>
            <span className="gradient-text" style={{
              display: "block",
              fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 7.8vw, 7rem)",
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>Martinez</span>
          </motion.h1>
        </div>
        <div style={{ flexShrink: 0 }}>
          <span className="available-badge">
            <span className="available-dot" />
            {lang === "es" ? "Disponible para trabajar" : "Available for work"}
          </span>
        </div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingLeft: "clamp(0.5rem, 1.5vw, 1.5rem)",
          minWidth: 0,
          overflow: "visible",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.9rem", minWidth: 0 }}>
          <p style={{
            fontFamily: "var(--font-syne, 'Arial Black', sans-serif)",
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--accent)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            {lang === "es" ? "Remoto · ARG" : "Remote · ARG"}
            <span style={{ width: "18px", height: "1px", background: "currentColor", flexShrink: 0, display: "inline-block" }} />
          </p>

          {/* Stats — opción B: solo divisores verticales */}
          <div style={{
            display: "flex",
            width: "100%",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
          }}>
            {[
              { val: String(getAge(BIRTH_DATE)), label: lang === "es" ? "Edad" : "Age" },
              { val: "B2",  label: lang === "es" ? "Inglés" : "English" },
              { val: "Jr.", label: lang === "es" ? "Nivel"  : "Level"   },
            ].map((item, i) => (
              <div key={i} style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.4rem",
                borderLeft: i > 0 ? "1px solid var(--panel-border)" : "none",
              }}>
                <span style={{
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  lineHeight: 1,
                  color: "var(--stat-num-color)",
                  display: "inline-block",
                  transform: "scaleX(1.12) scaleY(0.82)",
                  transformOrigin: "center bottom",
                }}>{item.val}</span>
                <span style={{
                  fontFamily: "var(--font-barlow, sans-serif)",
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  background: "linear-gradient(135deg, var(--lilac) 0%, var(--pink) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{item.label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.84rem", whiteSpace: "nowrap", color: "var(--text)", fontFamily: "var(--font-syne, sans-serif)", fontWeight: 500 }}>
            Tunuyán, Mendoza, Argentina
            <MapPin size={14} style={{ color: "var(--accent)", flexShrink: 0 }} strokeWidth={2.5} />
          </div>

          <div style={{ fontSize: "0.85rem", color: "var(--text)", display: "flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-syne, sans-serif)", fontWeight: 500 }}>
            leaamartinez7@gmail.com
            <Mail size={14} style={{ color: "var(--accent)", flexShrink: 0 }} strokeWidth={2} />
          </div>
        </div>

        <SocialLinks />
      </motion.div>
    </motion.section>
  );
}
