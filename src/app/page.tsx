import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ProjectsSection from "@/components/ProjectsSection";

const sectionPadding = {
  paddingLeft:  "clamp(1.75rem, 3.2vw, 3.2rem)",
  paddingRight: "clamp(1.75rem, 3.2vw, 3.2rem)",
  paddingTop:    "clamp(3rem, 8vh, 5rem)",
  paddingBottom: "clamp(3rem, 8vh, 5rem)",
} as const;

export default function Home() {
  return (
    <>
      <Hero />
      <section style={sectionPadding}><Experience /></section>
      <section style={sectionPadding}><Skills /></section>
      <section style={sectionPadding}><ProjectsSection /></section>
    </>
  );
}
