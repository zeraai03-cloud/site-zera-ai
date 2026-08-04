/* global React */
const { useState, useEffect, useRef } = React;

/* ─── Inline icon set ─── */
const Ico = {
  bot: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 7V3"/><circle cx="12" cy="3" r="1"/><circle cx="9" cy="13" r="1.2" fill="currentColor"/><circle cx="15" cy="13" r="1.2" fill="currentColor"/><path d="M9 17h6"/></svg>),
  code: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="5" x2="10" y2="19"/></svg>),
  shield: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"/><path d="m9 12 2 2 4-4"/></svg>),
  arrow: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" className="arrow"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>),
  check: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="44" height="44"><polyline points="20 6 9 17 4 12"/></svg>),
  mail: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>),
  phone: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M22 16.92V20a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3.08a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>),
  pin: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>),
  zap: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  plus: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="14" height="14"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>),
  burger: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="20" height="20"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>),
  chart: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 6-6"/></svg>),
  church: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><path d="M12 2v4"/><path d="M10 4h4"/><path d="M12 6v4"/><path d="M6 10l6-2 6 2"/><path d="M6 10v10h12V10"/><path d="M10 20v-4a2 2 0 1 1 4 0v4"/></svg>),
  scissors: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>),
  extLink: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>),
  globe: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" width="26" height="26"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>),
};

/* ─── NAV ─── */
function Nav({ logo }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 200 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['Serviços', '#servicos'],
    ['Produtos', '#produtos'],
    ['Sobre', '#sobre'],
    ['Tecnologias', '#tech'],
    ['Setores', '#setores'],
    ['FAQ', '#faq'],
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <a href="#top" className="nav-logo" onClick={() => setOpen(false)}>
        <img src={logo} alt="Zera AI Solutions" />
      </a>
      <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">{Ico.burger}</button>
      <div className={`nav-links ${open ? 'mobile-open' : ''}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a href="https://admin.zeraai.com.br/login" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Painel</a>
        <a href="#contato" className="nav-cta" onClick={() => setOpen(false)}>Solicitar orçamento</a>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function AutomationConsole() {
  const scenarios = [
    {
      label: 'Atendimento',
      kicker: 'Lead recebido',
      title: 'Mariana quer automatizar o suporte',
      steps: [
        ['01', 'Entender', 'Intenção identificada'],
        ['02', 'Qualificar', 'Lead com alta prioridade'],
        ['03', 'Agir', 'Reunião sugerida'],
      ],
      result: 'CRM atualizado e responsável notificado',
      time: '2,4s',
      inputs: [['WA', 'WhatsApp'], ['WB', 'Site']],
      outputs: [['CR', 'CRM'], ['AG', 'Agenda']],
    },
    {
      label: 'Operações',
      kicker: 'Rotina monitorada',
      title: 'Uma cobrança venceu sem confirmação',
      steps: [
        ['01', 'Detectar', 'Pendência encontrada'],
        ['02', 'Cruzar', 'Pagamento não localizado'],
        ['03', 'Resolver', 'Lembrete preparado'],
      ],
      result: 'Equipe financeira avisada antes do atraso',
      time: '1,8s',
      inputs: [['ER', 'ERP'], ['FN', 'Financeiro']],
      outputs: [['EM', 'E-mail'], ['DB', 'Dashboard']],
    },
    {
      label: 'Dados',
      kicker: 'Relatório solicitado',
      title: 'Resumo comercial da semana',
      steps: [
        ['01', 'Coletar', '4 fontes conectadas'],
        ['02', 'Analisar', 'Padrões encontrados'],
        ['03', 'Entregar', 'Dashboard atualizado'],
      ],
      result: 'Decisão pronta, com dados rastreáveis',
      time: '3,1s',
      inputs: [['CR', 'CRM'], ['AP', 'API']],
      outputs: [['BI', 'Painel BI'], ['RP', 'Relatório']],
    },
  ];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => setActive(i => (i + 1) % scenarios.length), 5200);
    return () => clearInterval(timer);
  }, [paused]);

  const current = scenarios[active];

  return (
    <div className="automation-console" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="console-glow"/>
      <header className="console-topbar">
        <div className="console-brand">
          <span className="console-mark">Z</span>
          <div><strong>Zera Flow</strong><small>agente em produção</small></div>
        </div>
        <span className="live-status"><i/> Operando</span>
      </header>

      <div className="console-tabs" role="tablist" aria-label="Exemplos de automação">
        {scenarios.map((scenario, i) => (
          <button key={scenario.label} className={active === i ? 'active' : ''} onClick={() => setActive(i)} role="tab" aria-selected={active === i}>
            {scenario.label}
          </button>
        ))}
      </div>

      <div className="network-stage" key={`network-${active}`}>
        <div className="network-heading">
          <span>Ecossistema conectado</span>
          <small>{current.inputs.length + current.outputs.length} ferramentas · 1 operação</small>
        </div>
        <div className="network-map">
          <div className="tool-stack tool-inputs">
            {current.inputs.map(([abbr, name], i) => (
              <div className="tool-chip" key={name} style={{ '--tool-delay': `${i * 120}ms` }}>
                <i>{abbr}</i><span>{name}</span>
              </div>
            ))}
          </div>
          <div className="network-rail rail-in"><i/></div>
          <div className="orchestration-core">
            <span>Z</span><strong>IA Zera</strong><small>orquestrando</small>
          </div>
          <div className="network-rail rail-out"><i/></div>
          <div className="tool-stack tool-outputs">
            {current.outputs.map(([abbr, name], i) => (
              <div className="tool-chip" key={name} style={{ '--tool-delay': `${(i + 1) * 120}ms` }}>
                <i>{abbr}</i><span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="console-body" key={active}>
        <div className="console-request">
          <div className="request-meta"><span>{current.kicker}</span><b>agora</b></div>
          <p>{current.title}</p>
        </div>

        <div className="automation-flow">
          {current.steps.map(([n, title, detail], i) => (
            <React.Fragment key={n}>
              <div className="flow-step" style={{ '--step-delay': `${i * 180}ms` }}>
                <span className="step-number">{n}</span>
                <div><strong>{title}</strong><small>{detail}</small></div>
                <i className="step-check">✓</i>
              </div>
              {i < current.steps.length - 1 && <div className="flow-line"><i/></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="console-result">
          <div className="result-icon">✓</div>
          <div><small>Ação concluída em {current.time}</small><strong>{current.result}</strong></div>
        </div>
      </div>

      <footer className="console-footer">
        <span><i className="footer-dot"/> Humano no controle</span>
        <span>Dados protegidos</span>
      </footer>
    </div>
  );
}

function Hero() {
  const visualRef = useRef(null);

  useEffect(() => {
    // subtle parallax of the hero visual based on mouse
    const el = visualRef.current;
    if (!el) return;
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      el.style.transform = `translate3d(${dx * -10}px, ${dy * -10}px, 0)`;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="container hero-grid">
        <div>
          <Reveal>
            <span className="eyebrow"><span className="dot"/>Inteligência Artificial Aplicada</span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="h-display">
              Automação <span className="accent">inteligente</span> para empresas que não param.
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="section-lead">
              Construímos agentes de IA, sistemas sob medida e suporte técnico contínuo para que sua operação ganhe escala — sem perder controle.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-cta-row">
              <Magnetic strength={0.35}>
                <a href="#contato" className="btn btn-primary">Solicitar orçamento {Ico.arrow}</a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="#servicos" className="btn btn-ghost">Ver serviços</a>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="hero-meta">
              <div className="stat"><span className="num">7+</span><span className="lbl">Setores atendidos</span></div>
              <div className="stat"><span className="num">3</span><span className="lbl">Produtos em produção</span></div>
              <div className="stat"><span className="num">&lt;24h</span><span className="lbl">Tempo de resposta</span></div>
            </div>
          </Reveal>
        </div>

        <div ref={visualRef} style={{ transition: 'transform .35s ease-out' }}>
          <Reveal delay={300}>
            <AutomationConsole/>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVIÇOS ─── */
function Services() {
  const items = [
    {
      n: '01',
      icon: Ico.bot,
      title: 'Automação com IA',
      desc: 'Agentes inteligentes que cuidam de atendimento, qualificação de leads, follow-up e processos repetitivos com a precisão de um time humano.',
      feats: ['Agentes conversacionais', 'Integrações WhatsApp / e-mail', 'RPA + IA generativa'],
    },
    {
      n: '02',
      icon: Ico.code,
      title: 'Sistemas personalizados',
      desc: 'Plataformas web e dashboards desenhados para a realidade da sua empresa — do MVP enxuto ao sistema crítico em produção.',
      feats: ['Dashboards & BI', 'APIs e integrações', 'Painéis administrativos'],
    },
    {
      n: '03',
      icon: Ico.globe,
      title: 'Sites institucionais',
      desc: 'Presença digital profissional para escritórios e empresas de serviço — sites rápidos, modernos e pensados para gerar contato e credibilidade.',
      feats: ['Design sob medida', 'SEO e performance', 'Integração com WhatsApp'],
    },
    {
      n: '04',
      icon: Ico.shield,
      title: 'Suporte técnico',
      desc: 'Acompanhamento proativo da sua infraestrutura digital, com SLA, observabilidade e correção rápida de incidentes.',
      feats: ['Monitoramento 24/7', 'SLA garantido', 'Manutenção evolutiva'],
    },
  ];

  return (
    <section id="servicos" data-screen-label="02 Serviços">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Serviços</span></Reveal>
        <Reveal delay={100}><h2 className="h-section">Tudo que sua operação precisa para <span className="accent">rodar sozinha</span>.</h2></Reveal>
        <Reveal delay={200}><p className="section-lead">Quatro frentes que combinam para reduzir custo operacional e liberar seu time para o que realmente move o negócio.</p></Reveal>

        <div className="services-grid">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 120}>
              <TiltCard className="service-card" max={4}>
                <span className="num">{it.n} / 04</span>
                <div className="icon">{it.icon}</div>
                <h3>{it.title}</h3>
                <p>{it.desc}</p>
                <ul className="feats">
                  {it.feats.map(f => <li key={f}>{f}</li>)}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUTOS ─── */
function ProductMock({ accent, variant, url }) {
  const host = url.replace(/^https?:\/\/(www\.)?/, '');
  return (
    <div className="product-mock" style={{ '--pa': accent }}>
      <div className="mock-bar">
        <span className="mock-dot"/><span className="mock-dot"/><span className="mock-dot"/>
        <span className="mock-url">{host}</span>
      </div>
      <div className="mock-body">
        <div className="mock-side">
          <span/><span/><span/><span/>
        </div>
        <div className="mock-main">
          {variant === 'finance' && (
            <>
              <div className="mock-cards"><span/><span/><span/></div>
              <div className="mock-chart">
                <i style={{ height: '38%' }}/><i style={{ height: '62%' }}/><i style={{ height: '46%' }}/>
                <i style={{ height: '80%' }}/><i style={{ height: '58%' }}/><i style={{ height: '92%' }}/>
                <i style={{ height: '70%' }}/>
              </div>
            </>
          )}
          {variant === 'members' && (
            <div className="mock-list">
              {[72, 54, 64, 48, 68].map((w, i) => (
                <div className="mock-row" key={i}><span className="ava"/><span className="ln" style={{ width: `${w}%` }}/></div>
              ))}
            </div>
          )}
          {variant === 'schedule' && (
            <div className="mock-slots">
              {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                <span key={i} className={i === 1 || i === 4 || i === 6 ? 'busy' : ''}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    {
      icon: Ico.chart,
      name: 'Prospera',
      tagline: 'Controle financeiro inteligente',
      desc: 'Sistema completo de gestão financeira com dashboards, controle de receitas e despesas, relatórios automáticos e visão clara do fluxo de caixa da sua empresa.',
      feats: ['Dashboard financeiro', 'Controle de receitas e despesas', 'Relatórios automáticos'],
      url: 'https://www.sistemaprospera.com.br',
      accent: '#5cffd1',
      mock: 'finance',
    },
    {
      icon: Ico.church,
      name: 'Ekklesia',
      tagline: 'Gestão para igrejas e ministérios',
      desc: 'Plataforma de gestão eclesiástica com controle de membros, células, eventos, chamados de suporte e comunicação integrada para sua comunidade.',
      feats: ['Gestão de membros e células', 'Controle de eventos', 'Sistema de chamados'],
      url: 'https://www.ekklesiaapp.com.br',
      accent: '#7a5af8',
      mock: 'members',
    },
    {
      icon: Ico.scissors,
      name: 'BarberOS',
      tagline: 'Sistema operacional para barbearias',
      desc: 'Gestão completa para barbearias com agendamento online, controle de caixa, comissões, fila de espera inteligente e relatórios de desempenho.',
      feats: ['Agendamento online', 'Controle de caixa e comissões', 'Fila de espera inteligente'],
      url: 'https://www.sistemabarberos.com.br',
      accent: '#ff6ad5',
      mock: 'schedule',
    },
  ];

  return (
    <section id="produtos" data-screen-label="02b Produtos">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Produtos</span></Reveal>
        <Reveal delay={100}><h2 className="h-section">Soluções prontas que já <span className="accent">rodam em produção</span>.</h2></Reveal>
        <Reveal delay={200}><p className="section-lead">Sistemas desenvolvidos pela Zera AI, validados no mercado e prontos para transformar a operação do seu negócio.</p></Reveal>

        <div className="products-grid">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 140}>
              <TiltCard className="product-card" max={4}>
                <ProductMock accent={p.accent} variant={p.mock} url={p.url}/>
                <div className="product-header">
                  <div className="icon" style={{ borderColor: `${p.accent}40`, background: `${p.accent}18` }}>
                    <span style={{ color: p.accent }}>{p.icon}</span>
                  </div>
                  <div>
                    <h3>{p.name}</h3>
                    <span className="product-tagline">{p.tagline}</span>
                  </div>
                </div>
                <p>{p.desc}</p>
                <ul className="feats">
                  {p.feats.map(f => <li key={f}>{f}</li>)}
                </ul>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="product-link" style={{ color: p.accent }}>
                  Conhecer {p.name} {Ico.extLink}
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SOBRE ─── */
function About() {
  return (
    <section id="sobre" data-screen-label="03 Sobre">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Sobre a Zera</span></Reveal>
        <div className="about-grid">
          <div className="about-text">
            <Reveal delay={80}>
              <h2 className="h-section">Engenharia, dados e IA na mesma <span className="accent">mesa</span>.</h2>
            </Reveal>
            <Reveal delay={180}>
              <p style={{ marginTop: 24 }}>
                Somos um time multidisciplinar — desenvolvedores, engenheiros de dados e especialistas em IA — focado em transformar gargalos operacionais em oportunidades de eficiência.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p>
                Não vendemos pacotes prontos. Cada projeto começa com diagnóstico, segue com prototipagem rápida e termina em produção com acompanhamento contínuo. <span style={{ color: 'var(--cyan-2)'}}>Tecnologia que entrega resultado mensurável.</span>
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="about-stats">
              <div className="stat-tile"><div className="num">100%</div><div className="lbl">Projetos sob medida</div></div>
              <div className="stat-tile"><div className="num">2–4 sem.</div><div className="lbl">Da ideia à produção</div></div>
              <div className="stat-tile"><div className="num">3</div><div className="lbl">Produtos SaaS próprios</div></div>
              <div className="stat-tile"><div className="num">24/7</div><div className="lbl">Suporte e monitoramento</div></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── TECNOLOGIAS ─── */
function Tech() {
  const row1 = [
    { c: 'GP', n: 'OpenAI / GPT' }, { c: 'CL', n: 'Anthropic Claude' }, { c: 'PY', n: 'Python' },
    { c: 'TS', n: 'TypeScript' }, { c: 'NX', n: 'Next.js' }, { c: 'RC', n: 'React' },
    { c: 'NO', n: 'Node.js' }, { c: 'PG', n: 'PostgreSQL' }, { c: 'SB', n: 'Supabase' },
    { c: 'LC', n: 'LangChain' },
  ];
  const row2 = [
    { c: 'N8', n: 'n8n' }, { c: 'WA', n: 'WhatsApp API' }, { c: 'GC', n: 'Google Cloud' },
    { c: 'AW', n: 'AWS' }, { c: 'DO', n: 'Docker' }, { c: 'RD', n: 'Redis' },
    { c: 'PI', n: 'Pinecone' }, { c: 'HF', n: 'Hugging Face' }, { c: 'TW', n: 'Tailwind' },
    { c: 'GH', n: 'GitHub Actions' },
  ];

  const Track = ({ items }) => (
    <div className="tech-track">
      {[...items, ...items].map((t, i) => (
        <div className="tech-chip" key={i}>
          <span className="blob">{t.c}</span>
          <span>{t.n}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="tech" data-screen-label="04 Tecnologias">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Stack</span></Reveal>
        <Reveal delay={80}><h2 className="h-section">A stack que sustenta <span className="accent">cada projeto</span>.</h2></Reveal>
        <Reveal delay={160}><p className="section-lead">Ferramentas modernas e battle-tested. Sem reinventar a roda — entregar valor é o que importa.</p></Reveal>
      </div>

      <Reveal delay={240}>
        <div className="tech-marquee" style={{ marginTop: 56 }}><Track items={row1}/></div>
      </Reveal>
      <Reveal delay={320}>
        <div className="tech-marquee row-2" style={{ marginTop: 14 }}><Track items={row2}/></div>
      </Reveal>
    </section>
  );
}

/* ─── SETORES ─── */
function Sectors() {
  const sectors = [
    {
      span: 'span-3',
      tag: 'Contabilidade · Operação completa',
      title: 'Escritórios de contabilidade',
      desc: 'Operação digital ponta a ponta: automação de atendimento, site institucional e sistema próprio com CRM para organizar clientes, tarefas e as rotinas internas do escritório.',
      chips: ['Automação de atendimento', 'Site institucional', 'Sistema + CRM'],
      status: 'Entregue',
      visual: 'scan',
    },
    {
      span: 'span-3',
      tag: 'Imobiliário · Operação completa',
      title: 'Imobiliárias e corretores',
      desc: 'Do primeiro contato ao fechamento: automação de atendimento, site com vitrine de imóveis e sistema de gestão para captação, funil de clientes e acompanhamento de negócios.',
      chips: ['Automação de atendimento', 'Site + vitrine', 'Sistema de gestão'],
      status: 'Entregue',
      visual: 'scan',
    },
    {
      span: 'span-2',
      tag: 'Advocacia · IA + Sistema',
      title: 'Escritórios de advocacia',
      desc: 'Agente de IA para triagem e atendimento de clientes no WhatsApp, com sistema sob medida em desenvolvimento para a gestão do escritório.',
      chips: ['Agente de IA', 'Sistema sob medida'],
      status: 'Em expansão',
    },
    {
      span: 'span-2',
      tag: 'Campanhas políticas · Plataforma',
      title: 'Campanhas e mobilização',
      desc: 'Plataforma de gestão de campanha com atendimento por IA no WhatsApp, rede de indicações em vários níveis, análise de sentimento e painéis de acompanhamento em tempo real.',
      chips: ['IA no WhatsApp', 'Rede de indicações', 'Análise de sentimento'],
      status: 'Em desenvolvimento',
    },
    {
      span: 'span-2',
      tag: 'Pet shop · Sistema de gestão',
      title: 'Pet shops e clínicas',
      desc: 'Sistema de gestão para pet shops: agendamento de banho e tosa, cadastro de clientes e pets, controle de vendas e histórico de atendimentos.',
      chips: ['Agendamento', 'Cadastro de pets', 'Controle de vendas'],
      status: 'Em breve',
    },
    {
      span: 'span-3',
      tag: 'Marketing digital · Site + Sistemas',
      title: 'Agências de tráfego pago',
      desc: 'Site de alta performance entregue para agência de marketing — e sistemas sob medida quando a operação precisa de mais do que uma página.',
      chips: ['Site institucional', 'Sistemas sob medida'],
      status: 'Entregue',
    },
    {
      span: 'span-3',
      tag: 'Seu segmento',
      title: 'Não achou o seu ramo?',
      desc: 'A gente adapta automação, site e sistema para a realidade da sua empresa — seja qual for o setor. Conta o seu desafio que a gente desenha a solução.',
      chips: ['Falar com a gente'],
      href: '#contato',
    },
  ];

  return (
    <section id="setores" data-screen-label="05 Setores">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Setores</span></Reveal>
        <Reveal delay={80}><h2 className="h-section">A gente já fala a língua <span className="accent">do seu ramo</span>.</h2></Reveal>
        <Reveal delay={160}><p className="section-lead">Ramos em que já entregamos automação, sites e sistemas sob medida — cada um com a solução que a operação pedia.</p></Reveal>

        <div className="cases-grid">
          {sectors.map((c, i) => (
            <Reveal key={i} delay={i * 100} className={c.span}>
              <Spotlight className="case-card">
                {c.visual && <div className={`case-visual ${c.visual}`}/>}
                <span className="tag">{c.tag}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
                <div className="metric-row sector-footer">
                  <div className="sector-chips">
                    {c.chips.map(ch => (
                      c.href
                        ? <a key={ch} href={c.href} className="sector-chip link">{ch} {Ico.arrow}</a>
                        : <span key={ch} className="sector-chip">{ch}</span>
                    ))}
                  </div>
                  {c.status && (
                    <span className={`sector-status ${['Entregue', 'Em produção'].includes(c.status) ? '' : 'dev'}`}>
                      <span className="dot"/>{c.status}
                    </span>
                  )}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQ() {
  const items = [
    { q: 'Quanto tempo leva para colocar um projeto em produção?', a: 'A maioria dos nossos projetos sai do briefing para a primeira versão em produção entre 2 e 4 semanas. Trabalhamos com ciclos curtos para validar valor o quanto antes.' },
    { q: 'Vocês atendem empresas de qualquer porte?', a: 'Sim. Atendemos desde pequenas empresas que querem automatizar tarefas pontuais até operações de médio e grande porte que precisam de sistemas críticos.' },
    { q: 'Como funciona o orçamento?', a: 'Após uma conversa inicial de diagnóstico (gratuita), enviamos uma proposta com escopo, prazo e investimento detalhados. Sem letras miúdas e sem surpresa.' },
    { q: 'Vocês fazem suporte depois da entrega?', a: 'Fazemos. Oferecemos planos de manutenção evolutiva e suporte técnico com SLA, para que seu sistema continue rodando bem e evoluindo com o negócio.' },
    { q: 'Os dados da minha empresa ficam seguros?', a: 'Total prioridade. Trabalhamos com criptografia em trânsito e em repouso, controle granular de acessos e seguimos as boas práticas da LGPD em todos os projetos.' },
    { q: 'Posso integrar a IA com sistemas que já uso?', a: 'Sim. Já integramos com WhatsApp Business, ERPs, CRMs (HubSpot, Pipedrive, RD), Google Workspace, Microsoft 365 e centenas de APIs via n8n e código próprio.' },
  ];

  const [open, setOpen] = useState(0);

  return (
    <section id="faq" data-screen-label="06 FAQ">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Perguntas frequentes</span></Reveal>
        <Reveal delay={80}><h2 className="h-section">Respostas <span className="accent">diretas</span> para as dúvidas mais comuns.</h2></Reveal>

        <div className="faq-list">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className={`faq-item ${open === i ? 'open' : ''}`}>
                <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{it.q}</span>
                  <span className="plus">{Ico.plus}</span>
                </div>
                <div className="faq-a"><p>{it.a}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTATO ─── */
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', budget: '', message: '', privacy: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener('mousemove', onMove);
    return () => el.removeEventListener('mousemove', onMove);
  }, [sent]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Informe seu nome';
    if (!form.email.trim()) e.email = 'Informe seu e-mail';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'E-mail inválido';
    if (!form.service) e.service = 'Escolha uma opção';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Conte um pouco mais (mín. 10 caracteres)';
    if (!form.privacy) e.privacy = 'Confirme que leu o aviso de privacidade';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const serviceLabel = {
    auto: 'Automação com IA',
    sys: 'Sistema personalizado',
    site: 'Site institucional',
    sup: 'Suporte técnico',
    other: 'Não tenho certeza',
  };
  const budgetLabel = {
    lt5: 'Até R$ 5.000',
    '5-15': 'R$ 5.000 — R$ 15.000',
    '15-50': 'R$ 15.000 — R$ 50.000',
    gt50: 'Acima de R$ 50.000',
  };

  const buildWhatsappUrl = () => {
    const lines = [
      '*Nova solicitação de orçamento — Zera AI*',
      '',
      `*Nome:* ${form.name}`,
      `*E-mail:* ${form.email}`,
    ];
    if (form.company.trim()) lines.push(`*Empresa:* ${form.company}`);
    lines.push(`*Serviço:* ${serviceLabel[form.service] || form.service}`);
    if (form.budget) lines.push(`*Investimento estimado:* ${budgetLabel[form.budget] || form.budget}`);
    lines.push('', '*Desafio / necessidade:*', form.message.trim());
    const text = encodeURIComponent(lines.join('\n'));
    return `https://wa.me/5561999117557?text=${text}`;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    const url = buildWhatsappUrl();
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 700);
  };

  const upd = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
    if (errors[k]) setErrors(er => ({ ...er, [k]: undefined }));
  };

  return (
    <section id="contato" data-screen-label="07 Contato">
      <div className="container">
        <Reveal><span className="eyebrow"><span className="dot"/>Vamos conversar</span></Reveal>
        <Reveal delay={80}><h2 className="h-section">Conte seu desafio. <span className="accent">Devolvemos um plano.</span></h2></Reveal>
        <Reveal delay={160}><p className="section-lead">Diagnóstico inicial gratuito. Resposta em até 1 dia útil.</p></Reveal>

        <div className="contact-grid">
          <Reveal delay={120}>
            <div className="contact-info">
              <div className="info-tile">
                <div className="icon">{Ico.mail}</div>
                <div><div className="lbl">E-mail</div><div className="val">zeraai03@gmail.com</div></div>
              </div>
              <div className="info-tile">
                <div className="icon">{Ico.phone}</div>
                <div><div className="lbl">WhatsApp</div><div className="val">+55 (61) 99911-7557</div></div>
              </div>
              <div className="info-tile">
                <div className="icon">{Ico.pin}</div>
                <div><div className="lbl">Atendimento</div><div className="val">Brasil — 100% remoto</div></div>
              </div>
              <div className="info-tile" style={{ borderColor: 'rgba(92,255,209,.3)', background: 'rgba(92,255,209,.04)' }}>
                <div className="icon" style={{ color: 'var(--mint)', background: 'rgba(92,255,209,.1)' }}>{Ico.zap}</div>
                <div>
                  <div className="lbl">Tempo de resposta</div>
                  <div className="val">&lt; 24h úteis</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="contact-form" ref={formRef}>
              {sent ? (
                <div className="form-success">
                  <div className="check-orb">{Ico.check}</div>
                  <h3>Tudo pronto!</h3>
                  <p>Abrimos o WhatsApp com sua mensagem formatada — basta confirmar o envio. Caso a janela não tenha aberto, use o botão abaixo.</p>
                  <a className="btn btn-primary" href={buildWhatsappUrl()} target="_blank" rel="noopener noreferrer">
                    Abrir WhatsApp {Ico.arrow}
                  </a>
                  <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name:'', email:'', company:'', service:'', budget:'', message:'', privacy:false }); }}>
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <div className="field-row">
                    <div className={`field ${errors.name ? 'error' : ''}`}>
                      <label>Nome*</label>
                      <input type="text" value={form.name} onChange={upd('name')} placeholder="Como podemos te chamar?"/>
                      {errors.name && <div className="err-msg">{errors.name}</div>}
                    </div>
                    <div className={`field ${errors.email ? 'error' : ''}`}>
                      <label>E-mail*</label>
                      <input type="email" value={form.email} onChange={upd('email')} placeholder="voce@empresa.com"/>
                      {errors.email && <div className="err-msg">{errors.email}</div>}
                    </div>
                  </div>

                  <div className="field-row">
                    <div className="field">
                      <label>Empresa</label>
                      <input type="text" value={form.company} onChange={upd('company')} placeholder="Nome da empresa"/>
                    </div>
                    <div className={`field ${errors.service ? 'error' : ''}`}>
                      <label>Serviço de interesse*</label>
                      <select value={form.service} onChange={upd('service')}>
                        <option value="">Selecione...</option>
                        <option value="auto">Automação com IA</option>
                        <option value="sys">Sistema personalizado</option>
                        <option value="site">Site institucional</option>
                        <option value="sup">Suporte técnico</option>
                        <option value="other">Não tenho certeza</option>
                      </select>
                      {errors.service && <div className="err-msg">{errors.service}</div>}
                    </div>
                  </div>

                  <div className="field">
                    <label>Investimento estimado</label>
                    <select value={form.budget} onChange={upd('budget')}>
                      <option value="">Não sei ainda</option>
                      <option value="lt5">Até R$ 5.000</option>
                      <option value="5-15">R$ 5.000 — R$ 15.000</option>
                      <option value="15-50">R$ 15.000 — R$ 50.000</option>
                      <option value="gt50">Acima de R$ 50.000</option>
                    </select>
                  </div>

                  <div className={`field ${errors.message ? 'error' : ''}`}>
                    <label>Conte seu desafio*</label>
                    <textarea value={form.message} onChange={upd('message')} placeholder="Descreva brevemente o que você precisa automatizar ou construir..." rows={4}/>
                    {errors.message && <div className="err-msg">{errors.message}</div>}
                  </div>

                  <div className={`privacy-consent ${errors.privacy ? 'error' : ''}`}>
                    <label>
                      <input type="checkbox" checked={form.privacy} onChange={upd('privacy')} />
                      <span>Li a <a href="#privacidade">Política de Privacidade</a> e estou ciente de que meus dados serão usados para responder a esta solicitação pelo WhatsApp.</span>
                    </label>
                    {errors.privacy && <div className="err-msg">{errors.privacy}</div>}
                  </div>

                  <Magnetic strength={0.2}>
                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>
                      {loading ? 'Preparando...' : <>Enviar via WhatsApp {Ico.arrow}</>}
                    </button>
                  </Magnetic>
                  <p style={{ fontSize: 12, color: 'var(--text-dim)', textAlign: 'center', margin: '14px 0 0', fontFamily: "'JetBrains Mono', monospace" }}>
                    Sua mensagem será enviada para nosso WhatsApp comercial.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer({ logo }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-logo"><img src={logo} alt="Zera AI Solutions"/></div>
        <div className="copy">© {new Date().getFullYear()} Zera AI Solution's — Todos os direitos reservados.</div>
        <div className="links">
          <a href="#servicos">Serviços</a>
          <a href="#setores">Setores</a>
          <a href="#contato">Contato</a>
          <a href="#privacidade">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

function PrivacyPolicy({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div className="privacy-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <article className="privacy-modal">
        <div className="privacy-head">
          <div>
            <span className="eyebrow"><span className="dot"/>Transparência e LGPD</span>
            <h2 id="privacy-title">Política de Privacidade</h2>
            <p>Última atualização: 3 de agosto de 2026</p>
          </div>
          <button className="privacy-close" onClick={onClose} aria-label="Fechar Política de Privacidade">×</button>
        </div>

        <div className="privacy-content">
          <p>A Zera AI Solution's respeita sua privacidade. Esta política explica, de forma clara, como tratamos dados pessoais quando você visita este site ou entra em contato conosco.</p>

          <section>
            <h3>1. Quem é responsável pelos dados</h3>
            <p>A controladora dos dados é a Zera AI Solution's. Dúvidas ou pedidos relacionados à privacidade podem ser enviados para <a href="mailto:zeraai03@gmail.com">zeraai03@gmail.com</a> ou pelo WhatsApp <a href="https://wa.me/5561999117557" target="_blank" rel="noopener noreferrer">+55 (61) 99911-7557</a>.</p>
          </section>

          <section>
            <h3>2. Quais dados tratamos</h3>
            <p>Quando você preenche o formulário, podemos tratar nome, e-mail, empresa, serviço de interesse, faixa de investimento e a mensagem que você escrever. Informações técnicas básicas, como endereço IP, navegador e registros de acesso, também podem ser processadas pela hospedagem e pelos serviços necessários para exibir o site.</p>
          </section>

          <section>
            <h3>3. Para que usamos os dados</h3>
            <p>Usamos essas informações para responder ao contato, entender sua necessidade, preparar propostas, dar continuidade a uma possível relação comercial, manter a segurança do site e cumprir obrigações legais. Não vendemos seus dados pessoais.</p>
          </section>

          <section>
            <h3>4. Compartilhamento e serviços externos</h3>
            <p>O formulário prepara uma mensagem e a abre no WhatsApp; o envio só ocorre quando você confirma dentro do aplicativo. Nesse momento, os dados passam a ser tratados também pela Meta/WhatsApp conforme as regras desse serviço. O site utiliza provedores de hospedagem, entrega de conteúdo e fontes web, que podem processar dados técnicos estritamente necessários à operação.</p>
          </section>

          <section>
            <h3>5. Cookies</h3>
            <p>Atualmente, este site não utiliza cookies de publicidade, rastreamento comportamental ou ferramentas próprias de análise. Se isso mudar, esta política será atualizada e, quando necessário, exibiremos opções de consentimento.</p>
          </section>

          <section>
            <h3>6. Por quanto tempo guardamos os dados</h3>
            <p>Conservamos os dados somente pelo período necessário para atender à solicitação, conduzir a relação comercial e cumprir obrigações legais ou regulatórias. Depois disso, eles são eliminados ou anonimizados quando aplicável.</p>
          </section>

          <section>
            <h3>7. Seus direitos</h3>
            <p>Nos termos da LGPD, você pode solicitar confirmação e acesso aos dados, correção, informação sobre compartilhamentos, anonimização, bloqueio ou eliminação quando cabível, portabilidade, oposição e revogação do consentimento. Para exercer um direito, use os canais informados no item 1. Poderemos pedir informações para confirmar sua identidade e proteger seus dados.</p>
          </section>

          <section>
            <h3>8. Segurança e alterações</h3>
            <p>Adotamos medidas razoáveis para proteger os dados contra acesso, perda, alteração ou divulgação indevida. Esta política pode ser atualizada para refletir mudanças no site ou na legislação; a data da versão mais recente será sempre indicada no início.</p>
          </section>
        </div>

        <div className="privacy-actions">
          <button className="btn btn-primary" onClick={onClose}>Entendi</button>
        </div>
      </article>
    </div>
  );
}

Object.assign(window, { Nav, Hero, Services, Products, About, Tech, Sectors, FAQ, Contact, Footer, PrivacyPolicy, Ico });
