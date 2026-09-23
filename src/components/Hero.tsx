"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, BookOpen, ShieldCheck, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax dinâmico no fundo que acompanha a rolagem
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          scale: 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Elevação e fade suave do texto ao sair da primeira dobra
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          y: -40,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom 35%",
            scrub: 1,
          },
        });
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32 lg:pb-12 overflow-hidden editorial-border-b text-white"
    >
      {/* Imagem de Fundo com Parallax e Overlays de Alta Legibilidade */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 will-change-transform">
        {/* Mobile: header_mobile.jpeg */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src="/header_mobile.jpeg"
            alt={OFFICE_INFO.name}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Desktop: header_desktop.jpeg */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/header_desktop.jpeg"
            alt={OFFICE_INFO.name}
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays Suaves */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50 md:from-black/85 md:via-black/55 md:via-50% md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 md:from-black/40 md:via-transparent md:to-transparent" />
      </div>

      <div
        ref={contentRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between will-change-transform"
      >
        {/* Topo do Hero: Badge + Título Principal (Máximo 2 Linhas, Enxuto e de Impacto) */}
        <div className="pt-2 sm:pt-4 lg:pt-6 max-w-3xl animate-fade-in-down">
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-[var(--brand-gold)]/40 bg-black/40 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#FBFBF9] mb-4 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--brand-gold)]" />
            <span>Erthal Soares Advogadas • 11+ Anos de História</span>
          </div>

          {/* Headline Principal de Impacto - Máximo 2 Linhas */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.14] tracking-tight text-white font-semibold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)] max-w-3xl">
            Advocacia estratégica e humanizada para fazer a{" "}
            <span className="text-[var(--brand-gold)]">diferença</span> na sua vida.
          </h1>
        </div>

        {/* Base do Hero: Subtexto Enxuto + Botões de Ação + Atributos */}
        <div className="pb-2 sm:pb-4 lg:pb-4 max-w-2xl mt-5 sm:mt-6 lg:mt-auto animate-fade-in-up">
          {/* Subtexto Curto e Direto ao Ponto */}
          <p className="font-body text-sm sm:text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed mb-6 font-normal drop-shadow-sm">
            Mais de 11 anos de experiência prática forense nas áreas Cível, Família, Consumidor, Previdenciária e Trabalhista. Atendimento personalizado em Curitiba, PR, SC, SP e onde você estiver.
          </p>

          {/* Os 2 Botões: 1 para WhatsApp das Advogadas e 1 para "Conheça seus direitos" (Conteúdo Jurídico) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[var(--brand-gold)] hover:bg-[var(--brand-gold-dark)] hover:scale-[1.02] text-black hover:text-white border border-[var(--brand-gold)] gap-2.5 py-3 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold tracking-normal shadow-xl group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-black group-hover:text-white group-hover:scale-110 transition-transform" />
              <span>Falar com as Advogadas</span>
            </a>

            <Link
              href="#educativo"
              className="btn-pill bg-white text-black border-2 border-[var(--brand-gold)] hover:bg-[#FBFBF9] hover:scale-[1.02] shadow-md gap-2 py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[var(--brand-brown)] group-hover:scale-110 transition-transform" />
              <span className="text-black font-semibold">Conheça seus direitos</span>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--brand-brown)] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Atributos Concisos */}
          <div className="hidden lg:flex items-center gap-5 py-2.5 border-t border-white/15 mt-6 text-white/80 max-w-lg text-xs font-heading">
            <span className="flex items-center gap-2">
              <span className="bullet-indicator text-[var(--brand-gold)]" />
              Curitiba / PR
            </span>
            <span>•</span>
            <span>11+ Anos de História</span>
            <span>•</span>
            <span>Atendimento Personalizado</span>
          </div>
        </div>
      </div>
    </section>
  );
}