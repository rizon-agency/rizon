import type { Post } from "@/types";
import { routing, type Locale } from "@/i18n/routing";
import type { ComponentType } from "react";
import cheatingExamsCover from "@/assets/blog/cheating-online-exams-what-actually-works.png";
import canvasBreachCover from "@/assets/blog/canvas-breach-student-data-security.png";
import ltiMigrationBreachCover from "@/assets/blog/migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders.png";
import customLmsCostCover from "@/assets/blog/custom-lms-cost-2026.svg";
import buildVsBuyCover from "@/assets/blog/build-vs-buy-lms.svg";
import revenueShareCover from "@/assets/blog/revenue-share-course-platforms.svg";
import threeYearTcoCover from "@/assets/blog/lms-three-year-tco.svg";
import buildCostDriversCover from "@/assets/blog/elearning-build-cost-drivers.svg";
import migrateOffMoodleCover from "@/assets/blog/migrate-off-moodle.svg";
import canvasImsccCover from "@/assets/blog/canvas-imscc-export.svg";
import leavingTeachableCover from "@/assets/blog/leaving-teachable.svg";
import scormVsXapiCover from "@/assets/blog/scorm-vs-xapi.svg";
import smoothMigrationCover from "@/assets/blog/smooth-lms-migration.svg";
import lti13AdvantageCover from "@/assets/blog/lti-13-advantage.svg";
import studentDataSecurityCover from "@/assets/blog/student-data-security-checklist.svg";
import ssoLearningPlatformsCover from "@/assets/blog/sso-learning-platforms.svg";
import assessmentsCheatingCover from "@/assets/blog/assessments-resist-cheating.svg";
import whatsImsccCover from "@/assets/blog/whats-an-imscc-file.png";
import wcagAccessibilityCover from "@/assets/blog/wcag-accessibility-learning-platforms.svg";
import multiTenantLmsCover from "@/assets/blog/multi-tenant-lms.svg";
import ferpaEdtechCover from "@/assets/blog/ferpa-edtech-compliance.svg";

export const posts: Post[] = [
  {
    slug: "moodle-5-0-release-notes-and-upgrade-guide",
    title: "Moodle 5.0 Release Notes and Upgrade Guide",
    description:
      "Moodle 5.0 shipped April 2025 and is already end of life, but its requirement changes carry forward: PHP 8.2, raised database floors, Bootstrap 5, and the permanent removal of Atto, Oracle, Chat, Survey, and MNet.",
    date: "2026-08-11",
    readTime: "10 min read",
    category: "Moodle",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["ai-in-an-lms-what-actually-helps", "sso-options-for-learning-platforms"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "moodle-router-not-correctly-configured",
    title: "Moodle 5.2 Router Is Not Correctly Configured",
    description:
      "Fix Moodle 5.2 router errors where routed PHP-looking paths return 404 instead of reaching r.php, including Apache PHP-FPM, FallbackResource, Nginx, and shared-hosting rules.",
    date: "2026-08-10",
    readTime: "8 min read",
    category: "Moodle",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["moodle-5-2-shared-hosting", "moodle-file-picker-stuck-loading"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "moodle-5-2-windows-install",
    title: "How to Install Moodle 5.2 on Windows",
    description:
      "A practical Moodle 5.2 Windows install checklist for IIS, FastCGI, PHP 8.3, database setup, the public directory, routing, file permissions, cron, and common errors.",
    date: "2026-08-10",
    readTime: "9 min read",
    category: "Moodle",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["moodle-router-not-correctly-configured", "moodle-vendor-directory-not-found"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "moodle-vendor-directory-not-found",
    title: "Moodle Composer Vendor Directory Not Found",
    description:
      "What Moodle's Composer vendor directory error means, how to run the production Composer install command from the Moodle root, and what to do on shared hosting.",
    date: "2026-08-10",
    readTime: "7 min read",
    category: "Moodle",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["moodle-5-2-shared-hosting", "moodle-router-not-correctly-configured"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "moodle-file-picker-stuck-loading",
    title: "Moodle File Picker Stuck Loading After Upgrade to 5.2",
    description:
      "Troubleshoot Moodle 5.2 file picker and upload boxes that keep loading after an upgrade, from cache purge and browser errors to plugins, routing, cron, and moodledata permissions.",
    date: "2026-08-10",
    readTime: "8 min read",
    category: "Moodle",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["moodle-router-not-correctly-configured", "what-a-smooth-lms-migration-actually-looks-like"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "moodle-5-2-shared-hosting",
    title: "Can Moodle 5.2 Run on Shared Hosting?",
    description:
      "A realistic guide to Moodle 5.2 on shared hosting, including cPanel, Hostinger, GoDaddy, public directory setup, symlinks, router rules, Composer, cron, and when to use a VPS.",
    date: "2026-08-10",
    readTime: "8 min read",
    category: "Moodle",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["moodle-router-not-correctly-configured", "moodle-vendor-directory-not-found"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "lms-reporting-and-analytics-what-you-actually-need",
    title: "LMS Reporting and Analytics: What You Actually Need",
    description:
      "Most LMS dashboards count activity without helping anyone act. Here is how to design useful operational, learning, commercial, and outcome reporting, choose honest metrics, and build data people can trust.",
    date: "2026-07-24",
    readTime: "8 min read",
    category: "Analytics",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["what-gdpr-requires-from-an-elearning-platform", "what-a-multi-tenant-lms-is-and-when-you-need-one", "scorm-vs-xapi-keeping-your-content-portable"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "what-gdpr-requires-from-an-elearning-platform",
    title: "What GDPR Actually Requires From an E-Learning Platform",
    description:
      "GDPR for an LMS is not a cookie banner. It shapes what learner data you collect, who controls it, how rights requests work, which vendors receive it, and when analytics or AI requires a DPIA.",
    date: "2026-07-25",
    readTime: "8 min read",
    category: "Compliance",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["what-ferpa-actually-requires-of-an-edtech-platform", "student-data-security-checklist-for-edtech-teams", "ai-in-an-lms-what-actually-helps"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "ai-in-an-lms-what-actually-helps",
    title: "AI in an LMS: What Actually Helps",
    description:
      "Every learning platform claims to have AI. Here is what genuinely saves time, what is mostly demo theater, and the questions to ask about student data, grading, bias, and cost before you buy or build it.",
    date: "2026-07-26",
    readTime: "8 min read",
    category: "AI",
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "docebo"],
    relatedPostSlugs: ["what-ferpa-actually-requires-of-an-edtech-platform", "what-actually-drives-the-price-of-an-e-learning-build", "cheating-online-exams-what-actually-works"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "what-ferpa-actually-requires-of-an-edtech-platform",
    title: "What FERPA Actually Requires of an Edtech Platform",
    description:
      "There is no FERPA certificate. It is a set of obligations that reach you through the contracts schools sign. Here is how a vendor is legally allowed to touch student data, what FERPA asks you to build, and the other privacy laws in the room.",
    date: "2026-07-27",
    readTime: "8 min read",
    category: "Compliance",
    coverImage: ferpaEdtechCover,
    relatedServiceSlug: "school-student-portal-development",
    relatedAlternativeSlugs: ["canvas", "blackboard"],
    relatedPostSlugs: ["student-data-security-checklist-for-edtech-teams", "canvas-breach-student-data-security", "what-wcag-2-2-aa-requires-from-a-learning-platform"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "what-a-multi-tenant-lms-is-and-when-you-need-one",
    title: "What a Multi-Tenant LMS Actually Is, and When You Need One",
    description:
      "Multi-tenancy means one platform serving many walled-off client organizations, each with its own users, branding, admins, and reports. Here is the honest test for whether you need it, the three ways it gets built, and the parts teams forget until they hurt.",
    date: "2026-07-28",
    readTime: "8 min read",
    category: "Platform Strategy",
    coverImage: multiTenantLmsCover,
    relatedServiceSlug: "corporate-training-platform",
    relatedAlternativeSlugs: ["moodle", "docebo"],
    relatedPostSlugs: ["build-vs-buy-an-lms-the-honest-math", "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years", "sso-options-for-learning-platforms"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "what-wcag-2-2-aa-requires-from-a-learning-platform",
    title: "What WCAG 2.2 AA Actually Requires From a Learning Platform",
    description:
      "Accessibility for an LMS is now a legal requirement with deadlines: ADA Title II lands in 2026, and the EU's Accessibility Act is already in force. Here is what WCAG 2.2 AA asks, where learning platforms break, and why it is cheap to build in and costly to bolt on.",
    date: "2026-07-29",
    readTime: "9 min read",
    category: "Accessibility",
    coverImage: wcagAccessibilityCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["student-data-security-checklist-for-edtech-teams", "what-actually-drives-the-price-of-an-e-learning-build", "designing-assessments-that-resist-cheating"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "whats-an-imscc-file",
    title: "What's an IMSCC File?",
    description:
      "An IMSCC file is a course, packaged: pages, assignments, quiz questions, and a manifest that maps the structure. Here is what the Common Cartridge carries, what it deliberately leaves behind, and when you'll run into one.",
    date: "2026-07-22",
    readTime: "5 min read",
    category: "Standards",
    coverImage: whatsImsccCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["canvas", "moodle"],
    relatedPostSlugs: ["exporting-courses-from-canvas-imscc-step-by-step", "scorm-vs-xapi-keeping-your-content-portable", "what-a-smooth-lms-migration-actually-looks-like"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "how-much-does-a-custom-lms-cost-in-2026",
    title: "How Much Does a Custom LMS Cost in 2026?",
    description:
      "Custom LMS pricing moves with the hard parts: distinct learner flows, migration, integrations, and how far reporting has to go. Here is what actually moves the number, what a useful first release includes, and what to ask before you accept a quote.",
    date: "2026-07-19",
    readTime: "6 min read",
    category: "Platform Strategy",
    coverImage: customLmsCostCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["build-vs-buy-an-lms-the-honest-math", "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years", "what-actually-drives-the-price-of-an-e-learning-build"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "build-vs-buy-an-lms-the-honest-math",
    title: "Build vs. Buy an LMS: The Honest Math",
    description:
      "The right comparison is not a monthly licence against a one-time build. It is three years of subscriptions, staff workarounds, integrations, revenue constraints, and ownership.",
    date: "2026-07-17",
    readTime: "7 min read",
    category: "Platform Strategy",
    coverImage: buildVsBuyCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["how-much-does-a-custom-lms-cost-in-2026", "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years", "what-actually-drives-the-price-of-an-e-learning-build"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "hidden-cost-of-revenue-share-course-platforms",
    title: "The Hidden Cost of Revenue-Share Course Platforms",
    description:
      "Revenue share can be a sensible way to launch. Follow a $500 sale through platform and processing fees, then add the operational exceptions before deciding whether the model still fits.",
    date: "2026-07-15",
    readTime: "6 min read",
    category: "Creator Economics",
    coverImage: revenueShareCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["teachable", "thinkific"],
    relatedPostSlugs: ["build-vs-buy-an-lms-the-honest-math", "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years", "what-actually-drives-the-price-of-an-e-learning-build"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years",
    title: "Custom LMS vs. Off-the-Shelf: Total Cost of Ownership Over Three Years",
    description:
      "Hosted software usually costs less in year one. This three-year model counts the licence, setup, staff workarounds, integrations, migration, and the rules that affect revenue.",
    date: "2026-07-12",
    readTime: "7 min read",
    category: "Platform Strategy",
    coverImage: threeYearTcoCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["how-much-does-a-custom-lms-cost-in-2026", "build-vs-buy-an-lms-the-honest-math", "what-actually-drives-the-price-of-an-e-learning-build"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "what-actually-drives-the-price-of-an-e-learning-build",
    title: "What Actually Drives the Price of an E-Learning Build",
    description:
      "Roles, migration, integrations, business rules, and launch quality move an e-learning estimate far more than a polished lesson screen. Here is how to scope the first release honestly.",
    date: "2026-07-10",
    readTime: "6 min read",
    category: "Platform Strategy",
    coverImage: buildCostDriversCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["how-much-does-a-custom-lms-cost-in-2026", "build-vs-buy-an-lms-the-honest-math", "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "how-to-migrate-off-moodle-without-losing-course-data",
    title: "How to Migrate Off Moodle Without Losing Course Data",
    description:
      "You don't lose Moodle data by exporting it wrong. You lose it by exporting before you know which plugins own a business rule. Inventory those first, then move the content.",
    date: "2026-07-18",
    readTime: "6 min read",
    category: "Migration",
    coverImage: migrateOffMoodleCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle"],
    relatedPostSlugs: ["scorm-vs-xapi-keeping-your-content-portable", "what-a-smooth-lms-migration-actually-looks-like"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "exporting-courses-from-canvas-imscc-step-by-step",
    title: "Exporting Your Courses From Canvas (IMSCC), Step by Step",
    description:
      "A Canvas IMSCC export moves your course content well. It does not carry grades, student submissions, or every external-tool setting. Here is the step-by-step and the gaps at each step.",
    date: "2026-07-16",
    readTime: "6 min read",
    category: "Migration",
    coverImage: canvasImsccCover,
    relatedServiceSlug: "school-student-portal-development",
    relatedAlternativeSlugs: ["canvas"],
    relatedPostSlugs: ["what-a-smooth-lms-migration-actually-looks-like", "scorm-vs-xapi-keeping-your-content-portable", "canvas-breach-student-data-security"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "leaving-teachable-a-migration-checklist",
    title: "Leaving Teachable: A Migration Checklist",
    description:
      "The announcement email is the last step, not the first. Before it goes out, a paying customer should log into the new platform and find everything they own. Here is the checklist that gets you there.",
    date: "2026-07-14",
    readTime: "5 min read",
    category: "Migration",
    coverImage: leavingTeachableCover,
    relatedServiceSlug: "course-platform-for-creators",
    relatedAlternativeSlugs: ["teachable"],
    relatedPostSlugs: ["hidden-cost-of-revenue-share-course-platforms", "what-a-smooth-lms-migration-actually-looks-like"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "scorm-vs-xapi-keeping-your-content-portable",
    title: "SCORM vs xAPI: Keeping Your Content Portable",
    description:
      "SCORM makes your content portable between systems. xAPI makes your records portable, because they live in a store you can own. If you only move the ZIP, you've moved the least valuable half.",
    date: "2026-07-13",
    readTime: "6 min read",
    category: "Standards",
    coverImage: scormVsXapiCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["how-to-migrate-off-moodle-without-losing-course-data", "exporting-courses-from-canvas-imscc-step-by-step"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "what-a-smooth-lms-migration-actually-looks-like",
    title: "What a Smooth LMS Migration Actually Looks Like",
    description:
      "A smooth migration is boring on purpose: staged, risk-first, one real audience before everyone. The war stories come from the single-weekend switch that bet nothing was hiding in the data.",
    date: "2026-07-11",
    readTime: "6 min read",
    category: "Migration",
    coverImage: smoothMigrationCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["how-to-migrate-off-moodle-without-losing-course-data", "leaving-teachable-a-migration-checklist"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "lti-1-3-advantage-explained-without-the-spec-speak",
    title: "LTI 1.3 Advantage, Explained Without the Spec-Speak",
    description:
      "LTI 1.3 lets a tool launch securely from an LMS, then talk back through three services: rosters, grades, and content. Understand it by following one grade from a quiz home to the gradebook.",
    date: "2026-07-09",
    readTime: "6 min read",
    category: "LTI",
    coverImage: lti13AdvantageCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders", "sso-options-for-learning-platforms"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "student-data-security-checklist-for-edtech-teams",
    title: "A Student-Data Security Checklist for Edtech Teams",
    description:
      "The damage in education data rarely comes from a clever hack. It comes from the wrong person seeing the wrong record. Start your security work with access design, not firewalls.",
    date: "2026-07-08",
    readTime: "6 min read",
    category: "Security",
    coverImage: studentDataSecurityCover,
    relatedServiceSlug: "school-student-portal-development",
    relatedAlternativeSlugs: ["canvas", "blackboard"],
    relatedPostSlugs: ["canvas-breach-student-data-security", "sso-options-for-learning-platforms"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "sso-options-for-learning-platforms",
    title: "SSO Options for Learning Platforms (and Which to Pick)",
    description:
      "Most SSO decisions obsess over the login and forget provisioning and clean offboarding, the two moments that cause incidents. SAML, OIDC, and SCIM, compared for how people join and leave.",
    date: "2026-07-07",
    readTime: "6 min read",
    category: "Identity",
    coverImage: ssoLearningPlatformsCover,
    relatedServiceSlug: "corporate-training-platform",
    relatedAlternativeSlugs: ["docebo", "talentlms"],
    relatedPostSlugs: ["student-data-security-checklist-for-edtech-teams", "lti-1-3-advantage-explained-without-the-spec-speak"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "designing-assessments-that-resist-cheating",
    title: "Designing Assessments That Resist Cheating",
    description:
      "The most cheating-resistant assessment isn't the one with the most surveillance. It's the one where copying an answer doesn't help. Redesign the task before you reach for a proctoring tool.",
    date: "2026-07-06",
    readTime: "6 min read",
    category: "Assessment Design",
    coverImage: assessmentsCheatingCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["cheating-online-exams-what-actually-works", "student-data-security-checklist-for-edtech-teams"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders",
    title:
      "Migrating From LTI 1.1 to LTI 1.3: A Practical Guide for Tool Builders",
    description:
      "If your integration still runs on LTI 1.1, it's now a migration item on a clock. Here is a practical, step-by-step guide to navigating the new security model and LTI Advantage.",
    date: "2026-06-17",
    readTime: "7 min read",
    category: "LTI",
    coverImage: ltiMigrationBreachCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["lti-1-3-advantage-explained-without-the-spec-speak", "canvas-breach-student-data-security", "cheating-online-exams-what-actually-works"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "canvas-breach-student-data-security",
    title:
      "The Canvas Breach Should Change How Every Education Company Thinks About Student Data",
    description:
      "The Canvas breach wasn't a sophisticated attack. It was a basic mistake that scaled. Here's the real lesson for anyone building or running a learning platform.",
    date: "2026-06-10",
    readTime: "6 min read",
    category: "Security",
    coverImage: canvasBreachCover,
    relatedServiceSlug: "school-student-portal-development",
    relatedAlternativeSlugs: ["canvas", "blackboard"],
    relatedPostSlugs: ["student-data-security-checklist-for-edtech-teams", "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders", "cheating-online-exams-what-actually-works"],
    authorSlug: "choaib-mouhrach",
  },
  {
    slug: "cheating-online-exams-what-actually-works",
    title:
      "You Can't Stop Students From Cheating on Online Exams. Here's What Actually Works.",
    description:
      "Surveillance tools feel like control until they get bypassed. The platforms that get assessment right spend their budget on exam design, not monitoring.",
    date: "2026-06-01",
    readTime: "7 min read",
    category: "Assessment Design",
    coverImage: cheatingExamsCover,
    relatedServiceSlug: "custom-lms-development",
    relatedAlternativeSlugs: ["moodle", "canvas"],
    relatedPostSlugs: ["designing-assessments-that-resist-cheating", "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders", "canvas-breach-student-data-security"],
    authorSlug: "choaib-mouhrach",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

type LocalizedPostFields = Pick<Post, "title" | "description" | "readTime" | "category">;

const localizedPostFields: Partial<Record<Exclude<Locale, "en">, Record<string, LocalizedPostFields>>> = {
  de: {
    "moodle-5-0-release-notes-and-upgrade-guide": {
      title: "Moodle 5.0 Release Notes und Upgrade-Leitfaden",
      description: "Moodle 5.0 erschien im April 2025 und hat bereits End of Life erreicht, aber seine Anforderungsänderungen wirken fort: PHP 8.2, erhöhte Datenbankuntergrenzen, Bootstrap 5 und die dauerhafte Entfernung von Atto, Oracle, Chat, Survey und MNet.",
      readTime: "10 Min. Lesezeit",
      category: "Moodle",
    },
    "moodle-router-not-correctly-configured": {
      title: "Moodle 5.2 Router nicht korrekt konfiguriert",
      description: "So beheben Sie Moodle-5.2-Routerfehler mit public-Verzeichnis, r.php, Apache PHP-FPM, FallbackResource, Nginx und Shared Hosting.",
      readTime: "7 Min. Lesezeit",
      category: "Moodle",
    },
    "moodle-5-2-windows-install": {
      title: "Moodle 5.2 unter Windows installieren",
      description: "Praktische Anleitung für Moodle 5.2 unter Windows mit IIS, FastCGI, PHP 8.3, Datenbank, public-Verzeichnis, Routing, Cron und Fehlern.",
      readTime: "8 Min. Lesezeit",
      category: "Moodle",
    },
    "moodle-vendor-directory-not-found": {
      title: "Moodle Composer vendor directory not found",
      description: "Was der Moodle-Fehler Composer vendor directory not found bedeutet, wie Composer aus der Moodle-Wurzel läuft und was bei Shared Hosting gilt.",
      readTime: "6 Min. Lesezeit",
      category: "Moodle",
    },
    "moodle-file-picker-stuck-loading": {
      title: "Moodle-Dateiauswahl lädt nach Upgrade auf 5.2 endlos",
      description: "So finden Sie die Ursache, wenn die Moodle-Dateiauswahl nach 5.2 lädt: Caches, JavaScript, Theme, Repository-Plugins, Router und Rechte.",
      readTime: "7 Min. Lesezeit",
      category: "Moodle",
    },
    "moodle-5-2-shared-hosting": {
      title: "Kann Moodle 5.2 auf Shared Hosting laufen?",
      description: "Wann Moodle 5.2 auf Shared Hosting funktioniert: cPanel, Hostinger, GoDaddy, public-Verzeichnis, Router, Composer, Cron und VPS-Vergleich.",
      readTime: "7 Min. Lesezeit",
      category: "Moodle",
    },
    "lms-reporting-and-analytics-what-you-actually-need": {
      title: "LMS-Reporting und Analytics: Was Sie wirklich brauchen",
      description: "Die meisten LMS-Dashboards zählen Aktivitäten, ohne eine Handlung auszulösen. So entwerfen Sie nützliches operatives, lernbezogenes, kaufmännisches und ergebnisorientiertes Reporting mit ehrlichen, prüfbaren Kennzahlen.",
      readTime: "8 Min. Lesezeit",
      category: "Analytics",
    },
    "what-gdpr-requires-from-an-elearning-platform": {
      title: "Was die DSGVO tatsächlich von einer E-Learning-Plattform verlangt",
      description: "Bei der DSGVO für ein LMS geht es nicht um ein Cookie-Banner. Sie bestimmt, welche Lerndaten Sie erheben, wer sie kontrolliert, wie Betroffenenrechte funktionieren, welche Anbieter sie erhalten und wann Analytics oder KI eine DSFA erfordern.",
      readTime: "8 Min. Lesezeit",
      category: "Compliance",
    },
    "ai-in-an-lms-what-actually-helps": {
      title: "KI in einem LMS: Was tatsächlich hilft",
      description: "Jede Lernplattform wirbt inzwischen mit KI. Das spart wirklich Zeit, das funktioniert vor allem in der Demo und diese Fragen sollten Sie vor dem Kauf oder der Entwicklung zu Daten, Bewertung, Fairness und Kosten stellen.",
      readTime: "8 Min. Lesezeit",
      category: "KI",
    },
    "what-ferpa-actually-requires-of-an-edtech-platform": {
      title: "Was FERPA von einer Edtech-Plattform tatsächlich verlangt",
      description: "Ein FERPA-Zertifikat gibt es nicht. Die Pflichten erreichen Anbieter über die Verträge der Schulen. So dürfen sie Schülerdaten verarbeiten, diese Kontrollen müssen sie bauen und diese weiteren Datenschutzgesetze gelten.",
      readTime: "8 Min. Lesezeit",
      category: "Compliance",
    },
    "what-a-multi-tenant-lms-is-and-when-you-need-one": {
      title: "Was ein Multi-Tenant-LMS tatsächlich ist – und wann Sie eines brauchen",
      description: "Multi-Tenancy bedeutet eine Plattform für mehrere voneinander abgeschottete Kundenorganisationen mit eigenen Nutzern, Markenauftritten, Admins und Berichten. So erkennen Sie den Bedarf und wählen das passende Modell.",
      readTime: "8 Min. Lesezeit",
      category: "Plattformstrategie",
    },
    "what-wcag-2-2-aa-requires-from-a-learning-platform": {
      title: "Was WCAG 2.2 AA tatsächlich von einer Lernplattform verlangt",
      description: "Barrierefreiheit ist für LMS inzwischen eine rechtliche Pflicht mit konkreten Terminen. Das verlangt WCAG 2.2 AA, an diesen Stellen scheitern Lernplattformen und deshalb ist frühes Einbauen günstiger als Nachrüsten.",
      readTime: "9 Min. Lesezeit",
      category: "Barrierefreiheit",
    },
    "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": { title: "Von LTI 1.1 zu LTI 1.3 migrieren: ein Praxisleitfaden für Tool-Teams", description: "LTI 1.3 ist kein Versionsupdate, sondern ein neues Sicherheitsmodell. Dieser Leitfaden deckt OIDC, JWT-Prüfung, LTI Advantage, Registrierung, Tests und die Risiken beim Umstieg ab.", readTime: "11 Min. Lesezeit", category: "LTI" },
    "build-vs-buy-an-lms-the-honest-math": { title: "LMS kaufen oder bauen: die ehrliche Rechnung", description: "Entscheidend ist nicht Lizenz gegen Projektpreis, sondern der dreijährige Betrieb. Rechnen Sie Workarounds, Umsatzgrenzen und Personalzeit ein, bevor Sie entscheiden, ob ein eigener Build sich auszahlt.", readTime: "7 Min. Lesezeit", category: "Plattformstrategie" },
    "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": { title: "Individuelles oder Standard-LMS: Gesamtbetriebskosten über drei Jahre", description: "Ein individueller Build wird erst dann günstiger, wenn er manuelle Arbeit ersetzt, blockierten Umsatz freisetzt oder riskante Abhängigkeiten beendet. Rechnen Sie drei Jahre statt nur Lizenz gegen Projektpreis.", readTime: "7 Min. Lesezeit", category: "Plattformstrategie" },
    "hidden-cost-of-revenue-share-course-platforms": { title: "Die versteckten Kosten von Kursplattformen mit Umsatzbeteiligung", description: "Eine Umsatzbeteiligung kann zum Start passen. Folgen Sie einem Verkauf durch Gebühren, Tarife und Sonderfälle, bevor Sie entscheiden, ob die Plattform Ihnen noch Geschwindigkeit bringt oder nur Umsatz abschöpft.", readTime: "6 Min. Lesezeit", category: "Creator-Ökonomie" },
    "canvas-breach-student-data-security": { title: "Die Canvas-Datenpanne und die Sicherheit von Schülerdaten", description: "Datenpannen im Bildungsbereich entstehen oft durch einfache Fehler, die groß werden: zu breite Zugriffe, vergessene Rechte und unnötig aufbewahrte Daten. Sicherheit ist eine Architekturentscheidung.", readTime: "6 Min. Lesezeit", category: "Sicherheit" },
    "sso-options-for-learning-platforms": { title: "SSO-Optionen für Lernplattformen", description: "Beim SSO zählt nicht nur, wer sich anmelden kann. Entscheidend sind korrekte Rollen beim Start und ein automatischer Zugriffsentzug beim Austritt. SAML, OIDC und SCIM im praktischen Vergleich.", readTime: "5 Min. Lesezeit", category: "Identität" },
    "cheating-online-exams-what-actually-works": { title: "Schummeln bei Online-Prüfungen: Was tatsächlich funktioniert", description: "Überwachung kann Schummeln nicht vollständig verhindern und macht ehrliche Lernende zu Verdächtigen. Fragenpools, kluge Zeitlimits und Anwendungsfragen machen die Abkürzung unattraktiv.", readTime: "8 Min. Lesezeit", category: "Prüfungsdesign" },
    "student-data-security-checklist-for-edtech-teams": { title: "Checkliste für Schülerdatensicherheit in Edtech-Teams", description: "Schäden an Bildungsdaten entstehen selten durch einen raffinierten Angriff. Sie entstehen, wenn die falsche Person den falschen Datensatz sieht. Beginnen Sie beim Zugriffsdesign, nicht bei Firewalls.", readTime: "6 Min. Lesezeit", category: "Sicherheit" },
    "lti-1-3-advantage-explained-without-the-spec-speak": { title: "LTI 1.3 Advantage ohne Spezifikationsjargon erklärt", description: "LTI 1.3 startet ein Tool sicher aus einem LMS und verbindet es mit Listen, Noten und Inhalten. Folgen Sie einer Note zum Notenbuch, um die einzelnen Dienste zu verstehen.", readTime: "6 Min. Lesezeit", category: "LTI" },
    "designing-assessments-that-resist-cheating": {
      title: "Prüfungen gestalten, die Täuschung widerstehen",
      description: "Die wirksamste Prüfung ist nicht die mit der meisten Überwachung. Sie macht Kopieren nutzlos, weil die Aufgabe eigene Arbeit verlangt. Gestalten Sie die Aufgabe neu, bevor Sie überwachen.",
      readTime: "6 Min. Lesezeit",
      category: "Prüfungsdesign",
    },
    "what-actually-drives-the-price-of-an-e-learning-build": {
      title: "Was den Preis eines E-Learning-Projekts wirklich beeinflusst",
      description: "Rollen, Migration, Integrationen, Geschäftsregeln und Startqualität verändern eine Schätzung weit stärker als ein polierter Lektionsbildschirm. So lässt sich eine erste Version ehrlich eingrenzen.",
      readTime: "6 Min. Lesezeit",
      category: "Plattformstrategie",
    },
    "how-to-migrate-off-moodle-without-losing-course-data": {
      title: "Moodle verlassen, ohne Kursdaten zu verlieren",
      description:
        "Moodle-Daten gehen nicht durch einen falschen Export verloren, sondern weil Plugins Geschäftsregeln tragen. Inventarisieren Sie diese Regeln zuerst und verschieben Sie dann die Inhalte.",
      readTime: "6 Min. Lesezeit",
      category: "Migration",
    },
    "leaving-teachable-a-migration-checklist": {
      title: "Teachable verlassen: Checkliste für die Migration",
      description:
        "Die Ankündigungs-E-Mail ist der letzte Schritt. Vorher muss sich ein zahlender Kunde auf der neuen Plattform anmelden und alles finden können, was ihm gehört. Diese Checkliste bringt Sie dorthin.",
      readTime: "5 Min. Lesezeit",
      category: "Migration",
    },
    "what-a-smooth-lms-migration-actually-looks-like": {
      title: "Wie eine gelungene LMS-Migration wirklich aussieht",
      description:
        "Eine gelungene Migration ist absichtlich unspektakulär: gestaffelt, risikoorientiert und mit einer echten Zielgruppe getestet, bevor alle wechseln. Krisen entstehen aus dem Alles-oder-nichts-Wechsel an einem Wochenende.",
      readTime: "6 Min. Lesezeit",
      category: "Migration",
    },
    "scorm-vs-xapi-keeping-your-content-portable": {
      title: "SCORM versus xAPI: Inhalte portabel halten",
      description:
        "SCORM macht Inhalte zwischen Systemen portabel. xAPI macht Aufzeichnungen portabel, weil sie in einem Speicher liegen können, den Sie besitzen. Wenn Sie nur das ZIP verschieben, bewegen Sie die weniger wertvolle Hälfte.",
      readTime: "6 Min. Lesezeit",
      category: "Standards",
    },
    "exporting-courses-from-canvas-imscc-step-by-step": {
      title: "Canvas-Kurse als IMSCC exportieren: Schritt für Schritt",
      description:
        "Ein Canvas-IMSCC-Export verschiebt Kursinhalte gut. Er enthält jedoch weder Noten noch Abgaben von Lernenden oder jede Einstellung externer Tools. Hier sind die Schritte und die Lücken bei jedem davon.",
      readTime: "6 Min. Lesezeit",
      category: "Migration",
    },
    "how-much-does-a-custom-lms-cost-in-2026": {
      title: "Was kostet ein maßgeschneidertes LMS im Jahr 2026?",
      description:
        "Der Preis eines maßgeschneiderten LMS hängt an den schwierigen Teilen: unterschiedlichen Lernpfaden, Migration, Integrationen und der Tiefe des Reportings. Hier erfahren Sie, was die Kosten tatsächlich beeinflusst und was eine brauchbare erste Version umfasst.",
      readTime: "6 Min. Lesezeit",
      category: "Plattformstrategie",
    },
    "whats-an-imscc-file": {
      title: "Was ist eine IMSCC-Datei?",
      description:
        "Eine IMSCC-Datei ist ein verpackter Kurs: Seiten, Aufgaben, Quizfragen und ein Manifest, das die Struktur abbildet. Hier erfahren Sie, was ein Common Cartridge mitnimmt, was es bewusst zurücklässt und wann Sie ihm begegnen.",
      readTime: "5 Min. Lesezeit",
      category: "Standards",
    },
  },
  fr: {
    "moodle-5-0-release-notes-and-upgrade-guide": {
      title: "Notes de version Moodle 5.0 et guide de mise à niveau",
      description: "Moodle 5.0 est sorti en avril 2025 et est déjà en fin de vie, mais ses changements d'exigences se propagent : PHP 8.2, seuils de bases de données rehaussés, Bootstrap 5, et suppression définitive d'Atto, Oracle, Chat, Survey et MNet.",
      readTime: "10 min de lecture",
      category: "Moodle",
    },
    "moodle-router-not-correctly-configured": {
      title: "Moodle 5.2 : le routeur n’est pas correctement configuré",
      description: "Corrigez les erreurs de routeur Moodle 5.2 avec public, r.php, Apache PHP-FPM, FallbackResource, Nginx et les contraintes d’hébergement.",
      readTime: "7 min de lecture",
      category: "Moodle",
    },
    "moodle-5-2-windows-install": {
      title: "Installer Moodle 5.2 sur Windows",
      description: "Guide Moodle 5.2 sur Windows avec IIS, FastCGI, PHP 8.3, base de données, dossier public, routage, cron et erreurs fréquentes.",
      readTime: "8 min de lecture",
      category: "Moodle",
    },
    "moodle-vendor-directory-not-found": {
      title: "Moodle : erreur Composer vendor directory not found",
      description: "Comprendre l’erreur Composer vendor directory not found dans Moodle, lancer Composer depuis la racine et gérer le cas de l’hébergement mutualisé.",
      readTime: "6 min de lecture",
      category: "Moodle",
    },
    "moodle-file-picker-stuck-loading": {
      title: "Moodle 5.2 : le sélecteur de fichiers reste bloqué",
      description: "Diagnostiquez un sélecteur de fichiers Moodle bloqué après 5.2 : caches, JavaScript, thème, plugins de dépôt, routeur, limites et permissions.",
      readTime: "7 min de lecture",
      category: "Moodle",
    },
    "moodle-5-2-shared-hosting": {
      title: "Moodle 5.2 peut-il fonctionner sur hébergement mutualisé ?",
      description: "Ce qu’il faut pour faire tourner Moodle 5.2 sur cPanel, Hostinger ou GoDaddy : public, routeur, Composer, cron, moodledata et limites.",
      readTime: "7 min de lecture",
      category: "Moodle",
    },
    "lms-reporting-and-analytics-what-you-actually-need": {
      title: "Reporting et analytics LMS : ce dont vous avez réellement besoin",
      description: "La plupart des dashboards LMS comptent l’activité sans aider personne à agir. Voici comment concevoir des rapports opérationnels, pédagogiques, commerciaux et orientés résultats avec des indicateurs fiables.",
      readTime: "8 min de lecture",
      category: "Analytics",
    },
    "what-gdpr-requires-from-an-elearning-platform": {
      title: "Ce que le RGPD exige réellement d’une plateforme e-learning",
      description: "Le RGPD appliqué à un LMS ne se résume pas à une bannière de cookies. Il détermine les données apprenantes collectées, leur responsable, la gestion des droits, les prestataires qui les reçoivent et les cas où l’analytics ou l’IA impose une AIPD.",
      readTime: "8 min de lecture",
      category: "Conformité",
    },
    "ai-in-an-lms-what-actually-helps": {
      title: "L’IA dans un LMS : ce qui est réellement utile",
      description: "Toutes les plateformes d’apprentissage revendiquent désormais de l’IA. Voici ce qui fait réellement gagner du temps, ce qui relève surtout de la démonstration et les questions à poser sur les données, la notation, les biais et les coûts.",
      readTime: "8 min de lecture",
      category: "IA",
    },
    "what-ferpa-actually-requires-of-an-edtech-platform": {
      title: "Ce que FERPA exige réellement d’une plateforme edtech",
      description: "Il n’existe aucun certificat FERPA. Les obligations atteignent les fournisseurs par les contrats signés avec les établissements. Voici comment ils peuvent traiter les données étudiantes et quels contrôles ils doivent prévoir.",
      readTime: "8 min de lecture",
      category: "Conformité",
    },
    "what-a-multi-tenant-lms-is-and-when-you-need-one": {
      title: "Ce qu’est réellement un LMS multi-tenant, et quand vous en avez besoin",
      description: "Le multi-tenant permet à une plateforme de servir plusieurs organisations clientes isolées, chacune avec ses utilisateurs, sa marque, ses administrateurs et ses rapports. Voici comment savoir si vous en avez besoin.",
      readTime: "8 min de lecture",
      category: "Stratégie de plateforme",
    },
    "what-wcag-2-2-aa-requires-from-a-learning-platform": {
      title: "Ce que WCAG 2.2 AA exige réellement d’une plateforme d’apprentissage",
      description: "L’accessibilité d’un LMS est désormais une obligation légale assortie d’échéances. Voici ce que demande WCAG 2.2 AA, où les plateformes échouent et pourquoi il coûte moins cher de l’intégrer dès le départ.",
      readTime: "9 min de lecture",
      category: "Accessibilité",
    },
    "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": { title: "Migrer de LTI 1.1 à LTI 1.3 : guide pratique pour les équipes outil", description: "LTI 1.3 n’est pas une simple mise à jour : son modèle de sécurité change. Ce guide couvre OIDC, validation JWT, LTI Advantage, enregistrement, tests et risques de migration.", readTime: "11 min de lecture", category: "LTI" },
    "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": { title: "LMS sur mesure ou standard : coût total de possession sur trois ans", description: "Un développement sur mesure ne devient moins cher que s’il remplace du travail manuel, débloque du revenu ou réduit une dépendance risquée. Comparez trois ans d’exploitation, pas une licence à un projet.", readTime: "7 min de lecture", category: "Stratégie de plateforme" },
    "cheating-online-exams-what-actually-works": { title: "Triche aux examens en ligne : ce qui fonctionne vraiment", description: "La surveillance n’empêche pas toute triche et transforme les étudiants honnêtes en suspects. Banques de questions, délais justes et scénarios appliqués rendent le raccourci inutile.", readTime: "8 min de lecture", category: "Conception d’évaluation" },
    "canvas-breach-student-data-security": { title: "La fuite Canvas et la sécurité des données étudiantes", description: "Les fuites de données éducatives viennent souvent d’erreurs ordinaires qui prennent de l’ampleur : accès trop larges, permissions oubliées et données conservées sans nécessité. La sécurité est une décision d’architecture.", readTime: "6 min de lecture", category: "Sécurité" },
    "sso-options-for-learning-platforms": { title: "Options SSO pour les plateformes d’apprentissage", description: "Le SSO ne se limite pas à la connexion. Les bons rôles au départ et la suppression automatique des accès au départ sont décisifs. SAML, OIDC et SCIM comparés en pratique.", readTime: "5 min de lecture", category: "Identité" },
    "student-data-security-checklist-for-edtech-teams": { title: "Liste de sécurité des données étudiantes pour les équipes edtech", description: "Les dommages sur les données scolaires viennent rarement d’un piratage sophistiqué. Ils viennent de la mauvaise personne qui voit le mauvais dossier. Commencez par la conception des accès, pas par les pare-feux.", readTime: "6 min de lecture", category: "Sécurité" },
    "lti-1-3-advantage-explained-without-the-spec-speak": { title: "LTI 1.3 Advantage expliqué sans le jargon de la spécification", description: "LTI 1.3 lance un outil de façon sûre depuis un LMS puis le relie aux listes, aux notes et au contenu. Suivez une note jusqu’au carnet pour comprendre ce que chaque service fait.", readTime: "6 min de lecture", category: "LTI" },
    "designing-assessments-that-resist-cheating": {
      title: "Concevoir des évaluations qui résistent à la triche",
      description: "L’évaluation la plus efficace n’est pas celle qui surveille le plus. Elle rend le copier-coller inutile en demandant un travail propre à l’étudiant. Redessinez la tâche avant de surveiller.",
      readTime: "6 min de lecture",
      category: "Conception d’évaluation",
    },
    "what-actually-drives-the-price-of-an-e-learning-build": {
      title: "Ce qui fait réellement varier le prix d’un projet e-learning",
      description: "Les rôles, la migration, les intégrations, les règles métier et la qualité de lancement font bien plus varier une estimation qu’un écran de leçon soigné. Voici comment cadrer une première version honnêtement.",
      readTime: "6 min de lecture",
      category: "Stratégie de plateforme",
    },
    "how-to-migrate-off-moodle-without-losing-course-data": {
      title: "Quitter Moodle sans perdre vos données de cours",
      description: "Les données Moodle ne se perdent pas à cause d’un mauvais export, mais parce que des plugins portent des règles métier. Inventoriez-les avant de déplacer le contenu.",
      readTime: "6 min de lecture",
      category: "Migration",
    },
    "build-vs-buy-an-lms-the-honest-math": {
      title: "Construire ou acheter un LMS : le calcul honnête",
      description:
        "La bonne comparaison n’oppose pas une licence mensuelle à un développement unique. Elle compte trois ans d’abonnements, de contournements, d’intégrations, de contraintes de revenus et de propriété.",
      readTime: "7 min de lecture",
      category: "Stratégie de plateforme",
    },
    "how-much-does-a-custom-lms-cost-in-2026": {
      title: "Combien coûte un LMS sur mesure en 2026 ?",
      description:
        "Le prix d’un LMS sur mesure dépend des éléments difficiles : parcours d’apprenants distincts, migration, intégrations et profondeur du reporting. Voici ce qui fait réellement varier le montant et ce qu’une première version utile comprend.",
      readTime: "6 min de lecture",
      category: "Stratégie de plateforme",
    },
    "hidden-cost-of-revenue-share-course-platforms": {
      title: "Le coût caché des plateformes de cours qui prélèvent sur vos revenus",
      description:
        "Un partage de revenus peut être pertinent au lancement. Suivez une vente de 500 $ entre frais de plateforme et paiement, puis ajoutez les exceptions opérationnelles avant de décider si le modèle vous convient encore.",
      readTime: "6 min de lecture",
      category: "Économie des créateurs",
    },
    "leaving-teachable-a-migration-checklist": {
      title: "Quitter Teachable : la liste de contrôle pour votre migration",
      description:
        "L’e-mail d’annonce est la dernière étape. Avant de l’envoyer, un client payant doit pouvoir se connecter à la nouvelle plateforme et retrouver tout ce qu’il possède. Voici la liste qui permet d’y arriver.",
      readTime: "5 min de lecture",
      category: "Migration",
    },
    "what-a-smooth-lms-migration-actually-looks-like": {
      title: "À quoi ressemble vraiment une migration LMS réussie",
      description:
        "Une migration réussie est délibérément sans spectacle : progressive, guidée par les risques et testée avec un vrai public avant le déploiement général. Les crises viennent du changement tout ou rien d’un week-end.",
      readTime: "6 min de lecture",
      category: "Migration",
    },
    "scorm-vs-xapi-keeping-your-content-portable": {
      title: "SCORM ou xAPI : garder votre contenu portable",
      description:
        "SCORM rend votre contenu portable entre les systèmes. xAPI rend vos traces portables, car elles peuvent vivre dans un entrepôt que vous possédez. Déplacer le ZIP ne déplace que la moitié la moins précieuse.",
      readTime: "6 min de lecture",
      category: "Standards",
    },
    "exporting-courses-from-canvas-imscc-step-by-step": {
      title: "Exporter vos cours Canvas (IMSCC), étape par étape",
      description:
        "Un export IMSCC de Canvas déplace bien le contenu de votre cours. Il ne transporte ni les notes, ni les remises des étudiants, ni tous les réglages d’outils externes. Voici les étapes et les lacunes à chaque étape.",
      readTime: "6 min de lecture",
      category: "Migration",
    },
    "whats-an-imscc-file": {
      title: "Qu’est-ce qu’un fichier IMSCC ?",
      description:
        "Un fichier IMSCC est un cours empaqueté : pages, devoirs, questions de quiz et manifeste qui en décrit la structure. Voici ce qu’un Common Cartridge transporte, ce qu’il laisse volontairement derrière lui et quand vous en rencontrerez un.",
      readTime: "5 min de lecture",
      category: "Standards",
    },
  },
  es: {
    "moodle-5-0-release-notes-and-upgrade-guide": {
      title: "Notas de versión de Moodle 5.0 y guía de actualización",
      description: "Moodle 5.0 salió en abril de 2025 y ya está en fin de vida, pero sus cambios de requisitos se propagan: PHP 8.2, suelos de base de datos más altos, Bootstrap 5 y la eliminación permanente de Atto, Oracle, Chat, Survey y MNet.",
      readTime: "10 min de lectura",
      category: "Moodle",
    },
    "moodle-router-not-correctly-configured": {
      title: "Moodle 5.2: el router no está configurado correctamente",
      description: "Arregla errores de router en Moodle 5.2 con public, r.php, Apache PHP-FPM, FallbackResource, Nginx y límites del hosting compartido.",
      readTime: "7 min de lectura",
      category: "Moodle",
    },
    "moodle-5-2-windows-install": {
      title: "Cómo instalar Moodle 5.2 en Windows",
      description: "Guía práctica para instalar Moodle 5.2 en Windows con IIS, FastCGI, PHP 8.3, base de datos, public, routing, cron y errores comunes.",
      readTime: "8 min de lectura",
      category: "Moodle",
    },
    "moodle-vendor-directory-not-found": {
      title: "Moodle: Composer vendor directory not found",
      description: "Qué significa Composer vendor directory not found en Moodle, cómo ejecutar Composer desde la raíz y qué hacer en hosting compartido.",
      readTime: "6 min de lectura",
      category: "Moodle",
    },
    "moodle-file-picker-stuck-loading": {
      title: "El selector de archivos de Moodle se queda cargando tras actualizar a 5.2",
      description: "Diagnostica el selector de archivos de Moodle tras 5.2: cachés, JavaScript, tema, repositorios, router, límites y permisos.",
      readTime: "7 min de lectura",
      category: "Moodle",
    },
    "moodle-5-2-shared-hosting": {
      title: "¿Puede Moodle 5.2 funcionar en hosting compartido?",
      description: "Cuándo Moodle 5.2 funciona en cPanel, Hostinger o GoDaddy: public, router, Composer, cron, moodledata y cuándo pasar a VPS.",
      readTime: "7 min de lectura",
      category: "Moodle",
    },
    "lms-reporting-and-analytics-what-you-actually-need": {
      title: "Informes y analítica de un LMS: lo que realmente necesitas",
      description: "La mayoría de los paneles LMS cuentan actividad sin ayudar a actuar. Así se diseñan informes operativos, educativos, comerciales y de resultados con métricas honestas y datos fiables.",
      readTime: "8 min de lectura",
      category: "Analítica",
    },
    "what-gdpr-requires-from-an-elearning-platform": {
      title: "Lo que el RGPD exige realmente a una plataforma e-learning",
      description: "El RGPD para un LMS no es un banner de cookies. Define qué datos del alumnado recoges, quién los controla, cómo se atienden sus derechos, qué proveedores los reciben y cuándo la analítica o la IA exige una EIPD.",
      readTime: "8 min de lectura",
      category: "Cumplimiento",
    },
    "ai-in-an-lms-what-actually-helps": {
      title: "IA en un LMS: lo que realmente ayuda",
      description: "Todas las plataformas de aprendizaje afirman tener IA. Esto es lo que realmente ahorra tiempo, lo que sirve sobre todo para la demo y las preguntas que debes hacer sobre datos, evaluación, sesgos y costes.",
      readTime: "8 min de lectura",
      category: "IA",
    },
    "what-ferpa-actually-requires-of-an-edtech-platform": {
      title: "Lo que FERPA exige realmente a una plataforma edtech",
      description: "No existe un certificado FERPA. Las obligaciones llegan a los proveedores mediante los contratos de los centros. Así pueden tratar datos de estudiantes y estos son los controles que deben construir.",
      readTime: "8 min de lectura",
      category: "Cumplimiento",
    },
    "what-a-multi-tenant-lms-is-and-when-you-need-one": {
      title: "Qué es realmente un LMS multi-tenant y cuándo lo necesitas",
      description: "El multi-tenant permite que una plataforma sirva a varias organizaciones cliente aisladas, cada una con sus usuarios, marca, administradores e informes. Estas son las señales de que lo necesitas.",
      readTime: "8 min de lectura",
      category: "Estrategia de plataforma",
    },
    "what-wcag-2-2-aa-requires-from-a-learning-platform": {
      title: "Lo que WCAG 2.2 AA exige realmente a una plataforma de aprendizaje",
      description: "La accesibilidad de un LMS es ya una obligación legal con plazos concretos. Esto pide WCAG 2.2 AA, aquí fallan las plataformas y por eso integrarla al principio cuesta menos que añadirla después.",
      readTime: "9 min de lectura",
      category: "Accesibilidad",
    },
    "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": { title: "Migrar de LTI 1.1 a LTI 1.3: guía práctica para equipos de herramientas", description: "LTI 1.3 no es una actualización menor, sino un modelo de seguridad nuevo. Esta guía cubre OIDC, validación JWT, LTI Advantage, registro, pruebas y riesgos de la migración.", readTime: "11 min de lectura", category: "LTI" },
    "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": { title: "LMS a medida o estándar: coste total de propiedad a tres años", description: "Un desarrollo a medida solo es más barato cuando reemplaza trabajo manual, desbloquea ingresos o reduce una dependencia arriesgada. Compara tres años de operación, no una licencia contra un proyecto.", readTime: "7 min de lectura", category: "Estrategia de plataforma" },
    "build-vs-buy-an-lms-the-honest-math": { title: "Comprar o construir un LMS: las cuentas honestas", description: "La comparación no es licencia contra proyecto, sino tres años de operación. Cuenta apaños, límites de ingresos y tiempo de equipo antes de decidir si un desarrollo propio se amortiza.", readTime: "7 min de lectura", category: "Estrategia de plataforma" },
    "cheating-online-exams-what-actually-works": { title: "Trampa en exámenes online: qué funciona de verdad", description: "La vigilancia no elimina la trampa y convierte a estudiantes honestos en sospechosos. Bancos de preguntas, límites de tiempo sensatos y escenarios aplicados hacen que buscar atajos deje de servir.", readTime: "8 min de lectura", category: "Diseño de evaluación" },
    "canvas-breach-student-data-security": { title: "La filtración de Canvas y la seguridad de datos de estudiantes", description: "Las filtraciones educativas suelen venir de errores básicos que escalan: accesos demasiado amplios, permisos olvidados y datos retenidos sin necesidad. La seguridad es una decisión de arquitectura.", readTime: "6 min de lectura", category: "Seguridad" },
    "sso-options-for-learning-platforms": { title: "Opciones de SSO para plataformas de aprendizaje", description: "El SSO no trata solo de iniciar sesión. Los roles correctos al entrar y la retirada automática de acceso al salir importan más. SAML, OIDC y SCIM comparados en la práctica.", readTime: "5 min de lectura", category: "Identidad" },
    "student-data-security-checklist-for-edtech-teams": { title: "Lista de seguridad de datos de estudiantes para equipos edtech", description: "El daño en datos educativos rara vez viene de un ataque sofisticado. Viene de que la persona equivocada vea el registro equivocado. Empieza por el diseño de acceso, no por los cortafuegos.", readTime: "6 min de lectura", category: "Seguridad" },
    "lti-1-3-advantage-explained-without-the-spec-speak": { title: "LTI 1.3 Advantage explicado sin el lenguaje de la especificación", description: "LTI 1.3 inicia una herramienta de forma segura desde un LMS y la conecta con listas, calificaciones y contenido. Sigue una nota hasta el libro para entender el trabajo de cada servicio.", readTime: "6 min de lectura", category: "LTI" },
    "designing-assessments-that-resist-cheating": {
      title: "Cómo diseñar evaluaciones que resisten la trampa",
      description: "La evaluación más resistente no es la que más vigila. Hace inútil copiar porque la tarea exige trabajo propio. Rediseña la tarea antes de recurrir a la vigilancia.",
      readTime: "6 min de lectura",
      category: "Diseño de evaluación",
    },
    "what-actually-drives-the-price-of-an-e-learning-build": {
      title: "Qué mueve realmente el precio de un proyecto de e-learning",
      description: "Roles, migración, integraciones, reglas de negocio y calidad de lanzamiento influyen mucho más en una estimación que una pantalla de lección pulida. Así se define honestamente una primera versión.",
      readTime: "6 min de lectura",
      category: "Estrategia de plataforma",
    },
    "how-to-migrate-off-moodle-without-losing-course-data": {
      title: "Cómo salir de Moodle sin perder los datos del curso",
      description: "No pierdes datos de Moodle por exportarlos mal, sino porque los plugins sostienen reglas de negocio. Haz inventario de esas reglas antes de mover el contenido.",
      readTime: "6 min de lectura",
      category: "Migración",
    },
    "how-much-does-a-custom-lms-cost-in-2026": {
      title: "¿Cuánto cuesta un LMS a medida en 2026?",
      description:
        "El precio de un LMS a medida cambia con las partes difíciles: recorridos de alumnos distintos, migración, integraciones y la profundidad de los informes. Aquí tienes qué mueve el número y qué incluye una primera versión útil.",
      readTime: "6 min de lectura",
      category: "Estrategia de plataforma",
    },
    "hidden-cost-of-revenue-share-course-platforms": {
      title: "El coste oculto de las plataformas de cursos que cobran parte de tus ingresos",
      description:
        "Compartir ingresos puede tener sentido al lanzar. Sigue una venta de 500 $ entre comisiones de plataforma y pago, y añade las excepciones operativas antes de decidir si el modelo todavía encaja.",
      readTime: "6 min de lectura",
      category: "Economía de creadores",
    },
    "leaving-teachable-a-migration-checklist": {
      title: "Dejar Teachable: una lista de comprobación para migrar",
      description:
        "El correo de anuncio es el último paso. Antes de enviarlo, un cliente que pagó debe poder entrar en la nueva plataforma y encontrar todo lo que posee. Esta es la lista para lograrlo.",
      readTime: "5 min de lectura",
      category: "Migración",
    },
    "what-a-smooth-lms-migration-actually-looks-like": {
      title: "Cómo es realmente una migración de LMS sin sobresaltos",
      description:
        "Una migración sin sobresaltos es aburrida a propósito: por etapas, guiada por riesgos y probada con un público real antes de mover a todos. Las historias de crisis nacen del cambio de un solo fin de semana.",
      readTime: "6 min de lectura",
      category: "Migración",
    },
    "scorm-vs-xapi-keeping-your-content-portable": {
      title: "SCORM frente a xAPI: cómo mantener tu contenido portable",
      description:
        "SCORM hace portable el contenido entre sistemas. xAPI hace portables los registros porque pueden vivir en un almacén propio. Si solo mueves el ZIP, has movido la mitad menos valiosa.",
      readTime: "6 min de lectura",
      category: "Estándares",
    },
    "exporting-courses-from-canvas-imscc-step-by-step": {
      title: "Cómo exportar tus cursos de Canvas (IMSCC), paso a paso",
      description:
        "Una exportación IMSCC de Canvas mueve bien el contenido del curso. No lleva calificaciones, entregas de estudiantes ni todos los ajustes de herramientas externas. Aquí tienes el proceso y los huecos de cada paso.",
      readTime: "6 min de lectura",
      category: "Migración",
    },
    "whats-an-imscc-file": {
      title: "¿Qué es un archivo IMSCC?",
      description:
        "Un archivo IMSCC es un curso empaquetado: páginas, tareas, preguntas de cuestionarios y un manifiesto que describe su estructura. Aquí tienes qué lleva un Common Cartridge, qué deja atrás a propósito y cuándo te encontrarás uno.",
      readTime: "5 min de lectura",
      category: "Estándares",
    },
  },
};

const localizedPostLoaders: Partial<
  Record<Exclude<Locale, "en">, Record<string, () => Promise<{ default: ComponentType }>>>
> = {
  de: {
    "moodle-5-0-release-notes-and-upgrade-guide": () => import("@/content/blog/de/moodle-5-0-release-notes-and-upgrade-guide.mdx"),
    "moodle-router-not-correctly-configured": () => import("@/content/blog/de/moodle-router-not-correctly-configured.mdx"),
    "moodle-5-2-windows-install": () => import("@/content/blog/de/moodle-5-2-windows-install.mdx"),
    "moodle-vendor-directory-not-found": () => import("@/content/blog/de/moodle-vendor-directory-not-found.mdx"),
    "moodle-file-picker-stuck-loading": () => import("@/content/blog/de/moodle-file-picker-stuck-loading.mdx"),
    "moodle-5-2-shared-hosting": () => import("@/content/blog/de/moodle-5-2-shared-hosting.mdx"),
    "lms-reporting-and-analytics-what-you-actually-need": () => import("@/content/blog/de/lms-reporting-and-analytics-what-you-actually-need.mdx"),
    "what-gdpr-requires-from-an-elearning-platform": () => import("@/content/blog/de/what-gdpr-requires-from-an-elearning-platform.mdx"),
    "ai-in-an-lms-what-actually-helps": () => import("@/content/blog/de/ai-in-an-lms-what-actually-helps.mdx"),
    "what-ferpa-actually-requires-of-an-edtech-platform": () => import("@/content/blog/de/what-ferpa-actually-requires-of-an-edtech-platform.mdx"),
    "what-a-multi-tenant-lms-is-and-when-you-need-one": () => import("@/content/blog/de/what-a-multi-tenant-lms-is-and-when-you-need-one.mdx"),
    "what-wcag-2-2-aa-requires-from-a-learning-platform": () => import("@/content/blog/de/what-wcag-2-2-aa-requires-from-a-learning-platform.mdx"),
    "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": () => import("@/content/blog/de/migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders.mdx"),
    "build-vs-buy-an-lms-the-honest-math": () => import("@/content/blog/de/build-vs-buy-an-lms-the-honest-math.mdx"),
    "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": () => import("@/content/blog/de/custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years.mdx"),
    "hidden-cost-of-revenue-share-course-platforms": () => import("@/content/blog/de/hidden-cost-of-revenue-share-course-platforms.mdx"),
    "canvas-breach-student-data-security": () => import("@/content/blog/de/canvas-breach-student-data-security.mdx"),
    "sso-options-for-learning-platforms": () => import("@/content/blog/de/sso-options-for-learning-platforms.mdx"),
    "cheating-online-exams-what-actually-works": () => import("@/content/blog/de/cheating-online-exams-what-actually-works.mdx"),
    "student-data-security-checklist-for-edtech-teams": () => import("@/content/blog/de/student-data-security-checklist-for-edtech-teams.mdx"),
    "lti-1-3-advantage-explained-without-the-spec-speak": () => import("@/content/blog/de/lti-1-3-advantage-explained-without-the-spec-speak.mdx"),
    "designing-assessments-that-resist-cheating": () => import("@/content/blog/de/designing-assessments-that-resist-cheating.mdx"),
    "what-actually-drives-the-price-of-an-e-learning-build": () => import("@/content/blog/de/what-actually-drives-the-price-of-an-e-learning-build.mdx"),
    "how-to-migrate-off-moodle-without-losing-course-data": () => import("@/content/blog/de/how-to-migrate-off-moodle-without-losing-course-data.mdx"),
    "leaving-teachable-a-migration-checklist": () => import("@/content/blog/de/leaving-teachable-a-migration-checklist.mdx"),
    "what-a-smooth-lms-migration-actually-looks-like": () => import("@/content/blog/de/what-a-smooth-lms-migration-actually-looks-like.mdx"),
    "scorm-vs-xapi-keeping-your-content-portable": () => import("@/content/blog/de/scorm-vs-xapi-keeping-your-content-portable.mdx"),
    "exporting-courses-from-canvas-imscc-step-by-step": () => import("@/content/blog/de/exporting-courses-from-canvas-imscc-step-by-step.mdx"),
    "how-much-does-a-custom-lms-cost-in-2026": () => import("@/content/blog/de/how-much-does-a-custom-lms-cost-in-2026.mdx"),
    "whats-an-imscc-file": () => import("@/content/blog/de/whats-an-imscc-file.mdx"),
  },
  fr: {
    "moodle-5-0-release-notes-and-upgrade-guide": () => import("@/content/blog/fr/moodle-5-0-release-notes-and-upgrade-guide.mdx"),
    "moodle-router-not-correctly-configured": () => import("@/content/blog/fr/moodle-router-not-correctly-configured.mdx"),
    "moodle-5-2-windows-install": () => import("@/content/blog/fr/moodle-5-2-windows-install.mdx"),
    "moodle-vendor-directory-not-found": () => import("@/content/blog/fr/moodle-vendor-directory-not-found.mdx"),
    "moodle-file-picker-stuck-loading": () => import("@/content/blog/fr/moodle-file-picker-stuck-loading.mdx"),
    "moodle-5-2-shared-hosting": () => import("@/content/blog/fr/moodle-5-2-shared-hosting.mdx"),
    "lms-reporting-and-analytics-what-you-actually-need": () => import("@/content/blog/fr/lms-reporting-and-analytics-what-you-actually-need.mdx"),
    "what-gdpr-requires-from-an-elearning-platform": () => import("@/content/blog/fr/what-gdpr-requires-from-an-elearning-platform.mdx"),
    "ai-in-an-lms-what-actually-helps": () => import("@/content/blog/fr/ai-in-an-lms-what-actually-helps.mdx"),
    "what-ferpa-actually-requires-of-an-edtech-platform": () => import("@/content/blog/fr/what-ferpa-actually-requires-of-an-edtech-platform.mdx"),
    "what-a-multi-tenant-lms-is-and-when-you-need-one": () => import("@/content/blog/fr/what-a-multi-tenant-lms-is-and-when-you-need-one.mdx"),
    "what-wcag-2-2-aa-requires-from-a-learning-platform": () => import("@/content/blog/fr/what-wcag-2-2-aa-requires-from-a-learning-platform.mdx"),
    "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": () => import("@/content/blog/fr/migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders.mdx"),
    "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": () => import("@/content/blog/fr/custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years.mdx"),
    "cheating-online-exams-what-actually-works": () => import("@/content/blog/fr/cheating-online-exams-what-actually-works.mdx"),
    "canvas-breach-student-data-security": () => import("@/content/blog/fr/canvas-breach-student-data-security.mdx"),
    "sso-options-for-learning-platforms": () => import("@/content/blog/fr/sso-options-for-learning-platforms.mdx"),
    "student-data-security-checklist-for-edtech-teams": () => import("@/content/blog/fr/student-data-security-checklist-for-edtech-teams.mdx"),
    "lti-1-3-advantage-explained-without-the-spec-speak": () => import("@/content/blog/fr/lti-1-3-advantage-explained-without-the-spec-speak.mdx"),
    "designing-assessments-that-resist-cheating": () => import("@/content/blog/fr/designing-assessments-that-resist-cheating.mdx"),
    "what-actually-drives-the-price-of-an-e-learning-build": () => import("@/content/blog/fr/what-actually-drives-the-price-of-an-e-learning-build.mdx"),
    "how-to-migrate-off-moodle-without-losing-course-data": () => import("@/content/blog/fr/how-to-migrate-off-moodle-without-losing-course-data.mdx"),
    "build-vs-buy-an-lms-the-honest-math": () => import("@/content/blog/fr/build-vs-buy-an-lms-the-honest-math.mdx"),
    "how-much-does-a-custom-lms-cost-in-2026": () => import("@/content/blog/fr/how-much-does-a-custom-lms-cost-in-2026.mdx"),
    "hidden-cost-of-revenue-share-course-platforms": () => import("@/content/blog/fr/hidden-cost-of-revenue-share-course-platforms.mdx"),
    "leaving-teachable-a-migration-checklist": () => import("@/content/blog/fr/leaving-teachable-a-migration-checklist.mdx"),
    "what-a-smooth-lms-migration-actually-looks-like": () => import("@/content/blog/fr/what-a-smooth-lms-migration-actually-looks-like.mdx"),
    "scorm-vs-xapi-keeping-your-content-portable": () => import("@/content/blog/fr/scorm-vs-xapi-keeping-your-content-portable.mdx"),
    "exporting-courses-from-canvas-imscc-step-by-step": () => import("@/content/blog/fr/exporting-courses-from-canvas-imscc-step-by-step.mdx"),
    "whats-an-imscc-file": () => import("@/content/blog/fr/whats-an-imscc-file.mdx"),
  },
  es: {
    "moodle-5-0-release-notes-and-upgrade-guide": () => import("@/content/blog/es/moodle-5-0-release-notes-and-upgrade-guide.mdx"),
    "moodle-router-not-correctly-configured": () => import("@/content/blog/es/moodle-router-not-correctly-configured.mdx"),
    "moodle-5-2-windows-install": () => import("@/content/blog/es/moodle-5-2-windows-install.mdx"),
    "moodle-vendor-directory-not-found": () => import("@/content/blog/es/moodle-vendor-directory-not-found.mdx"),
    "moodle-file-picker-stuck-loading": () => import("@/content/blog/es/moodle-file-picker-stuck-loading.mdx"),
    "moodle-5-2-shared-hosting": () => import("@/content/blog/es/moodle-5-2-shared-hosting.mdx"),
    "lms-reporting-and-analytics-what-you-actually-need": () => import("@/content/blog/es/lms-reporting-and-analytics-what-you-actually-need.mdx"),
    "what-gdpr-requires-from-an-elearning-platform": () => import("@/content/blog/es/what-gdpr-requires-from-an-elearning-platform.mdx"),
    "ai-in-an-lms-what-actually-helps": () => import("@/content/blog/es/ai-in-an-lms-what-actually-helps.mdx"),
    "what-ferpa-actually-requires-of-an-edtech-platform": () => import("@/content/blog/es/what-ferpa-actually-requires-of-an-edtech-platform.mdx"),
    "what-a-multi-tenant-lms-is-and-when-you-need-one": () => import("@/content/blog/es/what-a-multi-tenant-lms-is-and-when-you-need-one.mdx"),
    "what-wcag-2-2-aa-requires-from-a-learning-platform": () => import("@/content/blog/es/what-wcag-2-2-aa-requires-from-a-learning-platform.mdx"),
    "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": () => import("@/content/blog/es/migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders.mdx"),
    "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": () => import("@/content/blog/es/custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years.mdx"),
    "build-vs-buy-an-lms-the-honest-math": () => import("@/content/blog/es/build-vs-buy-an-lms-the-honest-math.mdx"),
    "cheating-online-exams-what-actually-works": () => import("@/content/blog/es/cheating-online-exams-what-actually-works.mdx"),
    "canvas-breach-student-data-security": () => import("@/content/blog/es/canvas-breach-student-data-security.mdx"),
    "sso-options-for-learning-platforms": () => import("@/content/blog/es/sso-options-for-learning-platforms.mdx"),
    "student-data-security-checklist-for-edtech-teams": () => import("@/content/blog/es/student-data-security-checklist-for-edtech-teams.mdx"),
    "lti-1-3-advantage-explained-without-the-spec-speak": () => import("@/content/blog/es/lti-1-3-advantage-explained-without-the-spec-speak.mdx"),
    "designing-assessments-that-resist-cheating": () => import("@/content/blog/es/designing-assessments-that-resist-cheating.mdx"),
    "what-actually-drives-the-price-of-an-e-learning-build": () => import("@/content/blog/es/what-actually-drives-the-price-of-an-e-learning-build.mdx"),
    "how-to-migrate-off-moodle-without-losing-course-data": () => import("@/content/blog/es/how-to-migrate-off-moodle-without-losing-course-data.mdx"),
    "how-much-does-a-custom-lms-cost-in-2026": () => import("@/content/blog/es/how-much-does-a-custom-lms-cost-in-2026.mdx"),
    "hidden-cost-of-revenue-share-course-platforms": () => import("@/content/blog/es/hidden-cost-of-revenue-share-course-platforms.mdx"),
    "leaving-teachable-a-migration-checklist": () => import("@/content/blog/es/leaving-teachable-a-migration-checklist.mdx"),
    "what-a-smooth-lms-migration-actually-looks-like": () => import("@/content/blog/es/what-a-smooth-lms-migration-actually-looks-like.mdx"),
    "scorm-vs-xapi-keeping-your-content-portable": () => import("@/content/blog/es/scorm-vs-xapi-keeping-your-content-portable.mdx"),
    "exporting-courses-from-canvas-imscc-step-by-step": () => import("@/content/blog/es/exporting-courses-from-canvas-imscc-step-by-step.mdx"),
    "whats-an-imscc-file": () => import("@/content/blog/es/whats-an-imscc-file.mdx"),
  },
};

export function getLocalizedPostBySlug(slug: string, locale: Locale): Post | undefined {
  const post = getPostBySlug(slug);
  if (!post) return undefined;
  if (locale === "en") return post;

  const translation = localizedPostFields[locale]?.[slug];
  const loader = localizedPostLoaders[locale]?.[slug];
  return translation && loader ? { ...post, ...translation } : undefined;
}

export function getLocalesForPost(slug: string): Locale[] {
  if (!getPostBySlug(slug)) return [];
  return routing.locales.filter(
    (locale) =>
      locale === "en" ||
      (localizedPostFields[locale]?.[slug] !== undefined &&
        localizedPostLoaders[locale]?.[slug] !== undefined),
  );
}

export function getPostsForLocale(locale: Locale): Post[] {
  if (locale === "en") return posts;
  return posts.flatMap((post) => {
    const localizedPost = getLocalizedPostBySlug(post.slug, locale);
    return localizedPost ? [localizedPost] : [];
  });
}

export async function getPostContent(slug: string, locale: Locale) {
  if (locale === "en") {
    const contentLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
      "lms-reporting-and-analytics-what-you-actually-need": () => import("@/content/blog/lms-reporting-and-analytics-what-you-actually-need.mdx"),
      "moodle-5-0-release-notes-and-upgrade-guide": () => import("@/content/blog/moodle-5-0-release-notes-and-upgrade-guide.mdx"),
      "moodle-router-not-correctly-configured": () => import("@/content/blog/moodle-router-not-correctly-configured.mdx"),
      "moodle-5-2-windows-install": () => import("@/content/blog/moodle-5-2-windows-install.mdx"),
      "moodle-vendor-directory-not-found": () => import("@/content/blog/moodle-vendor-directory-not-found.mdx"),
      "moodle-file-picker-stuck-loading": () => import("@/content/blog/moodle-file-picker-stuck-loading.mdx"),
      "moodle-5-2-shared-hosting": () => import("@/content/blog/moodle-5-2-shared-hosting.mdx"),
      "what-gdpr-requires-from-an-elearning-platform": () => import("@/content/blog/what-gdpr-requires-from-an-elearning-platform.mdx"),
      "ai-in-an-lms-what-actually-helps": () => import("@/content/blog/ai-in-an-lms-what-actually-helps.mdx"),
      "what-ferpa-actually-requires-of-an-edtech-platform": () => import("@/content/blog/what-ferpa-actually-requires-of-an-edtech-platform.mdx"),
      "what-a-multi-tenant-lms-is-and-when-you-need-one": () => import("@/content/blog/what-a-multi-tenant-lms-is-and-when-you-need-one.mdx"),
      "what-wcag-2-2-aa-requires-from-a-learning-platform": () => import("@/content/blog/what-wcag-2-2-aa-requires-from-a-learning-platform.mdx"),
      "whats-an-imscc-file": () => import("@/content/blog/whats-an-imscc-file.mdx"),
      "how-much-does-a-custom-lms-cost-in-2026": () => import("@/content/blog/how-much-does-a-custom-lms-cost-in-2026.mdx"),
      "build-vs-buy-an-lms-the-honest-math": () => import("@/content/blog/build-vs-buy-an-lms-the-honest-math.mdx"),
      "hidden-cost-of-revenue-share-course-platforms": () => import("@/content/blog/hidden-cost-of-revenue-share-course-platforms.mdx"),
      "custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years": () => import("@/content/blog/custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years.mdx"),
      "what-actually-drives-the-price-of-an-e-learning-build": () => import("@/content/blog/what-actually-drives-the-price-of-an-e-learning-build.mdx"),
      "how-to-migrate-off-moodle-without-losing-course-data": () => import("@/content/blog/how-to-migrate-off-moodle-without-losing-course-data.mdx"),
      "exporting-courses-from-canvas-imscc-step-by-step": () => import("@/content/blog/exporting-courses-from-canvas-imscc-step-by-step.mdx"),
      "leaving-teachable-a-migration-checklist": () => import("@/content/blog/leaving-teachable-a-migration-checklist.mdx"),
      "scorm-vs-xapi-keeping-your-content-portable": () => import("@/content/blog/scorm-vs-xapi-keeping-your-content-portable.mdx"),
      "what-a-smooth-lms-migration-actually-looks-like": () => import("@/content/blog/what-a-smooth-lms-migration-actually-looks-like.mdx"),
      "lti-1-3-advantage-explained-without-the-spec-speak": () => import("@/content/blog/lti-1-3-advantage-explained-without-the-spec-speak.mdx"),
      "student-data-security-checklist-for-edtech-teams": () => import("@/content/blog/student-data-security-checklist-for-edtech-teams.mdx"),
      "sso-options-for-learning-platforms": () => import("@/content/blog/sso-options-for-learning-platforms.mdx"),
      "designing-assessments-that-resist-cheating": () => import("@/content/blog/designing-assessments-that-resist-cheating.mdx"),
      "migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders": () => import("@/content/blog/migrating-from-lti-1-1-to-lti-1-3-a-practical-guide-for-tool-builders.mdx"),
      "canvas-breach-student-data-security": () => import("@/content/blog/canvas-breach-student-data-security.mdx"),
      "cheating-online-exams-what-actually-works": () => import("@/content/blog/cheating-online-exams-what-actually-works.mdx"),
    };
    return contentLoaders[slug]?.();
  }

  return localizedPostLoaders[locale]?.[slug]?.();
}
