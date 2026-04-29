import { useState } from "react";

const SERVICES = [
  {icon:"⌨",title:"Desenvolvimento de Software",highlight:true,
    desc:"Sistemas sob medida — desde APIs robustas a aplicações completas. Performance, segurança e escalabilidade em cada entrega.",
    tags:["Backend","APIs","Microserviços","Cloud"]},
  {icon:"🌐",title:"Páginas Web",highlight:false,
    desc:"Sites institucionais, landing pages e portais corporativos com design moderno, responsivo e otimizados para SEO.",
    tags:["HTML/CSS","React","SEO","Responsivo"]},
  {icon:"⚡",title:"Aplicações Web",highlight:true,
    desc:"Plataformas de alta complexidade: dashboards, ERPs, CRMs e ferramentas internas personalizadas.",
    tags:["React","Node.js","SPA","PWA"]},
  {icon:"🤖",title:"Agentes de IA",highlight:false,
    desc:"Automações inteligentes que otimizam processos, atendem clientes e geram insights em tempo real.",
    tags:["LLM","Automação","Chatbots","n8n"]},
  {icon:"🛡",title:"Consultoria de T.I",highlight:true,
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

const CASES = [
  {
    title:"Ação Social IEADPE",
    type:"Sistema de atendimento solidário",
    image:"/cases/acao-social-ieadpe.svg",
    accent:"#10bfe1",
    synopsis:"Projeto criado para realizar uma ação solidária na Área 44. O sistema facilitou o cadastro da população e entregou uma soma total dos atendimentos realizados ao final da ação.",
  },
  {
    title:"CasandooCeo",
    type:"Site de lista de presentes",
    image:"/cases/casando-o-ceo.svg",
    accent:"#c56b3d",
    synopsis:"Site desenvolvido para lista de presentes de casamento do CEO, com o objetivo de facilitar a experiência dos convidados e tornar o momento mais exclusivo.",
  },
  {
    title:"WebCond",
    type:"SaaS para gestão de condomínios",
    image:"/cases/webcond.svg",
    accent:"#45b54f",
    synopsis:"SaaS desenvolvido para gestão de condomínios de pequeno porte, auxiliando na gestão financeira e comunicação com os condôminos. Nosso maior sucesso em desenvolvimento e criatividade.",
  },
  {
    title:"Reset AnyDesk",
    type:"Software de manutenção e suporte",
    image:"/cases/reset-anydesk.svg",
    accent:"#00d9ff",
    synopsis:"Software desenvolvido para solucionar um problema real de suporte técnico: automatizar rotinas de diagnóstico, recuperação operacional e manutenção do ambiente AnyDesk com uma interface simples, objetiva e monitorada.",
  },
];

export default function Servicos() {
  const [zoomedCase, setZoomedCase] = useState(null);

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
        .cases-section{
          padding:5rem clamp(1.25rem,5vw,3rem);
          border-bottom:1px solid var(--border);
          position:relative;overflow:hidden;
        }
        .cases-section::before{
          content:'';position:absolute;inset:auto -12% -30% auto;
          width:520px;height:520px;border-radius:50%;
          background:radial-gradient(circle,var(--brand-glow),transparent 68%);
          pointer-events:none;
        }
        .cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.4rem;margin-top:2.5rem}
        @media(max-width:980px){.cases-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:640px){.cases-grid{grid-template-columns:1fr}}
        .case-card{
          border:1px solid var(--card-border);border-radius:12px;
          background:var(--card-bg);overflow:hidden;position:relative;
          transition:transform .32s ease,border-color .32s ease,box-shadow .32s ease;
          backdrop-filter:blur(12px);
        }
        .case-card::before{
          content:'';position:absolute;inset:0 0 auto 0;height:2px;
          background:linear-gradient(90deg,transparent,var(--case-accent),transparent);
          transform:scaleX(0);transition:transform .35s ease;
          z-index:2;
        }
        .case-card:hover{
          transform:translateY(-6px);
          border-color:color-mix(in srgb,var(--case-accent) 55%,var(--border-brand));
          box-shadow:0 16px 40px rgba(0,0,0,.22),0 8px 32px color-mix(in srgb,var(--case-accent) 24%,transparent);
        }
        .case-card:hover::before{transform:scaleX(1)}
        .case-image-wrap{
          aspect-ratio:16/10;overflow:hidden;background:var(--bg-elevated);
          border:0;border-bottom:1px solid var(--border);position:relative;
          display:block;width:100%;cursor:zoom-in;padding:0;
        }
        .case-image{
          width:100%;height:100%;object-fit:cover;
          transition:transform .45s ease,filter .45s ease;
        }
        .case-card:hover .case-image{transform:scale(1.055);filter:saturate(1.08) contrast(1.04)}
        .case-info{padding:1.35rem}
        .case-type{
          font-size:.64rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
          color:var(--case-accent);margin-bottom:.45rem;
        }
        .case-title{
          font-family:'Syne',sans-serif;font-size:1.08rem;font-weight:800;
          color:var(--text-primary);margin-bottom:.75rem;
        }
        .case-synopsis{font-size:.86rem;color:var(--text-secondary);line-height:1.68}
        .image-lightbox{
          position:fixed;inset:0;z-index:500;
          display:flex;align-items:center;justify-content:center;
          padding:clamp(1rem,4vw,3rem);
          background:rgba(3,7,18,.82);backdrop-filter:blur(14px);
          animation:fadeUp .18s ease;
        }
        .image-lightbox-content{
          position:relative;width:min(1120px,100%);
          max-height:88vh;
        }
        .image-lightbox-img{
          width:100%;max-height:88vh;object-fit:contain;
          border-radius:12px;border:1px solid var(--border-strong);
          background:var(--bg-base);box-shadow:0 24px 80px rgba(0,0,0,.55);
        }
        .image-lightbox-close{
          position:absolute;top:-.85rem;right:-.85rem;
          width:36px;height:36px;border-radius:50%;
          border:1px solid var(--border-brand);background:var(--bg-surface);
          color:var(--brand);font-size:1.35rem;line-height:1;
          display:flex;align-items:center;justify-content:center;
          transition:all .2s;
        }
        .image-lightbox-close:hover{background:var(--brand-glow);transform:translateY(-1px)}
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

        <section className="cases-section">
          <div style={{maxWidth:"1160px",margin:"0 auto",position:"relative",zIndex:1}}>
            <span className="section-label">Projetos concluídos</span>
            <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.5rem)"}}>Cases de <span className="grad-text">Sucesso</span></h2>
            <p style={{maxWidth:"680px",fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.75,marginTop:"1rem"}}>
              Projetos que já realizamos com foco em impacto, experiência e tecnologia aplicada a problemas reais.
            </p>
            <div className="cases-grid">
              {CASES.map((item)=>(
                <article key={item.title} className="case-card" style={{"--case-accent":item.accent}}>
                  <button className="case-image-wrap" type="button" onClick={()=>setZoomedCase(item)}>
                    <img src={item.image} alt={item.title} className="case-image" />
                  </button>
                  <div className="case-info">
                    <div className="case-type">{item.type}</div>
                    <h3 className="case-title">{item.title}</h3>
                    <p className="case-synopsis">{item.synopsis}</p>
                  </div>
                </article>
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
              Agende uma conversa gratuita com a TSC e descubra como podemos ajudar seu negócio a crescer.
            </p>
            <div style={{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"}}>
              <a href="/agendamento" className="btn btn-brand">Agendar reunião gratuita →</a>
              <a href="https://wa.me/5581997243724" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">💬 WhatsApp</a>
            </div>
          </div>
        </section>

        {zoomedCase && (
          <div className="image-lightbox" onClick={()=>setZoomedCase(null)} role="dialog" aria-modal="true" aria-label={zoomedCase.title}>
            <div className="image-lightbox-content" onClick={e=>e.stopPropagation()}>
              <button className="image-lightbox-close" type="button" onClick={()=>setZoomedCase(null)} aria-label="Fechar imagem">×</button>
              <img src={zoomedCase.image} alt={zoomedCase.title} className="image-lightbox-img" />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
