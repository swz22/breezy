# Breezy

A three-page marketing site for a fictional premium air subscription service, built as part of a developer code test. The site includes a home page, pricing page, and about/FAQ page, along with an AI-powered pricing recommendation quiz as the featured new addition.

**Live URL:** https://breezy-johnk.vercel.app

---

## Hosting

The site is deployed on Vercel. The decision came down to a few practical reasons. Vercel and Next.js are built by the same team, so the integration is as tight as it gets with zero configuration required and a deployment pipeline that just works. Every push to the main branch on GitHub triggers an automatic redeploy, which means the live site always reflects the latest code without any manual steps.

Vercel also handles HTTPS, CDN distribution, and preview deployments out of the box. For a marketing site of this size, there is no reason to reach for a VPS or a more complex cloud setup. Managed hosting is the right abstraction level here.

I considered Netlify as an alternative. It is an excellent platform and would have worked just as well, but Vercel's native Next.js support made it the straightforward choice.

---

## CMS and Content Management

Currently, all content lives directly in the React component files as JavaScript arrays and strings. A non-technical marketing person cannot update text or images without touching code, which is a real limitation.

To fix this properly, I would integrate Sanity.io. Sanity provides a web-based Studio interface where non-technical editors can update content without touching any code. On the developer side, you define schemas for each content type. You define schemas for pricing tiers, feature cards, testimonials, and FAQ items, then pull that data at build time using GROQ queries. The site rebuilds automatically when content changes, so editors publish updates without involving a developer.

For a lighter-weight alternative, Contentlayer with MDX files would work well for text-heavy pages like the About page, where a marketing person could edit a Markdown file and see changes without needing a full CMS interface.

---

## Security

Several things were handled intentionally on the security side.

The Anthropic API key is stored as an environment variable in Vercel and never appears in the client-side code. The AI quiz feature calls the Claude API through a Next.js API route, which runs server-side. This means the key is never shipped to the browser where it could be extracted from the network tab or the JavaScript bundle.

The API route also validates the incoming request body before passing anything to the Claude API. If the answers field is missing or malformed, the route returns a 400 error rather than passing bad data downstream.

HTTPS is enforced by default on Vercel, so all traffic is encrypted in transit.

For a production deployment I would add several more layers. Rate limiting on the API route would prevent abuse of the Anthropic key. A malicious user could otherwise trigger thousands of API calls and run up a significant bill. Upstash Redis with the @upstash/ratelimit library is the standard approach for this in Next.js. I would also add Content Security Policy headers in next.config.js, stricter input validation with length limits on all form fields, and error boundaries throughout the component tree so API failures degrade gracefully rather than crashing the UI.

---

## Code Maintenance

The codebase is organized around a simple component model. Each page is a single file in the app directory, and reusable pieces like the header and footer live in the components folder. Any developer picking this up should be able to find what they need quickly.

The Tailwind configuration extends the design tokens from the original source file, so the color palette and typography decisions are documented in code rather than scattered across stylesheets. This makes it straightforward to stay visually consistent when adding new sections or pages.

Commit messages follow the conventional commits format throughout the project history, which makes it easy to scan what changed and why. The API route includes a console.error call on failure so errors surface in the Vercel function logs rather than failing silently.

For a longer-term production codebase I would add TypeScript for prop validation and self-documenting component interfaces, a component library like Storybook to document UI components in isolation, and end-to-end tests with Playwright covering the critical paths including the quiz flow.

---

## Performance

Several decisions were made with performance in mind from the start.

Next.js statically generates all three pages at build time, so visitors receive pre-built HTML rather than waiting for server rendering on each request. This is the right approach for a marketing site where the content does not change per user.

Google Fonts are loaded via a standard CSS import, which keeps the font loading straightforward and reliable. In a production environment I would switch to next/font, which self-hosts the font files and eliminates the third-party network request entirely, removing a potential render-blocking resource.

Tailwind's production build purges all unused utility classes, which keeps the CSS bundle minimal. There are no heavy JavaScript dependencies beyond React itself and the Anthropic SDK, which only runs server-side and never adds to the client bundle.

Additional steps I would take for a production deployment: run a Lighthouse audit and address any remaining issues, use next/dynamic to code-split the PricingQuiz component so it only loads when the pricing page is visited, and run bundle analysis with @next/bundle-analyzer to catch any unexpected size increases.

---

## New Feature

The new feature is an AI-powered pricing recommendation quiz on the pricing page.

**Why this feature:** Visitors arriving at a pricing page without context often leave without converting because they do not know which plan is right for them. The quiz addresses that directly by asking three quick questions about the user's breathing habits and returning a personalized recommendation. It lowers the decision-making friction that typically causes drop-off on pricing pages.

**How it works technically:** The quiz is a React component that walks the user through three multiple-choice questions using local state. When the user answers the final question, the component sends their answers to a Next.js API route at /api/recommend. The API route passes the answers to the Claude API using the Anthropic SDK, along with a structured prompt that instructs Claude to respond in a specific JSON format. Claude returns a plan recommendation and a short personalized explanation, which the component displays to the user. The recommended plan card in the pricing section above also gets highlighted with a green ring and a "Recommended for You" badge, closing the loop between the quiz result and the actual plan.

The API key never touches the client. The entire Claude API call happens inside the server-side API route, so the key is only accessible in the Vercel environment and never appears in the browser's network requests or JavaScript bundle.

**What I would improve with more time:** The most valuable next step would be persisting the quiz result in localStorage so return visitors see their recommendation without having to retake the quiz. After that, I would add analytics events on quiz completion and plan selection to track which plan gets recommended most often and whether it correlates with actual signups. That data would make it possible to iterate on the quiz questions and prompt over time to improve conversion. I would also add rate limiting on the API route to prevent abuse of the Anthropic key.
