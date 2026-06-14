'use client';

import { useState, useEffect, useCallback } from 'react';

// ── Slide data ─────────────────────────────────────────────────
const SLIDES = [
  {
    label:  'Sistema Completo',
    price:  '$750/mes',
    result: '28 leads por semana',
    client: 'Oscar Rubio · inCruises España',
    bg:     '#0F2A1A',
    panel:  '#1A3D28',
    accent: '#C8D84B',
    image:  '/mockups/pipeline.png',
  },
  {
    label:  'Meta Ads MLM',
    price:  'Desde $15/día',
    result: 'CPL $8–15 calificado',
    client: 'Beatriz Vidal · España',
    bg:     '#0A1A2E',
    panel:  '#0F2540',
    accent: '#C8D84B',
    image:  '/mockups/meta-ads.png',
  },
  {
    label:  'LeadShield CRM',
    price:  '$147/mes',
    result: '5 agentes IA activos',
    client: 'Henry Orzan · España',
    bg:     '#1A0F2A',
    panel:  '#281540',
    accent: '#C8D84B',
    image:  '/mockups/crm-dashboard.png',
  },
  {
    label:  'Escala',
    price:  '$1,200/mes',
    result: 'Multi-canal + equipo',
    client: 'Cristina Isacura · España',
    bg:     '#1A1A0A',
    panel:  '#2A2810',
    accent: '#C8D84B',
    image:  '/mockups/scale.png',
  },
] as const;

type Slide = typeof SLIDES[number];

// ── Column config ──────────────────────────────────────────────
const COLS   = ['Nuevo', 'Contactado', 'Presentación', 'Cierre'] as const;
const COL_CLR = ['#3B82F6', '#C8D84B', '#A78BFA', '#34D399'] as const;
const NAMES  = ['Lucía F.', 'Ana G.', 'Diego M.', 'Juan T.', 'Marcos P.', 'Sofía L.', 'Carlos R.', 'Elena V.'];
const TIMES  = ['4 min', 'Ayer', '3d', '✓', '12 min', '4d', '2h', ''];
const COUNTS = [3, 2, 2, 1] as const;

// ── SlideMockup ────────────────────────────────────────────────
function SlideMockup({ slide }: { slide: Slide }) {
  const colColors = [COL_CLR[0], slide.accent, COL_CLR[2], COL_CLR[3]];
  return (
    <div style={{
      width:          '100%',
      height:         '100%',
      background:     slide.panel,
      borderRadius:   24,
      border:         `1px solid ${slide.accent}22`,
      padding:        20,
      display:        'flex',
      flexDirection:  'column',
      justifyContent: 'space-between',
      boxShadow:      `0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px ${slide.accent}15`,
      overflow:       'hidden',
    }}>
      {/* Badge plan */}
      <div style={{
        background:    slide.accent,
        color:         '#0A1520',
        fontFamily:    'Bricolage Grotesque, sans-serif',
        fontWeight:    700,
        fontSize:      10,
        padding:       '3px 10px',
        borderRadius:  100,
        alignSelf:     'flex-start',
        letterSpacing: '0.07em',
        textTransform: 'uppercase',
        whiteSpace:    'nowrap',
        marginBottom:  12,
      }}>
        {slide.label}
      </div>

      {/* Mini pipeline mock */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap:                 5,
        flex:                1,
        marginBottom:        12,
        minHeight:           0,
        overflow:            'hidden',
      }}>
        {COLS.map((col, ci) => (
          <div key={col} style={{ overflow: 'hidden' }}>
            <div style={{
              fontSize:      8,
              color:         '#7A8FA8',
              fontWeight:    700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              paddingBottom: 5,
              borderBottom:  `2px solid ${colColors[ci]}`,
              marginBottom:  6,
              whiteSpace:    'nowrap',
              overflow:      'hidden',
              textOverflow:  'ellipsis',
            }}>
              {col}
            </div>
            {Array.from({ length: COUNTS[ci] }).map((_, j) => {
              const idx = ci * 2 + j;
              return (
                <div key={j} style={{
                  background:  '#0A1520',
                  borderRadius: 5,
                  padding:     '5px 6px',
                  marginBottom: 4,
                  borderLeft:  `2px solid ${colColors[ci]}`,
                }}>
                  <div style={{ fontSize: 9, fontWeight: 600, color: '#EEF0E8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {NAMES[idx]}
                  </div>
                  <div style={{ fontSize: 8, color: '#7A8FA8', marginTop: 1 }}>
                    Meta · {TIMES[idx]}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Resultado */}
      <div style={{
        background:   `${slide.accent}15`,
        border:       `1px solid ${slide.accent}28`,
        borderRadius: 10,
        padding:      '8px 12px',
      }}>
        <div style={{
          fontSize:    16,
          fontWeight:  800,
          color:       slide.accent,
          fontFamily:  'Bricolage Grotesque, sans-serif',
          letterSpacing: '-0.02em',
          whiteSpace:  'nowrap',
          overflow:    'hidden',
          textOverflow:'ellipsis',
        }}>
          {slide.result}
        </div>
        <div style={{ fontSize: 10, color: '#7A8FA8', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {slide.client}
        </div>
      </div>
    </div>
  );
}

// ── Role styles ────────────────────────────────────────────────
type Role = 'center' | 'left' | 'right' | 'back';

function getRoleStyle(role: Role, isMobile: boolean): React.CSSProperties {
  const TRANSITION = 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), bottom 650ms cubic-bezier(0.4,0,0.2,1), height 650ms cubic-bezier(0.4,0,0.2,1)';
  const base: React.CSSProperties = {
    position:        'absolute',
    aspectRatio:     '0.65 / 1',
    transition:      TRANSITION,
    willChange:      'transform, filter, opacity',
    cursor:          'pointer',
  };
  switch (role) {
    case 'center': return { ...base,
      height:    isMobile ? '58%' : '88%',
      bottom:    isMobile ? '20%' : '2%',
      left:      '50%',
      transform: `translateX(-50%) scale(${isMobile ? 1.2 : 1.55})`,
      filter:    'none',
      opacity:   1,
      zIndex:    20,
    };
    case 'left': return { ...base,
      height:    isMobile ? '18%' : '30%',
      bottom:    isMobile ? '28%' : '14%',
      left:      isMobile ? '18%' : '28%',
      transform: 'translateX(-50%) scale(1)',
      filter:    'blur(2px)',
      opacity:   0.7,
      zIndex:    10,
    };
    case 'right': return { ...base,
      height:    isMobile ? '18%' : '30%',
      bottom:    isMobile ? '28%' : '14%',
      left:      isMobile ? '82%' : '72%',
      transform: 'translateX(-50%) scale(1)',
      filter:    'blur(2px)',
      opacity:   0.7,
      zIndex:    10,
    };
    case 'back': return { ...base,
      height:    isMobile ? '14%' : '20%',
      bottom:    isMobile ? '30%' : '14%',
      left:      '50%',
      transform: 'translateX(-50%) scale(1)',
      filter:    'blur(4px)',
      opacity:   0.5,
      zIndex:    5,
    };
  }
}

// ── HeroCarousel ───────────────────────────────────────────────
export default function HeroCarousel({ goContacto }: { goContacto: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile]       = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    SLIDES.forEach((s) => { const img = new Image(); img.src = s.image; });
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const navigate = useCallback((dir: 'next' | 'prev') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => dir === 'next' ? (prev + 1) % 4 : (prev + 3) % 4);
    setTimeout(() => setIsAnimating(false), 650);
  }, [isAnimating]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  navigate('prev');
      if (e.key === 'ArrowRight') navigate('next');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  const center = activeIndex;
  const left   = (activeIndex + 3) % 4;
  const right  = (activeIndex + 1) % 4;
  const back   = (activeIndex + 2) % 4;

  const roleOf = (i: number): Role => {
    if (i === center) return 'center';
    if (i === left)   return 'left';
    if (i === right)  return 'right';
    return 'back';
  };

  const slide = SLIDES[activeIndex];

  return (
    <div
      id="home"
      style={{
        backgroundColor: slide.bg,
        transition:      'background-color 650ms cubic-bezier(0.4,0,0.2,1)',
        fontFamily:      'DM Sans, sans-serif',
        position:        'relative',
        width:           '100%',
        overflow:        'hidden',
      }}
    >
      <div style={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative' }}>

        {/* ── A. Grain overlay ── */}
        <div
          aria-hidden="true"
          style={{
            position:          'absolute',
            inset:             0,
            zIndex:            50,
            pointerEvents:     'none',
            opacity:           0.3,
            backgroundImage:   `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize:    '200px 200px',
            backgroundRepeat:  'repeat',
          }}
        />

        {/* ── B. Glow shader (CSS fallback — no shaders package) ── */}
        <div
          aria-hidden="true"
          className="hero-carousel-shader"
          style={{
            position:      'absolute',
            inset:         0,
            zIndex:        10,
            pointerEvents: 'none',
          }}
        />

        {/* ── C. Ghost text "LEAD SYSTEM" ── */}
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            top:           '18%',
            left:          '50%',
            transform:     'translateX(-50%)',
            zIndex:        2,
            pointerEvents: 'none',
            userSelect:    'none',
            whiteSpace:    'nowrap',
            fontFamily:    'Bricolage Grotesque, sans-serif',
            fontSize:      'clamp(70px,22vw,300px)',
            fontWeight:    900,
            color:         'white',
            opacity:       0.05,
            letterSpacing: '-0.03em',
          }}
        >
          LEAD SYSTEM
        </div>

        {/* ── D. Pill navbar ── */}
        <nav style={{ position: 'absolute', top: 16, left: 0, right: 0, zIndex: 60, padding: '0 20px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{
              background:     'rgba(15,27,45,0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border:         '1px solid rgba(200,216,75,0.12)',
              borderRadius:   100,
              padding:        '6px 6px 6px 20px',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'space-between',
            }}>
              {/* Logo */}
              <span style={{
                fontFamily:    'Bricolage Grotesque, sans-serif',
                fontWeight:    800,
                fontSize:      18,
                color:         '#EEF0E8',
                letterSpacing: '-0.03em',
              }}>
                atrae<span style={{ color: '#C8D84B' }}>Lab</span>
              </span>

              {/* Links desktop */}
              <div style={{ display: 'flex', gap: 28 }} className="hero-nav-links">
                {(['Servicios', 'Sistema', 'Clientes', 'Precios', 'Contacto'] as const).map((l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    style={{ fontSize: 14, color: '#7A8FA8', textDecoration: 'none', transition: 'color .15s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#EEF0E8'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#7A8FA8'; }}
                  >
                    {l}
                  </a>
                ))}
              </div>

              {/* CTA button */}
              <button
                onClick={goContacto}
                style={{
                  background:    '#C8D84B',
                  color:         '#0A1520',
                  fontFamily:    'Bricolage Grotesque, sans-serif',
                  fontWeight:    700,
                  fontSize:      14,
                  borderRadius:  100,
                  padding:       '10px 20px',
                  border:        'none',
                  cursor:        'pointer',
                  transition:    'transform .15s, box-shadow .2s',
                  whiteSpace:    'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform  = 'translateY(-1px) scale(1.02)';
                  e.currentTarget.style.boxShadow  = '0 0 20px rgba(200,216,75,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform  = '';
                  e.currentTarget.style.boxShadow  = '';
                }}
              >
                Diagnóstico gratuito →
              </button>
            </div>
          </div>
        </nav>

        {/* ── E. Progress dots (top center) ── */}
        <div style={{
          position:  'absolute',
          top:       90,
          left:      '50%',
          transform: 'translateX(-50%)',
          zIndex:    60,
          display:   'flex',
          gap:       6,
        }}>
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => !isAnimating && setActiveIndex(i)}
              style={{
                width:        i === activeIndex ? 24 : 6,
                height:       6,
                borderRadius: 3,
                background:   i === activeIndex ? '#C8D84B' : 'rgba(200,216,75,0.25)',
                transition:   'width 400ms cubic-bezier(0.4,0,0.2,1), background 400ms',
                cursor:       'pointer',
              }}
            />
          ))}
        </div>

        {/* ── E. Carousel slides ── */}
        {SLIDES.map((s, i) => {
          const role = roleOf(i);
          const rs   = getRoleStyle(role, isMobile);
          return (
            <div
              key={s.label}
              style={rs}
              onClick={() => {
                if (role === 'left')  navigate('prev');
                if (role === 'right') navigate('next');
              }}
            >
              <SlideMockup slide={s} />
            </div>
          );
        })}

        {/* ── F. Bottom-left: copy + nav buttons ── */}
        <div style={{
          position:  'absolute',
          bottom:    isMobile ? 24 : 80,
          left:      isMobile ? 16 : 96,
          zIndex:    60,
          maxWidth:  340,
        }}>
          {/* Active badge */}
          <div style={{
            display:       'inline-flex',
            alignItems:    'center',
            gap:           8,
            background:    'rgba(200,216,75,0.12)',
            border:        '1px solid rgba(200,216,75,0.2)',
            borderRadius:  100,
            padding:       '5px 14px 5px 8px',
            marginBottom:  12,
          }}>
            <div style={{
              width:      7,
              height:     7,
              borderRadius: '50%',
              background: '#C8D84B',
              animation:  'hc-pulse 2s ease infinite',
            }} />
            <span style={{
              fontSize:      12,
              color:         '#C8D84B',
              fontWeight:    600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {slide.label}
            </span>
          </div>

          <p style={{
            fontFamily:    'Bricolage Grotesque, sans-serif',
            fontWeight:    800,
            fontSize:      isMobile ? 18 : 26,
            color:         '#EEF0E8',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            marginBottom:  8,
            lineHeight:    1.15,
          }}>
            Sistema de captación<br />para network marketing
          </p>

          {!isMobile && (
            <p style={{ fontSize: 14, color: '#7A8FA8', lineHeight: 1.6, marginBottom: 20, maxWidth: 280 }}>
              Pauta, CRM con IA y seguimiento automatizado
              para líderes que quieren escalar sin perseguir prospectos.
            </p>
          )}

          {/* Nav buttons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {(['prev', 'next'] as const).map((dir, bi) => (
              <button
                key={dir}
                onClick={() => navigate(dir)}
                style={{
                  width:      isMobile ? 44 : 56,
                  height:     isMobile ? 44 : 56,
                  borderRadius: '50%',
                  background: 'transparent',
                  border:     '2px solid rgba(200,216,75,0.4)',
                  color:      '#C8D84B',
                  cursor:     'pointer',
                  display:    'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 150ms, background 150ms, border-color 150ms',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform   = 'scale(1.08)';
                  e.currentTarget.style.background  = 'rgba(200,216,75,0.12)';
                  e.currentTarget.style.borderColor = '#C8D84B';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform   = '';
                  e.currentTarget.style.background  = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(200,216,75,0.4)';
                }}
                aria-label={dir === 'prev' ? 'Anterior' : 'Siguiente'}
              >
                {bi === 0
                  ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><path d="m15 18-6-6 6-6" /></svg>
                  : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25"><path d="m9 18 6-6-6-6" /></svg>
                }
              </button>
            ))}
          </div>
        </div>

        {/* ── G. Bottom-right: CTA "VER EL SISTEMA" ── */}
        <a
          href="#sistema"
          style={{
            position:      'absolute',
            bottom:        isMobile ? 24 : 80,
            right:         isMobile ? 16 : 40,
            zIndex:        60,
            display:       'flex',
            alignItems:    'center',
            gap:           8,
            fontFamily:    'Bricolage Grotesque, sans-serif',
            fontSize:      `clamp(16px,3.5vw,42px)`,
            fontWeight:    800,
            color:         '#EEF0E8',
            opacity:       0.9,
            textDecoration:'none',
            letterSpacing: '-0.02em',
            lineHeight:    1,
            textTransform: 'uppercase',
            transition:    'opacity 200ms',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.9'; }}
        >
          {isMobile ? 'Ver sistema' : 'Ver el sistema'}
          <svg
            width={isMobile ? 20 : 32}
            height={isMobile ? 20 : 32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>

      </div>
    </div>
  );
}
