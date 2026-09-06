import type { MaybeLocalized } from "@/lib/l10n";

export type ProductLab = {
  slug: string;
  name: string;
  status: MaybeLocalized<string>;
  liveUrl: string;
  metaTitle: MaybeLocalized<string>;
  metaDescription: MaybeLocalized<string>;
  heroHeadline: MaybeLocalized<string>;
  heroSub: MaybeLocalized<string>;
  summary: MaybeLocalized<string>;
  why: MaybeLocalized<string[]>;
  researchFocus: { title: MaybeLocalized<string>; body: MaybeLocalized<string> }[];
  publicSiteRole: { title: MaybeLocalized<string>; body: MaybeLocalized<string> }[];
  keywords: string[];
};

export const productLabs: ProductLab[] = [
  {
    slug: "rizonvo",
    name: "RizonVO",
    status: {
      en: "Owned product",
      fr: "Produit Rizon",
      es: "Producto propio",
      de: "Eigenes Produkt",
    },
    liveUrl: "https://rizonvo.com",
    metaTitle: {
      en: "RizonVO: vertical SaaS for French used-vehicle dealers",
      fr: "RizonVO : SaaS métier pour marchands VO français",
      es: "RizonVO: SaaS vertical para vendedores franceses de vehículos usados",
      de: "RizonVO: Vertical SaaS für französische Gebrauchtwagenhändler",
    },
    metaDescription: {
      en: "RizonVO is Rizon's vertical SaaS product for French used-vehicle dealers managing stock, police book records, Cerfa 13751, invoices, costs, and margin VAT.",
      fr: "RizonVO est le SaaS métier de Rizon pour les marchands VO français qui gèrent stock, livre de police, Cerfa 13751, factures, frais et TVA sur marge.",
      es: "RizonVO es el SaaS vertical de Rizon para vendedores franceses de vehículos usados que gestionan stock, libro de policía, Cerfa 13751, facturas, costes e IVA sobre margen.",
      de: "RizonVO ist Rizons Vertical-SaaS-Produkt für französische Gebrauchtwagenhändler mit Bestand, Polizeibuch, Cerfa 13751, Rechnungen, Kosten und Margenbesteuerung.",
    },
    heroHeadline: {
      en: "Vertical SaaS for the used-vehicle merchant workflow.",
      fr: "Un SaaS métier pour le quotidien des marchands VO.",
      es: "SaaS vertical para el flujo de trabajo del vendedor de vehículos usados.",
      de: "Vertical SaaS für den Arbeitsablauf von Gebrauchtwagenhändlern.",
    },
    heroSub: {
      en: "RizonVO connects stock, police book records, purchase declarations, costs, invoices, and margin-VAT tracking around one vehicle dossier for French independent used-vehicle dealers.",
      fr: "RizonVO relie stock, livre de police, déclarations d'achat, frais, factures et TVA sur marge autour d'un même dossier véhicule pour les marchands VO indépendants.",
      es: "RizonVO conecta stock, libro de policía, declaraciones de compra, costes, facturas e IVA sobre margen alrededor de un expediente de vehículo para vendedores franceses independientes.",
      de: "RizonVO verbindet Bestand, Polizeibuch, Kaufmeldungen, Kosten, Rechnungen und Margenbesteuerung in einer Fahrzeugakte für unabhängige französische Gebrauchtwagenhändler.",
    },
    summary: {
      en: "RizonVO is an owned Rizon product focused on a narrow operational problem: helping French used-vehicle dealers keep each vehicle's commercial, document, and margin data connected.",
      fr: "RizonVO est un produit Rizon concentré sur un problème métier précis : aider les marchands VO français à garder les données commerciales, documentaires et de marge reliées à chaque véhicule.",
      es: "RizonVO es un producto propio de Rizon centrado en un problema operativo concreto: ayudar a vendedores franceses de vehículos usados a conectar datos comerciales, documentos y margen por vehículo.",
      de: "RizonVO ist ein eigenes Rizon-Produkt für ein klares operatives Problem: französischen Gebrauchtwagenhändlern zu helfen, Handels-, Dokumenten- und Margendaten pro Fahrzeug zu verbinden.",
    },
    why: {
      en: [
        "French used-vehicle merchants sit between sales operations and legal records. A vehicle purchase can touch stock tracking, seller identity, the police book, a Cerfa 13751 purchase declaration, preparation costs, resale invoicing, and margin-VAT treatment.",
        "Many small dealers still keep parts of that workflow in spreadsheets or paper folders. That can work while volume is low, but it breaks down when a single vehicle needs to be reconstructed quickly for an accountant, a buyer, or a control.",
        "RizonVO is organized around one narrow principle: the vehicle dossier is the source of truth. The product focuses on the core merchant workflow instead of trying to become a full dealership DMS.",
      ],
      fr: [
        "Les marchands français de véhicules d'occasion se trouvent entre l'exploitation commerciale et les obligations de registre. Un achat véhicule peut toucher le stock, l'identité du cédant, le livre de police, le Cerfa 13751, les frais de préparation, la facture de revente et la TVA sur marge.",
        "Beaucoup de petits marchands gardent encore une partie de ce flux dans un tableur ou des classeurs papier. Cela tient quand le volume est faible, puis se complique dès qu'il faut reconstituer rapidement un véhicule pour un comptable, un acheteur ou un contrôle.",
        "RizonVO est organisé autour d'un principe simple : le dossier véhicule sert de source de vérité. Le produit se concentre sur le flux central du marchand au lieu de chercher à devenir un DMS complet.",
      ],
      es: [
        "Los vendedores franceses de vehículos usados están entre la operación comercial y los registros legales. Una compra puede tocar stock, identidad del vendedor, libro de policía, Cerfa 13751, costes de preparación, factura de reventa e IVA sobre margen.",
        "Muchos pequeños vendedores todavía reparten ese flujo entre hojas de cálculo y carpetas en papel. Funciona con poco volumen, pero se rompe cuando hay que reconstruir un vehículo para un contable, un comprador o una inspección.",
        "RizonVO se organiza alrededor de un principio: el expediente del vehículo es la fuente de verdad. El producto se centra en el flujo central del vendedor en lugar de convertirse en un DMS completo.",
      ],
      de: [
        "Französische Gebrauchtwagenhändler arbeiten zwischen Vertrieb und gesetzlichen Aufzeichnungen. Ein Fahrzeugkauf berührt Bestand, Verkäuferidentität, Polizeibuch, Cerfa 13751, Aufbereitungskosten, Verkaufsrechnung und Margenbesteuerung.",
        "Viele kleine Händler verteilen diesen Ablauf noch auf Tabellen und Papierordner. Das funktioniert bei geringem Volumen, bricht aber ein, wenn ein Fahrzeug schnell für Steuerberatung, Käufer oder Prüfung rekonstruiert werden muss.",
        "RizonVO ist um ein enges Prinzip herum organisiert: Die Fahrzeugakte ist die Quelle der Wahrheit. Das Produkt fokussiert den Kernablauf des Händlers, statt ein vollständiges DMS zu werden.",
      ],
    },
    researchFocus: [
      {
        title: { en: "Vehicle dossier", fr: "Dossier véhicule", es: "Expediente del vehículo", de: "Fahrzeugakte" },
        body: {
          en: "One record should connect purchase data, seller identity, VIN, mileage, documents, costs, sale price, and margin.",
          fr: "Un seul dossier doit relier achat, identité du cédant, VIN, kilométrage, documents, frais, vente et marge.",
          es: "Un registro debe conectar compra, identidad del vendedor, VIN, kilometraje, documentos, costes, venta y margen.",
          de: "Ein Datensatz soll Kauf, Verkäuferidentität, VIN, Kilometerstand, Dokumente, Kosten, Verkauf und Marge verbinden.",
        },
      },
      {
        title: { en: "French compliance", fr: "Cadre français", es: "Cumplimiento francés", de: "Französischer Rahmen" },
        body: {
          en: "The product research centers on the police book, Cerfa 13751 purchase declaration, and margin-VAT calculations relevant to French VO merchants.",
          fr: "La recherche produit se concentre sur le livre de police, le Cerfa 13751 et les calculs de TVA sur marge propres aux marchands VO français.",
          es: "La investigación se centra en el libro de policía, el Cerfa 13751 y el IVA sobre margen relevantes para vendedores franceses.",
          de: "Die Produktforschung konzentriert sich auf Polizeibuch, Cerfa 13751 und Margenbesteuerung für französische Händler.",
        },
      },
      {
        title: { en: "Small dealer economics", fr: "Économie des petits marchands", es: "Economía del pequeño vendedor", de: "Ökonomie kleiner Händler" },
        body: {
          en: "The first ICP is a small professional dealer with roughly 5 to 60 vehicles, not a large concession running a complete DMS.",
          fr: "Le premier ICP est un marchand professionnel avec environ 5 à 60 véhicules, pas une grande concession équipée d'un DMS complet.",
          es: "El primer ICP es un vendedor profesional con unos 5 a 60 vehículos, no una gran concesión con un DMS completo.",
          de: "Der erste ICP ist ein professioneller Händler mit etwa 5 bis 60 Fahrzeugen, nicht ein großes Autohaus mit vollständigem DMS.",
        },
      },
      {
        title: { en: "Search-led validation", fr: "Validation par la recherche", es: "Validación por búsqueda", de: "Validierung über Suche" },
        body: {
          en: "The public site captures searches around concrete dealer obligations and routes that demand back to the product.",
          fr: "Le site public capte les recherches liées aux obligations concrètes des marchands et les relie au produit.",
          es: "El sitio público capta búsquedas sobre obligaciones concretas de vendedores y las conecta con el producto.",
          de: "Die öffentliche Website erfasst Suchen nach konkreten Händlerpflichten und führt diese Nachfrage zum Produkt.",
        },
      },
    ],
    publicSiteRole: [
      {
        title: { en: "Market education", fr: "Éducation marché", es: "Educación de mercado", de: "Marktbildung" },
        body: {
          en: "RizonVO publishes guides around used-vehicle dealer obligations so the product earns topical relevance in its market.",
          fr: "RizonVO publie des guides sur les obligations des marchands VO afin de construire sa pertinence thématique sur ce marché.",
          es: "RizonVO publica guías sobre obligaciones de vendedores VO para ganar relevancia temática en su mercado.",
          de: "RizonVO veröffentlicht Leitfäden zu Händlerpflichten, um thematische Relevanz im Markt aufzubauen.",
        },
      },
      {
        title: { en: "Demand capture", fr: "Capture de demande", es: "Captura de demanda", de: "Nachfrage erfassen" },
        body: {
          en: "The live domain gives interested merchants a direct path to the product and its resources.",
          fr: "Le domaine en ligne donne aux marchands intéressés un accès direct au produit et à ses ressources.",
          es: "El dominio activo da a los vendedores interesados un camino directo hacia el producto y sus recursos.",
          de: "Die Live-Domain gibt interessierten Händlern einen direkten Weg zum Produkt und seinen Ressourcen.",
        },
      },
      {
        title: { en: "Entity building", fr: "Construction d'entité", es: "Construcción de entidad", de: "Entitätsaufbau" },
        body: {
          en: "This Rizon page links the studio, the product domain, and the vertical problem in a crawlable way.",
          fr: "Cette page Rizon relie le studio, le domaine produit et le problème métier de façon explorable par les moteurs.",
          es: "Esta página de Rizon conecta el estudio, el dominio del producto y el problema vertical de forma rastreable.",
          de: "Diese Rizon-Seite verbindet Studio, Produktdomain und vertikales Problem crawlbar miteinander.",
        },
      },
    ],
    keywords: [
      "RizonVO",
      "used vehicle dealer software France",
      "marchand VO logiciel",
      "livre de police vehicule occasion",
      "Cerfa 13751 logiciel",
      "TVA sur marge vehicule occasion",
      "vertical SaaS used vehicle dealers",
    ],
  },
  {
    slug: "wavalid",
    name: "Wavalid",
    status: {
      en: "Owned product",
      fr: "Produit Rizon",
      es: "Producto propio",
      de: "Eigenes Produkt",
    },
    liveUrl: "https://wavalid.com",
    metaTitle: {
      en: "Wavalid: real-time WhatsApp number validation",
      fr: "Wavalid : validation de numéros WhatsApp en temps réel",
      es: "Wavalid: validación de números de WhatsApp en tiempo real",
      de: "Wavalid: Echtzeit-Validierung von WhatsApp-Nummern",
    },
    metaDescription: {
      en: "Wavalid is Rizon's owned validation service that checks any phone number against WhatsApp in sub-100ms across 195+ countries, with batch uploads, a dashboard, REST API, and MCP server.",
      fr: "Wavalid est le service de validation de Rizon qui vérifie n'importe quel numéro de téléphone sur WhatsApp en moins de 100ms dans plus de 195 pays, avec envois par lot, tableau de bord, API REST et serveur MCP.",
      es: "Wavalid es el servicio de validación de Rizon que comprueba cualquier número de teléfono en WhatsApp en menos de 100ms en más de 195 países, con carga por lotes, panel, API REST y servidor MCP.",
      de: "Wavalid ist Rizons eigener Validierungsdienst, der jede Telefonnummer in unter 100ms in über 195 Ländern gegen WhatsApp prüft, mit Stapel-Uploads, Dashboard, REST-API und MCP-Server.",
    },
    heroHeadline: {
      en: "Real-time WhatsApp number validation for outreach teams.",
      fr: "Validation de numéros WhatsApp en temps réel pour la prospection.",
      es: "Validación de números de WhatsApp en tiempo real para equipos de prospección.",
      de: "Echtzeit-WhatsApp-Nummernvalidierung für Outreach-Teams.",
    },
    heroSub: {
      en: "Wavalid checks any phone number against WhatsApp in sub-100ms across 195+ countries, so marketing and sales teams stop wasting sends on numbers that were never registered on the platform.",
      fr: "Wavalid vérifie n'importe quel numéro de téléphone sur WhatsApp en moins de 100ms dans plus de 195 pays, pour que les équipes marketing et commerciales arrêtent de gaspiller des envois sur des numéros jamais enregistrés.",
      es: "Wavalid comprueba cualquier número de teléfono en WhatsApp en menos de 100ms en más de 195 países, para que los equipos de marketing y ventas dejen de desperdiciar envíos en números nunca registrados.",
      de: "Wavalid prüft jede Telefonnummer in unter 100ms in über 195 Ländern gegen WhatsApp, damit Marketing- und Vertriebsteams keine Nachrichten mehr an nie registrierte Nummern verschwenden.",
    },
    summary: {
      en: "Wavalid is an owned Rizon product focused on a narrow operational problem: telling teams doing WhatsApp outreach which numbers are actually reachable before they send.",
      fr: "Wavalid est un produit Rizon concentré sur un problème précis : dire aux équipes qui font de la prospection WhatsApp quels numéros sont réellement joignables avant l'envoi.",
      es: "Wavalid es un producto propio de Rizon centrado en un problema operativo concreto: decirles a los equipos que hacen prospección por WhatsApp qué números son realmente alcanzables antes de enviar.",
      de: "Wavalid ist ein eigenes Rizon-Produkt für ein klares operatives Problem: Teams, die WhatsApp-Outreach betreiben, vor dem Versand zu sagen, welche Nummern tatsächlich erreichbar sind.",
    },
    why: {
      en: [
        "Teams doing cold outreach on WhatsApp were wasting sends on numbers that were never registered on the platform, hurting deliverability and skewing campaign results.",
        "Most list-cleaning tools only check phone number format, not actual WhatsApp presence, so bad numbers slip through until a campaign is already underway.",
        "Wavalid is organized around one narrow principle: check the number against WhatsApp itself, in real time, before it's used. The product focuses on that single check instead of trying to become a full outreach platform.",
      ],
      fr: [
        "Les équipes menant des campagnes de prospection sur WhatsApp gaspillaient des envois sur des numéros jamais enregistrés sur la plateforme, ce qui nuisait à la délivrabilité et faussait les résultats des campagnes.",
        "La plupart des outils de nettoyage de listes ne vérifient que le format du numéro, pas sa présence réelle sur WhatsApp, si bien que les mauvais numéros passent entre les mailles jusqu'à ce que la campagne soit déjà lancée.",
        "Wavalid est organisé autour d'un principe simple : vérifier le numéro directement auprès de WhatsApp, en temps réel, avant qu'il ne soit utilisé. Le produit se concentre sur cette vérification plutôt que de chercher à devenir une plateforme de prospection complète.",
      ],
      es: [
        "Los equipos que hacían prospección en frío por WhatsApp desperdiciaban envíos en números que nunca estuvieron registrados en la plataforma, perjudicando la entregabilidad y distorsionando los resultados de las campañas.",
        "La mayoría de las herramientas de limpieza de listas solo verifican el formato del número, no su presencia real en WhatsApp, así que los números malos pasan desapercibidos hasta que la campaña ya está en marcha.",
        "Wavalid se organiza alrededor de un principio: verificar el número directamente con WhatsApp, en tiempo real, antes de usarlo. El producto se centra en esa única comprobación en lugar de convertirse en una plataforma de prospección completa.",
      ],
      de: [
        "Teams, die Kaltakquise über WhatsApp betrieben, verschwendeten Nachrichten an Nummern, die nie auf der Plattform registriert waren. Das schadete der Zustellbarkeit und verzerrte Kampagnenergebnisse.",
        "Die meisten Listen-Tools prüfen nur das Format der Nummer, nicht die tatsächliche WhatsApp-Präsenz, sodass schlechte Nummern durchrutschen, bis eine Kampagne bereits läuft.",
        "Wavalid ist um ein enges Prinzip herum organisiert: die Nummer direkt bei WhatsApp prüfen, in Echtzeit, bevor sie verwendet wird. Das Produkt konzentriert sich auf genau diese Prüfung, statt eine vollständige Outreach-Plattform zu werden.",
      ],
    },
    researchFocus: [
      {
        title: { en: "Sub-100ms checks", fr: "Vérifications sous 100ms", es: "Comprobaciones en menos de 100ms", de: "Prüfungen unter 100ms" },
        body: {
          en: "A validation call needs to return fast enough to sit inline in a sending workflow instead of becoming a separate batch step.",
          fr: "Un appel de validation doit répondre assez vite pour s'intégrer directement dans le flux d'envoi plutôt que de devenir une étape séparée par lot.",
          es: "Una llamada de validación debe responder lo bastante rápido para integrarse en el flujo de envío en lugar de convertirse en un paso de lote aparte.",
          de: "Eine Validierungsanfrage muss schnell genug antworten, um direkt im Versandprozess zu stecken, statt ein separater Batch-Schritt zu werden.",
        },
      },
      {
        title: { en: "195+ country coverage", fr: "Couverture de plus de 195 pays", es: "Cobertura en más de 195 países", de: "Abdeckung von über 195 Ländern" },
        body: {
          en: "Outreach lists are rarely single-market, so the check has to hold up across country codes and numbering formats worldwide.",
          fr: "Les listes de prospection couvrent rarement un seul marché, la vérification doit donc tenir sur tous les indicatifs et formats de numérotation dans le monde.",
          es: "Las listas de prospección rara vez son de un solo mercado, así que la comprobación debe funcionar en todos los códigos de país y formatos de numeración del mundo.",
          de: "Outreach-Listen sind selten auf einen Markt beschränkt, die Prüfung muss also über Ländercodes und Nummernformate weltweit hinweg standhalten.",
        },
      },
      {
        title: { en: "No number retention", fr: "Aucune conservation des numéros", es: "Sin retención de números", de: "Keine Nummernspeicherung" },
        body: {
          en: "Teams validating contact lists need a service that checks and returns a result without selling or retaining the underlying numbers.",
          fr: "Les équipes qui valident des listes de contacts ont besoin d'un service qui vérifie et renvoie un résultat sans vendre ni conserver les numéros sous-jacents.",
          es: "Los equipos que validan listas de contactos necesitan un servicio que compruebe y devuelva un resultado sin vender ni conservar los números subyacentes.",
          de: "Teams, die Kontaktlisten validieren, brauchen einen Dienst, der prüft und ein Ergebnis liefert, ohne die zugrunde liegenden Nummern zu verkaufen oder zu speichern.",
        },
      },
    ],
    publicSiteRole: [
      {
        title: { en: "Market education", fr: "Éducation marché", es: "Educación de mercado", de: "Marktbildung" },
        body: {
          en: "Wavalid publishes guides around WhatsApp deliverability and list quality so the product earns topical relevance in its market.",
          fr: "Wavalid publie des guides sur la délivrabilité WhatsApp et la qualité des listes afin de construire sa pertinence thématique sur ce marché.",
          es: "Wavalid publica guías sobre entregabilidad de WhatsApp y calidad de listas para ganar relevancia temática en su mercado.",
          de: "Wavalid veröffentlicht Leitfäden zu WhatsApp-Zustellbarkeit und Listenqualität, um thematische Relevanz im Markt aufzubauen.",
        },
      },
      {
        title: { en: "Demand capture", fr: "Capture de demande", es: "Captura de demanda", de: "Nachfrage erfassen" },
        body: {
          en: "The live domain gives interested marketing and sales teams a direct path to the product, its API, and its MCP server.",
          fr: "Le domaine en ligne donne aux équipes marketing et commerciales intéressées un accès direct au produit, à son API et à son serveur MCP.",
          es: "El dominio activo da a los equipos de marketing y ventas interesados un camino directo hacia el producto, su API y su servidor MCP.",
          de: "Die Live-Domain gibt interessierten Marketing- und Vertriebsteams einen direkten Weg zum Produkt, seiner API und seinem MCP-Server.",
        },
      },
      {
        title: { en: "Entity building", fr: "Construction d'entité", es: "Construcción de entidad", de: "Entitätsaufbau" },
        body: {
          en: "This Rizon page links the studio, the Wavalid product domain, and the WhatsApp validation problem in a crawlable way.",
          fr: "Cette page Rizon relie le studio, le domaine produit Wavalid et le problème de validation WhatsApp de façon explorable par les moteurs.",
          es: "Esta página de Rizon conecta el estudio, el dominio del producto Wavalid y el problema de validación de WhatsApp de forma rastreable.",
          de: "Diese Rizon-Seite verbindet Studio, Wavalid-Produktdomain und das WhatsApp-Validierungsproblem crawlbar miteinander.",
        },
      },
    ],
    keywords: [
      "Wavalid",
      "WhatsApp number validation",
      "check WhatsApp number",
      "bulk WhatsApp validation",
      "WhatsApp API validation",
      "verify phone number WhatsApp",
    ],
  },
];

export function getProductLabBySlug(slug: string): ProductLab | undefined {
  return productLabs.find((product) => product.slug === slug);
}
