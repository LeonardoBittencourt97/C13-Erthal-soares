"use client";

import { useRef } from "react";
import { WORK_STEPS, OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho
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

      // 2. Barra de progresso da trilha desenhada com scrub
      if (progressBarRef.current && trackRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 75%",
              end: "bottom 60%",
              scrub: 0.8,
            },
          }
        );
      }

      // 3. Revelação dos 4 passos em cascata
      if (trackRef.current) {
        const stepItems = trackRef.current.querySelectorAll(".step-card-item");
        if (stepItems.length > 0) {
          gsap.fromTo(
            stepItems,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: trackRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 4. CTA inferior
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="como-atuamos"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
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
                05 / Clareza Procedimental
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Como Funciona Nosso Atendimento
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Uma condução transparente, sem juridiquês desnecessário e com clareza total sobre cada etapa e estratégia do seu caso.
          </p>
        </div>

        {/* Container com Trilha Conectora Progressiva */}
        <div ref={trackRef} className="relative pt-6 pb-2">
          {/* Linha guia de fundo (sutil) */}
          <div className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-[var(--border-subtle)]/25 -z-10" />

          {/* Linha de progresso conectora */}
          <div
            ref={progressBarRef}
            className="hidden lg:block absolute top-12 left-8 right-8 h-[2px] bg-gradient-to-r from-[var(--brand-brown)] via-[var(--brand-gold)] to-[var(--brand-gold-dark)] -z-10 will-change-transform"
          />

          {/* 4 Passos Estruturados */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {WORK_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="step-card-item h-full p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between relative group hover:border-[var(--brand-gold)] hover:shadow-md hover-lift transition-all duration-300 will-change-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center border border-[var(--brand-gold)]/40 group-hover:bg-[var(--brand-gold)] group-hover:text-black transition-all duration-300 shadow-2xs">
                      <span className="font-heading text-xl font-bold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] group-hover:text-black transition-colors">
                        {step.number}
                      </span>
                    </div>
                    {idx < WORK_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-[var(--border-subtle)]/60 group-hover:translate-x-1 group-hover:text-[var(--brand-gold)] transition-all" />
                    )}
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[var(--brand-gold)] font-semibold block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="mt-12 text-center will-change-transform">
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-black hover:text-white font-semibold gap-2 shadow-xs text-sm inline-flex items-center"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Iniciar Primeiro Contato via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}