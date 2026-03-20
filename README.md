# AtraeLab — Landing Page

> Agencia de Performance Marketing · Meta Ads · Google Ads · TikTok Ads · LeadShield CRM

Landing page oficial de AtraeLab, construida con **Next.js 14**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.

---

## 🚀 Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 14.2.x | Framework principal (App Router) |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 3.4.x | Estilos utilitarios |
| Framer Motion | 11.x | Animaciones |
| React Hook Form | 7.x | Manejo de formulario de contacto |
| Zod | 3.x | Validación de schemas |
| Resend | 4.x | Envío de emails del formulario |
| @next/mdx | latest | Blog con archivos .mdx |
| @vercel/analytics | 1.x | Analíticas de tráfico |
| @vercel/speed-insights | latest | Métricas de performance |

---

## 📁 Estructura del Proyecto

```
atraelab-landing/
│
├── app/                          # App Router de Next.js
│   ├── layout.tsx                # Layout raíz (metadata, schema.org, analytics)
│   ├── page.tsx                  # Página principal (home)
│   ├── globals.css               # Estilos globales, variables CSS, animaciones
│   ├── robots.ts                 # Configuración de robots.txt
│   ├── sitemap.ts                # Sitemap automático con todas las rutas
│   │
│   ├── api/
│   │   └── send-email/route.ts   # API route — envío de emails con Resend
│   │
│   ├── blog/
│   │   ├── page.tsx              # Listado de artículos del blog
│   │   └── [slug]/page.tsx       # Artículo individual con MDX
│   │
│   ├── servicios/
│   │   ├── meta-ads/page.tsx     # Página de servicio Meta Ads
│   │   ├── google-ads/page.tsx   # Página de servicio Google Ads
│   │   └── tiktok-ads/page.tsx   # Página de servicio TikTok Ads
│   │
│   └── legal/
│       ├── privacidad/page.tsx   # Política de Privacidad
│       ├── terminos/page.tsx     # Términos de Servicio
│       └── cookies/page.tsx      # Política de Cookies
│
├── components/                   # Componentes React reutilizables
│   ├── Navbar.tsx                # Navegación con hamburger menu mobile
│   ├── Hero.tsx                  # Sección hero con dashboard mockup animado
│   ├── Services.tsx              # Tarjetas de servicios (Meta/Google/TikTok)
│   ├── NetworkSection.tsx        # Sección Network Marketing
│   ├── HowWeWork.tsx             # Timeline "De cero a resultados en 5 pasos"
│   ├── CRMSection.tsx            # Sección LeadShield CRM con Kanban mockup
│   ├── Results.tsx               # Métricas + carrusel de testimonios
│   ├── Contact.tsx               # Formulario de contacto / auditoría
│   ├── Footer.tsx                # Footer con links, blog, legal, partners
│   ├── WhatsAppButton.tsx        # Botón flotante de WhatsApp
│   ├── CookieBanner.tsx          # Banner de cookies con localStorage
│   ├── SectionDivider.tsx        # Divisor animado entre secciones
│   ├── CustomCursor.tsx          # Cursor personalizado (desktop)
│   ├── Icons3D.tsx               # Iconos isométricos CSS 3D
│   └── ui/index.ts               # Utilidades de UI
│
├── content/
│   └── blog/                     # Artículos en formato MDX
│       ├── como-triplicar-roas-meta-ads-90-dias.mdx
│       ├── google-ads-vs-meta-ads-cual-usar.mdx
│       ├── tiktok-ads-latam-guia-completa.mdx
│       └── network-marketing-digital-leads-con-pauta.mdx
│
├── lib/
│   ├── blog.ts                   # Metadata y registro de posts del blog
│   ├── send-email.ts             # Helper para llamar a la API de email
│   ├── testimonials.ts           # Array de testimonios / reseñas
│   └── utils.ts                  # Utilidades generales (cn, etc.)
│
├── mdx-components.tsx            # Componentes MDX personalizados (tipografía, tablas)
├── next.config.mjs               # Config de Next.js (MDX habilitado)
├── tailwind.config.ts            # Config de Tailwind
└── tsconfig.json                 # Config de TypeScript
```

---

## ⚙️ Variables de Entorno

Crear un archivo `.env.local` en la raíz del proyecto:

```env
# Resend — servicio de emails para el formulario de contacto
# Obtener en: https://resend.com
RESEND_API_KEY=re_tu_api_key_aqui

# Email donde llegan los leads del formulario
CONTACT_EMAIL=hola@atraelab.com
```

> **Sin `RESEND_API_KEY`:** el formulario funciona en "modo demo" — muestra éxito pero no envía email real. Ideal para desarrollo local.

---

## 🔧 Configuración Rápida

### WhatsApp Flotante

Archivo: `components/WhatsAppButton.tsx` — línea 5

```typescript
const WHATSAPP_NUMBER = "5491112345678"; // ← Cambiar por número real (sin + ni espacios)
```

El mensaje pre-escrito también es editable en la misma constante `WHATSAPP_MESSAGE`.

---

## 🚀 Correr en Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (puerto 3000)
npm run dev

# Servidor en puerto específico
npm run dev -- --port 3001

# Build de producción
npm run build

# Servir build de producción
npm run start
```

Requisito: **Node.js >= 20.0.0**

---

## 🌐 Deploy en Vercel (recomendado)

1. Conectar el repositorio en [vercel.com](https://vercel.com)
2. Agregar las variables de entorno en **Settings → Environment Variables**:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
3. Deploy automático en cada push a `main`

---

## 📄 Secciones de la Landing (en orden)

| # | Sección | Componente | ID |
|---|---------|------------|-----|
| 1 | Navbar sticky + mobile drawer | `Navbar.tsx` | — |
| 2 | Hero con dashboard mockup | `Hero.tsx` | `#home` |
| 3 | Servicios (Meta/Google/TikTok) | `Services.tsx` | `#servicios` |
| 4 | Network Marketing | `NetworkSection.tsx` | `#network` |
| 5 | Cómo Trabajamos (5 pasos) | `HowWeWork.tsx` | `#proceso` |
| 6 | CRM LeadShield (Kanban) | `CRMSection.tsx` | `#crm` |
| 7 | Resultados + Testimonios | `Results.tsx` | `#resultados` |
| 8 | Contacto / Auditoría | `Contact.tsx` | `#contacto` |
| 9 | Footer | `Footer.tsx` | — |

**Flotantes (siempre visibles):**
- `WhatsAppButton.tsx` — aparece a los 3 segundos
- `CookieBanner.tsx` — aparece si no hay preferencia guardada
- `CustomCursor.tsx` — cursor personalizado en desktop

---

## 📝 Blog — Cómo Agregar un Artículo

### 1. Crear el archivo MDX

```bash
# En content/blog/
touch content/blog/mi-nuevo-articulo.mdx
```

```mdx
# Título del artículo

Primer párrafo del artículo...

## Subtítulo

Más contenido con **negrita**, *énfasis*, tablas, etc.
```

### 2. Registrar el artículo en `lib/blog.ts`

```typescript
export const blogPosts: BlogPost[] = [
  // ... posts existentes ...
  {
    slug: "mi-nuevo-articulo",          // debe coincidir con el nombre del .mdx
    title: "Título del artículo",
    description: "Descripción corta para el listado y SEO",
    date: "2025-03-01",                 // formato YYYY-MM-DD
    author: "AtraeLab",
    readTime: "5 min",
    tags: ["Meta Ads", "Estrategia"],   // tags del listado
    image: "/blog/mi-imagen.jpg",       // opcional, placeholder si no existe
  },
];
```

### 3. El artículo aparece automáticamente en:
- `/blog` — listado con filtro por tags
- `/blog/mi-nuevo-articulo` — artículo individual
- `/sitemap.xml` — sitemap actualizado
- Footer — sección "Últimos artículos" (los 3 más recientes)

---

## 🎨 Design System

### Color principal

| Variable | Valor | Uso |
|----------|-------|-----|
| `#c8f000` | Lima/Neon | Acento único en toda la web |
| `#000000` | Negro puro | Fondo base |
| `#0a0a0a` | Negro suave | Fondo de cards/secciones |
| `#a1a1aa` | Gris zinc | Texto secundario/muted |
| `#ffffff` | Blanco | Texto principal |

### Clases CSS personalizadas (globals.css)

| Clase | Descripción |
|-------|-------------|
| `.glass-card` | Card glassmorphism semi-transparente |
| `.gradient-text` | Texto con gradiente animado en lima |
| `.btn-neon` | Botón con glow neon en lima |
| `.animate-float` | Flotación suave (translateY) |
| `.badge-pulse` | Pulso de anillo en botones/badges |
| `.bg-grid` | Fondo de cuadrícula sutil |
| `.section-divider` | Línea divisora shimmer animada |

---

## 📧 Sistema de Emails

El formulario de contacto usa **[Resend](https://resend.com)** como proveedor de emails.

**Flujo al enviar el formulario:**
1. El usuario completa nombre, email, WhatsApp y mensaje
2. Se valida con Zod en el frontend
3. Se hace POST a `/api/send-email`
4. Resend envía **dos emails**:
   - Notificación interna → `CONTACT_EMAIL` (ej: `hola@atraelab.com`)
   - Confirmación automática → email del usuario

**Para activar emails reales:**
1. Crear cuenta en [resend.com](https://resend.com)
2. Verificar el dominio `atraelab.com`
3. Generar API Key
4. Agregar `RESEND_API_KEY` al `.env.local` o en Vercel

---

## 🍪 Sistema de Cookies

El banner de cookies guarda la preferencia en `localStorage` con la clave `atraelab-cookies-accepted`.

- Valor `"all"` → aceptó todas las cookies
- Valor `"necessary"` → solo cookies necesarias
- Si no existe la clave → muestra el banner

Páginas legales disponibles en:
- `/legal/privacidad`
- `/legal/terminos`
- `/legal/cookies`

---

## 🔗 Links Externos Configurados

| Destino | URL | Componente |
|---------|-----|------------|
| CRM LeadShield | `https://leads.atraelab.com` | Hero, CRMSection, Footer |
| Instagram | `https://www.instagram.com/atraelab` | Footer |
| YouTube | `https://www.youtube.com/@atraelab` | Footer |
| TikTok | `https://www.tiktok.com/@atraelab` | Footer |
| WhatsApp | `https://wa.me/NUMERO_PLACEHOLDER` | WhatsAppButton |

---

## 🧩 Páginas de Servicios

Cada servicio tiene su propia página con:
- Hero con logo de plataforma + título + métricas
- Lista de 10 items incluidos en el servicio
- 3 perfiles de cliente ideal
- FAQ con 5 preguntas (accordion nativo HTML)
- CTA final al formulario

| Servicio | Ruta |
|----------|------|
| Meta Ads | `/servicios/meta-ads` |
| Google Ads | `/servicios/google-ads` |
| TikTok Ads | `/servicios/tiktok-ads` |

---

## ✍️ Cómo Editar Testimonios

Archivo: `lib/testimonials.ts`

```typescript
{
  name: "Nombre Apellido",
  role: "Cargo",
  company: "Empresa",
  avatar: "N",              // Inicial para el avatar generado
  text: "Texto del testimonio...",
  rating: 5,
  source: "google",         // "google" | "manual"
}
```

Los testimonios con `source: "google"` muestran el badge de Google Reviews.

---

## 📊 SEO

- **Metadata** completa en `app/layout.tsx` (title, description, OG, Twitter Card)
- **Schema.org** `MarketingAgency` en el layout raíz
- **Schema.org** `Article` en cada post del blog
- **Sitemap** automático en `/sitemap.xml`
- **Robots.txt** en `/robots.txt` (indexación permitida)
- **Canonical URL** base: `https://atraelab.com`

---

## 🛠️ Comandos Útiles

```bash
# Chequear tipos TypeScript
npx tsc --noEmit

# Linting
npm run lint

# Ver bundle size
npm run build && npx @next/bundle-analyzer
```

---

## 🐛 Troubleshooting

### El formulario no envía emails
- Verificar que `RESEND_API_KEY` esté en `.env.local`
- Verificar que el dominio `atraelab.com` esté verificado en Resend
- Sin API key, el formulario funciona en "modo demo" (log en consola del servidor)

### Error de build TypeScript
```bash
npx tsc --noEmit  # ver errores de tipos
npm run lint      # ver errores de ESLint
```

### Las animaciones no se ven
- Las animaciones usan `framer-motion` con `useInView` — necesitan JavaScript habilitado
- En dispositivos con `prefers-reduced-motion`, las animaciones se desactivan por accesibilidad

### El blog no muestra un artículo nuevo
1. Verificar que el `.mdx` existe en `content/blog/`
2. Verificar que el `slug` en `lib/blog.ts` coincide exactamente con el nombre del archivo
3. Correr `npm run build` y revisar que no haya errores de importación MDX

---

## 📌 Pendientes / Próximos Pasos

- [ ] Reemplazar `NUMERO_PLACEHOLDER` en `WhatsAppButton.tsx` con número real
- [ ] Configurar `RESEND_API_KEY` en producción (Vercel)
- [ ] Reemplazar imágenes de blog en `/public/blog/` (actualmente usa emojis)
- [ ] Crear `/public/og-image.png` (1200×630px) para redes sociales
- [ ] Agregar Google Analytics / Tag Manager si se necesita (además de Vercel Analytics)
- [ ] Reemplazar clientes placeholder en el footer con logos reales cuando estén disponibles

---

## 👥 Equipo

Desarrollado para **AtraeLab** — Agencia de Performance Marketing LATAM
Web: [atraelab.com](https://atraelab.com) · Email: hola@atraelab.com
