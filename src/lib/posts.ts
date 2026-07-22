import type { Post } from "@/types";
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

export const posts: Post[] = [
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
