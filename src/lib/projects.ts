import { Project } from "@/types";

export const projects: Project[] = [
  {
    "slug": "kaiser-math-platform",
    title: { en: "Kaiser Math Platform" },
    "link": "http://kaiser.rizon.agency",
    description: {
      en: "Gamified math learning platform built around structured courses, lessons, and quizzes. Students earn points, climb ranks, and compete on leaderboards while admins build courses, manage question banks, and grade attempts from a single dashboard.",
      fr: "Plateforme d'apprentissage des maths gamifiée, construite autour de cours structurés, de leçons et de quiz. Les étudiants gagnent des points, montent dans les classements et rivalisent entre eux, pendant que les admins construisent des cours, gèrent les banques de questions et corrigent les tentatives depuis un seul tableau de bord.",
      es: "Plataforma de aprendizaje de matemáticas gamificada, construida en torno a cursos estructurados, lecciones y cuestionarios. Los alumnos ganan puntos, suben de rango y compiten en tablas de clasificación, mientras los administradores crean cursos, gestionan bancos de preguntas y corrigen intentos desde un único panel.",
      de: "Gamifizierte Mathe-Lernplattform, gebaut rund um strukturierte Kurse, Lektionen und Quizze. Schüler sammeln Punkte, steigen im Rang auf und messen sich in Bestenlisten, während Administratoren Kurse aufbauen, Fragenpools verwalten und Versuche von einem einzigen Dashboard aus bewerten.",
    },
    problem: {
      en: "Math practice felt like a chore, so students disengaged and progress stalled. Instructors had no easy way to organize material into courses, build quizzes, or see how each student was performing until it was too late. The team needed one platform that made learning rewarding for students and gave admins full control over content and grading.",
      fr: "S'exercer en maths ressemblait à une corvée, alors les élèves se désengageaient et les progrès stagnaient. Les instructeurs n'avaient pas de moyen simple d'organiser le contenu en cours, de construire des quiz ou de voir la progression de chaque élève avant qu'il ne soit trop tard. L'équipe avait besoin d'une plateforme unique qui rende l'apprentissage gratifiant pour les élèves et donne aux admins un contrôle total sur le contenu et la notation.",
      es: "Practicar matemáticas parecía una tarea pesada, así que los alumnos se desenganchaban y el progreso se estancaba. Los profesores no tenían una forma fácil de organizar el material en cursos, construir cuestionarios o ver el rendimiento de cada alumno hasta que era demasiado tarde. El equipo necesitaba una plataforma única que hiciera el aprendizaje gratificante y diera a los administradores control total sobre contenido y calificación.",
      de: "Mathe zu üben fühlte sich wie eine lästige Pflicht an, deshalb schalteten Schüler ab und Fortschritte gerieten ins Stocken. Lehrer hatten keinen einfachen Weg, Material in Kursen zu organisieren, Quizze zu bauen oder die Leistung jedes Schülers rechtzeitig zu sehen. Das Team brauchte eine Plattform, die Lernen für Schüler lohnend macht und Administratoren volle Kontrolle über Inhalte und Bewertung gibt.",
    },
    solution: {
      en: "We built a math platform with two connected experiences. Students move through courses broken into chapters and lessons, take quizzes with instant scoring and tiered feedback, and stay motivated by earning points, ranking up, and appearing on leaderboards. Admins get a full course builder to create chapters, lessons, and quiz question banks, plus dashboards to track students, review quiz attempts, and grade submissions. Learning becomes engaging while instructors keep complete visibility and control.",
      fr: "Nous avons construit une plateforme de maths avec deux expériences connectées. Les élèves progressent dans des cours découpés en chapitres et leçons, passent des quiz avec notation instantanée et retours par paliers, et restent motivés en gagnant des points, en montant en rang et en apparaissant dans les classements. Les admins disposent d'un constructeur de cours complet pour créer chapitres, leçons et banques de questions, ainsi que de tableaux de bord pour suivre les élèves, examiner les tentatives et corriger les rendus. L'apprentissage devient engageant tandis que les instructeurs gardent visibilité et contrôle complets.",
      es: "Construimos una plataforma de matemáticas con dos experiencias conectadas. Los alumnos avanzan por cursos divididos en capítulos y lecciones, hacen cuestionarios con puntuación instantánea y retroalimentación por niveles, y se mantienen motivados ganando puntos, subiendo de rango y apareciendo en tablas de clasificación. Los administradores tienen un constructor de cursos completo para crear capítulos, lecciones y bancos de preguntas, además de paneles para seguir a los alumnos, revisar intentos y calificar entregas. El aprendizaje se vuelve atractivo mientras los profesores mantienen visibilidad y control totales.",
      de: "Wir haben eine Mathe-Plattform mit zwei verbundenen Erlebnissen gebaut. Schüler durchlaufen Kurse, die in Kapitel und Lektionen unterteilt sind, absolvieren Quizze mit sofortiger Bewertung und abgestuftem Feedback und bleiben motiviert, indem sie Punkte sammeln, im Rang aufsteigen und in Bestenlisten erscheinen. Administratoren erhalten einen vollständigen Kursbaukasten für Kapitel, Lektionen und Quiz-Fragenpools sowie Dashboards, um Schüler zu verfolgen, Quizversuche zu prüfen und Einreichungen zu bewerten. Lernen wird ansprechend, während Lehrende volle Sichtbarkeit und Kontrolle behalten.",
    },
    "year": "2025",
    "preview": "/kaiser/landing-page.png",
    "tech": [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Hono"
    ],
    "images": [
      {
        "src": "/kaiser/student-dashboard.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/student-courses.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/student-course-detail.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/student-lesson.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/student-quiz-taking.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/student-quiz-result.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/student-profile.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-dashboard.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-courses.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-course-detail.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-lesson-detail.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-quiz-questions.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-quiz-attempts.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-attempt-grading.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-new-question.png",
        "width": 2880,
        "height": 1800
      },
      {
        "src": "/kaiser/admin-students.png",
        "width": 2880,
        "height": 1800
      }
    ]
  },
  {
    "slug": "rizon-lms",
    title: { en: "Rizon LMS" },
    description: {
      en: "Full-featured learning management system for universities and training institutions. Multi-course support, quiz builder with auto-grading, progress analytics, and multi-role dashboards.",
      fr: "Système de gestion de l'apprentissage complet pour universités et organismes de formation. Support multi-cours, constructeur de quiz avec correction automatique, analyses de progression et tableaux de bord multi-rôles.",
      es: "Sistema de gestión del aprendizaje completo para universidades y centros de formación. Soporte multi-curso, constructor de cuestionarios con calificación automática, analíticas de progreso y paneles multi-rol.",
      de: "Voll ausgestattetes Lernmanagement-System für Universitäten und Trainingsanbieter. Multi-Kurs-Unterstützung, Quiz-Baukasten mit automatischer Bewertung, Fortschrittsanalysen und Multi-Rollen-Dashboards.",
    },
    problem: {
      en: "Universities and training institutions were struggling with outdated LMS platforms that were expensive, inflexible, and difficult to customize. They needed a modern solution that could handle multiple courses, different user roles, and provide meaningful analytics.",
      fr: "Les universités et organismes de formation peinaient avec des plateformes LMS obsolètes, coûteuses, rigides et difficiles à personnaliser. Ils avaient besoin d'une solution moderne capable de gérer plusieurs cours, différents rôles utilisateurs et de fournir des analyses utiles.",
      es: "Las universidades e instituciones de formación lidiaban con plataformas LMS obsoletas: caras, inflexibles y difíciles de personalizar. Necesitaban una solución moderna que pudiera manejar múltiples cursos, distintos roles de usuario y ofrecer analíticas útiles.",
      de: "Universitäten und Trainingsanbieter kämpften mit veralteten LMS-Plattformen: teuer, unflexibel und schwer anpassbar. Sie brauchten eine moderne Lösung, die mehrere Kurse und Benutzerrollen bewältigt und aussagekräftige Analysen liefert.",
    },
    solution: {
      en: "We developed a full-featured LMS with student and instructor dashboards, comprehensive course management with multimedia content support, a quiz builder with auto-grading capabilities, detailed progress tracking and analytics, and multi-role authentication. The responsive design ensures accessibility across all devices.",
      fr: "Nous avons développé un LMS complet avec des tableaux de bord pour élèves et instructeurs, une gestion de cours étendue avec support multimédia, un constructeur de quiz avec correction automatique, un suivi de progression détaillé et une authentification multi-rôles. Le design responsive garantit l'accessibilité sur tous les appareils.",
      es: "Desarrollamos un LMS completo con paneles para alumnos e instructores, gestión de cursos integral con soporte multimedia, constructor de cuestionarios con calificación automática, seguimiento de progreso detallado y autenticación multi-rol. El diseño responsive garantiza accesibilidad en todos los dispositivos.",
      de: "Wir haben ein voll ausgestattetes LMS entwickelt, mit Dashboards für Schüler und Dozenten, umfassender Kursverwaltung mit Multimedia-Unterstützung, einem Quiz-Baukasten mit automatischer Bewertung, detaillierter Fortschrittsverfolgung sowie Multi-Rollen-Authentifizierung. Das responsive Design sorgt für Zugänglichkeit auf allen Geräten.",
    },
    "year": "2025",
    "preview": "/Rizon LMS - Custom Learning Management System/thumbnail.webp",
    "tech": [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Hono"
    ],
    "images": [
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.15.26.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.15.49.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.16.20.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.16.27.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.16.35.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.16.41.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.16.45.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.16.56.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.17.23.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.17.29.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.17.35.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screen Shot 2025-11-29 at 12.18.10.webp",
        "width": 4536,
        "height": 2946
      },
      {
        "src": "/Rizon LMS - Custom Learning Management System/Screenshot 2025-11-29 at 12.19.52.webp",
        "width": 3024,
        "height": 1896
      }
    ]
  },
  {
    "slug": "advanced-math-learning-platform",
    title: { en: "Advanced Math Learning Platform" },
    description: {
      en: "Comprehensive LMS for advanced mathematics education. Live webinars with chat and whiteboard, interactive coursework, homework submissions, student rankings, achievement badges, and real-time collaboration.",
      fr: "LMS complet pour l'enseignement des mathématiques avancées. Webinaires en direct avec chat et tableau blanc, travaux interactifs, remise de devoirs, classements d'élèves, badges de réussite et collaboration en temps réel.",
      es: "LMS integral para la enseñanza de matemáticas avanzadas. Webinars en vivo con chat y pizarra, trabajos interactivos, entrega de tareas, clasificaciones de alumnos, insignias de logros y colaboración en tiempo real.",
      de: "Umfassendes LMS für den Unterricht in höherer Mathematik. Live-Webinare mit Chat und Whiteboard, interaktive Aufgaben, Hausaufgaben-Einreichungen, Schüler-Rankings, Erfolgs-Abzeichen und Echtzeit-Zusammenarbeit.",
    },
    problem: {
      en: "A mathematics education provider needed a modern platform to deliver advanced courses online. Their existing solution couldn't handle live webinars, lacked interactive features, and had no way to track student progress or foster collaboration between learners.",
      fr: "Un organisme d'enseignement des mathématiques avait besoin d'une plateforme moderne pour dispenser des cours avancés en ligne. Leur solution existante ne gérait pas les webinaires en direct, manquait de fonctionnalités interactives et n'offrait aucun moyen de suivre la progression des élèves ou de favoriser la collaboration.",
      es: "Un proveedor de educación matemática necesitaba una plataforma moderna para impartir cursos avanzados en línea. Su solución actual no manejaba webinars en vivo, carecía de funciones interactivas y no permitía seguir el progreso de los alumnos ni fomentar la colaboración entre ellos.",
      de: "Ein Anbieter für Mathematikunterricht brauchte eine moderne Plattform, um Kurse für Fortgeschrittene online anzubieten. Die bestehende Lösung konnte keine Live-Webinare abbilden, hatte keine interaktiven Funktionen und keine Möglichkeit, den Fortschritt der Schüler zu verfolgen oder Zusammenarbeit zu fördern.",
    },
    solution: {
      en: "We built a comprehensive learning management system with live webinar integration featuring chat and whiteboard functionality. The platform includes interactive homework submission and grading, student performance analytics with rankings, an achievement system with badges, and real-time collaboration tools for group learning.",
      fr: "Nous avons construit un système de gestion de l'apprentissage complet avec intégration de webinaires en direct, chat et tableau blanc. La plateforme comprend la remise et la notation interactive des devoirs, des analyses de performance avec classements, un système de badges de réussite et des outils de collaboration en temps réel pour l'apprentissage en groupe.",
      es: "Construimos un sistema de gestión del aprendizaje integral con integración de webinars en vivo, chat y pizarra. La plataforma incluye entrega y calificación interactiva de tareas, analíticas de rendimiento con clasificaciones, sistema de logros con insignias y herramientas de colaboración en tiempo real para el aprendizaje en grupo.",
      de: "Wir haben ein umfassendes Lernmanagement-System mit Live-Webinar-Integration einschließlich Chat und Whiteboard gebaut. Die Plattform umfasst interaktive Hausaufgaben-Einreichung und -Bewertung, Analysen der Schülerleistung mit Rankings, ein Erfolgssystem mit Abzeichen und Echtzeit-Kollaborationstools für Gruppenlernen.",
    },
    "year": "2024",
    "preview": "/Advanced Math Learning Platform/thumbnail.webp",
    "tech": [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Prisma",
      "PostgreSQL"
    ],
    "images": [
      {
        "src": "/Advanced Math Learning Platform/188_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/287_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/586_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/709_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/720_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/773_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/824_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/875_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      },
      {
        "src": "/Advanced Math Learning Platform/940_1x_shots_so.webp",
        "width": 1920,
        "height": 1440
      }
    ]
  },
  {
    "slug": "ai-literacy-lxp",
    title: { en: "AI Literacy LXP" },
    description: {
      en: "B2B corporate and SME training platform teaching AI fundamentals, prompt engineering, and practical AI tools adoption. Multi-tenant architecture, video lessons, progress analytics, and completion certificates.",
      fr: "Plateforme de formation B2B pour entreprises et PME, enseignant les fondamentaux de l'IA, le prompt engineering et l'adoption pratique des outils d'IA. Architecture multi-tenant, cours vidéo, analyses de progression et certificats de fin de formation.",
      es: "Plataforma de formación B2B para empresas y pymes que enseña los fundamentos de la IA, el prompt engineering y la adopción práctica de herramientas de IA. Arquitectura multi-tenant, lecciones en vídeo, analíticas de progreso y certificados de finalización.",
      de: "B2B-Schulungsplattform für Unternehmen und KMU, die KI-Grundlagen, Prompt Engineering und die praktische Einführung von KI-Tools vermittelt. Multi-Tenant-Architektur, Videolektionen, Fortschrittsanalysen und Abschlusszertifikate.",
    },
    problem: {
      en: "Companies wanted to upskill employees on AI but lacked structured curriculum. Employees were confused about what AI could actually do and how to use it safely. Training needed to scale across multiple organizations without custom setup for each. Platforms had to track completion, measure effectiveness, and issue credentials.",
      fr: "Les entreprises voulaient former leurs employés à l'IA mais manquaient de programme structuré. Les employés étaient perdus quant à ce que l'IA peut réellement faire et comment l'utiliser en toute sécurité. La formation devait pouvoir passer à l'échelle sur plusieurs organisations sans configuration sur mesure pour chacune. Les plateformes devaient suivre les progrès, mesurer l'efficacité et délivrer des certifications.",
      es: "Las empresas querían formar a sus empleados en IA pero les faltaba un currículo estructurado. Los empleados no sabían qué puede hacer realmente la IA ni cómo usarla de forma segura. La formación tenía que escalar entre múltiples organizaciones sin configuración personalizada para cada una. Las plataformas debían seguir la finalización, medir la eficacia y emitir credenciales.",
      de: "Unternehmen wollten ihre Mitarbeiter im Umgang mit KI schulen, hatten aber kein strukturiertes Curriculum. Die Mitarbeiter waren unsicher, was KI tatsächlich leisten kann und wie man sie sicher einsetzt. Die Schulung musste über mehrere Organisationen hinweg skalieren, ohne für jede ein Einzel-Setup zu benötigen. Die Plattform musste Abschlüsse verfolgen, Wirksamkeit messen und Nachweise ausstellen.",
    },
    solution: {
      en: "We built a multi-tenant learning platform where companies enroll teams in AI literacy curriculum. Employees complete bite-sized video lessons, practice with real AI tools, and take assessments. The platform tracks progress in real time, shows managers completion rates and engagement, and issues certificates upon completion. Companies own their data and can customize lesson ordering. Scales from 50 to 5,000 learners with no manual setup.",
      fr: "Nous avons construit une plateforme d'apprentissage multi-tenant où les entreprises inscrivent leurs équipes à un cursus de littératie en IA. Les employés suivent de courtes leçons vidéo, s'exercent avec de vrais outils d'IA et passent des évaluations. La plateforme suit la progression en temps réel, montre aux managers les taux de complétion et l'engagement, et délivre des certificats à la fin. Les entreprises sont propriétaires de leurs données et peuvent personnaliser l'ordre des leçons. Passe à l'échelle de 50 à 5 000 apprenants sans configuration manuelle.",
      es: "Construimos una plataforma de aprendizaje multi-tenant donde las empresas inscriben a sus equipos en un currículo de alfabetización en IA. Los empleados completan lecciones en vídeo cortas, practican con herramientas reales de IA y hacen evaluaciones. La plataforma sigue el progreso en tiempo real, muestra a los responsables las tasas de finalización y engagement, y emite certificados al terminar. Las empresas son dueñas de sus datos y pueden personalizar el orden de las lecciones. Escala de 50 a 5.000 alumnos sin configuración manual.",
      de: "Wir haben eine Multi-Tenant-Lernplattform gebaut, auf der Unternehmen ihre Teams in einem KI-Grundlagen-Curriculum einschreiben. Mitarbeiter absolvieren kurze Videolektionen, üben mit echten KI-Tools und legen Prüfungen ab. Die Plattform verfolgt den Fortschritt in Echtzeit, zeigt Führungskräften Abschlussquoten und Engagement und stellt bei Abschluss Zertifikate aus. Unternehmen besitzen ihre Daten und können die Reihenfolge der Lektionen anpassen. Skaliert von 50 auf 5.000 Lernende ohne manuelles Setup.",
    },
    "year": "2024",
    "preview": "/ai-literacy/header.webp",
    "tech": [
      "React",
      "TypeScript",
      "PostgreSQL",
      "Hono",
      "Redis",
      "BullMQ"
    ],
    "images": [
      {
        "src": "/ai-literacy/image_original.webp",
        "width": 2880,
        "height": 1550
      },
      {
        "src": "/ai-literacy/image_original (5).webp",
        "width": 2880,
        "height": 1550
      },
      {
        "src": "/ai-literacy/image_original (6).webp",
        "width": 2880,
        "height": 1550
      },
      {
        "src": "/ai-literacy/image_original (7).webp",
        "width": 2880,
        "height": 1550
      },
      {
        "src": "/ai-literacy/image_original (8).webp",
        "width": 2880,
        "height": 1550
      }
    ]
  },
  {
    "slug": "wavalid",
    title: { en: "Wavalid" },
    "link": "https://wavalid.com",
    description: {
      en: "Real-time WhatsApp phone number validation for marketing and sales teams. Checks any number against WhatsApp in sub-100ms across 195+ countries, with batch uploads, a dashboard, REST API, and MCP server.",
      fr: "Validation en temps réel de numéros de téléphone WhatsApp pour les équipes marketing et commerciales. Vérifie n'importe quel numéro sur WhatsApp en moins de 100ms dans plus de 195 pays, avec envois par lot, tableau de bord, API REST et serveur MCP.",
      es: "Validación en tiempo real de números de teléfono de WhatsApp para equipos de marketing y ventas. Comprueba cualquier número en WhatsApp en menos de 100ms en más de 195 países, con carga por lotes, panel, API REST y servidor MCP.",
      de: "Echtzeit-Validierung von WhatsApp-Telefonnummern für Marketing- und Vertriebsteams. Prüft jede Nummer in unter 100ms gegen WhatsApp in über 195 Ländern, mit Stapel-Uploads, Dashboard, REST-API und MCP-Server.",
    },
    problem: {
      en: "Teams doing cold outreach on WhatsApp were wasting sends on numbers that were never registered on the platform, hurting deliverability and wasting budget on list cleaning tools that only checked format, not actual WhatsApp presence.",
      fr: "Les équipes menant des campagnes de prospection sur WhatsApp gaspillaient des envois sur des numéros jamais enregistrés sur la plateforme, ce qui nuisait à la délivrabilité et gaspillait le budget sur des outils de nettoyage de listes qui ne vérifiaient que le format, pas la présence réelle sur WhatsApp.",
      es: "Los equipos que hacían prospección en frío por WhatsApp desperdiciaban envíos en números que nunca estuvieron registrados en la plataforma, perjudicando la entregabilidad y malgastando presupuesto en herramientas de limpieza de listas que solo verificaban el formato, no la presencia real en WhatsApp.",
      de: "Teams, die Kaltakquise über WhatsApp betrieben, verschwendeten Nachrichten an Nummern, die nie auf der Plattform registriert waren. Das schadete der Zustellbarkeit und verschwendete Budget für Listen-Tools, die nur das Format prüften, nicht die tatsächliche WhatsApp-Präsenz.",
    },
    solution: {
      en: "We built a validation service that checks any phone number against WhatsApp in real time, sub-100ms, across 195+ countries. Users validate numbers one at a time or in bulk batches, track results on a dashboard with historical charts, and integrate via REST API, MCP server, or Chrome extension. Credit-based pricing with no subscriptions, and numbers are never sold or retained.",
      fr: "Nous avons construit un service de validation qui vérifie n'importe quel numéro de téléphone sur WhatsApp en temps réel, en moins de 100ms, dans plus de 195 pays. Les utilisateurs valident des numéros un par un ou par lots, suivent les résultats sur un tableau de bord avec historique, et s'intègrent via API REST, serveur MCP ou extension Chrome. Tarification à base de crédits sans abonnement, et les numéros ne sont jamais vendus ni conservés.",
      es: "Construimos un servicio de validación que comprueba cualquier número de teléfono en WhatsApp en tiempo real, en menos de 100ms, en más de 195 países. Los usuarios validan números uno a uno o por lotes, siguen los resultados en un panel con historial, y se integran vía API REST, servidor MCP o extensión de Chrome. Precios basados en créditos sin suscripciones, y los números nunca se venden ni se conservan.",
      de: "Wir haben einen Validierungsdienst gebaut, der jede Telefonnummer in Echtzeit, in unter 100ms, in über 195 Ländern gegen WhatsApp prüft. Nutzer validieren Nummern einzeln oder in Stapeln, verfolgen Ergebnisse in einem Dashboard mit Verlauf und binden den Dienst über REST-API, MCP-Server oder Chrome-Erweiterung ein. Guthabenbasierte Preise ohne Abonnements, Nummern werden nie verkauft oder gespeichert.",
    },
    "year": "2026",
    "preview": "/wavalid/landing-page.png",
    "tech": [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    "images": [
      { "src": "/wavalid/landing-page.png", "width": 2880, "height": 1756 },
      { "src": "/wavalid/dashboard.png", "width": 2880, "height": 1756 },
      { "src": "/wavalid/batches.png", "width": 2880, "height": 1756 },
      { "src": "/wavalid/batch-detail.png", "width": 2880, "height": 1756 },
      { "src": "/wavalid/batch-detail-stats.png", "width": 2880, "height": 1756 },
      { "src": "/wavalid/new-validation.png", "width": 2880, "height": 1756 },
      { "src": "/wavalid/billing-pricing.png", "width": 2880, "height": 1756 },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
