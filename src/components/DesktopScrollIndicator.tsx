"use client";

import { useEffect, useState } from "react";

interface SectionItem {
  id: string;
  num: string;
  name: string;
}

const SECTIONS: SectionItem[] = [
  { id: "inicio", num: "01", name: "Início" },
  { id: "pilares", num: "02", name: "Pilares" },
  { id: "sobre", num: "03", name: "A Advogada" },
  { id: "atuacao", num: "04", name: "Especialidades" },
  { id: "educativo", num: "05", name: "Conteúdo" },
  { id: "como-atuamos", num: "06", name: "Atendimento" },
  { id: "faq", num: "07", name: "Dúvidas" },
  { id: "contato", num: "08", name: "Contato" },
];

export function DesktopScrollIndicator() {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleObserver = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleObserver, { passive: true });
    handleObserver();

    return () => window.removeEventListener("scroll", handleObserver);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      aria-label="Indicador de navegação por seções"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3.5 pointer-events-none"
    >
      <div className="relative flex flex-col items-end gap-3 py-3 px-2 rounded-full bg-black/25 dark:bg-black/40 backdrop-blur-md border border-[var(--border-subtle)]/30 shadow-lg pointer-events-auto">
        {/* Linha guia vertical */}
        <div className="absolute right-[19px] top-4 bottom-4 w-[1px] bg-[var(--border-subtle)]/40 -z-10" />

        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          const isHovered = hoveredSection === sec.id;

          return (
            <div
              key={sec.id}
              className="relative flex items-center justify-end group"
              onMouseEnter={() => setHoveredSection(sec.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Tooltip flutuante à esquerda com número e nome da seção */}
              <div
                className={`absolute right-7 py-1 px-2.5 rounded-lg text-xs font-heading font-semibold whitespace-nowrap transition-all duration-300 pointer-events-none border ${
                  isHovered || (isActive && hoveredSection === null)
                    ? "opacity-100 translate-x-0 bg-[#1A1A1A]/95 text-white border-[var(--brand-burgundy-light)]/60 shadow-md scale-100"
                    : "opacity-0 translate-x-2 border-transparent scale-95"
                }`}
              >
                <span className="text-[var(--brand-burgundy-light)] mr-1.5 font-bold">{sec.num}</span>
                <span>{sec.name}</span>
              </div>

              {/* Ponto / Indicador circular */}
              <a
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                aria-label={`Ir para a seção ${sec.name}`}
                className="relative flex items-center justify-center w-6 h-6 focus:outline-none cursor-pointer"
              >
                <span
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-3 h-3 bg-[var(--brand-burgundy-light)] ring-4 ring-[var(--brand-burgundy-light)]/30 shadow-[0_0_10px_rgba(163,72,94,0.8)] scale-110"
                      : isHovered
                      ? "w-2.5 h-2.5 bg-white/80 dark:bg-white/90 scale-105"
                      : "w-1.5 h-1.5 bg-[var(--text-muted)]/50 group-hover:bg-[var(--brand-burgundy-light)]/80"
                  }`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
