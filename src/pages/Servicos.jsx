const SERVICES = [
  {icon:"⌨",title:"Desenvolvimento de Software",highlight:true,
    desc:"Sistemas sob medida — desde APIs robustas a aplicações completas. Performance, segurança e escalabilidade em cada entrega.",
    tags:["Backend","APIs","Microserviços","Cloud"]},
  {icon:"🌐",title:"Páginas Web",highlight:false,
    desc:"Sites institucionais, landing pages e portais corporativos com design moderno, responsivo e otimizados para SEO.",
    tags:["HTML/CSS","React","SEO","Responsivo"]},
  {icon:"⚡",title:"Aplicações Web",highlight:false,
    desc:"Plataformas de alta complexidade: dashboards, ERPs, CRMs e ferramentas internas personalizadas.",
    tags:["React","Node.js","SPA","PWA"]},
  {icon:"🤖",title:"Agentes de IA",highlight:true,
    desc:"Automações inteligentes que otimizam processos, atendem clientes e geram insights em tempo real.",
    tags:["LLM","Automação","Chatbots","n8n"]},
  {icon:"🛡",title:"Consultoria de T.I",highlight:false,
    desc:"Diagnóstico técnico, planejamento de arquitetura e suporte estratégico para tomada de decisões.",
    tags:["Arquitetura","Gestão","Segurança","Strategy"]},
  {icon:"⚙",title:"Suporte & Manutenção",highlight:false,
    desc:"Monitoramento contínuo, correções e evolução de sistemas para máxima disponibilidade.",
    tags:["DevOps","Monitoramento","SLA","Updates"]},
];

const PROCESS = [
  {step:"01",title:"Reunião de Alinhamento",    desc:"Entendemos seu negócio, objetivos e desafios antes de propor qualquer solução."},
  {step:"02",title:"Proposta Técnica",        desc:"Elaboramos uma proposta detalhada com escopo, prazo e investimento."},
  {step:"03",title:"Desenvolvimento Iterativo",desc:"Entregas em ciclos curtos com feedback constante e total transparência."},
  {step:"04",title:"Implantação & Suporte",        desc:"Implantação, treinamento e suporte pós-entrega inclusos."},
];

export default function Servicos() {
  return (
    <>
      <style>{`
        .svc-page{padding-top:68px}
        .svc-hero{padding:5rem clamp(1.25rem,5vw,3rem) 4rem;text-align:center;position:relative;overflow:hidden}
        .svc-hero-inner{max-width:680px;margin:0 auto;position:relative;z-index:1}
        .svc-grid-section{padding:4rem clamp(1.25rem,5vw,3rem)}
        .svc-grid{max-width:1160px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}
        @media(max-width:900px){.svc-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:580px){.svc-grid{grid-template-columns:1fr}}
        .svc-card{
          border:1px solid var(--card-border);border-radius:12px;padding:2rem;
          background:var(--card-bg);backdrop-filter:blur(12px);
          transition:all .3s;position:relative;overflow:hidden;display:flex;flex-direction:column;
        }
        .svc-card.featured{border-color:var(--border-brand);background:linear-gradient(135deg,var(--brand-glow),var(--card-bg))}
        .svc-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-brand);border-color:var(--border-brand)}
        .svc-badge{
          position:absolute;top:1.25rem;right:1.25rem;
          font-size:.6rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:var(--brand);background:var(--brand-glow);border:1px solid var(--border-brand);
          padding:.2rem .6rem;border-radius:100px;
        }
        .svc-tag{
          font-size:.68rem;font-weight:600;letter-spacing:.06em;
          color:var(--text-muted);background:var(--bg-elevated);
          padding:.2rem .55rem;border-radius:4px;
        }
        .process-section{
          padding:5rem clamp(1.25rem,5vw,3rem);
          background:var(--bg-surface);
          border-top:1px solid var(--border);border-bottom:1px solid var(--border);
        }
        .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:2.5rem}
        @media(max-width:900px){.process-grid{grid-template-columns:1fr 1fr}}
        .process-item{padding:2rem 1.75rem;border-right:1px solid var(--border)}
        .process-item:last-child{border-right:none}
        .process-num{font-family:'Syne',sans-serif;font-size:2.5rem;font-weight:800;color:var(--border-strong);line-height:1;margin-bottom:1rem;transition:color .3s}
        .process-item:hover .process-num{color:var(--brand)}
        .svc-cta{padding:5rem clamp(1.25rem,5vw,3rem);text-align:center}
      `}</style>

      <div className="svc-page">
        <section className="svc-hero">
          <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 60% 50% at 50% 0%,var(--brand-glow),transparent)"}}/>
          <div className="svc-hero-inner">
            <span className="section-label">O que oferecemos</span>
            <h1 style={{fontSize:"clamp(2.4rem,5vw,4rem)",marginBottom:"1.25rem"}}>
              Nossos <span className="grad-text">Serviços</span>
            </h1>
            <p style={{fontSize:"1rem",color:"var(--text-secondary)",lineHeight:1.75}}>
              Da ideia ao produto final — desenvolvemos soluções completas para transformar seu negócio digitalmente.
            </p>
          </div>
        </section>

        <section className="svc-grid-section">
          <div className="svc-grid">
            {SERVICES.map((s,i)=>(
              <div key={i} className={`svc-card${s.highlight?" featured":""}`}>
                {s.highlight && <span className="svc-badge">Destaque</span>}
                <div style={{fontSize:"1.75rem",marginBottom:"1.1rem"}}>{s.icon}</div>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.05rem",fontWeight:700,marginBottom:".75rem",color:"var(--text-primary)"}}>{s.title}</div>
                <p style={{fontSize:".875rem",color:"var(--text-secondary)",lineHeight:1.7,flex:1}}>{s.desc}</p>
                <div style={{display:"flex",gap:".4rem",flexWrap:"wrap",marginTop:"1.25rem"}}>
                  {s.tags.map(t=><span key={t} className="svc-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div style={{maxWidth:"1160px",margin:"0 auto"}}>
            <span className="section-label">Como trabalhamos</span>
            <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.5rem)"}}>Nosso <span className="grad-text">processo</span></h2>
            <div className="process-grid">
              {PROCESS.map((p,i)=>(
                <div key={i} className="process-item">
                  <div className="process-num">{p.step}</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:".95rem",fontWeight:700,marginBottom:".6rem"}}>{p.title}</div>
                  <p style={{fontSize:".845rem",color:"var(--text-secondary)",lineHeight:1.65}}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="svc-cta">
          <div style={{maxWidth:"600px",margin:"0 auto"}}>
            <span className="section-label">Vamos conversar?</span>
            <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.6rem)",margin:".75rem 0 1rem"}}>
              Pronto para <span className="grad-text">começar</span> seu projeto?
            </h2>
            <p style={{fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"2rem"}}>
              Agende uma conversa gratuita com nossa equipe e descubra como podemos ajudar seu negócio a crescer.
            </p>
            <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
              <a href="/agendamento" className="btn btn-brand">Agendar reunião gratuita →</a>
              <a href="https://wa.me/5581997243724" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">💬 WhatsApp</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
