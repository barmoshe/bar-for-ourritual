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
};

const PROOF: Proof[] = [
  { tag: 'AI · Real-time', title: 'MIDI Agent', desc: 'A live call-and-response agent: it answers your MIDI phrase with editable, in-key MIDI in your DAW.', href: 'https://github.com/barmoshe/midi-agent' },
  { tag: 'AI · Pipeline', title: 'MIDI GPT REST API', desc: 'A REST API that generates MIDI: a multi-step pipeline on Temporal across Go, Python, and TypeScript workers, calling OpenAI with retries and validation.', href: 'https://github.com/barmoshe/AI_MIDI_API' },
  { tag: 'AI agents · Systems', title: 'Creative Harness', desc: 'An open AI-agent harness for Claude Code: skills, hooks, and tooling so one builder ships like a small team.', href: 'https://github.com/barmoshe/claude-creative-stack' },
  { tag: 'Open source · Logic', title: 'entailer', desc: 'An open-source logic-validity toolkit: it checks whether an argument actually follows.', href: 'https://github.com/barmoshe/entailer' },
  { tag: 'Generative · Audio', title: 'Biome', desc: 'A generative pad synth in the browser, state-machine driven. Built with Tone.js, Three.js, and Canvas2D.', href: 'https://biome-synth.lovable.app' },
  { tag: 'Computer vision · Game', title: 'Bloom Garden', desc: 'A webcam hand-gesture game: pinch to pluck flowers, on-device MediaPipe, no video ever leaves the browser.', href: 'https://bloom-garden-five.vercel.app' },
];

type Fit = { k: string; lead: string; body: string };

const FIT: Fit[] = [
  {
    k: 'GenAI in production',
    lead: 'Live, on npm, with users.',
    body: 'I take models from prompt to running software. MDP compiles a brief into a document and re-checks the result against the source before returning it. The MIDI GPT service runs OpenAI behind a REST API. Both are deployed, not demos.',
  },
  {
    k: 'Backend engineering',
    lead: 'Python, durable workflows, services.',
    body: 'I write REST APIs, event-driven execution, and durable Temporal workflows that coordinate Go, Python, and TypeScript. As the primary full-stack and DevOps engineer at Joomsy, an early-stage startup (team of five), I own the full stack and the DevOps under it.',
  },
  {
    k: 'Agents and multi-step workflows',
    lead: 'Tool use, orchestration, durable steps.',
    body: 'The MIDI GPT pipeline chains OpenAI calls across Go, Python, and TypeScript services into one durable workflow on Temporal. I have wired these multi-step, tool-using patterns by hand, the same ones LangChain and LangGraph cover.',
  },
  {
    k: 'Providers, prompts, and grounding',
    lead: 'OpenAI · Anthropic · Google, evals, grounding.',
    body: 'I work across the major providers and build prompt pipelines, and I watch cost, latency, and reliability: caching, tokens, evals, and grounding outputs so they stay consistent.',
  },
];

// The "Pathway" — OurRitual frames every member journey as a personalized
// pathway; this mirrors that with the shape of the role, A to Z.
type Step = { n: string; t: string; d: string };
const PATHWAY: Step[] = [
  {
    n: '01',
    t: 'GenAI architecture',
    d: 'Designing LLM pipelines and agents end to end, integrating OpenAI, Anthropic, and Google behind production systems. I have built and shipped systems like this.',
  },
  {
    n: '02',
    t: 'Shipping features to production',
    d: 'Breaking problems into steps, getting AI features in front of users, then working on cost, latency, and reliability. This is how I work day to day.',
  },
  {
    n: '03',
    t: 'Retrieval and grounding',
    d: 'Building retrieval pipelines, embeddings, and grounding, with evals behind them, so outputs stay accurate and consistent. I have done the grounding and validation side of this.',
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
              Generative AI engineer. I build and ship&nbsp;
              <span className="or-title__accent">LLM products in production</span>.
            </h1>
            <p className="or-lede">
              I build Generative AI systems that run in production: MCP tooling, agents, and
              retrieval pipelines, on top of the backend and DevOps that carry them. Below: a
              few I have shipped, and where they line up with this role.
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
                <span>Retrieval pipelines, in production</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────────────── */}
        <div className="or-trust">
          <div className="or-trust__inner">
            <span className="or-trust__item"><b>Shipping</b> LLM products</span>
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
              <h2 className="or-h2">What the role covers, and where I have done it.</h2>
              <p className="or-sub">
                OurRitual frames each journey as a pathway. Here is the one this role describes,
                with what I have built against each part.
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
              <p className="or-kicker">Selected work</p>
              <h2 className="or-h2">A few things I&rsquo;ve shipped.</h2>
              <p className="or-sub">Each one is live. Open it and look.</p>
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
                  <div className="or-pcard__body">
                    <span className="or-pcard__tag">{p.tag}</span>
                    <h3 className="or-pcard__title">{p.title}</h3>
                    <p className="or-pcard__desc">{p.desc}</p>
                    <span className="or-pcard__link" aria-hidden="true">View ↗</span>
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
              <p className="or-kicker">Experience, mapped to the role</p>
              <h2 className="or-h2">What the posting asks for, and where I&rsquo;ve done it.</h2>
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
            <h2 className="or-cta__title">Let&rsquo;s talk.</h2>
            <p className="or-cta__sub">
              If this lines up with what you&rsquo;re hiring for, I&rsquo;m one message away.
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
