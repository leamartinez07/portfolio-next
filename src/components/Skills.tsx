"use client";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers";
import { Code2 } from "lucide-react";
import BrandIcon from "./BrandIcon";
import { BRAND } from "@/data/brandColors";

const skills = [
  { name: "HTML5",       slug: "html5"            },
  { name: "CSS3",        slug: "css3"             },
  { name: "JavaScript",  slug: "javascript"       },
  { name: "React",       slug: "react"            },
  { name: "Vue",         slug: "vue"              },
  { name: "Next.js",     slug: "nextdotjs"        },
  { name: "Tailwind",    slug: "tailwindcss"      },
  { name: "TypeScript",  slug: "typescript"       },
  { name: "PHP",         slug: "php"              },
  { name: "Laravel",     slug: "laravel"          },
  { name: "Express",     slug: "express"          },
  { name: "WordPress",   slug: "wordpress"        },
  { name: "MySQL",       slug: "mysql"            },
  { name: "MariaDB",     slug: "mariadb"          },
  { name: "SQLite",      slug: "sqlite"           },
  { name: "Supabase",    slug: "supabase"         },
  { name: "Git",         slug: "git"              },
  { name: "Figma",       slug: "figma"            },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "Photoshop",   slug: "adobephotoshop"   },
  { name: "Node.js",     slug: "nodedotjs"        },
  { name: "phpMyAdmin",  slug: "phpmyadmin"       },
  { name: "PWA",         slug: "pwa"              },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28 } },
};

export default function Skills() {
  const { lang } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.45 }}
    >
      <p className="section-label mb-6">
        <Code2 size={14} strokeWidth={2.2} style={{ flexShrink: 0 }} />
        {lang === "es" ? "Habilidades" : "Skills"}
      </p>

      <motion.div
        className="flex flex-wrap gap-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {skills.map((s) => {
          const color = BRAND[s.slug] ?? "#9d5bf4";
          return (
            <motion.span key={s.name} variants={itemVariants} className="skill">
              <BrandIcon slug={s.slug} size={16} color={color} />
              {s.name}
            </motion.span>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
