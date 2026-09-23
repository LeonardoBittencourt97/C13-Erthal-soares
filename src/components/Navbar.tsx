"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import { Menu, X, ChevronDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";

export function Navbar() {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [officeDropdownOpen, setOfficeDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);
  const [mobileOfficeOpen, setMobileOfficeOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  const officeRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar dropdowns ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (officeRef.current && !officeRef.current.contains(event.target as Node)) {
        setOfficeDropdownOpen(false);
      }
      if (areasRef.current && !areasRef.current.contains(event.target as Node)) {
        setAreasDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Travar o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Escolhe a logo apropriada de acordo com o fundo/tema
  const currentLogo = !isScrolled
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : theme === "dark"
    ? "/logo_sem_fundo_usarnomodoescuro.png"
    : "/logo_sem_fundo_usarnomodoclaro.png";

  const drawerLogo =
    theme === "dark"
      ? "/logo_sem_fundo_usarnomodoescuro.png"
      : "/logo_sem_fundo_usarnomodoclaro.png";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOfficeOpen(false);
    setMobileAreasOpen(false);
  };

  return (
    <>
      {/* 1. LOGO MOBILE FIXA SEPARADA - TAMANHO DOBRADO CONFORME DIRETRIZ C12 */}
      <div className="lg:hidden fixed top-2 left-3 sm:left-4 z-50 pointer-events-none">
        <Link href="#inicio" className="flex items-center group focus:outline-none pointer-events-auto">
          <div className="relative h-20 w-52 sm:w-60 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={currentLogo}
              alt={OFFICE_INFO.name}
              fill
              priority
              className="object-contain object-left drop-shadow-md"
              sizes="240px"
            />
          </div>
        </Link>
      </div>

      {/* 2. BARRA DE NAVEGAÇÃO PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-primary)]/95 backdrop-blur-md shadow-sm border-b border-[var(--border-subtle)]/25 py-2 sm:py-2.5"
            : "bg-transparent py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative min-h-[2.75rem] sm:min-h-[3rem] flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Espaçador Mobile para proteger a área da logo sem afetar os botões */}
            <div className="lg:hidden w-44 sm:w-52 flex-shrink-0 pointer-events-none" />

            {/* Logo Desktop: Desacoplada e ampliada para dobro de tamanho */}
            <div className="hidden lg:flex items-center justify-start relative flex-shrink-0 w-64 xl:w-72 h-12 pointer-events-none">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto">
                <Link href="#inicio" className="flex items-center group focus:outline-none">
                  <div className="relative h-24 xl:h-28 w-64 xl:w-72 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={currentLogo}
                      alt={OFFICE_INFO.name}
                      fill
                      priority
                      className="object-contain object-left drop-shadow-md"
                      sizes="(min-width: 1280px) 288px, 256px"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav
              className={`hidden lg:flex items-center gap-5 xl:gap-7 text-[0.875rem] font-heading uppercase tracking-wider transition-colors duration-300 ${
                !isScrolled ? "text-white/95" : "text-[var(--text-main)]"
              }`}
            >
              <Link href="#inicio" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Início
              </Link>

              {/* Submenu 1: O Escritório */}
              <div
                ref={officeRef}
                className="relative"
                onMouseEnter={() => setOfficeDropdownOpen(true)}
                onMouseLeave={() => setOfficeDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setOfficeDropdownOpen(!officeDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={officeDropdownOpen}
                >
                  <span className="editorial-link">O Escritório</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      officeDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                {officeDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-2xl p-2.5 space-y-1 z-50 text-[var(--text-main)] normal-case animate-fade-in-down">
                    <Link
                      href="#sobre"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          As Advogadas
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Dra. Gisele Soares & Dra. Luiza Erthal
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#pilares"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Pilares Institucionais
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          11+ anos de história, ética e humanização
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#como-atuamos"
                      onClick={() => setOfficeDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Como Atuamos
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Atendimento flexível e etapas do serviço
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              {/* Submenu 2: Atuação & Conteúdo */}
              <div
                ref={areasRef}
                className="relative"
                onMouseEnter={() => setAreasDropdownOpen(true)}
                onMouseLeave={() => setAreasDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setAreasDropdownOpen(!areasDropdownOpen)}
                  className="inline-flex items-center gap-1.5 transition-colors py-2 focus:outline-none cursor-pointer hover:text-[var(--accent)] font-semibold"
                  aria-expanded={areasDropdownOpen}
                >
                  <span className="editorial-link">Atuação & Conteúdo</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      areasDropdownOpen ? "rotate-180 text-[var(--accent)]" : "opacity-70"
                    }`}
                  />
                </button>

                {/* Dropdown Card */}
                {areasDropdownOpen && (
                  <div className="absolute top-full left-0 w-68 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-2xl p-2.5 space-y-1 z-50 text-[var(--text-main)] normal-case animate-fade-in-down">
                    <Link
                      href="#atuacao"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Áreas de Atuação
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Trabalho, Família, Consumidor, INSS e Cível
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#educativo"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Conteúdo Educativo
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Orientações práticas e informativas (CFOAB)
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <Link
                      href="#faq"
                      onClick={() => setAreasDropdownOpen(false)}
                      className="p-3 rounded-xl hover:bg-[var(--bg-secondary)]/80 flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <span className="font-heading font-bold text-sm block group-hover:text-[var(--accent)]">
                          Dúvidas Frequentes (FAQ)
                        </span>
                        <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">
                          Respostas claras para as principais dúvidas
                        </span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#contato" className="transition-colors editorial-link hover:text-[var(--accent)] font-semibold">
                Contato
              </Link>
            </nav>

            {/* Ações à Direita: Tema + WhatsApp + Menu Mobile */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <ThemeToggle />

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 text-white transition-all duration-300 gap-1.5 sm:gap-2 shadow-sm text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 flex-shrink-0 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="hidden sm:inline">WhatsApp</span>
                <span className="sm:hidden text-xs">Whats</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl border transition-colors flex-shrink-0 cursor-pointer ${
                  !isScrolled
                    ? "border-white/30 bg-black/40 backdrop-blur-md text-white hover:bg-black/60"
                    : "border-[var(--border-subtle)]/40 bg-[var(--bg-card)] text-[var(--text-main)] hover:bg-[var(--bg-secondary)]"
                }`}
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 3. MENU MOBILE DRAWER (Off-canvas enxuto com Accordions) */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm"
          onClick={closeMobileMenu}
        />
        <div
          className={`fixed top-0 right-0 bottom-0 w-[84vw] max-w-sm bg-[var(--bg-primary)] border-l border-[var(--border-subtle)]/30 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 overflow-y-auto ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25">
              <div className="relative h-14 w-48">
                <Image
                  src={drawerLogo}
                  alt={OFFICE_INFO.name}
                  fill
                  className="object-contain object-left"
                  sizes="200px"
                />
              </div>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="p-1.5 rounded-lg border border-[var(--border-subtle)]/30 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="my-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--brand-gold)]/40 bg-[var(--bg-secondary)]/70 text-xs font-heading text-[var(--brand-brown)] dark:text-[var(--brand-gold)]">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--brand-gold)]" />
              <span>Advocacia Especializada • 11+ Anos de História</span>
            </div>

            {/* Navegação Mobile Enxuta com Submenus */}
            <nav className="flex flex-col space-y-2 font-heading text-base font-medium text-[var(--text-main)] pt-2">
              <Link href="#inicio" onClick={closeMobileMenu} className="py-2 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                Início
              </Link>

              {/* Submenu Mobile: O Escritório */}
              <div className="border-b border-[var(--border-subtle)]/15 py-1">
                <button
                  type="button"
                  onClick={() => setMobileOfficeOpen(!mobileOfficeOpen)}
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[var(--accent)] cursor-pointer"
                >
                  <span>O Escritório</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileOfficeOpen ? "rotate-180 text-[var(--accent)]" : ""}`} />
                </button>
                {mobileOfficeOpen && (
                  <div className="pl-4 pb-2 space-y-2 text-sm text-[var(--text-muted)] font-body animate-fade-in-down">
                    <Link href="#sobre" onClick={closeMobileMenu} className="block py-1 hover:text-[var(--accent)]">
                      • As Advogadas & Trajetória
                    </Link>
                    <Link href="#pilares" onClick={closeMobileMenu} className="block py-1 hover:text-[var(--accent)]">
                      • Pilares Institucionais
                    </Link>
                    <Link href="#como-atuamos" onClick={closeMobileMenu} className="block py-1 hover:text-[var(--accent)]">
                      • Como Funciona o Atendimento
                    </Link>
                  </div>
                )}
              </div>

              {/* Submenu Mobile: Atuação & Conteúdo */}
              <div className="border-b border-[var(--border-subtle)]/15 py-1">
                <button
                  type="button"
                  onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                  className="w-full flex items-center justify-between py-2 text-left hover:text-[var(--accent)] cursor-pointer"
                >
                  <span>Atuação & Conteúdo</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAreasOpen ? "rotate-180 text-[var(--accent)]" : ""}`} />
                </button>
                {mobileAreasOpen && (
                  <div className="pl-4 pb-2 space-y-2 text-sm text-[var(--text-muted)] font-body animate-fade-in-down">
                    <Link href="#atuacao" onClick={closeMobileMenu} className="block py-1 hover:text-[var(--accent)]">
                      • Áreas de Atuação
                    </Link>
                    <Link href="#educativo" onClick={closeMobileMenu} className="block py-1 hover:text-[var(--accent)]">
                      • Conteúdo Jurídico (CFOAB)
                    </Link>
                    <Link href="#faq" onClick={closeMobileMenu} className="block py-1 hover:text-[var(--accent)]">
                      • Perguntas Frequentes (FAQ)
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#contato" onClick={closeMobileMenu} className="py-2 hover:text-[var(--accent)] border-b border-[var(--border-subtle)]/15">
                Contato & Localização
              </Link>
              
              <Link href="/links" onClick={closeMobileMenu} className="py-2 text-[var(--accent)] font-semibold">
                Link-in-Bio (/links)
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-[var(--border-subtle)]/25 space-y-3 mt-6">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-3 text-sm gap-2 shadow-md cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Falar no WhatsApp</span>
            </a>
            <p className="text-center text-[0.6875rem] text-[var(--text-muted)]">
              {OFFICE_INFO.addressShort}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}