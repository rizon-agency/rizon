import type { MaybeLocalized } from "@/lib/l10n";

export type Author = {
  slug: string;
  name: string;
  role: MaybeLocalized<string>;
  bio: MaybeLocalized<string>;
  avatar: string;
  url: string;
  sameAs: string[];
};

export const authors: Author[] = [
  {
    slug: "choaib-mouhrach",
    name: "Choaib Mouhrach",
    role: {
      en: "Founder & Senior Software Engineer",
      fr: "Fondateur et ingénieur logiciel senior",
      es: "Fundador e ingeniero de software sénior",
      de: "Gründer und Senior-Softwareentwickler",
    },
    bio: {
      en: "I design and build custom learning platforms for organizations with complex training and certification workflows. Instead of stitching together plugins and third-party tools, I create systems tailored to how each business operates, reducing administrative overhead while improving the learner experience.",
      fr: "Je conçois et développe des plateformes d’apprentissage sur mesure pour les organisations dont les parcours de formation et de certification sont complexes. Plutôt que d’assembler des plugins et des outils tiers, je crée des systèmes adaptés au fonctionnement réel de chaque activité, afin de réduire la charge administrative et d’améliorer l’expérience des apprenants.",
      es: "Diseño y desarrollo plataformas de aprendizaje a medida para organizaciones con procesos complejos de formación y certificación. En lugar de unir plugins y herramientas de terceros, creo sistemas adaptados a la forma real de trabajar de cada negocio, reduciendo la carga administrativa y mejorando la experiencia del alumnado.",
      de: "Ich konzipiere und entwickle maßgeschneiderte Lernplattformen für Organisationen mit komplexen Schulungs- und Zertifizierungsabläufen. Statt Plugins und Drittanbieter-Tools zusammenzufügen, entwickle ich Systeme, die zur tatsächlichen Arbeitsweise eines Unternehmens passen, den Verwaltungsaufwand senken und die Lernerfahrung verbessern.",
    },
    avatar: "/choaib-mouhrach-pic.png",
    url: "https://rizon.agency/about",
    sameAs: ["https://www.linkedin.com/in/choaib-mouhrach"],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((author) => author.slug === slug);
}
