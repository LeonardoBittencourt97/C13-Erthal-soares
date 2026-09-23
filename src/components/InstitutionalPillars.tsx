"use client";

import { useRef } from "react";
import { Award, UserCheck, Scale, ShieldCheck, MapPin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function InstitutionalPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Linha conectora superior que se desenha ao entrar na tela
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // Revelação em cascata dos 4 pilares institucionais
      const pillarItems = gridRef.current?.querySelectorAll(".pillar-item");
      if (pillarItems && pillarItems.length > 0) {
        gsap.fromTo(
          pillarItems,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );

        // Contador numérico dinâmico ativado pelo scroll
        const counters = gridRef.current ? gridRef.current.querySelectorAll(".metric-counter") : [];
        counters.forEach((el) => {
          const targetValue = parseFloat(el.getAttribute("data-target") || "0");
          const prefix = el.getAttribute("data-prefix") || "";
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = el.getAttribute("data-decimal") === "true";

          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: targetValue,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              const formatted = isDecimal ? counterObj.val.toFixed(1) : Math.round(counterObj.val).toString();
              el.textContent = `${prefix}${formatted}${suffix}`;
            },
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="pilares"
      ref={sectionRef}
      className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-secondary)]/50 py-10 sm:py-14 relative shadow-2xs overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
          {/* Linha desenhada pelo scroll */}
          <div
            ref={lineRef}
            className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--brand-brown)] via-[var(--brand-gold)] to-transparent will-change-transform"
          />
          <div className="flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]" />
            <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
              Pilares Institucionais de Atuação
            </span>
          </div>
          <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
            Curitiba - PR • Paraná, Santa Catarina e São Paulo
          </span>
        </div>

        {/* Grade com os 4 Pilares */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30"
        >
          {/* 1. Experiência Forense */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 first:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
              <Award className="w-5 h-5 text-[var(--brand-gold)]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="11"
                data-prefix="+"
                data-suffix=" Anos"
              >
                +11 Anos
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              História & Solidez Forense
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Mais de 11 anos de história do escritório e advogadas com mais de 15 anos de sólida atuação prática nas áreas Cível, Família, Consumidor, Previdenciária e Trabalhista.
            </p>
          </div>

          {/* 2. Atendimento Personalizado */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
              <UserCheck className="w-5 h-5 text-[var(--brand-gold)]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                Personalizado
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Onde Você Estiver
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Disponibilidade de atendimento em horários alternativos, finais de semana, feriados, nas residências, condomínios, salões e eventos.
            </p>
          </div>

          {/* 3. Atuação Regional & 3 Estados */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
              <MapPin className="w-5 h-5 text-[var(--brand-gold)]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                PR • SC • SP
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Atuação Multirregional
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Atuação presencial e digital consolidada nos estados do Paraná, Santa Catarina e São Paulo, além de alianças e parcerias em âmbito nacional.
            </p>
          </div>

          {/* 4. Rigor Ético & Sigilo */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
              <ShieldCheck className="w-5 h-5 text-[var(--brand-gold)]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                Ética OAB
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Sensibilidade & Sigilo
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Atuação orientada pelo impacto transformador na vida das pessoas, com estrito cumprimento ao Provimento 205/2021 da OAB e sigilo absoluto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}