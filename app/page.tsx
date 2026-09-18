'use client';

import { useState, useEffect, type CSSProperties } from 'react';
import './v3.css';
import { sendEmail } from '@/lib/send-email';

function Avatar({ src, alt, initials, className = 'tc-avatar', style }: { src: string; alt: string; initials: string; className?: string; style?: CSSProperties }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={className} style={style}>{initials}</div>;
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneCC, setPhoneCC] = useState('57');
  const [phoneLocal, setPhoneLocal] = useState('');

  useEffect(() => {
    const nav = document.getElementById('nav');
    const handleScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    const rippleEls = document.querySelectorAll<HTMLElement>('.btn-primary, .pr-cta:not(.outline), .fsub');
    const rippleHandlers: Array<[HTMLElement, (e: MouseEvent) => void]> = [];
    rippleEls.forEach((btn) => {
      const h = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--mx', `${e.clientX - r.left}px`);
        btn.style.setProperty('--my', `${e.clientY - r.top}px`);
      };
      btn.addEventListener('mousemove', h);
      rippleHandlers.push([btn, h]);
    });

    const cards = document.querySelectorAll<HTMLElement>('.prcard, .tcard');
    const cardHandlers: Array<[HTMLElement, (e: MouseEvent) => void, () => void]> = [];
    cards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
        card.style.transform = `translateY(-5px) perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      };
      const leave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      cardHandlers.push([card, move, leave]);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      io.disconnect();
      rippleHandlers.forEach(([btn, h]) => btn.removeEventListener('mousemove', h));
      cardHandlers.forEach(([card, move, leave]) => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setFormStatus('loading');
    const result = await sendEmail({
      name: (data.get('name') as string) || '',
      business: (data.get('business') as string) || '',
      whatsapp: `+${phoneCC}${phoneLocal.replace(/\D/g, '')}`,
      email: (data.get('email') as string) || '',
      teamSize: (data.get('teamSize') as string) || '',
      budget: (data.get('budget') as string) || '',
      message: (data.get('message') as string) || '',
    });
    if (result.success) {
      setFormStatus('success');
      form.reset();
      setPhoneLocal('');
      setPhoneCC('57');
    } else {
      setFormStatus('error');
    }
  }

  function goContacto() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* NAV — TODO: agregar logo cuando esté disponible en el repo */}
      <nav id="nav">
        <a className="nav-logo" href="#home"><span>atrae</span>Lab</a>
        <ul className="nav-links">
          <li><a href="#problemas">Problemas</a></li>
          <li><a href="#sistema">Sistema</a></li>
          <li><a href="#testimonios">Clientes</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a className="nav-cta" href="#contacto">Diagnóstico gratuito</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-radial" />
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="badge-dot" />
              Sistema activo en 30+ redes de network marketing
            </div>
            <h1>Más <em>presentaciones.</em><br />Menos prospección<br />en frío.</h1>
            <p className="hero-sub">
              Pauta, funnel y CRM propio para líderes que necesitan prospectos calificados,
              seguimiento rápido y orden en su operación.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#contacto">Quiero más prospectos →</a>
              <a className="btn-secondary" href="https://leads.atraelab.com" target="_blank" rel="noopener noreferrer">
                Ver LeadShield CRM →
              </a>
            </div>
            <div className="hero-channels">
              <span className="ch-label">Canales que operamos</span>
              <div className="ch-pill">
                <img src="/logos/meta.svg" alt="Meta Ads" />
                <span>Meta Ads</span>
              </div>
              <div className="ch-pill">
                <img src="/logos/google.svg" alt="Google Ads" />
                <span>Google Ads</span>
              </div>
              <div className="ch-pill">
                <img src="/logos/tiktok.svg" alt="TikTok Ads" />
                <span>TikTok Ads</span>
              </div>
            </div>
          </div>
          {/* COLUMNA DERECHA: Mockup CRM flotante */}
          <div className="hero-visual">
            <div className="hero-crm-mock">
              <div className="mock-header">
                <span className="mock-title">LeadShield CRM</span>
                <span className="mock-new-tag">● Nuevo lead</span>
              </div>
              <div className="mock-pipeline">
                <div className="mock-col-head c1">Nuevo</div>
                <div className="mock-col-head c2">Contactado</div>
                <div className="mock-col-head c3">Demo</div>
                <div className="mock-col-head c4">Cerrado</div>
              </div>
              <div className="mock-leads">
                <div className="mock-lead b">Ana G.</div>
                <div className="mock-lead y">Luis M.</div>
                <div className="mock-lead p">Sara V.</div>
                <div className="mock-lead g">Pedro R.</div>
                <div className="mock-lead b">María L.</div>
                <div className="mock-lead y">Juan P.</div>
                <div className="mock-lead p">Carla D.</div>
                <div className="mock-lead g">Diego F.</div>
              </div>
              <div className="mock-footer">
                <div className="mock-stat">
                  <div className="mock-stat-num">38</div>
                  <div className="mock-stat-label">Leads activos</div>
                </div>
                <div className="mock-stat">
                  <div className="mock-stat-num">&lt;5m</div>
                  <div className="mock-stat-label">Resp. promedio</div>
                </div>
                <div className="mock-stat">
                  <div className="mock-stat-num">92%</div>
                  <div className="mock-stat-label">Contactados</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-stats reveal">
            <div className="hstat">
              <div className="hstat-num">&lt;5 min</div>
              <div className="hstat-label">Velocidad objetivo de primer contacto</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">30+</div>
              <div className="hstat-label">Equipos de network marketing activos</div>
            </div>
            <div className="hstat">
              <div className="hstat-num">1 sistema</div>
              <div className="hstat-label">Pauta + funnel + CRM + IA integrados</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="s-problems" id="problemas">
        <div className="container">
          <div className="s-label">El problema</div>
          <h2>Los 3 cuellos de botella<br />que más frenan una red</h2>
          <p className="s-intro">
            Si tu crecimiento depende de mensajes manuales, seguimiento irregular o prospectos
            sin filtro, el problema no es solo la pauta.
          </p>
          <div className="p-grid">
            <div className="pcard reveal">
              <div className="ptag">Leads fríos</div>
              <h3>Hablas con curiosos que nunca llegan a una presentación</h3>
              <p>
                El embudo filtra mejor desde el anuncio, la landing y el primer contacto para
                que tu equipo no pierda tiempo en conversaciones sin perfil.
              </p>
              <div className="pfoot">→ Filtro antes de entrar a WhatsApp</div>
            </div>
            <div className="pcard reveal d1">
              <div className="ptag">Seguimiento</div>
              <h3>Los mejores leads quedan sin respuesta por falta de orden</h3>
              <p>
                Cuando varios líderes contactan al mismo tiempo, el CRM ordena tareas, próximos
                pasos y evita que los mejores leads se pierdan.
              </p>
              <div className="pfoot">→ Operación visible para todo el equipo</div>
            </div>
            <div className="pcard reveal d2">
              <div className="ptag">Presentaciones</div>
              <h3>Demasiada energía puesta en perseguir gente que no llega</h3>
              <p>
                Mensajes, recordatorios y contenidos preparan al prospecto antes de la llamada
                para que la presentación llegue mejor armada.
              </p>
              <div className="pfoot">→ Más orden antes, durante y después</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="s-testimonials" id="testimonios">
        <div className="container">

          <div className="t-header">
            <div>
              <div className="s-label">Clientes reales</div>
              <h2>Lo que dicen los líderes<br />que ya usan el sistema</h2>
            </div>
            <div>
              <div className="t-count-num">30+</div>
              <div className="t-count-label">equipos activos hoy</div>
            </div>
          </div>

          {/* FEATURED — Beatriz Vidal */}
          <div className="t-featured reveal">
            <div className="t-feat-inner">
              <div>
                <span className="t-feat-quote">&ldquo;</span>
                <p className="t-feat-text">Antes sentía que se me había terminado la lista de contactos y tenía que salir a buscar prospectos sin rumbo. Ahora es completamente diferente: son los prospectos quienes me contactan directamente por WhatsApp, incluso desde diferentes lugares. Ha supuesto un antes y un después en mi negocio.</p>
                <div className="t-feat-result">📈 De 0 a 8 prospectos en un solo día</div>
              </div>
              <div className="t-feat-side">
                <div className="t-feat-avatar">BV</div>
                <div className="t-feat-side-info">
                  <div className="t-feat-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  <div className="t-feat-name">Beatriz Vidal</div>
                  <div className="t-feat-meta">Marketing Director · España</div>
                  <div className="t-feat-net">inCruises</div>
                </div>
              </div>
            </div>
          </div>

          {/* GRID TOP — 3 columnas */}
          <div className="t-grid-top">

            <div className="tcard reveal">
              <div className="tc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="tc-quote">&ldquo;</div>
              <p className="tc-text">Llevo más de dos años con Jose y su equipo, siempre a disposición y con iniciativa. Todo mi equipo ya cuenta con un sistema de adquisición de leads duplicable y funcional.</p>
              <div className="tc-author">
                <Avatar
                  src="https://lsgeaonumjmjtexfjpsz.supabase.co/storage/v1/object/public/testimonials/photos/d5565e6204db0f5be0dc7c26d656f5ffb438920cd9d6b1f6/556b14b1-a8de-41e0-a1c3-186517f8bb1f.jpg"
                  alt="Henry Orzan"
                  initials="HO"
                />
                <div>
                  <div className="tc-name">Henry Orzan</div>
                  <div className="tc-meta">Sr. Marketing Director · España</div>
                  <div className="tc-net">inCruises</div>
                </div>
              </div>
            </div>

            <div className="tcard reveal d1">
              <div className="tc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="tc-quote">&ldquo;</div>
              <p className="tc-text">Esta plataforma me permitió gestionar mejor mi equipo, automatizar tareas que antes me quitaban mucho tiempo y mantener seguimiento constante. He podido desarrollar mi negocio en distintos países.</p>
              <div className="tc-author">
                <Avatar
                  src="https://lsgeaonumjmjtexfjpsz.supabase.co/storage/v1/object/public/testimonials/photos/765c68a0ab0e30ea0869337aaf18d262986b38bf801853d0/a19c822a-762c-4f1c-a3c6-54e13248323f.jpeg"
                  alt="Cristina Isacura"
                  initials="CI"
                />
                <div>
                  <div className="tc-name">Cristina Isacura</div>
                  <div className="tc-meta">National Director · España</div>
                  <div className="tc-net">inCruises</div>
                </div>
              </div>
            </div>

            <div className="tcard reveal d2">
              <div className="tc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="tc-quote">&ldquo;</div>
              <p className="tc-text">Muy buena experiencia, son rápidos y efectivos. Hay un trato muy cercano y son resolutivos e innovadores.</p>
              <div className="tc-result">📈 Leads sin tener que buscarlos</div>
              <div className="tc-author">
                <Avatar
                  src="https://lsgeaonumjmjtexfjpsz.supabase.co/storage/v1/object/public/testimonials/photos/73af6d78d22e1d814ca2e309a72374a60e66ff5651bb5fae/b405a04a-db84-4b9b-8a93-ca1500af40de.jpeg"
                  alt="Lisseth"
                  initials="L"
                />
                <div>
                  <div className="tc-name">Lisseth</div>
                  <div className="tc-meta">Líder · España</div>
                  <div className="tc-net">inCruises</div>
                </div>
              </div>
            </div>

          </div>

          {/* GRID BOTTOM — 2 columnas */}
          <div className="t-grid-bot">

            <div className="tcard reveal">
              <div className="tc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="tc-quote">&ldquo;</div>
              <p className="tc-text">Excelente profesional, muy implicado en el trabajo de tracking y creación de anuncios.</p>
              <div className="tc-result">📈 10 leads por semana de forma constante</div>
              <div className="tc-author">
                <Avatar
                  src="https://lsgeaonumjmjtexfjpsz.supabase.co/storage/v1/object/public/testimonials/photos/552484c203c8dcd95fbb43f5229db1fdd415c27b29d4b11f/5160b811-29eb-4a91-8b77-4e44f586b3fb.jpeg"
                  alt="Oscar Rubio"
                  initials="OR"
                />
                <div>
                  <div className="tc-name">Oscar Rubio</div>
                  <div className="tc-meta">National Director · España</div>
                  <div className="tc-net">inCruises</div>
                </div>
              </div>
            </div>

            <div className="tcard reveal d1">
              <div className="tc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
              <div className="tc-quote">&ldquo;</div>
              <p className="tc-text">Muy agradecida con el equipo por el aporte invaluable, excelente organización de mi tiempo. Excelente comunicación y resultados.</p>
              <div className="tc-result">📈 Mi negocio ha crecido en diferentes países</div>
              <div className="tc-author">
                <Avatar
                  src="https://lsgeaonumjmjtexfjpsz.supabase.co/storage/v1/object/public/testimonials/photos/f86a5b50f60b55518820f0a90fb724320f44c464fc6f29e3/1270a078-0a50-4d22-8d3a-9201e812c608.jpg"
                  alt="Thaiana Ledezma"
                  initials="TL"
                />
                <div>
                  <div className="tc-name">Thaiana Ledezma</div>
                  <div className="tc-meta">Regional Director · España</div>
                  <div className="tc-net">inCruises</div>
                </div>
              </div>
            </div>

          </div>

          {/* Lina Hurtado — card ancha */}
          <div style={{ marginTop: '14px' }}>
            <div className="tcard reveal">
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '24px', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', minWidth: '100px' }}>
                  <Avatar
                    src="https://lsgeaonumjmjtexfjpsz.supabase.co/storage/v1/object/public/testimonials/photos/4583827f6932ae1b5abf4ed99ed14f1e6971ca8011fc3cb1/be67f3ae-6f7a-4dac-8cbe-d35266c0974b.jpg"
                    alt="Lina Hurtado"
                    initials="LH"
                    style={{ width: '52px', height: '52px', fontSize: '16px' }}
                  />
                  <div className="tc-name" style={{ textAlign: 'center' }}>Lina Hurtado</div>
                  <div className="tc-meta" style={{ textAlign: 'center' }}>Distribuidora</div>
                  <div className="tc-net">inCruises</div>
                </div>
                <div>
                  <div className="tc-stars" style={{ marginBottom: '10px' }}><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                  <p className="tc-text" style={{ fontSize: '15px' }}>&ldquo;Tengo una muy buena experiencia ya que son personas muy comprometidas y eso hace que todo sea más fácil.&rdquo;</p>
                  <div className="tc-result" style={{ marginTop: '14px', display: 'inline-flex' }}>📈 Llegué a mi primer rango en muy poco tiempo</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a className="btn-secondary" href="#contacto">Quiero resultados como estos →</a>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="s-pricing" id="precios">
        <div className="container">
          <div className="s-label">Planes y precios</div>
          <h2>Dos formas claras<br />de empezar bien</h2>
          <p className="s-intro">
            Pensados para Colombia, Chile y México. Un plan para ordenar la captación y otro
            para escalar con más automatización, contenido y soporte.
          </p>
          <div className="pr-grid">

            <div className="prcard reveal">
              <div className="pr-name">Growth</div>
              <p className="pr-desc">Para equipos que ya están captando y necesitan una operación más clara para filtrar, ordenar y dar seguimiento.</p>
              <div className="pr-price">
                <span className="pr-currency">$</span>
                <span className="pr-num">350</span>
                <span className="pr-per">/mes</span>
              </div>
              <div className="pr-setup">Base sólida para operar con orden</div>
              <div className="pr-divider" />
              <ul className="pr-features">
                <li>LeadShield CRM configurado para tu operación</li>
                <li>Formulario filtrado + automatización base</li>
                <li>Avisos por correo y WhatsApp para tu equipo</li>
                <li>Revisión semanal de operación y ajustes</li>
                <li>Hasta 3 videos al mes para captación</li>
                <li>Tu equipo atiende los prospectos dentro de un sistema mucho más claro</li>
              </ul>
              <button className="pr-cta outline" onClick={goContacto}>Quiero Growth</button>
            </div>

            <div className="prcard featured reveal d1">
              <div className="pr-badge">Más completo</div>
              <div className="pr-name">Scale</div>
              <p className="pr-desc">Para operaciones que quieren más volumen, más automatización y una capa de marketing más completa sobre la misma base.</p>
              <div className="pr-price">
                <span className="pr-currency">$</span>
                <span className="pr-num">500</span>
                <span className="pr-per">/mes</span>
              </div>
              <div className="pr-setup">Más sistema, más soporte, más estructura</div>
              <div className="pr-divider" />
              <ul className="pr-features">
                <li>Todo lo de Growth</li>
                <li>Hasta 4 videos al mes</li>
                <li>ManyChat para automatización inicial</li>
                <li>Email marketing para seguimiento y activación</li>
                <li>Acompañamiento más cercano en flujo comercial y lectura operativa</li>
                <li>Mejor soporte para campañas, agenda y control del equipo</li>
              </ul>
              <button className="pr-cta" onClick={goContacto}>Quiero Scale</button>
            </div>

          </div>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text2)', marginTop: '28px' }}>
            Precios en USD · Landing nueva, dominio, hosting, community management y automatizaciones avanzadas se cotizan aparte.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="s-process" id="sistema">
        <div className="container">
          <div className="s-label">El proceso</div>
          <h2>Sistema activo<br />en 3 semanas</h2>
          <p className="s-intro">No tardamos meses. En la semana 2 ya hay campañas activas y leads entrando al CRM.</p>
          <div className="proc-grid reveal">
            <div className="proc-step">
              <div className="proc-num">01</div>
              <div className="proc-week">Semana 1</div>
              <h3>Diagnóstico</h3>
              <p>Revisamos oferta, país, perfil de prospecto y cómo están reclutando hoy.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num">02</div>
              <div className="proc-week">Semana 1–2</div>
              <h3>Funnel</h3>
              <p>Definimos anuncio, landing y filtro para que tu equipo reciba mejores conversaciones.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num">03</div>
              <div className="proc-week">Semana 2–3</div>
              <h3>Lanzamiento</h3>
              <p>Activamos campañas y LeadShield CRM. Los leads empiezan a entrar.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num">04</div>
              <div className="proc-week">Mes 1–3</div>
              <h3>Seguimiento</h3>
              <p>Miramos calidad del lead, show-up y presentaciones — no solo costo por formulario.</p>
            </div>
            <div className="proc-step">
              <div className="proc-num">05</div>
              <div className="proc-week">Mes 3+</div>
              <h3>Escala</h3>
              <p>Escalamos solo cuando el sistema ya sostiene volumen sin perder orden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CRM */}
      <section className="s-crm" id="crm">
        <div className="container">
          <div className="crm-inner">
            <div className="reveal">
              <div className="s-label">LeadShield CRM</div>
              <h2>Ningún prospecto<br />se pierde</h2>
              <p style={{ color: 'var(--text2)', fontSize: '16px', lineHeight: '1.65' }}>
                LeadShield es nuestro CRM propio, construido específicamente para network
                marketing. No es una herramienta genérica adaptada.
              </p>
              <ul className="crm-features">
                <li>Pipeline Kanban con drag &amp; drop</li>
                <li>Seguimiento de fuente por canal (Meta, Google, TikTok)</li>
                <li>Notificaciones automáticas por WhatsApp al instante</li>
                <li>5 agentes de IA: scoring, nurturing, reportes semanales</li>
                <li>Reportes en tiempo real de conversión por etapa</li>
                <li>Acceso para múltiples líderes del equipo</li>
              </ul>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a className="btn-primary" href="https://leads.atraelab.com" target="_blank" rel="noopener noreferrer">
                  Ver LeadShield CRM →
                </a>
                <a className="btn-secondary" href="#contacto">Incluirlo en mi plan</a>
              </div>
            </div>
            <div className="reveal d1">
              <div className="crm-mock">
                <div className="crm-bar">
                  <span className="crm-title">Pipeline — Tu equipo</span>
                  <span className="crm-bdg">28 leads hoy</span>
                </div>
                <div className="crm-pipe">
                  <div className="crm-col">
                    <h4 className="c1">Nuevo ·8</h4>
                    <div className="crm-leads">
                      <div className="crm-lead b"><div className="crm-lead-name">Lucía F.</div><div className="crm-lead-meta">Meta · 4 min</div></div>
                      <div className="crm-lead b"><div className="crm-lead-name">Marcos P.</div><div className="crm-lead-meta">Meta · 12 min</div></div>
                      <div className="crm-lead b"><div className="crm-lead-name">Valentina R.</div><div className="crm-lead-meta">TikTok · 1h</div></div>
                    </div>
                  </div>
                  <div className="crm-col">
                    <h4 className="c2">Contactado ·11</h4>
                    <div className="crm-leads">
                      <div className="crm-lead y"><div className="crm-lead-name">Ana G.</div><div className="crm-lead-meta">TikTok · Ayer</div></div>
                      <div className="crm-lead y"><div className="crm-lead-name">Carlos R.</div><div className="crm-lead-meta">Meta · Ayer</div></div>
                    </div>
                  </div>
                  <div className="crm-col">
                    <h4 className="c3">Presentación ·7</h4>
                    <div className="crm-leads">
                      <div className="crm-lead p"><div className="crm-lead-name">Diego M.</div><div className="crm-lead-meta">Google · 3d</div></div>
                      <div className="crm-lead p"><div className="crm-lead-name">Sofía L.</div><div className="crm-lead-meta">Meta · 4d</div></div>
                    </div>
                  </div>
                  <div className="crm-col">
                    <h4 className="c4">Cierre ·3</h4>
                    <div className="crm-leads">
                      <div className="crm-lead g"><div className="crm-lead-name">Juan T.</div><div className="crm-lead-meta">Meta · ✓</div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="s-contact" id="contacto">
        <div className="container">
          <div className="c-inner">
            <div className="reveal">
              <div className="s-label">Diagnóstico gratuito</div>
              <h2>¿Listo para ordenar<br />tu captación?</h2>
              <p style={{ color: 'var(--text2)', fontSize: '16px', lineHeight: '1.65' }}>
                Revisamos tu operación y te mostramos exactamente qué está frenando tu
                reclutamiento hoy.
              </p>
              <div className="promises">
                <div className="promise">
                  <div className="prom-icon">🔍</div>
                  <div className="prom-text">
                    <strong>Análisis de tu embudo</strong>
                    <span>Revisamos tráfico, filtro, seguimiento y velocidad de respuesta.</span>
                  </div>
                </div>
                <div className="promise">
                  <div className="prom-icon">🗺️</div>
                  <div className="prom-text">
                    <strong>Mapa claro de canales</strong>
                    <span>Te decimos qué canal conviene para tu oferta, país y perfil de prospecto.</span>
                  </div>
                </div>
                <div className="promise">
                  <div className="prom-icon">⚡</div>
                  <div className="prom-text">
                    <strong>Respuesta en menos de 24h</strong>
                    <span>Sin spam. Tu información se usa solo para responderte.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cform reveal d1">
              <form onSubmit={handleSubmit}>
                <div className="frow">
                  <div className="fg">
                    <label className="flabel">Nombre completo</label>
                    <input className="fi" name="name" type="text" placeholder="Tu nombre" required />
                  </div>
                  <div className="fg">
                    <label className="flabel">Red o negocio</label>
                    <input className="fi" name="business" type="text" placeholder="ej. inCruises" required />
                  </div>
                </div>
                <div className="frow">
                  <div className="fg">
                    <label className="flabel">WhatsApp</label>
                    <div style={{display:'flex',gap:'6px'}}>
                      <select
                        value={phoneCC}
                        onChange={e => setPhoneCC(e.target.value)}
                        className="fs"
                        style={{width:'105px',flexShrink:0}}
                      >
                        <option value="34">🇪🇸 +34</option>
                        <option value="52">🇲🇽 +52</option>
                        <option value="57">🇨🇴 +57</option>
                        <option value="56">🇨🇱 +56</option>
                        <option value="54">🇦🇷 +54</option>
                        <option value="51">🇵🇪 +51</option>
                        <option value="1">🇺🇸 +1</option>
                        <option value="58">🇻🇪 +58</option>
                        <option value="593">🇪🇨 +593</option>
                        <option value="591">🇧🇴 +591</option>
                        <option value="595">🇵🇾 +595</option>
                        <option value="598">🇺🇾 +598</option>
                        <option value="55">🇧🇷 +55</option>
                        <option value="44">🇬🇧 +44</option>
                        <option value="351">🇵🇹 +351</option>
                      </select>
                      <input
                        className="fi"
                        type="tel"
                        placeholder="314 385 7823"
                        value={phoneLocal}
                        onChange={e => setPhoneLocal(e.target.value)}
                        required
                        style={{flex:1,minWidth:0}}
                      />
                    </div>
                  </div>
                  <div className="fg">
                    <label className="flabel">Email</label>
                    <input className="fi" name="email" type="email" placeholder="tu@email.com" required />
                  </div>
                </div>
                <div className="fg">
                  <label className="flabel">Etapa actual de tu red</label>
                  <select className="fs" name="teamSize" required defaultValue="">
                    <option value="" disabled>Seleccioná una opción</option>
                    <option>Estoy empezando</option>
                    <option>Tengo un equipo pequeño</option>
                    <option>Ya tengo líderes activos</option>
                    <option>Ya invierto en pauta</option>
                  </select>
                </div>
                <div className="fg">
                  <label className="flabel">Presupuesto mensual para publicidad</label>
                  <select className="fs" name="budget" required defaultValue="">
                    <option value="" disabled>Seleccioná un rango</option>
                    <option value="menos_100">Menos de USD 100</option>
                    <option value="100_300">USD 100 – 300</option>
                    <option value="300_500">USD 300 – 500</option>
                    <option value="mas_500">Más de USD 500</option>
                  </select>
                </div>
                <div className="fg">
                  <label className="flabel">¿Qué querés mejorar? (opcional)</label>
                  <textarea className="fta" name="message" placeholder="Contanos brevemente tu situación actual..." />
                </div>
                <button
                  type="submit"
                  className="fsub"
                  id="fsub"
                  disabled={formStatus === 'loading' || formStatus === 'success'}
                  style={formStatus === 'success' ? { background: '#34D399', color: '#0A1520' } : undefined}
                >
                  {formStatus === 'idle' && 'Quiero el diagnóstico gratuito →'}
                  {formStatus === 'loading' && 'Enviando...'}
                  {formStatus === 'success' && '✓ Recibido. Te escribimos pronto.'}
                  {formStatus === 'error' && 'Error al enviar. Intentá de nuevo →'}
                </button>
                <p className="fnote">Sin spam. Tu información se usa solo para responderte.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER — TODO: agregar logo cuando esté disponible en el repo */}
      <footer>
        <div className="footer-inner">
          <div className="ftop">
            <div className="fbrand">
              <div className="flogo"><span>atrae</span>Lab</div>
              <p>
                Sistema de captación y seguimiento para equipos de network marketing que
                necesitan más prospectos y mejor orden comercial.
              </p>
              <div className="fsocials">
                <a className="fsc" href="https://www.instagram.com/atraelab" target="_blank" rel="noopener noreferrer">📷</a>
                <a className="fsc" href="https://www.youtube.com/@atraelab" target="_blank" rel="noopener noreferrer">▶</a>
                <a className="fsc" href="https://www.tiktok.com/@atraelab" target="_blank" rel="noopener noreferrer">♪</a>
              </div>
            </div>
            <div>
              <h4>Navegación</h4>
              <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#problemas">Problemas</a></li>
                <li><a href="#testimonios">Clientes</a></li>
                <li><a href="#precios">Precios</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4>Servicios</h4>
              <ul>
                <li><a href="/servicios/meta-ads">Meta Ads</a></li>
                <li><a href="/servicios/google-ads">Google Ads</a></li>
                <li><a href="/servicios/tiktok-ads">TikTok Ads</a></li>
                <li><a href="https://leads.atraelab.com">LeadShield CRM</a></li>
              </ul>
            </div>
            <div>
              <h4>Blog</h4>
              <ul>
                <li><a href="/blog/como-conseguir-prospectos-network-marketing">Cómo conseguir 20 prospectos por semana sin perseguir a nadie</a></li>
                <li><a href="/blog/leads-meta-frios-network-marketing">Por qué tus leads de Meta se enfrían antes de la presentación</a></li>
                <li><a href="/blog/sistema-lideres-incruises-duplicar-red">El sistema que usan líderes de inCruises para duplicar su red</a></li>
                <li><a href="/blog">Ver todos →</a></li>
              </ul>
            </div>
          </div>
          <div className="fbot">
            <span>© 2026 AtraeLab. Todos los derechos reservados.</span>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="/legal/privacidad">Privacidad</a>
              <a href="/legal/terminos">Términos</a>
              <a href="/legal/cookies">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
