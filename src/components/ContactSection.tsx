"use client";

import { useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { MapPin, Phone, Clock, MessageSquare, Navigation, ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsColRef = useRef<HTMLDivElement>(null);
  const mapColRef = useRef<HTMLDivElement>(null);

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

      // 2. Animação de entrada dos cards de contato
      if (cardsColRef.current) {
        const contactCards = cardsColRef.current.querySelectorAll(".contact-info-card");
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { x: -35, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsColRef.current,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Animação de revelação suave do mapa com zoom out suave
      if (mapColRef.current) {
        gsap.fromTo(
          mapColRef.current,
          { scale: 0.94, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapColRef.current,
              start: "top 80%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const mapEmbedUrl =
    "https://maps.google.com/maps?q=Av.+Paran%C3%A1,+1755+-+Sala+34+-+Boa+Vista,+Curitiba+-+PR,+82510-000&t=&z=16&ie=UTF8&iwloc=&output=embed";

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative"
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
                07 / Canais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Fale Conosco & Localização
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Atendimento presencial no Paraná Office em Curitiba/PR ou suporte jurídico online com total sigilo e comodidade.
          </p>
        </div>

        {/* Layout Split: Cards de Contato à Esquerda + Mapa Interativo à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Coluna dos Cards de Informações */}
          <div ref={cardsColRef} className="lg:col-span-5 flex flex-col justify-between space-y-4 will-change-transform">
            
            {/* Card 1: WhatsApp Direto */}
            <div className="contact-info-card p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] flex-shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                  WhatsApp Oficial
                </span>
                <p className="font-heading text-lg font-bold text-[var(--text-main)]">
                  {OFFICE_INFO.phone}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-body">
                  Canal ágil para dúvidas preliminares e agendamento de consultas.
                </p>
                <div className="pt-2">
                  <a
                    href={OFFICE_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#25D366] hover:underline"
                  >
                    <span>Conversar no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Endereço da Sede */}
            <div className="contact-info-card p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--brand-brown)] dark:text-[var(--brand-gold)] flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                  Sede Presencial
                </span>
                <p className="font-heading text-base font-bold text-[var(--text-main)] leading-snug">
                  {OFFICE_INFO.address}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-body">
                  Paraná Office • Boa Vista, Curitiba - PR.
                </p>
                <div className="pt-2">
                  <a
                    href={OFFICE_INFO.mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] hover:underline"
                  >
                    <span>Traçar rota no Google Maps</span>
                    <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Horários de Atendimento */}
            <div className="contact-info-card p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--brand-brown)] dark:text-[var(--brand-gold)] flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                  Horário de Atendimento
                </span>
                <p className="font-heading text-sm font-bold text-[var(--text-main)]">
                  {OFFICE_INFO.workingHours.weekdays}
                </p>
                <p className="text-xs text-[var(--text-muted)] font-body">
                  {OFFICE_INFO.workingHours.weekends}
                </p>
              </div>
            </div>

            {/* Card 4: Instagram Oficial */}
            <div className="contact-info-card p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--brand-brown)] dark:text-[var(--brand-gold)] flex-shrink-0">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="font-heading text-xs uppercase tracking-wider text-[var(--text-muted)] font-semibold block">
                  Instagram Oficial
                </span>
                <p className="font-heading text-sm font-bold text-[var(--text-main)]">
                  @sonalysantos.adv
                </p>
                <div className="pt-2">
                  <a
                    href={OFFICE_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] hover:underline"
                  >
                    <span>Seguir no Instagram</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Coluna do Mapa com Embed Interativo */}
          <div ref={mapColRef} className="lg:col-span-7 flex flex-col will-change-transform">
            <div className="h-full min-h-[360px] lg:min-h-[440px] rounded-3xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-md relative bg-[var(--bg-card)]">
              <iframe
                title="Localização do escritório Erthal Soares Advogadas no Paraná Office, Curitiba"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}