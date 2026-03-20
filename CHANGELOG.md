# Changelog — AtraeLab Landing Page

Todos los cambios importantes del proyecto quedan documentados acá.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [1.0.0] — 2025-03-20 · Lanzamiento inicial

### ✅ Agregado

#### Estructura base
- Proyecto Next.js 14 con App Router, TypeScript y Tailwind CSS
- Font Inter via `next/font/google` (sin CDN externo)
- Custom cursor, scroll indicator y animaciones globales
- Fondo de cuadrícula animada (`bg-grid`)
- Paleta de colores con acento único `#c8f000`

#### Componentes principales
- **Navbar** — sticky con blur, hamburger menu + drawer animado con Framer Motion
- **Hero** — H1 con reveal por línea, dashboard mockup flotante con datos en vivo, social proof
- **Services** — 3 tarjetas (Meta/Google/TikTok) con logos SVG oficiales e iconos 3D CSS
- **NetworkSection** — 3 pilares glassmorphism, métricas, CTA con pre-llenado de formulario
- **HowWeWork** — Timeline de 5 pasos horizontal/desktop y vertical/mobile con conectores
- **CRMSection** — Kanban mockup con 4 columnas (2 en mobile), link a leads.atraelab.com
- **Results** — Carrusel automático de testimonios + grid 2×2 de métricas con count-up
- **Contact** — Formulario con validación Zod + React Hook Form + Resend
- **Footer** — 4 columnas con navegación, servicios, últimos artículos, legal y partners
- **WhatsAppButton** — Botón flotante con pulso animado, tooltip, aparece a los 3s
- **CookieBanner** — Slide-up con localStorage, "Aceptar todo" / "Solo necesarias"
- **SectionDivider** — Línea shimmer entre secciones
- **Icons3D** — MetaCube, GoogleSphere, TikTokCylinder, FloatingDecor3D en CSS puro

#### Páginas
- `/` — Landing page principal
- `/blog` — Listado de artículos con filtro por tags
- `/blog/[slug]` — Artículo individual con MDX, Schema.org Article
- `/servicios/meta-ads` — Página de servicio Meta Ads
- `/servicios/google-ads` — Página de servicio Google Ads
- `/servicios/tiktok-ads` — Página de servicio TikTok Ads
- `/legal/privacidad` — Política de Privacidad
- `/legal/terminos` — Términos de Servicio
- `/legal/cookies` — Política de Cookies

#### Blog MDX
- Configuración `@next/mdx` en `next.config.mjs`
- `mdx-components.tsx` con tipografía y tablas personalizadas
- 4 artículos iniciales completos:
  - *Cómo triplicar tu ROAS en Meta Ads en 90 días*
  - *Google Ads vs Meta Ads: cuál elegir según tu negocio*
  - *TikTok Ads para negocios en LATAM: guía 2025*
  - *Network Marketing digital: genera leads con pauta*

#### SEO & Performance
- Metadata completa (OG, Twitter Card, keywords) en `layout.tsx`
- Schema.org `MarketingAgency` en el layout
- Schema.org `Article` en cada post del blog
- `sitemap.ts` automático con las 18 rutas del proyecto
- `robots.ts` con indexación permitida
- `@vercel/analytics` y `@vercel/speed-insights` integrados

#### Emails
- API route `/api/send-email` con Resend
- Email de notificación interna con HTML branded
- Email de confirmación automática al usuario
- Modo demo sin API key (log en consola)

---

## Pendiente

- Reemplazar `NUMERO_PLACEHOLDER` en `WhatsAppButton.tsx`
- Configurar `RESEND_API_KEY` en Vercel (producción)
- Subir imágenes reales de blog a `/public/blog/`
- Crear `og-image.png` (1200×630px)
- Agregar logos reales de clientes cuando estén disponibles
