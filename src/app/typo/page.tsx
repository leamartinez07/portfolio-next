"use client";
import { Syne, Bebas_Neue, Barlow_Condensed, Anton, Outfit, Big_Shoulders_Display, Unbounded, Space_Grotesk } from "next/font/google";

const syne    = Syne({ subsets: ["latin"], weight: ["800"], display: "swap" });
const bebas   = Bebas_Neue({ subsets: ["latin"], weight: "400", display: "swap" });
const barlow  = Barlow_Condensed({ subsets: ["latin"], weight: ["900"], display: "swap" });
const anton   = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const outfit  = Outfit({ subsets: ["latin"], weight: ["300", "900"], display: "swap" });
const bigSh   = Big_Shoulders_Display({ subsets: ["latin"], weight: ["900"], display: "swap" });
const unbnd   = Unbounded({ subsets: ["latin"], weight: ["900"], display: "swap" });
const spaceG  = Space_Grotesk({ subsets: ["latin"], weight: ["700"], display: "swap" });

const grad: React.CSSProperties = {
  background: "linear-gradient(135deg, #c084fc, #e879f9)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const card: React.CSSProperties = {
  background: "#16132a",
  border: "1px solid #252040",
  borderRadius: "16px",
  padding: "32px 28px 22px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

const label: React.CSSProperties = {
  fontSize: "0.62rem",
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  color: "#9d5bf4",
  fontWeight: 700,
};

const desc: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "#7a6d94",
  lineHeight: 1.5,
  borderTop: "1px solid #252040",
  paddingTop: "12px",
};

type Option = {
  id: string;
  label: string;
  desc: string;
  first: React.CSSProperties;
  last: React.CSSProperties;
  firstText?: string;
  lastText?: string;
};

const options: Option[] = [
  {
    id: "A",
    label: "A · Syne (actual)",
    desc: "Syne 800 · tracking-tighter · la que ya tenés",
    first: { fontFamily: syne.style.fontFamily, fontSize: "clamp(3.2rem,7vw,5.5rem)", fontWeight: 800, letterSpacing: "-0.04em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: syne.style.fontFamily, fontSize: "clamp(3.2rem,7vw,5.5rem)", fontWeight: 800, letterSpacing: "-0.04em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "B",
    label: "B · Bebas Neue",
    desc: "Ultra-condensada · estilo cartel · mucho impacto vertical",
    first: { fontFamily: bebas.style.fontFamily, fontSize: "clamp(4rem,9vw,7rem)", letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: bebas.style.fontFamily, fontSize: "clamp(4rem,9vw,7rem)", letterSpacing: "0.02em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "C",
    label: "C · Barlow Condensed",
    desc: "Condensada 900 · ancho pero estrecha · muy legible",
    first: { fontFamily: barlow.style.fontFamily, fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: barlow.style.fontFamily, fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "D",
    label: "D · Anton",
    desc: "Bold clásico · compacto · similar a Impact pero refinada",
    first: { fontFamily: anton.style.fontFamily, fontSize: "clamp(3rem,7vw,5.5rem)", letterSpacing: "0.01em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: anton.style.fontFamily, fontSize: "clamp(3rem,7vw,5.5rem)", letterSpacing: "0.01em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "E",
    label: "E · Outfit (contraste fino/grueso)",
    desc: "Leandro en 300 minúscula + MARTÍNEZ en 900 · elegante",
    firstText: "leandro",
    first: { fontFamily: outfit.style.fontFamily, fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 300, letterSpacing: "-0.02em", textTransform: "lowercase", lineHeight: 0.92, color: "#ede9f8", WebkitTextFillColor: "#ede9f8" },
    last:  { fontFamily: outfit.style.fontFamily, fontSize: "clamp(3rem,7vw,5.5rem)", fontWeight: 900, letterSpacing: "-0.04em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "F",
    label: "F · Big Shoulders Display",
    desc: "Geométrica ultra-bold · muy moderna · popular en portfolios 2024–25",
    first: { fontFamily: bigSh.style.fontFamily, fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 900, letterSpacing: "-0.01em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: bigSh.style.fontFamily, fontSize: "clamp(3.5rem,8vw,6.5rem)", fontWeight: 900, letterSpacing: "-0.01em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "G",
    label: "G · Unbounded",
    desc: "Cuadrada y geométrica · muy tech · usada en Web3 y startups",
    first: { fontFamily: unbnd.style.fontFamily, fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: unbnd.style.fontFamily, fontSize: "clamp(2rem,5vw,3.8rem)", fontWeight: 900, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 0.92 },
  },
  {
    id: "H",
    label: "H · Space Grotesk expandido",
    desc: "Tracking wide · espaciado · claro y editorial",
    first: { fontFamily: spaceG.style.fontFamily, fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 0.92 },
    last:  { fontFamily: spaceG.style.fontFamily, fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 0.92 },
  },
];

export default function TypoPreview() {
  return (
    <div style={{ background: "#0a0812", minHeight: "100vh", padding: "40px 24px 80px" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#7a6d94", marginBottom: "40px", paddingBottom: "16px", borderBottom: "1px solid #252040" }}>
        Elige tipografía — decile la letra a Claude
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
        {options.map((opt) => (
          <div key={opt.id} style={card}>
            <span style={label}>{opt.label}</span>
            <div>
              <div style={opt.first}>{opt.firstText ?? "Leandro"}</div>
              <div style={{ ...opt.last, ...grad }}>Martinez</div>
            </div>
            <p style={desc}>{opt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
