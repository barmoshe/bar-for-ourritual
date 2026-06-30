import { ImageResponse } from 'next/og';

// Dynamic share card for the /ourritual application page, matching the page's
// ourritual.com look: a warm cream surface, the brand coral #E5654B, warm-brown
// copy, the two-petal mark, and a coral footer strip. Rendered at build time by
// next/og (Satori), so it uses a flexbox-only subset of CSS and plain hex colours.
// Next colocates this file with the route and wires the og:image / twitter:image
// tags automatically.

export const alt =
  'Bar Moshe for OurRitual, Generative AI Engineer. LLM systems in production: MCP tooling, agents, and retrieval pipelines.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f7f0e6',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Main panel */}
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 72px 48px',
            backgroundImage:
              'radial-gradient(760px 460px at 50% -8%, rgba(229,101,75,0.14), transparent 60%), radial-gradient(560px 420px at 92% 6%, rgba(242,164,143,0.16), transparent 58%)',
          }}
        >
          {/* Brand row */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="46" height="46" viewBox="0 0 32 32" fill="#e5654b">
              <path d="M16 3.5C21.6 11 21.6 21 16 28.5 10.4 21 10.4 11 16 3.5Z" transform="rotate(-30 16 16)" opacity="0.92" />
              <path d="M16 3.5C21.6 11 21.6 21 16 28.5 10.4 21 10.4 11 16 3.5Z" transform="rotate(30 16 16)" opacity="0.6" />
            </svg>
            <div style={{ display: 'flex', fontSize: 38, fontWeight: 700, color: '#2e2826', marginLeft: 12, letterSpacing: '-0.01em' }}>
              OurRitual
            </div>
            <div
              style={{
                display: 'flex',
                marginLeft: 18,
                padding: '8px 16px',
                borderRadius: 999,
                border: '1px solid #d8c9b3',
                backgroundColor: '#fbf6ee',
                fontSize: 22,
                fontWeight: 700,
                color: '#cf4f37',
              }}
            >
              Bar Moshe · Application
            </div>
          </div>

          {/* Headline */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                fontSize: 66,
                fontWeight: 700,
                color: '#2e2826',
                letterSpacing: '-0.02em',
                lineHeight: 1.07,
                maxWidth: '1000px',
              }}
            >
Generative AI engineer. I build and ship LLM products in production.
            </div>
            <div style={{ display: 'flex', fontSize: 31, color: '#5c5249', marginTop: '22px', maxWidth: '940px', lineHeight: 1.35 }}>
              LLM systems in production: MCP tooling, agents, and retrieval pipelines.
            </div>
          </div>

          {/* Foot meta */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 26, color: '#8a7d70' }}>
            <div style={{ display: 'flex' }}>github.com/barmoshe</div>
            <div style={{ display: 'flex', fontWeight: 700, color: '#cf4f37' }}>Generative AI Engineer · Tel Aviv</div>
          </div>
        </div>

        {/* Coral strip */}
        <div
          style={{
            display: 'flex',
            height: '14px',
            background: 'linear-gradient(90deg, #cf4f37 0%, #e5654b 52%, #ec8068 100%)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
