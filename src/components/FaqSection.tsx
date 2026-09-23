"use client";

import { useState, useRef } from "react";
import { FAQ_DATA, OFFICE_INFO } from "@/lib/data";
import { ChevronDown, HelpCircle, ShieldAlert, HeartHandshake, Briefcase, Scale, Award, Compass } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("trabalho");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-trab-1": true,
    "faq-fam-1": true,
    "faq-cons-1": true,
    "faq-prev-1": true,
    "faq-civ-1": true,
  });

  useGSAP(
    () => {
      // 1. Cabeçalho com animação bidirecional
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

      // 2. Acordeões em cascata bidirecional
      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".faq-accordion-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: listRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Card inferior
      if (bottomCardRef.current) {
        gsap.fromTo(
          bottomCardRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomCardRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef, dependencies: [activeTab] }
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const handleTabChange = (catId: string) => {
    setActiveTab(catId);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const currentCategory = FAQ_DATA.find((c) => c.id === activeTab) || FAQ_DATA[0];

  const getSpecificQuestionUrl = (question: string) => {
    const text = `Olá! Estive lendo a dúvida "${question}" no site da Erthal Soares Advogadas e gostaria de esclarecer sobre o meu caso. Poderiam me orientar?`;
    return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const getGeneralFaqUrl = () => {
    const text = `Olá! Minha dúvida não está listada nas perguntas frequentes do site da Erthal Soares Advogadas. Gostaria de uma orientação jurídica para o meu caso.`;
    return `https://wa.me/${OFFICE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case "Briefcase":
        return <Briefcase className="w-4 h-4" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-4 h-4" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-4 h-4" />;
      case "Award":
        return <Award className="w-4 h-4" />;
      case "Compass":
        return <Compass className="w-4 h-4" />;
      case "Scale":
      default:
        return <Scale className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/30 editorial-border-b w-full relative"
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
                06 / Dúvidas Frequentes
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Perguntas & Respostas
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Esclarecimentos diretos sobre Direito do Trabalho, Família, Consumidor, Previdenciário, Cível e rotinas do atendimento personalizado.
          </p>
        </div>

        {/* Abas de Categorias */}
        <div className="flex flex-wrap items-center gap-2.5 pb-8 mb-8 border-b border-[var(--border-subtle)]/25">
          {FAQ_DATA.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleTabChange(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--brand-gold)] text-black shadow-xs font-bold"
                    : "bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--brand-gold)]"
                }`}
              >
                {renderIcon(cat.iconName)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Lista de Acordeões */}
        <div ref={listRef} className="space-y-3.5 max-w-4xl mx-auto will-change-transform">
          {currentCategory.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="faq-accordion-item rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-[var(--brand-gold)] flex-shrink-0 mt-0.5" />
                    <span className="font-heading text-base sm:text-lg font-semibold text-[var(--text-main)] leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--text-muted)] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--brand-gold)]" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[var(--border-subtle)]/20 space-y-4 animate-fade-in-down">
                    <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed pt-3">
                      {item.answer}
                    </p>

                    <div className="pt-2">
                      <a
                        href={getSpecificQuestionUrl(item.question)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-heading font-semibold text-[var(--brand-brown)] dark:text-[var(--brand-gold)] hover:underline"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>Ficou com dúvida sobre isso no seu caso? Pergunte no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card Inferior de Dúvida Não Listada */}
        <div
          ref={bottomCardRef}
          className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 will-change-transform"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-lg font-bold text-[var(--text-main)]">
              Sua dúvida não foi listada aqui?
            </h4>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Cada situação jurídica possui particularidades. Envie sua pergunta diretamente para as advogadas da Erthal Soares Advogadas.
            </p>
          </div>

          <a
            href={getGeneralFaqUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 text-white gap-2 shadow-xs text-xs sm:text-sm whitespace-nowrap flex-shrink-0 flex items-center transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}