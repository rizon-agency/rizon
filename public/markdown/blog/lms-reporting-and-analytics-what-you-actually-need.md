# LMS Reporting and Analytics: What You Actually Need

> Most LMS dashboards count activity without helping anyone act. Here is how to design useful operational, learning, commercial, and outcome reporting, choose honest metrics, and build data people can trust.

Most LMS dashboards can tell you how many people logged in. That does not mean they can answer a useful question.

Useful reporting starts with a decision: who needs to act, what do they need to know, and what will they do differently after seeing the number? Without that, an analytics project becomes a large collection of charts that everyone admires and nobody uses.

This guide explains the reporting an e-learning platform actually needs, the metrics that regularly mislead teams, and the data architecture required to produce trustworthy answers.

## Start with decisions, not dashboards

An administrator, instructor, client manager, and product owner do not need the same report.

| Person | Decision they need to make | Useful evidence |
| --- | --- | --- |
| Learner | What should I do next? | Progress, due work, feedback, mastery gaps |
| Instructor | Who needs help today? | Missed work, repeated attempts, unresolved questions, recent activity |
| Client or team manager | Is my group on track? | Assigned versus completed, overdue learners, required certifications |
| Platform administrator | Is delivery working? | Enrolment failures, content errors, support patterns, completion by cohort |
| Product owner | Is the programme producing the intended result? | Activation, progression, assessment performance, retention, outcome evidence |

This is a better requirements document than "we need an analytics dashboard." Each report has an audience, a decision, and a next action.

A low completion rate may tell an instructor to contact learners, a programme owner that the course is too long, or an administrator that enrolment dates were imported incorrectly. A chart without context cannot choose between those explanations.

## The reporting layers an LMS actually needs

### Operational reporting

Operational reports help someone run the platform today. Who has not started mandatory training? Which certificates expire this month? Which enrolments failed? Which submissions still need grading?

These reports should be current, filterable, and actionable. If a manager sees 14 overdue learners, the interface should let them open the list, understand the reason, and start the appropriate follow-up.

### Learning reporting

Learning reports examine whether people are progressing and understanding, not merely whether they clicked through.

Useful signals include performance by learning objective, repeated misconceptions, question difficulty, improvement between attempts, feedback viewed, and where learners ask for help. Completion belongs here, but it is one signal among several.

### Commercial reporting

For a training business, reporting must connect learning delivery to the business model. That may include seats purchased versus activated, revenue by programme, renewal risk, refunds, cohort profitability, or client usage.

This layer is often missing from an off-the-shelf LMS because the learning and payment systems disagree about what a customer, order, seat, or active learner means. A custom report cannot fix an undefined business rule. The data model has to settle it first.

### Outcome reporting

Outcome reporting asks the hardest question: did the programme change anything outside the LMS?

Passing a quiz is not the same as performing better at work, retaining a skill three months later, or achieving a required competency. Outcome evidence often lives in another system: a CRM, HRIS, support platform, assessment tool, or supervisor review. Connecting it requires a shared identity and an honest definition of success.

Not every course needs this layer. But if the programme promises a business or educational outcome, page views are not proof.

## The metrics that look useful but often are not

**Logins.** A learner can remain signed in for weeks, open the platform because of a reminder, or complete work through an external tool. Login count measures authentication events, not engagement.

**Time spent.** A tab left open is not learning. Fast completion may mean expertise, not disengagement. Time becomes useful only with context such as the activity, expected duration, result, and removed idle time.

**Completion rate.** Completion is valuable for compliance and operations. It does not prove comprehension or impact.

**Average score.** An average hides the distribution. A score of 70 could mean everyone understood most of the material or half understood everything and half understood almost nothing. Item analysis and performance by objective reveal more.

**Course popularity.** Enrolments can reflect mandatory assignment, a prominent homepage position, or aggressive promotion. Popular is not automatically effective.

Never place a metric on a dashboard unless the team can explain what action a high or low value should trigger and what alternative explanations must be checked first.

## Define events before collecting them

For each important event, define:

- its name and plain-language meaning;
- the person, organisation, course, and activity it belongs to;
- when it fires and whether it can fire more than once;
- the source of truth;
- required properties and allowed values;
- how late, duplicated, or corrected events are handled;
- how long the underlying data is retained.

Consider `course_completed`. Does it fire when every lesson is opened, when the final assessment is passed, when an instructor approves the work, or when a certificate is issued? If four teams answer differently, a completion dashboard will be precise and wrong.

Version the definition when the rule changes. Otherwise, this month's completion rate may not be comparable with last month's even though the chart draws one continuous line.

## Use standards when activity crosses systems

[1EdTech Caliper Analytics](https://www.1edtech.org/standards/caliper) provides a shared vocabulary for activities such as reading, assessment, grading, media use, and tool launches. It is particularly useful when institutions want to aggregate comparable events from an LMS and connected learning tools.

[xAPI](https://www.adlnet.gov/guides/tla/service-definitions/) represents learning activity as statements and sends them to a Learning Record Store. It can capture experiences beyond a traditional LMS, including simulations, mobile learning, or work performed offline.

Neither standard creates a good dashboard by itself. Standards help systems exchange consistent events. Your team still has to choose the questions, definitions, permissions, and visualisations that make those events useful.

If all learning happens inside one product and there is no portability requirement, a smaller documented event model may be the right choice.

## Reporting permissions are part of the architecture

A client manager should see only their organisation. A regional manager may need several teams but not salary, disability, or support information. An instructor may need submissions and feedback for their course, while a finance user needs purchases without assessment answers.

These rules have to survive exports. A perfectly filtered dashboard followed by a CSV containing every tenant's records is still a data leak.

Build and test permissions at the query level, not only in the interface. Record who exported what, limit sensitive fields, and make unusual exports visible to the security team. This connects reporting directly to the platform's [GDPR responsibilities](what-gdpr-requires-from-an-elearning-platform.md) and [student-data security](student-data-security-checklist-for-edtech-teams.md).

## Make the numbers auditable

When two dashboards disagree, somebody needs to trace a number back to the records that produced it.

A trustworthy system keeps the raw event, transformation logic, and metric definition separate. It records data freshness, timezone, exclusions, and the date a rule changed.

Build reconciliation into important flows. Paid seats should reconcile with seats granted in the LMS. Issued certificates should reconcile with eligible completions. Imported enrolments should reconcile with accepted and rejected rows.

Grades change, duplicate accounts merge, enrolments are backdated, and events arrive late. If a dashboard can only append data but never recompute it, trust will disappear the first time a customer checks the total manually.

## A practical first reporting release

Start with:

1. a learner view of progress, due work, and feedback;
2. an instructor queue showing people and submissions that need attention;
3. a manager report for assignment, completion, overdue status, and certificate expiry;
4. an administrator report for enrolment, delivery, and integration failures;
5. a controlled CSV export that respects the same filters and permissions;
6. a metric dictionary stating exactly how every number is calculated.

Then watch how people use them. If users export every report to rebuild the same spreadsheet, the missing grouping or calculation belongs in the product. If nobody opens a chart, remove it before adding another.

Add predictive analytics only after the underlying events, outcomes, and intervention process are trustworthy. A model that predicts dropout is useless if nobody is responsible for contacting the learner.

## Good LMS analytics shortens the distance to action

The best reporting system is not the one with the most charts. It is the one that helps the right person notice a problem, understand it, and act while action can still help.

Start by writing the five questions your platform must answer. If the current data cannot answer them, fix the model. If the dashboard cannot lead someone from the answer to the relevant learners, courses, or transactions, fix the workflow. Everything after that is decoration.

---

## Related reading

- [What GDPR Actually Requires From an E-Learning Platform](what-gdpr-requires-from-an-elearning-platform.md)
- [What a Multi-Tenant LMS Actually Is, and When You Need One](what-a-multi-tenant-lms-is-and-when-you-need-one.md)
- [SCORM vs xAPI: Keeping Your Content Portable](scorm-vs-xapi-keeping-your-content-portable.md)
- [Custom LMS Development](/services/custom-lms-development)
- [All Rizon articles](index.md)
