"use client";

import { useState, useEffect } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { WhatsAppIcon } from "@/components/SocialIcons";

export function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Exibe a mensagem a cada 30 segundos, mantendo por 10 segundos
    const showMessage = () => {
      setShowBubble(true);
      const hideTimeout = setTimeout(() => {
        setShowBubble(false);
      }, 10000); // 10 segundos visível

      return hideTimeout;
    };

    // Primeiro disparo após 4 segundos para engajar o usuário
    const initialTimer = setTimeout(() => {
      showMessage();
    }, 4000);

    // Ciclo de 30 segundos
    const interval = setInterval(() => {
      showMessage();
    }, 30000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Balão de mensagem automático (aparece a cada 30s por 10s ou no hover no desktop) */}
      <div
        className={`mr-3 px-4 py-2 rounded-2xl bg-[var(--bg-card)] text-[var(--text-main)] text-xs sm:text-sm font-heading font-medium border border-[var(--border-subtle)]/40 shadow-xl transition-all duration-500 flex items-center gap-2 pointer-events-none ${
          showBubble
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-0 translate-x-3 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping flex-shrink-0" />
        <span>Conversar com as Advogadas</span>
      </div>

      <a
        href={OFFICE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Atendimento direto via WhatsApp com ${OFFICE_INFO.name}`}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 relative cursor-pointer pulse-whatsapp"
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white dark:border-[#302013]" />
      </a>
    </div>
  );
}