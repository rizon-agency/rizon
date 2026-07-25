import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

const copy = {
  en: { label: "Custom LMS Development", title: "The platform behind your learning product, built from scratch.", body: "No monthly fees. No feature limits. No vendor lock-in. A platform that is fully yours, code and all.", fees: "0% platform fees", ownership: "100% code ownership", live: "Live on day 1" },
  fr: { label: "Développement de LMS sur mesure", title: "La plateforme derrière votre produit d'apprentissage, construite de zéro.", body: "Pas de frais mensuels. Pas de limites de fonctionnalités. Pas de dépendance fournisseur. Une plateforme qui vous appartient entièrement, code compris.", fees: "0 % de frais de plateforme", ownership: "100 % de propriété du code", live: "En ligne dès le premier jour" },
  es: { label: "Desarrollo de LMS a medida", title: "La plataforma detrás de tu producto de aprendizaje, construida desde cero.", body: "Sin cuotas mensuales. Sin límites de funciones. Sin dependencia de proveedores. Una plataforma totalmente tuya, incluido el código.", fees: "0 % de comisiones de plataforma", ownership: "100 % de propiedad del código", live: "En línea desde el primer día" },
  de: { label: "Maßgeschneiderte LMS-Entwicklung", title: "Die Plattform hinter Ihrem Lernprodukt, von Grund auf gebaut.", body: "Keine monatlichen Gebühren. Keine Funktionsgrenzen. Keine Anbieterabhängigkeit. Eine Plattform, die vollständig Ihnen gehört, inklusive Code.", fees: "0 % Plattformgebühren", ownership: "100 % Code-Eigentum", live: "Ab dem ersten Tag live" },
} as const;

export default async function OgImage({ params }: { params: Promise<{ locale: keyof typeof copy }> }) {
  const { locale } = await params;
  const t = copy[locale] ?? copy.en;
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full bg-white px-20 py-16">
        {/* Top: category-style label */}
        <div tw="flex items-center mb-12">
          <div tw="w-8 h-px bg-[#003de5] mr-3" />
          <span tw="text-[#003de5] text-xs font-semibold tracking-widest uppercase">
            {t.label}
          </span>
        </div>

        {/* Main heading */}
        <div tw="text-[#0a0a0a] text-6xl font-semibold leading-tight tracking-tight max-w-3xl mb-8">
          {t.title}
        </div>

        {/* Description */}
        <div tw="text-[#6b6b6b] text-xl leading-relaxed max-w-2xl flex-1">
          {t.body}
        </div>

        {/* Bottom bar */}
        <div tw="flex items-center justify-between border-t border-[#e5e5e5] pt-6">
          <div tw="flex items-center gap-4">
            <span tw="text-[#6b6b6b] text-sm">{t.fees}</span>
            <span tw="text-[#e5e5e5]">·</span>
            <span tw="text-[#6b6b6b] text-sm">{t.ownership}</span>
            <span tw="text-[#e5e5e5]">·</span>
            <span tw="text-[#6b6b6b] text-sm">{t.live}</span>
          </div>
          <span tw="text-[#0a0a0a] text-xl font-semibold tracking-tight">
            rizon.agency
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
