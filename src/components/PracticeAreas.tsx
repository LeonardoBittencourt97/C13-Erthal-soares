"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, ArrowUpRight, Scale, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Refs para modelo Desktop (Efeito de Sobreposição / Stacking)
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Estado para acordeão resumido no modelo Mobile
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  useGSAP(
    () => {
      // 1. Animação bidirecional do cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. DESKTOP: Sobreposição com Pinning
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (desktopContainerRef.current && row1Ref.current && row2Ref.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              start: "top 20%",
              end: "+=520",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          tl.to(
            row1Ref.current,
            {
              scale: 0.94,
              opacity: 0.25,
              ease: "none",
            },
            0
          );

          tl.fromTo(
            row2Ref.current,
            {
              y: 420,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
            },
            0
          );
        }
      });
    },
    { scope: sectionRef }
  );

  const topRowAreas = PRACTICE_AREAS.slice(0, 3);
  const bottomRowAreas = PRACTICE_AREAS.slice(3, 5);

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--brand-gold)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--brand-brown)] dark:text-[var(--brand-gold)] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Abordagem técnica, acolhedora e combativa nas áreas Cível, Família, Consumidor, Previdenciária e Trabalhista em Curitiba, PR, SC, SP e em todo o Brasil.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): SOBREPOSIÇÃO PINNADA                                */}
        {/* ========================================================================= */}
        <div ref={desktopContainerRef} className="hidden md:block relative min-h-[500px]">
          {/* Linha 1 (3 Cards Base) */}
          <div ref={row1Ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 will-change-transform">
            {topRowAreas.map((area) => (
              <div
                key={area.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-md flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
                      {area.code}.
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--brand-brown)] dark:text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-colors duration-300 shadow-2xs">
                      <Scale className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-gold)] font-semibold block mb-1">
                    {area.subtitle}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                    {area.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-gold)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] hover:text-[var(--text-main)] transition-colors group/link"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Linha 2 (2 Cards que cobrem a linha 1) */}
          <div
            ref={row2Ref}
            className="absolute inset-x-0 top-0 z-20 grid md:grid-cols-2 gap-6 sm:gap-8 will-change-transform pointer-events-auto max-w-4xl mx-auto"
          >
            {bottomRowAreas.map((area) => (
              <div
                key={area.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--brand-gold)]/60 shadow-2xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[var(--brand-gold)]">
                      {area.code}.
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--brand-gold)] group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-colors duration-300 shadow-2xs">
                      <Scale className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-gold)] font-semibold block mb-1">
                    {area.subtitle}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                    {area.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-gold)] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[var(--brand-gold)] hover:text-[var(--text-main)] transition-colors group/link"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE: CARDS COM ACCORDION                                        */}
        {/* ========================================================================= */}
        <div className="md:hidden space-y-4">
          {PRACTICE_AREAS.map((area) => {
            const isExpanded = expandedMobileId === area.id;

            return (
              <div
                key={area.id}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                {/* Cabeçalho do Card Mobile */}
                <div
                  onClick={() => toggleMobileExpand(area.id)}
                  className="p-5 flex items-start justify-between gap-3 cursor-pointer"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-sm font-bold text-[var(--brand-gold)]">
                        {area.code}.
                      </span>
                      <span className="font-heading text-[0.6875rem] uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                        {area.subtitle}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--text-main)] leading-snug">
                      {area.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    aria-label="Expandir detalhes"
                    className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)]"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-[var(--brand-gold)]" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Conteúdo Expandido do Card Mobile */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-[var(--border-subtle)]/20 space-y-4 animate-fade-in-down">
                    <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                      {area.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      {area.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand-gold)] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[var(--border-subtle)]/20">
                      <a
                        href={`https://wa.me/${OFFICE_INFO.whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill w-full bg-[var(--brand-gold)] text-black font-semibold text-xs py-2.5 gap-1.5 shadow-xs flex items-center justify-center cursor-pointer"
                      >
                        <span>Tirar dúvidas no WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}