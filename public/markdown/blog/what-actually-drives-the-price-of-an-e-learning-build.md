# What Actually Drives the Price of an E-Learning Build

> Roles, migration, integrations, business rules, and launch quality move an e-learning estimate far more than a polished lesson screen. Here is how to scope the first release honestly.

## What moves the number

An e-learning build gets expensive when the work crosses boundaries: more roles, more data, more external systems, and more business rules that must behave correctly when something goes wrong. A polished lesson screen is rarely the line that moves the estimate most.

The way to control cost isn't to demand an arbitrary feature count. It's to decide which learner and operational paths must be reliable in the first release, then postpone the rest with intention.

## Five things that change an estimate

| Driver | Why it changes the work | A concrete example |
| --- | --- | --- |
| Roles and permissions | Each role sees, does, and is allowed to correct different things | A manager can see their team, but not another client’s learner records |
| Data migration | Data must be mapped, cleaned, imported, checked, and recoverable | 18,000 historic learners with progress from a legacy LMS |
| Integrations | Every handoff needs authentication, edge-case handling, and testing | Payment success creates access; a refund changes it safely |
| Learning rules | Rules spread into admin work, emails, reports, and support | A certificate expires 12 months after completion |
| Quality and launch | Production needs more than a clickable happy path | A bulk enrolment of 400 people must not create duplicates |

Those categories are not an argument for a big project. They are a way to see why two platforms with “courses, quizzes, and dashboards” on a feature list can have radically different cost.

## The screen is only the visible part

Take the course page. On screen it's a title, a video, a progress bar, and a “next lesson” button. Underneath, someone has to decide what happens if the video host fails, if a learner is moved to another cohort, if the course is revised after they finish, or if a manager needs evidence of the version they completed.

You might not need all of those answers in version one. That is fine. But the decision must be explicit. The expensive builds are often the ones where each answer appears halfway through development as “one small exception.”

At Rizon, we map the risky paths before polishing the interface. On a recent planning exercise, the hard path was a buyer who paid for five seats but wanted each colleague to choose their own start date. The surface looked like a normal invite flow. The real work involved payment records, unused seats, replacement learners, emails, reporting, and what the buyer could see.

## A realistic first release has a hard edge

A useful first release might include:

- one programme model;
- learner and administrator roles, plus a simple manager view if the offer needs it;
- a tested payment or SSO path;
- the essential reporting question; and
- an import plan for the data you cannot leave behind.

It probably does not need every gamification mechanic, a white-label tenant system, a native app, an AI assistant, and six integrations. The work becomes more predictable when the team can say no to features that do not change the first customer outcome.

That is not about lowering ambition. It is about not letting a “phase one” turn into a collection of unrelated products. A programme that genuinely needs multi-tenant organisations will eventually need that model. A creator selling one cohort does not need to pay for it on day one.

## Use labour figures as context, not a shortcut

The build cost is mostly people: product thinking, design, engineering, QA, and launch support. The U.S. Bureau of Labor Statistics reports a **$133,080** median annual wage for software developers in May 2024. It does not produce a project estimate, but it is a useful reality check against a quote that appears to fund only a visual prototype. [The source is available from the BLS.](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm)

You should expect an estimate to explain the hard parts in plain language. “Integrations” is too vague. Which system owns the learner identity? What data is copied? What happens if an API call fails? How is that recovered? If the proposal cannot answer those questions, the low number may only mean the work has been postponed.

## Questions that make scoping less theatrical

| Ask this before you build | Why it matters |
| --- | --- |
| What must a learner complete without staff help? | Defines the real learner path |
| Which decision does the admin dashboard need to support? | Keeps reporting from becoming a data junk drawer |
| What data has to survive migration? | Sets the migration scope and acceptance test |
| Which external system is the source of truth? | Prevents duplicated and conflicting records |
| What happens when payment, SSO, or import fails? | Prices a recovery path before launch week |

If you are deciding whether that scope is worth owning, read [build versus buy](build-vs-buy-an-lms-the-honest-math.md). For a three-year model, see [custom LMS versus off-the-shelf](custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years.md). And for the actual first-release ranges, start with [how much a custom LMS costs in 2026](how-much-does-a-custom-lms-cost-in-2026.md).

[Custom LMS development](/services/custom-lms-development) begins with those questions, not a decorative feature checklist.

---

## Related reading

- [How Much Does a Custom LMS Cost in 2026?](how-much-does-a-custom-lms-cost-in-2026.md)
- [Build vs. Buy an LMS: The Honest Math](build-vs-buy-an-lms-the-honest-math.md)
- [Custom LMS vs. Off-the-Shelf: Total Cost of Ownership Over Three Years](custom-lms-vs-off-the-shelf-total-cost-of-ownership-over-three-years.md)

- [All Rizon articles](index.md)
