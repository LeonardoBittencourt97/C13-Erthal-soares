import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://erthal-soares-advocacia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Erthal Soares Advogadas | Advocacia em Curitiba - PR (Cível, Família, Consumidor, Previdenciário e Trabalho)",
    template: "%s | Erthal Soares Advogadas",
  },
  description:
    "Escritório de advocacia em Curitiba/PR especializado em Direito Civil, Família, Consumidor, Previdenciário e Trabalhista. Dra. Gisele Baptista Soares e Dra. Luiza Carolina Muniz Erthal. Mais de 11 anos de solidez e atendimento personalizado onde você estiver.",
  keywords: [
    "erthal soares advogadas",
    "advocacia curitiba pr",
    "advogadas curitiba",
    "gisele baptista soares",
    "luiza carolina muniz erthal",
    "direito do trabalho curitiba",
    "direito de familia curitiba",
    "direito previdenciario curitiba inss",
    "direito do consumidor curitiba",
    "direito civil curitiba",
    "inventario extrajudicial curitiba",
    "divorcio e pensao curitiba",
  ],
  authors: [{ name: "Erthal Soares Advogadas" }],
  creator: "Erthal Soares Advogadas",
  publisher: "Erthal Soares Advogadas",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Erthal Soares Advogadas | Advocacia em Curitiba - PR",
    description:
      "Sucesso não tem a ver com o dinheiro que você ganha. Tem a ver com a diferença que você faz na vida das pessoas. Atendimento personalizado em Curitiba, PR, SC e SP.",
    siteName: "Erthal Soares Advogadas",
    images: [
      {
        url: "/og-image_optimized_300.jpeg",
        width: 1200,
        height: 630,
        alt: "Erthal Soares Advogadas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erthal Soares Advogadas | Advocacia em Curitiba - PR",
    description:
      "Atuação especializada e personalizada em Direito Civil, Família, Consumidor, Previdenciário e Trabalho em Curitiba/PR e região.",
    images: ["/og-image_optimized_300.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon_180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-body selection:bg-[#F4A938]/30 selection:text-[#302013]">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}