export type QA = {
  question: string;
  answer: string;
};

export const faqs: QA[] = [
  {
    question: "How quickly can you build our platform?",
    answer:
      "It depends on scope, but here is how we approach timelines. We break everything into weekly sprints with live demos, so you see real progress every week instead of vague updates. Most platforms launch in phases: core features first (usually 8 to 12 weeks), then we iterate and add more based on what you learn from real users. You get a clear roadmap after our first conversation.",
  },
  {
    question: "How involved will we be during development?",
    answer:
      "Very. Every week you see what has been built, test it live, and give feedback that shapes the next sprint. This is not a disappear-for-months-then-surprise-you situation. You are part of the process from day one.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes. Payment gateways, CRMs, email platforms, Zoom, Google Meet, SSO, whatever you currently use gets connected. We build around your workflow, not against it.",
  },
  {
    question: "What happens after we launch?",
    answer:
      "Launch is the beginning, not the end. We offer optional maintenance contracts for ongoing support, updates, new features, and optimizations. Most clients stay with us long-term because their platform keeps evolving with their needs.",
  },
  {
    question: "Will the platform scale as we grow?",
    answer:
      "That is the plan. We architect for growth from day one. Whether you are at 500 learners or 50,000, the infrastructure supports it, and we adjust as you scale.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Completely. It works on desktop, tablet, and mobile, responsive by default rather than as an afterthought.",
  },
  {
    question: "Who owns the code and platform?",
    answer:
      "You do. Full ownership transfers to you on final payment: the code, the platform, the infrastructure. Maintenance is optional, never required.",
  },
];
