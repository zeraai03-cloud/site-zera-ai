# Handoff: Site Zera AI Solution's

## Overview
Site institucional single-page para a **Zera AI Solution's** — empresa especializada em automação com IA, sistemas personalizados e suporte técnico. O objetivo é apresentar a marca, capturar leads qualificados via formulário e direcioná-los para o WhatsApp comercial com a mensagem já formatada.

URL final pretendida: hospedagem na Vercel.

---

## About the Design Files
Os arquivos neste pacote são **design references criadas em HTML+React (via Babel standalone, sem build step)** — protótipos de alta fidelidade que mostram o look-and-feel, copy final, comportamento das animações e fluxos interativos. **Não são código de produção pronto para subir.**

A tarefa do desenvolvedor é **recriar esse design em um ambiente de produção real**. Como o projeto será hospedado na Vercel, recomenda-se:

- **Framework:** Next.js 14+ (App Router) — integração nativa com Vercel, otimização de imagens, fontes e SEO.
- **Estilo:** Tailwind CSS (mais sustentável que o CSS custom atual) ou CSS Modules — preservando os tokens de design listados abaixo.
- **Animações:** Framer Motion para reveal/scroll/transitions; Canvas API direto para a rede de partículas (já implementada em `effects.jsx`).
- **Formulário:** validação client-side + redirect para `wa.me` (já funcional). Opcionalmente adicionar uma rota `/api/lead` que registre os envios em planilha/CRM antes do redirect.
- **Fontes:** Google Fonts (Space Grotesk + JetBrains Mono) carregadas via `next/font`.

---

## Fidelity
**High-fidelity.** Cores, tipografia, espaçamento e copy são finais. Animações e microinterações estão totalmente especificadas no código de referência. O desenvolvedor deve buscar paridade visual e comportamental — não simplificar.

---

## Screens / Views (single page)

A página é composta por **8 seções verticais** + nav fixa + footer.

### 1. Nav (fixa, top)
- Altura: 14px de padding vertical (`14px 32px`).
- Esconde ao scroll para baixo (depois de 200px), reaparece ao subir.
- Background: `linear-gradient(rgba(5,11,22,.85), transparent)` no topo; `rgba(5,11,22,.78)` quando scrolled, com `backdrop-filter: blur(12px)`.
- Logo PNG à esquerda, altura **52px** (mobile: 44px).
- Links centrais: Serviços, Sobre, Tecnologias, Cases, FAQ. Cor `#8aa3bd`, hover `#e8f4ff` com fundo `rgba(94,198,240,.06)`.
- CTA pill à direita: "Solicitar orçamento" — `linear-gradient(135deg, #1ec6f0, #4fe3ff)`, texto `#04111f`, peso 600, raio 999px.
- Menu hamburguer abaixo de 820px de viewport.

### 2. Hero (`#top`)
- Altura mínima: 100vh, padding-top 160px.
- Grid 1.1fr / 0.9fr — empilha abaixo de 980px.
- **Coluna esquerda:**
  - Eyebrow pill: `Inteligência Artificial Aplicada` com dot pulsante.
  - H1: `clamp(38px, 5.6vw, 84px)` — palavra "inteligente" com gradient animado cyan→mint.
  - Lead text: `clamp(16px, 1.3vw, 19px)`, cor `#8aa3bd`, max-width 640px.
  - 2 CTAs: primary "Solicitar orçamento" + ghost "Ver serviços". **Ambos magnéticos** (seguem o cursor com strength 0.35 / 0.25).
  - 3 stats: +40 Automações | 24/7 Monitoramento | ~6× Aceleração.
- **Coluna direita — visual orbital:**
  - Container quadrado max 520px.
  - 3 anéis concêntricos: dashed (40s spin), dotted reverso (28s), sólido interno (18s).
  - 4 satélites flutuantes: API (topo), CRM (direita), DB (baixo), LLM (esquerda).
  - Núcleo central com SVG da marca Z — borda cyan, glow 80px.
  - Linhas tracejadas conectando núcleo aos satélites (SVG).
  - Container inteiro tem parallax sutil baseado no mouse global (translate ±10px).

### 3. Serviços (`#servicos`)
- Eyebrow + H2 + lead.
- Grid de 3 cards (1 col em mobile).
- Cada card:
  - Padding 32px 28px, raio 24px, min-height 360px.
  - Background `linear-gradient(180deg, rgba(15,37,64,.55), rgba(10,22,40,.7))`, borda `rgba(94,198,240,.16)`.
  - Numeração mono: `01 / 03`, etc.
  - Ícone 56×56px, raio 14px, fundo gradient cyan suave.
  - H3 24px peso 600.
  - Descrição 15px cor mute.
  - Lista de 3 features com bullet glowing cyan, fonte mono 13px.
  - **Tilt 3D** ao mouse (max 4°) + **spotlight radial** que segue o cursor (`radial-gradient at var(--mx) var(--my)`).
  - Hover: borda passa a `rgba(79,227,255,.4)`.
- **Conteúdo dos 3 cards:** ver `sections.jsx` → `function Services` → array `items`.

### 4. Sobre (`#sobre`)
- Grid 1fr/1fr — empilha em mobile.
- Esquerda: H2 + 2 parágrafos ("Engenharia, dados e IA na mesma mesa").
- Direita: grid 2×2 de stat tiles (100% Projetos sob medida, 3 sem. MVP, 12+ Integrações, 99,9% Uptime).
- Stat tile: padding 28px 24px, raio 14px, número 44px gradient cyan→mint.

### 5. Tecnologias (`#tech`)
- Eyebrow + H2 + lead, full-width.
- 2 marquees infinitos (linha 1 esquerda→direita 38s, linha 2 invertida 46s).
- Cada chip: pill com bloco colorido cyan (sigla 2 letras) + nome da tech, fonte mono.
- Stack listada (20 itens): OpenAI/GPT, Anthropic Claude, Python, TypeScript, Next.js, React, Node.js, PostgreSQL, Supabase, LangChain, n8n, WhatsApp API, Google Cloud, AWS, Docker, Redis, Pinecone, Hugging Face, Tailwind, GitHub Actions.
- Mask-image fade nas bordas laterais.

### 6. Cases (`#cases`)
- Bento grid 6 colunas: 3+3+2+2+2.
- Cada card de case: tag mono (categoria), H4 22px, descrição, métricas no rodapé.
- Spotlight radial seguindo cursor; hover translateY(-4px).
- 5 cases listados em `sections.jsx` → `function Cases` → array `cases`.

### 7. FAQ (`#faq`)
- Acordeão com 6 perguntas.
- Item: borda + raio 14px, padding 22px 26px.
- Plus icon que rotaciona 45° quando aberto (transition 250ms).
- Apenas 1 item aberto por vez (índice 0 aberto por padrão).
- max-height transition 320px.

### 8. Contato (`#contato`)
- Grid 1fr / 1.1fr.
- **Esquerda — info tiles:** E-mail (contato@zeraai.com.br), WhatsApp (+55 61 99911-7557), Atendimento (Brasil, remoto), Tempo de resposta (<24h úteis, destaque mint).
- **Direita — formulário:**
  - Card padding 32px, gradient + borda, spotlight radial seguindo cursor.
  - Campos: Nome*, E-mail*, Empresa, Serviço* (select: Automação/Sistema/Suporte/Não tenho certeza), Investimento estimado (select: até 5k/5-15k/15-50k/50k+), Mensagem* (min 10 chars).
  - Validação client-side com mensagens de erro em vermelho-rosado (`#ff8aa8`).
  - Botão submit magnético, full-width, "Enviar via WhatsApp".
  - **Submit:** monta string formatada e abre `https://wa.me/5561999117557?text=<encoded>` em nova aba. Ver `buildWhatsappUrl()` em `sections.jsx`.
  - Estado de sucesso: orb verde com check, copy "Tudo pronto!", botão fallback para abrir WhatsApp + botão "Enviar outra mensagem".

### 9. Footer
- Logo + copyright + links (Serviços / Cases / Contato).
- Border-top cyan suave.

---

## Interactions & Behavior

### Cursor customizado
- **2 elementos:** `.cursor-dot` (6×6px snap) + `.cursor-ring` (36×36px easing 0.18).
- Estado `hover`: ring expande para 64×64 com fundo cyan suave quando cursor está sobre `a, button, input, textarea, select, .faq-q, [data-cursor="hover"]`.
- Estado `click`: ring contrai para 24×24.
- `mix-blend-mode: screen`.
- Desabilitado abaixo de 820px (touch).
- Implementação: `effects.jsx` → `CustomCursor`.

### Rede de partículas (Canvas, fixa no fundo)
- 70 partículas (configurável via Tweaks — 20 a 140).
- Cada partícula: posição/velocidade aleatória, raio 0.6–2.2px.
- **Conectadas entre si** quando dist < 130px (linhas cyan com alpha proporcional).
- **Atraídas pelo cursor** quando dist < 180px + linha mint conectando.
- Bounce nas bordas do canvas.
- Implementação: `effects.jsx` → `ParticleNetwork`.

### Botão magnético
- Ao mover mouse dentro do botão: translate proporcional `(mouse - center) * strength` (0.35 para CTAs principais, 0.25 ghost, 0.20 submit).
- Reset ao mouseleave com transition 250ms.
- Implementação: `effects.jsx` → `Magnetic`.

### Card tilt 3D
- `perspective(900px) rotateX rotateY` baseado em posição do mouse no card (max ±6° padrão, ±4° em service cards).
- Combinado com spotlight radial via CSS vars `--mx` / `--my`.
- Implementação: `effects.jsx` → `TiltCard` e `Spotlight`.

### Reveal on scroll
- IntersectionObserver, threshold 0.12, rootMargin -8% bottom.
- `opacity: 0 → 1` + `translateY(24px → 0)`, transition 900ms cubic-bezier(.2,.8,.2,1).
- `delay` configurável por elemento (geralmente 0–480ms em cascata).
- Implementação: `effects.jsx` → `Reveal`.

### Nav auto-hide
- Scroll down > 200px: `transform: translateY(-100%)` (oculta).
- Scroll up: reaparece.
- > 40px: ganha background sólido + border-bottom.

### Formulário → WhatsApp
- Validação obrigatória: nome, email (regex), serviço, mensagem (≥10 chars).
- Loading state 700ms ("Preparando..."), depois `window.open(buildWhatsappUrl(), '_blank')`.
- Mensagem formatada com `*negrito*` markdown do WhatsApp:
  ```
  *Nova solicitação de orçamento — Zera AI*

  *Nome:* {nome}
  *E-mail:* {email}
  *Empresa:* {empresa}        ← só se preenchido
  *Serviço:* {label legível}
  *Investimento estimado:* {label}  ← só se preenchido

  *Desafio / necessidade:*
  {mensagem}
  ```

---

## Design Tokens

### Colors
| Token | Valor | Uso |
|---|---|---|
| `--bg-0` | `#050b16` | Background base |
| `--bg-1` | `#0a1628` | Background painéis profundos |
| `--bg-2` | `#0f2540` | Background painéis claros |
| `--cyan` | `#1ec6f0` | Brand primary |
| `--cyan-2` | `#4fe3ff` | Brand glow / accents |
| `--mint` | `#5cffd1` | Accent secundário |
| `--navy` | `#0f2d4a` | Logo dark / panels |
| `--text` | `#e8f4ff` | Texto primário |
| `--text-mute` | `#8aa3bd` | Texto secundário |
| `--text-dim` | `#5a7493` | Texto terciário / labels |
| `--grid` | `rgba(94,198,240,.06)` | Grade de fundo |
| Erro | `#ff8aa8` | Mensagens de erro |

### Typography
- **Display/Body:** Space Grotesk (400, 500, 600, 700) — Google Fonts.
- **Mono:** JetBrains Mono (400, 500, 600) — Google Fonts.
- Escala fluida: `clamp(38px, 5.6vw, 84px)` (h1), `clamp(32px, 4vw, 56px)` (h2), `clamp(16px, 1.3vw, 19px)` (lead).
- `letter-spacing: -0.025em` em displays; `0.06–0.1em` uppercase em eyebrows.

### Spacing & Radii
- Container max-width: 1240px, padding 32px (20px mobile).
- Section padding: 120px vertical (80px mobile).
- Radii: `--radius: 14px` (panels), `--radius-lg: 24px` (cards), `999px` (pills).

### Shadows
- Card glow: `0 0 60px rgba(30,198,240,.18)`.
- Btn primary: `0 0 0 1px rgba(79,227,255,.3) inset, 0 8px 30px rgba(30,198,240,.35)` → hover `0 12px 40px rgba(30,198,240,.55)`.

### Animations
- Marquee tech: 38s / 46s linear infinite.
- Spin rings: 18s / 28s reverse / 40s.
- Drift glows: 24s / 32s ease-in-out alternate.
- Shine gradient text: 8s ease-in-out infinite.
- Pulse dot: 1.6s ease-in-out infinite.

---

## Assets
- `assets/zera-logo.png` — logotipo horizontal completo (Z+texto). Cliente forneceu original. Para Next.js, considerar exportar SVG para nitidez/escalabilidade.
- WhatsApp comercial: `https://wa.me/5561999117557`.
- E-mail: `contato@zeraai.com.br`.

---

## Files

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Shell com imports React/Babel e link para fontes/CSS |
| `styles.css` | Todos os tokens + estilos globais + cada seção (~22kb) |
| `effects.jsx` | Cursor, rede de partículas, magnetic, tilt, spotlight, reveal |
| `sections.jsx` | Nav, Hero, Services, About, Tech, Cases, FAQ, Contact, Footer + ZMark + ícones inline |
| `app.jsx` | App root + integração com TweaksPanel + paletas e fontes alternativas |
| `tweaks-panel.jsx` | Painel de tweaks (não-essencial para produção) |
| `assets/zera-logo.png` | Logo da marca |

---

## Tweaks expostos (não-essenciais — só painel de design)
- 5 paletas alternativas (cyan brand, violet, neon pink, amber+cyan, emerald).
- 4 fontes (Space Grotesk, Sora, Outfit, JetBrains Mono).
- Toggle cursor customizado / partículas.
- Slider de densidade de partículas.

Em produção, **fixar a paleta cyan default** e remover o painel de Tweaks.

---

## Recomendações de produção (Next.js + Vercel)

1. `npx create-next-app@latest zera-site --typescript --tailwind --app --src-dir`
2. Mover `effects.jsx` para `src/components/effects/` com nomes `.tsx` separados (`CustomCursor.tsx`, `ParticleNetwork.tsx`, etc).
3. Cada seção como componente próprio em `src/components/sections/`.
4. Tokens do CSS → `tailwind.config.ts` (extend.colors, fontFamily, animation, keyframes).
5. Fontes via `next/font/google` em `layout.tsx`.
6. Imagem do logo via `next/image`.
7. Metadata SEO + OpenGraph em `layout.tsx`.
8. Deploy direto: `vercel --prod` (auto-detecta Next.js).
9. Domínio customizado pelo painel da Vercel apontando para `zeraai.com.br`.
10. (Opcional) Edge route `/api/lead` que loga submissões em Notion/Airtable/Google Sheets antes do redirect ao WhatsApp.
