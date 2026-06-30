'use client';

import './marketing-base.css';
import './ourritual.css';

/**
 * OurRitualApp — an ad-hoc, personalized application page for Bar Moshe's
 * "Generative AI Engineer" application to OurRitual (Tel Aviv, Hybrid).
 *
 * Rebuilt to look like the real ourritual.com marketing site: a warm cream
 * surface, the signature coral (#E5654B) on fully-rounded pill buttons, an
 * editorial serif headline voice, a centered hero with a soft rounded "card"
 * and a translucent stat pill, a personalized-"Pathway" section (their own
 * vocabulary), proof-of-work cards, a coral CTA band, and a deep-plum footer.
 * It speaks the team's own language — the world's first Consumer Therapy AI,
 * "a real RAG that works in production" — and makes the case for Bar in
 * OurRitual's brand.
 *
 * English, LTR. Self-contained: mounts `.mp-root` only to inherit the marketing
 * reset / focus base, then overrides everything via `.or-root`. No LangProvider,
 * no shared #work emulators, no i18n coupling: every visual here is built fresh
 * for this application.
 */

// OurRitual mark: two overlapping coral petals — an abstract embrace / "two
// people, one pathway", echoing the brand's logo mark. Fill follows currentColor.
function RitualMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M16 3.5C21.6 11 21.6 21 16 28.5 10.4 21 10.4 11 16 3.5Z" transform="rotate(-30 16 16)" opacity="0.92" />
      <path d="M16 3.5C21.6 11 21.6 21 16 28.5 10.4 21 10.4 11 16 3.5Z" transform="rotate(30 16 16)" opacity="0.6" />
    </svg>
  );
}

const EMAIL =
  'mailto:1barmoshe1@gmail.com?subject=Generative%20AI%20Engineer%20application%20from%20Bar%20Moshe';
const CV = '/Bar_Moshe_Resume.pdf';

type Proof = {
  tag: string;
  title: string;
  desc: string;
  href: string;
  open: string;
  visual: React.ReactNode;
};

// MDP: a source panel feeding a validated artifact through a pulsing wire (the
// MCP/agent surface + self-healing validation loop).
const MdpVisual = (
  <svg className="or-vis" viewBox="0 0 220 120" aria-hidden="true" focusable="false">
    <rect className="or-vis__panel" x="14" y="26" width="78" height="68" rx="12" />
    <rect className="or-vis__line" x="24" y="38" width="44" height="6" rx="3" />
    <rect className="or-vis__line or-vis__line--soft" x="24" y="52" width="58" height="4" rx="2" />
    <rect className="or-vis__line or-vis__line--soft" x="24" y="62" width="40" height="4" rx="2" />
    <rect className="or-vis__line or-vis__line--soft" x="24" y="76" width="50" height="4" rx="2" />
    <line className="or-vis__wire" x1="94" y1="60" x2="128" y2="60" />
    <line className="or-vis__flow" x1="94" y1="60" x2="128" y2="60" />
    <circle className="or-vis__pulse" r="3.5" />
    <rect className="or-vis__art" x="130" y="22" width="76" height="76" rx="12" />
    <rect className="or-vis__art-bar" x="140" y="34" width="46" height="8" rx="4" />
    <rect className="or-vis__line or-vis__line--soft" x="140" y="50" width="54" height="4" rx="2" />
    <rect className="or-vis__chip" x="140" y="74" width="22" height="14" rx="7" />
    <rect className="or-vis__chip or-vis__chip--b" x="168" y="74" width="22" height="14" rx="7" />
  </svg>
);

// MIDI GPT / OpenAI in production: three language workers feeding one durable
// orchestration hub, calling out to a model.
const OrchestrateVisual = (
  <svg className="or-vis" viewBox="0 0 220 120" aria-hidden="true" focusable="false">
    <line className="or-vis__edge" x1="40" y1="26" x2="110" y2="60" />
    <line className="or-vis__edge" x1="40" y1="60" x2="110" y2="60" />
    <line className="or-vis__edge" x1="40" y1="94" x2="110" y2="60" />
    <line className="or-vis__edge or-vis__edge--out" x1="110" y1="60" x2="186" y2="60" />
    <g className="or-vis__worker"><rect x="14" y="18" width="36" height="16" rx="8" /><text x="32" y="30">Go</text></g>
    <g className="or-vis__worker"><rect x="14" y="52" width="36" height="16" rx="8" /><text x="32" y="64">Py</text></g>
    <g className="or-vis__worker"><rect x="14" y="86" width="36" height="16" rx="8" /><text x="32" y="98">TS</text></g>
    <circle className="or-vis__hub" cx="110" cy="60" r="16" />
    <circle className="or-vis__hub-ring" cx="110" cy="60" r="16" />
    <rect className="or-vis__sink" x="186" y="50" width="20" height="20" rx="7" />
  </svg>
);

// Full-stack app: streaming rows with a now-playing accent bar.
const AppVisual = (
  <svg className="or-vis" viewBox="0 0 220 120" aria-hidden="true" focusable="false">
    <rect className="or-vis__panel" x="14" y="16" width="192" height="88" rx="14" />
    <circle className="or-vis__disc" cx="40" cy="40" r="13" />
    <rect className="or-vis__line" x="62" y="32" width="80" height="6" rx="3" />
    <rect className="or-vis__line or-vis__line--soft" x="62" y="44" width="54" height="4" rx="2" />
    <rect className="or-vis__row" x="26" y="68" width="168" height="9" rx="4.5" />
    <rect className="or-vis__row or-vis__row--play" x="26" y="84" width="110" height="9" rx="4.5" />
    <g className="or-vis__eq" aria-hidden="true">
      <rect x="150" y="82" width="4" height="12" rx="2" />
      <rect x="158" y="78" width="4" height="16" rx="2" />
      <rect x="166" y="84" width="4" height="10" rx="2" />
      <rect x="174" y="80" width="4" height="14" rx="2" />
    </g>
  </svg>
);

const PROOF: Proof[] = [
  {
    tag: 'OPEN SOURCE · MCP SERVER',
    title: 'MDP',
    desc: 'A Markdown-to-document compiler on npm, with an MCP server plus Claude Code and Codex plugins so agents render through it. A self-healing validation loop keeps the output grounded — exactly the guardrails a consumer therapy product needs.',
    href: 'https://barmoshe.github.io/mdp/',
    open: 'Open MDP',
    visual: MdpVisual,
  },
  {
    tag: 'PRODUCTION GENAI · OPENAI',
    title: 'MIDI GPT REST API',
    desc: 'An LLM product in production: OpenAI behind a REST API, orchestrated with Temporal across Go, Python, and TypeScript workers as one durable, multi-step pipeline. The agent-workflow muscle this role asks for.',
    href: 'https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal',
    open: 'See the writeup',
    visual: OrchestrateVisual,
  },
  {
    tag: 'FULL-STACK BACKEND',
    title: 'Israelify',
    desc: 'A streaming app with a Node API, auth, middleware, and a custom logger behind a React front end. The plain, production-grade backend base under the AI work.',
    href: 'https://github.com/barmoshe/Israelify-backend',
    open: 'View the code',
    visual: AppVisual,
  },
];

type Fit = { k: string; lead: string; body: string };

const FIT: Fit[] = [
  {
    k: 'GenAI, shipped to production',
    lead: 'Not a demo — live, on npm, with users.',
    body: 'My day-to-day is taking a model from prompt to a product people use: MDP turns a brief into a valid artifact deterministically, with a validation loop so agents cannot produce slop. When you say "a real RAG that works in production," that is the bar I already build to.',
  },
  {
    k: 'Backend engineering',
    lead: 'Python, durable workflows, real services.',
    body: 'Production-grade backend is home ground — REST APIs, event-driven execution, and durable Temporal workflows coordinating Go, Python, and TypeScript. As the primary engineer at an early-stage startup I own the full stack and the DevOps under it.',
  },
  {
    k: 'Agents & multi-step workflows',
    lead: 'MCP servers, tool use, orchestration.',
    body: 'MDP ships a working MCP server plus editor plugins — the same surface agents reach for. The MIDI GPT pipeline chains model calls across services into one reliable workflow. Frameworks like LangChain / LangGraph map onto patterns I have already wired by hand.',
  },
  {
    k: 'Providers, prompts & guardrails',
    lead: 'OpenAI · Anthropic · Google, evals, grounding.',
    body: 'I work hands-on across the major providers, design and iterate prompt pipelines, and care about cost, latency, and reliability — caching, tokens, evals, and grounding LLM outputs so they stay safe and consistent for real people.',
  },
];

// The "Pathway" — OurRitual frames every member journey as a personalized
// pathway; this mirrors that with the shape of the role, A to Z.
type Step = { n: string; t: string; d: string };
const PATHWAY: Step[] = [
  {
    n: '01',
    t: 'Own the GenAI architecture',
    d: 'Design the LLM pipelines and agents end-to-end, and integrate OpenAI, Anthropic, and Google behind clean production systems.',
  },
  {
    n: '02',
    t: 'Ship features into production',
    d: 'Move fast and hands-on, biased for action — break problems into steps and get AI features in front of users, then tighten cost, latency, and reliability.',
  },
  {
    n: '03',
    t: 'Make the RAG real',
    d: 'Build retrieval pipelines, embeddings, and grounding so the Consumer Therapy AI stays accurate, safe, and consistent — with evals and guardrails behind it.',
  },
];

export default function OurRitualApp() {
  return (
    <div className="mp-root or-root">
      <a className="or-skip" href="#main">Skip to content</a>

      {/* ── Top navigation ──────────────────────────────────── */}
      <header className="or-nav">
        <div className="or-nav__inner">
          <a className="or-brand" href="#main" aria-label="Bar Moshe">
            <RitualMark className="or-mark" />
            <span className="or-wordmark">Bar Moshe</span>
          </a>
          <span className="or-nav__tag">OurRitual · Application</span>
          <nav className="or-nav__links" aria-label="Sections">
            <a className="or-nav__link" href="#pathway">The role</a>
            <a className="or-nav__link" href="#work">Work</a>
            <a className="or-nav__link" href="#fit">Why me</a>
          </nav>
          <div className="or-nav__cta">
            <a className="or-btn or-btn--ghost or-btn--sm" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
            <a className="or-btn or-btn--primary or-btn--sm" href={EMAIL}>Get started</a>
          </div>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ── Hero (centered, OurRitual marketing style) ─────── */}
        <section className="or-hero">
          <div className="or-hero__inner">
            <p className="or-eyebrow">
              <span className="or-eyebrow__dot" />
              GENERATIVE AI ENGINEER · TEL AVIV
            </p>
            <h1 className="or-title">
              The world&rsquo;s first Consumer Therapy AI deserves an engineer who&nbsp;
              <span className="or-title__accent">actually ships it</span>.
            </h1>
            <p className="or-lede">
              I build Generative AI products that run in production — MCP tooling, agents, and
              RAG that works, not a slide. Hands-on, biased for action, and fluent across the
              backend and DevOps underneath. Here is that work, in your language.
            </p>
            <div className="or-hero__cta">
              <a className="or-btn or-btn--primary or-btn--lg" href={EMAIL}>
                Get started
                <span className="or-btn__arrow" aria-hidden="true">→</span>
              </a>
              <a className="or-btn or-btn--ghost or-btn--lg" href={CV} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>

            {/* Soft rounded "card" echoing the OurRitual hero image, with a
                translucent stat pill in the corner. */}
            <div className="or-herocard">
              <div className="or-herocard__art" aria-hidden="true">
                <RitualMark className="or-herocard__mark" />
                <div className="or-herocard__rings">
                  <span /><span /><span />
                </div>
              </div>
              <div className="or-herocard__pill">
                <RitualMark className="or-herocard__pill-mark" />
                <span>Real RAG, in production</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────────────── */}
        <div className="or-trust">
          <div className="or-trust__inner">
            <span className="or-trust__item"><b>~1 yr+</b> building with LLMs</span>
            <span className="or-trust__sep" />
            <span className="or-trust__item">Open source, <b>on npm</b></span>
            <span className="or-trust__sep" />
            <span className="or-trust__item">OpenAI · Anthropic · Google</span>
            <span className="or-trust__sep" />
            <span className="or-trust__item">Python · Go · TypeScript</span>
          </div>
        </div>

        {/* ── The Pathway (the role, A to Z) ────────────────── */}
        <section id="pathway" className="or-section">
          <div className="or-wrap">
            <header className="or-section__head">
              <p className="or-kicker">The pathway</p>
              <h2 className="or-h2">The role, A to Z — and how I&rsquo;d walk it.</h2>
              <p className="or-sub">
                OurRitual builds every journey as a personalized pathway. Here is the one this
                role describes, mapped to how I&rsquo;d lead the AI effort end-to-end.
              </p>
            </header>
            <ol className="or-path">
              {PATHWAY.map((s) => (
                <li className="or-path__step" key={s.n}>
                  <span className="or-path__n" aria-hidden="true">{s.n}</span>
                  <div className="or-path__body">
                    <h3 className="or-path__t">{s.t}</h3>
                    <p className="or-path__d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Proof of work ─────────────────────────────────── */}
        <section id="work" className="or-section or-section--soft">
          <div className="or-wrap">
            <header className="or-section__head">
              <p className="or-kicker">Proof, not claims</p>
              <h2 className="or-h2">A few things I&rsquo;ve shipped.</h2>
              <p className="or-sub">Each one is live. Open it and check for yourself.</p>
            </header>
            <div className="or-proof__grid">
              {PROOF.map((p) => (
                <a
                  key={p.title}
                  className="or-pcard"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="or-pcard__screen">{p.visual}</div>
                  <div className="or-pcard__body">
                    <span className="or-pcard__tag">{p.tag}</span>
                    <h3 className="or-pcard__title">{p.title}</h3>
                    <p className="or-pcard__desc">{p.desc}</p>
                    <span className="or-pcard__link" aria-hidden="true">{p.open} →</span>
                  </div>
                </a>
              ))}
            </div>
            <p className="or-proof__more">
              More in{' '}
              <a href="https://github.com/barmoshe" target="_blank" rel="noopener noreferrer">
                my portfolio
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── Why Bar, for this role ────────────────────────── */}
        <section id="fit" className="or-section">
          <div className="or-wrap">
            <header className="or-section__head">
              <p className="or-kicker">Why me, for this role</p>
              <h2 className="or-h2">Your posting, mapped to work I&rsquo;ve already done.</h2>
            </header>
            <div className="or-fit__grid">
              {FIT.map((f, i) => (
                <article className="or-fcard" key={f.k}>
                  <span className="or-fcard__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="or-fcard__k">{f.k}</h3>
                  <p className="or-fcard__lead">{f.lead}</p>
                  <p className="or-fcard__body">{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA band (coral) ──────────────────────────────── */}
        <section className="or-cta">
          <div className="or-cta__inner">
            <RitualMark className="or-cta__mark" />
            <h2 className="or-cta__title">Let&rsquo;s build it together.</h2>
            <p className="or-cta__sub">
              If the work above looks like the engineer you want leading the AI effort, I&rsquo;m
              one message away — a great human, all into teamwork, ready to do.
            </p>
            <div className="or-cta__links">
              <a className="or-btn or-btn--oncoral" href={EMAIL}>Email me</a>
              <a className="or-btn or-btn--oncoral-ghost" href="https://www.linkedin.com/in/barmoshe/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a className="or-btn or-btn--oncoral-ghost" href="https://github.com/barmoshe" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="or-btn or-btn--oncoral-ghost" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="or-footer">
        <div className="or-footer__inner">
          <div className="or-footer__brand">
            <span className="or-footer__lockup">
              <RitualMark className="or-mark" />
              <span className="or-wordmark">OurRitual</span>
            </span>
            <p className="or-footer__tag">
              An application page Bar Moshe built in OurRitual&rsquo;s brand for the Generative AI
              Engineer role in Tel Aviv. Not affiliated with OurRitual.
            </p>
          </div>
          <div className="or-footer__col">
            <p className="or-footer__h">The work</p>
            <ul>
              <li><a className="or-footer__link" href="https://barmoshe.github.io/mdp/" target="_blank" rel="noopener noreferrer">MDP + MCP server</a></li>
              <li><a className="or-footer__link" href="https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal" target="_blank" rel="noopener noreferrer">Temporal Code Exchange</a></li>
              <li><a className="or-footer__link" href="https://github.com/barmoshe" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className="or-footer__col">
            <p className="or-footer__h">Get in touch</p>
            <ul>
              <li><a className="or-footer__link" href={EMAIL}>1barmoshe1@gmail.com</a></li>
              <li><a className="or-footer__link" href="https://www.linkedin.com/in/barmoshe/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="or-footer__link" href={CV} target="_blank" rel="noopener noreferrer">Download CV</a></li>
            </ul>
          </div>
        </div>
        <div className="or-footer__bottom">
          <div className="or-footer__bottom-inner">
            <span>Built by Bar Moshe, in OurRitual&rsquo;s brand, for this application.</span>
            <span>Tel Aviv · 2026</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
