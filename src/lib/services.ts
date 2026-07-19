import type { ServicePage } from "@/types";

const customLmsFaqs: ServicePage["faqs"] = [
  { question: "How much does custom LMS development cost?", answer: "A focused first release usually lands between $25,000 and $80,000. The number moves with the hard parts: how many distinct learner flows, how much data you're migrating, the integrations, and the reporting. I'd rather quote a narrow first release with a clear second step than a big number that hides its assumptions." },
  { question: "How long until the first release?", answer: "Most focused platforms are usable in 8 to 12 weeks. We work in weekly slices, so you're clicking through the real thing early instead of waiting months for a slide deck." },
  { question: "Do we own the code?", answer: "Yes. At handover you get the application code, deployment docs, and the infrastructure access we agreed in the plan. Ongoing support is available, never required." },
  { question: "Can it work with the systems we already run?", answer: "Where the API or standard supports it, yes. We confirm identity, payments, content packages, and reporting during technical discovery rather than assuming an integration is simple." },
];

const corporateFaqs: ServicePage["faqs"] = [
  { question: "How much does a corporate training platform cost?", answer: "A focused first release usually runs $30,000 to $90,000. SSO, HRIS connections, compliance evidence, partner training, and migrating historic records push it up. We scope the reporting questions before quoting, because that's where vague requirements get expensive." },
  { question: "How long does it take to launch?", answer: "Around 8 to 12 weeks for the core, in weekly builds. Identity and role data get proven first, because a polished dashboard with the wrong access model is expensive wallpaper." },
  { question: "Will it connect to our SSO and HR systems?", answer: "That's usually the point. We confirm the identity provider, the systems of record, and the exact sign-in flow during discovery, then place people into the right roles automatically instead of asking a manager to update a group by hand." },
  { question: "How do you handle compliance evidence and old records?", answer: "We record attempts, acknowledgement, expiry, certificates, and the version of the material a learner saw, so an audit is a report rather than a scramble. Historic records either migrate or move to a retained archive with a clear audit path, decided before cutover." },
];

const creatorFaqs: ServicePage["faqs"] = [
  { question: "How much does a custom course platform cost?", answer: "A focused first release usually costs $25,000 to $75,000. Custom checkout logic, memberships, team purchasing, a catalogue migration, or a built-in community push it up. We build the offer that makes money now, not the hypothetical one three years out." },
  { question: "How soon can I start selling on it?", answer: "Usually 8 to 12 weeks, built in weekly slices. You can start selling once the purchase-and-delivery path is proven, before every feature is polished." },
  { question: "Do I keep my payment processor and revenue?", answer: "Yes. The platform connects to the payment provider you choose and takes no cut on top of the processor fee. Owning the checkout is usually the whole reason to build." },
  { question: "Can you migrate my existing courses and students?", answer: "We export what your current tool allows, courses, media, and customer records, rebuild the flows that matter, and test buying, access, and refunds with real-looking data before anyone switches." },
];

const schoolFaqs: ServicePage["faqs"] = [
  { question: "How much does a school student portal cost?", answer: "A focused first release usually costs $35,000 to $100,000. SIS integration, the number of roles, parent access, gradebook needs, and legacy data migration move the range most. We usually start with the student service causing the most friction, then expand from a stable base." },
  { question: "How long does it take to launch?", answer: "About 8 to 12 weeks for a focused first release. The high-volume paths, sign-in, timetable, assignments, get built and validated first." },
  { question: "Who owns and protects the student data?", answer: "Your institution controls the environment and the data-access model. We design permissions, audit needs, retention, and incident responsibilities with you, and document them before launch rather than after." },
  { question: "Do we have to replace our SIS and LMS?", answer: "No, and replacing everything is often the riskiest first move. The SIS can stay the source of truth for enrolment and the LMS can keep course content, while the portal gives students, parents, and staff one front door through tested integrations." },
];

export const services: ServicePage[] = [
  {
    slug: "custom-lms-development",
    title: "Custom LMS Development",
    metaTitle: "Custom LMS Development for Learning Products | Rizon",
    metaDescription: "Custom LMS development for teams that have outgrown off-the-shelf software and need a learning platform built around their learners, data, and business.",
    h1: "Custom LMS development for the way your learning business actually works.",
    heroSub: "For founders and operations leads who have outgrown their LMS, we build an owned platform around the learner journey, commercial model, and systems you already run.",
    targetKeyword: "custom LMS development",
    intro: "Custom LMS development makes sense when your learning platform has stopped being a tool and started being part of the product you sell. If your team is reconciling enrolments in a spreadsheet every Friday, explaining checkout exceptions to support, or accepting a learner flow because the vendor cannot change it, the platform is now shaping the business. That is the point where a purpose-built application can pay for itself.",
    forWho: "This page is for Rami, a founder or operations lead whose programme has demand but whose current LMS keeps forcing the offer into someone else's rules.",
    problem: "The expensive part of an off-the-shelf LMS is rarely the subscription line. It is the quiet work around it: a manager exporting completion data at 6pm, a sales rep promising a bundle the checkout cannot express, an engineer maintaining a plugin because one old cohort still needs it. Those chores look small in isolation. Together, they become the operating system of the business.",
    decisionGuide: [
      "Start with the rule that irritates the team most. On one project, that rule was simple on paper: a buyer could pay once, invite five colleagues, and let each person choose their own start date. The existing LMS could sell a course or create a group, but not connect those two actions without a manual handoff. Sales copied names into a sheet. Support checked the sheet against the payment processor. The problem was not a missing button. The offer had outgrown the product model.",
      "This is the test I use: if a workaround touches revenue, learner access, or a weekly operational task, count it. Do not dismiss it as 'what we do for now.' A 15-minute workaround done by four people every week becomes a design decision you are paying for in salary, delay, and mistakes. The platform may still be worth keeping. At least you are then making that choice with the cost visible.",
      "A first release should be blunt about what it will not do. You may need one buyer journey, two learner roles, an admin view, and an integration with the payment system. You probably do not need every possible certificate, community feature, AI assistant, or reporting screen before the first learner arrives. Build the part that changes the business. Leave the decorative backlog where it belongs."
    ],
    whatWeBuild: [
      { heading: "A learner experience that follows your programme", body: "We start with the moments learners actually notice: how they join, what they see on day one, how progress is explained, and what happens when they finish. A course catalogue with three self-paced products needs a different shape from a 16-week cohort with mentor reviews. We design the flow around that difference instead of asking you to rename a generic tab." },
      { heading: "The operational side nobody sees until it breaks", body: "Administrators need course publishing, enrolments, roles, reporting, support notes, and a way to correct mistakes without asking a developer for every change. We build those controls alongside the learner side. A clean dashboard is nice; being able to fix a mistaken enrolment in two minutes is better." },
      { heading: "Identity, payments, and the systems around the LMS", body: "Most platforms live beside an identity provider, a payment processor, a CRM, video hosting, and sometimes LTI tools. We map the handoffs before writing code. A login that works in a demo but creates duplicate users after a partner bulk-enrols 400 learners is not an integration plan." },
      { heading: "Assessment and reporting with a purpose", body: "We build assessment and reporting around decisions you need to make: who needs help, which cohort stalled, which manager needs evidence of completion, or which module causes refunds. That is more useful than collecting every metric a generic LMS happens to expose." },
    ],
    process: [
      { step: "Week 1: map the work", detail: "We put the current learner journey and operational work on one board. The awkward exceptions matter most. A rule that takes an admin 20 minutes every week belongs in the plan before the polished marketing page does." },
      { step: "Weeks 2–3: prove the risky paths", detail: "We prototype the login, enrolment, payment, migration, or reporting path most likely to cause trouble. This is where a vague promise becomes a technical decision with an owner." },
      { step: "Weekly builds: show working software", detail: "You get a live review every week. You can click through the product, spot a bad assumption, and change the next slice while the cost of changing it is still small." },
      { step: "Launch: hand over without disappearing", detail: "Before launch we test the real roles, imports, emails, and recovery paths. You receive the code and documentation. Continued support is available, but it is not a trapdoor." },
    ],
    included: ["Discovery and product map", "UX and interface design", "Learner and admin application", "Identity and required integrations", "Testing, deployment, and handover documentation"],
    costBand: "A focused custom LMS first release usually costs $25,000 to $80,000. A platform with several roles, a large migration, complex reporting, payments, or LTI/SSO integrations can exceed that range. We would rather give you a smaller first release with a clear second step than pretend every possible feature belongs in version one.",
    outcomes: "The result is a platform your team can explain without apologising for its limits. Learners see a coherent product. Administrators spend less time stitching systems together. And when a new revenue model or teaching idea arrives, you have a codebase that can change with it.",
    faqs: customLmsFaqs,
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["how-much-does-a-custom-lms-cost-in-2026", "build-vs-buy-an-lms-the-honest-math", "hidden-cost-of-revenue-share-course-platforms", "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years", "what-actually-drives-the-price-of-an-e-learning-build"],
    keywords: ["custom LMS development", "custom learning management system", "LMS development agency"],
  },
  {
    slug: "corporate-training-platform",
    title: "Corporate Training Platform Development",
    metaTitle: "Corporate Training Platform Development | Rizon",
    metaDescription: "Corporate training platform development for L&D teams that need training tied to their own roles, SSO, compliance evidence, reporting, and employee systems.",
    h1: "Corporate training platform development that works with the company you actually run.",
    heroSub: "For L&D and HR leads who need training records, role-based access, and reporting connected to their organisation, we build the platform around the work.",
    targetKeyword: "corporate training platform development",
    intro: "Corporate training platform development is worth considering when training has become an operational system rather than a library of videos. If managers need a clean view of who is cleared for a role, contractors need different access from employees, and HR is rebuilding a compliance report by hand each quarter, a generic LMS is leaving important work outside the product.",
    forWho: "This page is for Hana, an L&D lead who has to prove completion across teams, regions, and job roles without making every manager a spreadsheet expert.",
    problem: "The usual failure is not that people cannot upload a course. It is that the organisation chart, identity system, and evidence requirements do not match the LMS model. One employee changes departments. A contractor becomes permanent. A manager needs a completion record before a site audit on Monday morning. The platform should handle that change without three emails and a CSV export.",
    decisionGuide: [
      "Corporate training gets complicated at the edges. A new technician starts on Wednesday, needs two safety modules before entering a site, and reports to a manager who should only see their own region. If the person arrives through SSO but the training assignment waits for someone to update a group by hand, the system already has a gap. It may work on a quiet week. It fails when hiring picks up or an audit asks who had access when.",
      "Map one requirement from policy to proof. For example: 'every warehouse supervisor must renew this module every 12 months.' Who assigns it? What happens after a transfer? Does an expired record remove access, warn a manager, or sit unnoticed until someone exports a report? These are product decisions. They should not live in a PDF beside the LMS.",
      "Do not ask for a single corporate dashboard that answers every question. It becomes a dumping ground. Decide what a manager needs before a shift, what L&D needs during a programme, and what an auditor needs after the fact. Those are different views, with different permissions. The useful platform makes that separation obvious instead of pretending everyone needs the same screen."
    ],
    whatWeBuild: [
      { heading: "Access that follows roles and teams", body: "We model the people who need access: employees, managers, contractors, partners, and administrators. SSO can place people into the right space on sign-in, while team and role rules decide what training appears and what evidence a manager can view." },
      { heading: "Compliance evidence people can trust", body: "Completion alone is often too weak. We can record attempts, acknowledgement, expiry dates, certificates, and the version of the material a learner saw. During an audit, that detail is the difference between a useful report and a nervous scramble through old exports." },
      { heading: "Reporting that answers a management question", body: "A manager should be able to see their own team without gaining access to everyone else's records. We build reporting around decisions, such as overdue training by location or a required module before an employee can take a new role." },
      { heading: "Standards and content that travel", body: "Where your programme needs SCORM, xAPI, LTI, or a specialist content tool, we define the behaviour in plain language first. A standards label is not enough; completion, score, launch, and reporting behaviour still need acceptance tests." },
    ],
    process: [
      { step: "Find the evidence trail", detail: "We follow one training requirement from assignment to manager report. The places where people leave the LMS to email, export, or confirm something manually tell us what the first release must solve." },
      { step: "Connect identity early", detail: "SSO and role data change the platform architecture. We test them before the interface gets polished, because a beautiful dashboard with the wrong access model is expensive wallpaper." },
      { step: "Build around a real team", detail: "A pilot uses a real department or training programme, with realistic role changes and completion states. It produces feedback a staged demo cannot." },
      { step: "Launch with an owner", detail: "We document who runs content, who reviews evidence, who receives support issues, and how changes ship. Software without ownership quickly becomes another orphaned HR tool." },
    ],
    included: ["Role and access model", "SSO and HR-system integration planning", "Training assignment and completion evidence", "Manager reporting", "Deployment and handover"],
    costBand: "A focused corporate training platform first release usually costs $30,000 to $90,000. SSO, HRIS connections, compliance evidence, multi-tenant partner training, and migration of historic records drive the figure upward. We scope the reporting questions before estimating, because reporting is where vague requirements become expensive.",
    outcomes: "Managers get an answer they can act on. Learners receive the training that applies to them. The L&D team stops spending the last afternoon of the month turning exports into evidence.",
    faqs: corporateFaqs,
    relatedAlternativeSlugs: ["docebo", "talentlms"],
    keywords: ["corporate training platform development", "custom corporate LMS", "L&D platform development"],
  },
  {
    slug: "course-platform-for-creators",
    title: "Custom Course Platform for Creators",
    metaTitle: "Custom Course Platform for Creators | Rizon",
    metaDescription: "A custom course platform for creators who have outgrown template course software and need full control of payments, learner experience, branding, and product roadmap.",
    h1: "A custom course platform for creators who have outgrown the template.",
    heroSub: "For established course creators who need their checkout, member experience, and learning flow to match the business they have built, we make the platform yours.",
    targetKeyword: "custom course platform",
    intro: "A custom course platform is a serious move, so it needs a serious reason. The reason is not that you dislike the colour of your current course dashboard. It is that the offer has grown beyond the template: cohorts need different access, bundles have exceptions, partners buy seats in bulk, or a learner's next step depends on more than whether they clicked 'complete.'",
    forWho: "This page is for Lina, a creator with a proven offer whose platform now makes her team explain the same exceptions to buyers every launch.",
    problem: "The cost of a template platform shows up in the gaps between marketing and delivery. Someone buys a bundle. Someone else already owns half of it. A partner needs 60 seats but wants one invoice. A returning student should enter at module four. The platform may handle each case with a workaround. Your team becomes the workaround for all of them.",
    decisionGuide: [
      "Look at the last launch, not the dream version of the business. Which message did support answer six times? Which buyer got a manual access adjustment? Did anyone pay and then wait for somebody to check a spreadsheet before they could start? Those events are better product requirements than a long list of features copied from competing course platforms.",
      "Creators sometimes choose custom too early because a hosted tool feels limiting. I would rather see a creator keep the hosted tool for another year than spend a build budget before the offer is proven. The stronger case appears when the business has repeatable demand and the same constraint keeps showing up in sales, delivery, and retention. Then the product is holding back work that already exists.",
      "The first version should protect the relationship with the learner. A receipt must match what they bought. The welcome page must explain what happens next. Access should not disappear because a background automation failed. Those sound basic. They are where trust is won or lost after someone has already paid you."
    ],
    whatWeBuild: [
      { heading: "Checkout that reflects the offer", body: "We build purchase and access rules around what you actually sell: individual courses, cohorts, memberships, bundles, team seats, applications, or staged payment plans. Payments are connected to the provider you choose, and the successful-payment path is tested as carefully as the marketing page." },
      { heading: "A member area people want to return to", body: "A creator's brand should not stop at the sales page. We design the learner account, progress view, lesson experience, and support moments around the programme. If your coaching call is the point of the offer, it should not feel bolted onto a video library." },
      { heading: "A back office built for launch week", body: "The important admin actions are practical: see a payment, grant access, move a learner, resend an email, check a failed checkout, or answer a support request without opening five tools. Launch week is a bad time to discover that an admin view only works for the happy path." },
      { heading: "Revenue and learning data in the same conversation", body: "We can connect sales, access, engagement, and support signals where doing so helps you make a better decision. The aim is not a wall of charts. It is seeing whether a refund pattern begins after a specific module or an offer converts but learners never start." },
    ],
    process: [
      { step: "Start with one real offer", detail: "We map your best-selling offer and its awkward cases before discussing every future product. A clear first commercial flow beats a broad feature list that delays the launch." },
      { step: "Design the buyer-to-learner handoff", detail: "The first five minutes after purchase decide whether the product feels organised. We test receipt, account creation, access, and the first lesson as one flow." },
      { step: "Build the first revenue loop", detail: "Each week you see the purchase, enrolment, and learning actions working together. You can challenge the assumptions before they harden into expensive code." },
      { step: "Hand over a product, not a dependency", detail: "At launch you get the code and documentation. If you want ongoing help, we can provide it. You should still be able to change providers or bring another team in later." },
    ],
    included: ["Commercial and access-rule design", "Custom checkout and account flows", "Course and cohort experience", "Payments and selected integrations", "Admin tooling, launch support, and handover"],
    costBand: "A focused creator platform usually costs $25,000 to $75,000 for its first release. Custom checkout logic, memberships, team purchasing, a migration from an existing catalogue, or a built-in community push the cost up. We protect the first release by choosing the offer that makes money now, not the hypothetical offer three years away.",
    outcomes: "You control the commercial rules, the member experience, and the pace of product changes. More importantly, your support team stops being asked to manually bridge gaps the software should handle.",
    faqs: creatorFaqs,
    relatedAlternativeSlugs: ["teachable", "thinkific", "kajabi"],
    keywords: ["custom course platform", "Teachable alternative for creators", "creator platform development"],
  },
  {
    slug: "school-student-portal-development",
    title: "School & Student Portal Development",
    metaTitle: "School Student Portal Development | Rizon",
    metaDescription: "School student portal development for institutions that need one tailored place for students, parents, teachers, learning, grades, data, and essential services.",
    h1: "School student portal development for an institution that wants one front door.",
    heroSub: "For school and university IT leaders whose learners, parents, teachers, and staff keep crossing between disconnected systems, we build the portal around the institution.",
    targetKeyword: "school portal development",
    intro: "School portal development is not about making another dashboard. It is about deciding what students, parents, teachers, and staff should be able to do without a scavenger hunt across five logins. When a student checks an assignment in one system, a timetable in another, and a support request in a third, the school has a service-design problem as much as a software problem.",
    forWho: "This page is for Salma, a school or university IT director who needs a student portal that reflects the way her institution actually operates.",
    problem: "Institutions often inherit systems one department at a time. Admissions has one record. The LMS has another. The gradebook exports a third. That can work until a parent calls at 4:45pm because a child cannot find an assignment and nobody knows which login owns the problem. The portal should remove those seams, not decorate them.",
    decisionGuide: [
      "Start with the Tuesday morning problem, not a feature catalogue. A student missed a timetable change. A parent cannot see a message. A teacher has a grade but cannot tell whether it has reached the student record. Follow that one event across the current systems. The places where people log in twice, copy an identifier, or ask another department to confirm something are where the portal earns its keep.",
      "A school portal does not need to replace every system. In fact, replacement is often the riskiest first move. The student-information system may remain the source of truth for enrolment. An LMS may still own course content. The portal can give people one understandable front door while integrations keep the specialist systems doing the jobs they already do well.",
      "Set governance before the launch date. Decide who can approve a new parent-access rule, who investigates a data mismatch, and what happens when a teacher changes class membership after an import. Those questions are less glamorous than the homepage. They are what protect student data and keep the portal useful after the original project team has moved on."
    ],
    whatWeBuild: [
      { heading: "Views for students, parents, teachers, and staff", body: "Different people need different information and permissions. We design role-specific views so a parent sees the right child and messages, a teacher sees their classes and assessment work, and a student sees a clear next action rather than an institutional sitemap." },
      { heading: "Learning, assignment, and gradebook flows", body: "We can build course delivery, submission, feedback, grading, and progress views where the institution needs them. If an existing LMS should remain the source for some learning activity, the portal can connect to it rather than pretending a full replacement is always sensible." },
      { heading: "Identity and student-information systems", body: "SSO, SIS data, and role changes define the boundaries of the portal. We establish where a name, class membership, guardian relationship, and timetable come from before building screens. Otherwise the portal becomes another conflicting record." },
      { heading: "Security that fits student data", body: "We design permissions, audit needs, retention, and incident responsibilities with the institution. A student-data issue is never fixed by a pretty interface. It is prevented by clear access rules, tested integrations, and people who know what happens when something goes wrong." },
    ],
    process: [
      { step: "Walk a real school day", detail: "We trace a student, guardian, teacher, and admin task through current systems. The handoffs reveal what a portal must unify and what it should leave alone." },
      { step: "Set the source of truth", detail: "We agree which system owns identity, enrolment, grades, and learning data. This work is unglamorous. It prevents the portal from creating a second, unreliable version of school records." },
      { step: "Pilot with real roles", detail: "A small group of students, teachers, and parents test the priority flows. Their confusion is useful. It is far cheaper than a full-term rollout followed by a support backlog." },
      { step: "Launch with governance", detail: "We document access, support, change approval, and recovery paths. An institution needs more than a deployed app; it needs a way to operate it through staff changes and term cycles." },
    ],
    included: ["Portal and role design", "Student, parent, teacher, and staff flows", "SSO/SIS/LTI integration planning", "Assignments, gradebook, and reporting where scoped", "Security review, testing, and handover"],
    costBand: "A focused school portal first release usually costs $35,000 to $100,000. The range changes sharply with SIS integration, number of roles, parent access, gradebook requirements, legacy data migration, and whether the portal also replaces an LMS. We recommend beginning with the student service that causes the most friction, then expanding from a stable base.",
    outcomes: "Students get a clearer path through school life. Teachers and staff spend less time translating between systems. The institution gains a portal it can shape around its own policies instead of asking every department to adapt to a generic product.",
    faqs: schoolFaqs,
    relatedAlternativeSlugs: ["moodle", "canvas", "blackboard"],
    relatedPostSlugs: ["canvas-breach-student-data-security", "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders"],
    keywords: ["school portal development", "student portal development", "custom school LMS"],
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((service) => service.slug === slug);
}
