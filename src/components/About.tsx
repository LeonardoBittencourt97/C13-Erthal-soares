"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { LAWYER_PROFILE, OFFICE_INFO } from "@/lib/data";
import { GraduationCap, Compass, Eye, ShieldCheck, MessageSquare, ChevronDown, Sparkles, MapPin, HeartHandshake } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho da Seção com animação bidirecional
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. Foto oficial das advogadas: entrada com elevação e scale elegante
      if (photoCardRef.current) {
        gsap.fromTo(
          photoCardRef.current,
          { opacity: 0, scale: 0.92, y: 45 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: photoCardRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna de texto e biografia em cascata bidirecional
      if (textContentRef.current) {
        const textElements = textContentRef.current.querySelectorAll(".about-text-anim");
        if (textElements.length > 0) {
          gsap.fromTo(
            textElements,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: textContentRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 4. Princípios (Missão, Visão e Valores) estilo Pilares Institucionais
      if (cardsRef.current) {
        const items = cardsRef.current.querySelectorAll(".about-pillar-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 35, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.14,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 88%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  };

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[var(--brand-gold)]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[var(--brand-brown)] dark:text-[var(--brand-gold)] font-bold">
                01 / Perfil Institucional & Sócias
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Sobre a Erthal Soares Advogadas
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Mais de 11 anos de trajetória unindo rigor normativo, proximidade humana e parcerias estratégicas para atender você em Curitiba, Paraná, Santa Catarina e São Paulo.
          </p>
        </div>

        {/* Bloco Principal: Layout split-screen */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 relative">
          {/* Coluna de Conteúdo e Textos */}
          <div ref={textContentRef} className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-start space-y-6">
            <div className="about-text-anim space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-gold)]/15 border border-[var(--brand-gold)]/40 text-xs font-heading font-semibold text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
                <Sparkles className="w-3.5 h-3.5 text-[var(--brand-gold)]" />
                <span>Atendimento Personalizado Onde Você Estiver</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-main)] leading-tight">
                Advocacia Humana com Disponibilidade e Rigor Técnico
              </h3>
            </div>

            {/* Citação de Michelle Obama */}
            <div className="about-text-anim p-4 sm:p-5 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/30 border-l-4 border-l-[var(--brand-gold)] shadow-2xs">
              <p className="font-heading italic text-sm sm:text-base text-[var(--text-main)] leading-relaxed">
                &ldquo;{OFFICE_INFO.tagline}&rdquo;
              </p>
              <span className="block text-xs font-heading text-[var(--brand-gold)] font-bold mt-2 uppercase tracking-wider">
                — {OFFICE_INFO.taglineAuthor}
              </span>
            </div>

            {/* Resumo da trajetória */}
            <p className="about-text-anim font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed font-normal">
              {LAWYER_PROFILE.bioShort}
            </p>

            {/* Diferencial do Atendimento Alternativo */}
            <div className="about-text-anim p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--brand-gold)]/30 shadow-2xs space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-heading font-bold text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
                <HeartHandshake className="w-4 h-4 text-[var(--brand-gold)]" />
                <span>Atendimento nos Seus Horários e Locais</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] font-body leading-relaxed">
                {OFFICE_INFO.workingHours.differential}
              </p>
            </div>

            {/* Destaques Rápidos */}
            <div className="about-text-anim grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                <span className="font-heading text-xs font-bold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] block">+11 Anos</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">História e solidez jurídica</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                <span className="font-heading text-xs font-bold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] block">3 Estados</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Atuação no PR, SC e SP</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs col-span-2 sm:col-span-1">
                <span className="font-heading text-xs font-bold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] block">Especialidades</span>
                <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Cível, Família, INSS e Trabalho</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="about-text-anim flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={handleToggleExpand}
                className="btn-pill bg-white dark:bg-[#302013] text-[var(--text-main)] border-2 border-[var(--brand-gold)] hover:bg-[var(--brand-gold)] hover:text-black dark:hover:bg-[var(--brand-gold)] dark:hover:text-black gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift transition-all cursor-pointer flex items-center"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Ocultar currículo das advogadas" : "Conhecer as Advogadas Sócias"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] text-black hover:text-white gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift transition-all flex items-center"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Solicitar Atendimento Direto</span>
              </a>
            </div>

            {/* CONTEÚDO EXPANSÍVEL: Currículo das 2 Sócias */}
            {isExpanded && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]/30 animate-fade-in-down">
                <div className="grid md:grid-cols-2 gap-4">
                  {OFFICE_INFO.lawyers.map((lawyer, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs space-y-3"
                    >
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[var(--brand-gold)]" />
                        <div>
                          <h4 className="font-heading text-base font-bold text-[var(--text-main)]">
                            {lawyer.name}
                          </h4>
                          <span className="text-[0.6875rem] text-[var(--text-muted)] font-body block">
                            {lawyer.graduation} • {lawyer.experience}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[var(--brand-brown)] dark:text-[var(--brand-gold)] font-heading font-semibold">
                        {lawyer.specialty}
                      </p>

                      <div className="space-y-1.5 pt-1 border-t border-[var(--border-subtle)]/20">
                        {lawyer.details.map((detail, dIdx) => (
                          <p key={dIdx} className="text-xs font-body text-[var(--text-muted)] leading-relaxed flex items-start gap-1.5">
                            <span className="text-[var(--brand-gold)] mt-0.5">•</span>
                            <span>{detail}</span>
                          </p>
                        ))}
                      </div>

                      <div className="pt-2 flex items-center gap-1.5 text-[0.6875rem] font-heading text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5 text-[var(--brand-gold)]" />
                        <span>Atuação: {lawyer.states}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna da Foto Oficial */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full flex justify-center lg:justify-end">
            <div ref={photoCardRef} className="w-full max-w-[360px] sm:max-w-[400px] will-change-transform">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[var(--brand-gold)]/80 shadow-2xl hover-lift group bg-[#302013]">
                {/* Feixe de luz suave */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20 pointer-events-none" />
                <Image
                  src="/Foto_perfil.jpeg"
                  alt={OFFICE_INFO.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                {/* Badge Inferior com Nome e Qualificação (SEM OAB conforme instrução) */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10 pointer-events-none">
                  <span className="text-[0.6875rem] uppercase tracking-widest text-[var(--brand-gold)] font-heading font-semibold block mb-1">
                    Sociedade de Advogadas • 11+ Anos
                  </span>
                  <p className="font-heading text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow-sm">
                    {OFFICE_INFO.name}
                  </p>
                  <p className="text-xs text-gray-200 font-body mt-1 leading-relaxed">
                    Dra. Gisele Baptista Soares & Dra. Luiza Carolina Muniz Erthal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores */}
        <div className="pt-8 border-t border-[var(--border-subtle)]/30">
          <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
            <div className="flex items-center gap-2.5">
              <Compass className="w-4 h-4 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]" />
              <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
                Diretrizes & Princípios Norteadores
              </span>
            </div>
            <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
              Compromisso Ético & Transformação de Vidas
            </span>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--border-subtle)]/30"
          >
            {/* 1. Nossa Missão */}
            <div className="about-pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 first:pt-0 first:pl-0 will-change-transform">
              <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
                <Compass className="w-5 h-5 text-[var(--brand-gold)]" />
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                  Nossa Missão
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                Segurança Jurídica & Empatia
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.mission}
              </p>
            </div>

            {/* 2. Nossa Visão */}
            <div className="about-pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 first:pt-0 will-change-transform">
              <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
                <Eye className="w-5 h-5 text-[var(--brand-gold)]" />
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                  Nossa Visão
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                Referência Multirregional
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.vision}
              </p>
            </div>

            {/* 3. Nossos Valores */}
            <div className="about-pillar-item flex flex-col items-start px-0 md:px-6 pt-6 md:pt-0 first:pt-0 will-change-transform">
              <div className="flex items-center gap-2 mb-2 text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
                <ShieldCheck className="w-5 h-5 text-[var(--brand-gold)]" />
                <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-main)]">
                  Nossos Valores
                </span>
              </div>
              <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                Compromissos Fundamentais
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.values.join(" • ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}