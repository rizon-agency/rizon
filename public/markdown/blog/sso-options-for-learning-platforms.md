# SSO Options for Learning Platforms (and Which to Pick)

> Most SSO decisions obsess over the login and forget provisioning and clean offboarding, the two moments that cause incidents. SAML, OIDC, and SCIM, compared for how people join and leave.

## Pick SSO for how people leave, not just how they log in

Most SSO decisions obsess over the login and forget the two moments that actually cause incidents: provisioning someone into the right role, and removing them cleanly when they go. The sign-in is the easy part. If your SSO story ends at "they can log in," it's half a story.

Single sign-on for a learning platform usually comes down to two protocols for the login and one for the accounts. SAML and OIDC handle "who is this and can they sign in." SCIM handles "create, update, and deactivate the account." Teams pick a login protocol carefully and then wire up provisioning by hand, which is where a deactivated employee keeps course access for three months.

## The three questions that decide it

- **Provisioning: how does the account get created?** Just-in-time provisioning makes the account on first login, which is simple but thin on detail. SCIM syncs accounts and attributes from the identity provider ahead of time, roles included. If role accuracy matters, SCIM earns its setup. ([SCIM is defined in RFC 7644](https://datatracker.ietf.org/doc/html/rfc7644))
- **Recovery: what happens when SSO is down or a user is stuck?** You need a break-glass path for admins that doesn't undermine the whole model. Decide it before launch, not during an outage.
- **Deprovisioning: how does access end?** This is the one people skip. When someone leaves, their access should end automatically, everywhere. Manual offboarding is how ex-employees keep reading training records nobody meant to leave open.

| Protocol | What it's for | Reach for it when |
| --- | --- | --- |
| SAML | Enterprise login (mature, XML) | Your org's IdP is SAML-first |
| OIDC / OAuth 2.0 | Modern login (JSON, API-friendly) | You want simpler, developer-friendly integration |
| SCIM | Account provisioning & deprovisioning | Roles and clean offboarding matter |

## The honest tradeoff

SAML is battle-tested and enterprise IT knows it cold; it's also verbose and dated. OIDC is cleaner and easier to build against, and increasingly the default for new work. Neither is "better" in the abstract, the right pick is the one your users' identity provider already speaks well. Adding SCIM is more upfront work, and I still recommend it for any platform where a wrong role or a lingering account is a real risk, which is most of them.

For the launch-time identity that LTI tools rely on, see [LTI 1.3 Advantage explained](lti-1-3-advantage-explained-without-the-spec-speak.md). For what all this protects, read [the student-data security checklist](student-data-security-checklist-for-edtech-teams.md). Rolling training out across teams and roles is exactly where SSO and provisioning earn their keep, which is the heart of [corporate training platform development](/services/corporate-training-platform).

---

## Related reading

- [A Student-Data Security Checklist for Edtech Teams](student-data-security-checklist-for-edtech-teams.md)
- [LTI 1.3 Advantage, Explained Without the Spec-Speak](lti-1-3-advantage-explained-without-the-spec-speak.md)

- [All Rizon articles](index.md)
