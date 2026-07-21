/* global React, ReactDOM */
const { useEffect, useState } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": ["#1ec6f0", "#5cffd1", "#0a1628"],
  "particleDensity": 70,
  "particles": true,
  "cursor": true,
  "fontDisplay": "Space Grotesk"
}/*EDITMODE-END*/;

const PALETTES = [
  ["#1ec6f0", "#5cffd1", "#0a1628"],   // brand cyan + mint (default)
  ["#7a5af8", "#22d3ee", "#0b0a1f"],   // electric violet
  ["#ff6ad5", "#5cffd1", "#0e0b1a"],   // neon pink
  ["#ffb648", "#1ec6f0", "#0e1320"],   // amber + cyan
  ["#5cffd1", "#1ec6f0", "#02181a"],   // emerald
];

const FONTS = ["Space Grotesk", "Sora", "Outfit", "JetBrains Mono"];

function applyPalette(p) {
  const root = document.documentElement.style;
  // primary cyan
  root.setProperty('--cyan', p[0]);
  root.setProperty('--cyan-2', p[1] || p[0]);
  root.setProperty('--mint', p[1] || p[0]);
  // bg deepen
  root.setProperty('--bg-0', p[2]);
  // derived helpers
  root.setProperty('--bg-1', shift(p[2], 8));
  root.setProperty('--bg-2', shift(p[2], 22));
  root.setProperty('--cyan-soft', hexA(p[0], 0.15));
}

function hexA(hex, a) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgba(${r},${g},${b},${a})`;
}
function shift(hex, amt) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  let r = ((n >> 16) & 255) + amt;
  let g = ((n >> 8) & 255) + amt;
  let b = (n & 255) + amt;
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  useEffect(() => {
    document.documentElement.style.setProperty('--font-display', `'${t.fontDisplay}', sans-serif`);
    document.body.style.fontFamily = `'${t.fontDisplay}', ui-sans-serif, system-ui, sans-serif`;
  }, [t.fontDisplay]);
  useEffect(() => {
    document.body.style.cursor = t.cursor ? 'none' : 'auto';
  }, [t.cursor]);

  const logo = 'assets/zera-logo.png';

  return (
    <>
      {/* Background fixed layers */}
      <div className="bg-stack">
        <div className="grid-lines"/>
        <div className="glow-a"/>
        <div className="glow-b"/>
        {t.particles && <ParticleNetwork density={t.particleDensity} intensity={1}/>}
      </div>

      {t.cursor && <CustomCursor/>}

      <div className="app">
        <Nav logo={logo}/>
        <Hero/>
        <Services/>
        <Products/>
        <About/>
        <Tech/>
        <Sectors/>
        <FAQ/>
        <Contact/>
        <Footer logo={logo}/>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Tema" />
        <TweakColor
          label="Paleta"
          value={t.palette}
          options={PALETTES}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection label="Tipografia" />
        <TweakSelect
          label="Fonte display"
          value={t.fontDisplay}
          options={FONTS}
          onChange={(v) => setTweak('fontDisplay', v)}
        />
        <TweakSection label="Efeitos" />
        <TweakToggle
          label="Cursor customizado"
          value={t.cursor}
          onChange={(v) => setTweak('cursor', v)}
        />
        <TweakToggle
          label="Rede de partículas"
          value={t.particles}
          onChange={(v) => setTweak('particles', v)}
        />
        <TweakSlider
          label="Densidade de partículas"
          value={t.particleDensity}
          min={20} max={140} step={10}
          onChange={(v) => setTweak('particleDensity', v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
