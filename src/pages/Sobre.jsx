// Ana dos Santos adicionada ao time — sem foto, usa avatar
const TEAM = [
  {
    name:"Estevão dos Santos", role:"CEO", roleEn:"Diretor Executivo",
    bio:"Lidera a TSC com inovação e visão estratégica, transformando desafios em oportunidades. Acredita no poder da tecnologia para impulsionar mudanças positivas.",
    photo:"/team/estevao.png", initials:"ES", color:"#10bfe1",
  },
  {
    name:"Wanderson Aguiar", role:"CFO", roleEn:"Diretor Financeiro",
    bio:"Responsável pela estratégia financeira e investimentos da TSC. Comprometido em garantir os recursos para transformar ideias inovadoras em soluções de sucesso.",
    photo:"/team/wanderson.png", initials:"WA", color:"#7c3aed",
  },
  {
    name:"Ana dos Santos", role:"Aux. RH", roleEn:"Auxiliar de Recursos Humanos",
    bio:"Responsável pelo desenvolvimento do time e da cultura organizacional, garantindo um ambiente de trabalho saudável, inclusivo e voltado ao crescimento.",
    photo:"/team/ana.png", initials:"AS", color:"#f59e0b",
  },
  {
    name:"Erick Victor", role:"Dev Front-End", roleEn:"Desenvolvedor Front-End",
    bio:"Coordenador do projeto TSC Alfa. Especialista em criar interfaces modernas e experiências digitais que encantam usuários, com atenção aos mínimos detalhes.",
    photo:"/team/erick.png", initials:"EV", color:"#10b981",
  },
  {
    name:"Wagner Aguiar", role:"Automação", roleEn:"Especialista em Automação",
    bio:"Transforma fluxos manuais em pipelines inteligentes. Especialista em automação de processos e integração de sistemas para máxima eficiência operacional.",
    photo:"/team/wagner.png", initials:"WGR", color:"#ef4444",
  },
  {
    name:"Maria Eduarda", role:"UX · Dev Back-End", roleEn:"UX Designer & Desenvolvedora Back-End",
    bio:"Une design centrado no usuário com arquitetura back-end robusta. Cria soluções belas e tecnicamente sólidas, com foco em desempenho e segurança.",
    photo:"/team/maria.png", initials:"ME", color:"#ec4899",
  },
  {
    name:"Safira Tech", role:"Agente de IA", roleEn:"Inteligência Artificial — TSC",
    bio:"A IA da TSCBr. Safira auxilia no atendimento, automações e processos internos, sendo parte essencial do ecossistema tecnológico da empresa.",
    photo:"/team/safira.png", isAI:true, initials:"AI", color:"#10bfe1",
  },
];

const VALUES = [
  {icon:"◈",title:"Inovação",     desc:"Buscamos constantemente as melhores soluções, mesmo quando elas ainda não existem."},
  {icon:"⬡",title:"Excelência",  desc:"Cada detalhe importa. Entregamos com qualidade e comprometimento total."},
  {icon:"⌬",title:"Transparência",desc:"Comunicação clara e honesta em todas as etapas do projeto."},
  {icon:"⊕",title:"Parceria",     desc:"Somos mais que fornecedores — somos parceiros no crescimento do seu negócio."},
];

export default function Sobre() {
  return (
    <>
      <style>{`
        .sobre-page{padding-top:68px}
        .sobre-hero{padding:5rem clamp(1.25rem,5vw,3rem) 4rem;position:relative;overflow:hidden}
        .sobre-hero-inner{
          max-width:1160px;margin:0 auto;
          display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;
        }
        @media(max-width:900px){.sobre-hero-inner{grid-template-columns:1fr;gap:2.5rem}}
        .values-section{
          padding:5rem clamp(1.25rem,5vw,3rem);
          background:var(--bg-surface);
          border-top:1px solid var(--border);border-bottom:1px solid var(--border);
        }
        .values-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;margin-top:2.5rem}
        @media(max-width:900px){.values-grid{grid-template-columns:1fr 1fr}}
        .value-card{border:1px solid var(--card-border);border-radius:10px;padding:1.75rem;background:var(--card-bg);transition:all .3s}
        .value-card:hover{border-color:var(--border-brand);transform:translateY(-3px);box-shadow:var(--shadow-brand)}
        .team-section{padding:5rem clamp(1.25rem,5vw,3rem)}
        .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem}
        @media(max-width:900px){.team-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:580px){.team-grid{grid-template-columns:1fr}}
        .member-card{
          border:1px solid var(--card-border);border-radius:12px;
          overflow:hidden;background:var(--card-bg);transition:all .3s;
        }
        .member-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md)}
        .member-photo-wrap{
          height:220px;position:relative;overflow:hidden;
          background:var(--bg-elevated);
          display:flex;align-items:center;justify-content:center;
        }
        .member-photo{
          width:120px;height:120px;border-radius:50%;object-fit:cover;
          box-shadow:0 6px 18px rgba(0,0,0,.08);border:3px solid rgba(255,255,255,.06)
        }
        .member-avatar{
          width:120px;height:120px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;
          font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;
        }
        .ai-badge{
          position:absolute;top:.75rem;right:.75rem;
          font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
          color:var(--brand);background:var(--brand-glow);
          border:1px solid var(--border-brand);padding:.2rem .6rem;border-radius:100px;
        }
        .member-info{padding:1.4rem}
        .member-name{font-family:'Syne',sans-serif;font-size:1rem;font-weight:700;color:var(--text-primary);margin-bottom:.25rem}
        .member-role{font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.15rem}
        .member-role-en{font-size:.78rem;color:var(--text-muted);margin-bottom:.875rem}
        .member-bio{font-size:.845rem;color:var(--text-secondary);line-height:1.65}
        .stat-chip{
          background:var(--card-bg);border:1px solid var(--card-border);
          border-radius:10px;padding:1.5rem;
          display:flex;align-items:center;gap:1rem;
        }
        .stat-chip-num{
          font-family:'Syne',sans-serif;font-weight:800;font-size:2rem;
          background:linear-gradient(135deg,var(--brand),#7dd4f0);
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;
        }
      `}</style>

      <div className="sobre-page">

        {/* HERO */}
        <section className="sobre-hero">
          <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 50% 60% at 80% 50%,var(--brand-glow),transparent)"}}/>
          <div className="sobre-hero-inner" style={{position:"relative",zIndex:1}}>
            <div>
              <span className="section-label">Nossa história</span>
              <h1 style={{fontSize:"clamp(2.2rem,5vw,3.6rem)",marginBottom:"1.5rem"}}>
                Sobre a <span className="grad-text">TSC</span>
              </h1>
              {[
                "Fundada em 09 de janeiro de 2025, a Technology Solution Company BR nasceu da união entre visão estratégica e paixão por tecnologia, fundada e liderada por <strong>Estevão dos Santos</strong> e com o apoio estratégico e financiamento de <strong>Wanderson Vasconcelos </strong>.",
                "Não criamos apenas softwares de ponta — desenvolvemos estratégias digitais que se tornam o motor para o crescimento de negócios. Acreditamos que a tecnologia é uma ponte para conectar ideias e construir um futuro melhor para nossos clientes.",
                "Com uma equipe multidisciplinar apaixonada por inovação, atendemos startups em fase inicial e empresas consolidadas que buscam modernizar seus processos digitais.",
              ].map((p,i)=>(
                <p key={i} style={{fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"1rem"}}
                  dangerouslySetInnerHTML={{__html:p.replace(/<strong>/g,'<strong style="color:var(--text-primary)">').replace(/<\/strong>/g,"</strong>")}}/>
              ))}
              <a href="/agendamento" className="btn btn-ghost" style={{marginTop:"1.25rem"}}>Fale com a gente →</a>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"1.25rem"}}>
              <div style={{background:"var(--bg-elevated)",border:"1px solid var(--border-strong)",borderRadius:"8px",padding:".75rem 1.25rem",fontSize:".8rem",color:"var(--text-secondary)",display:"inline-flex",alignItems:"center",gap:".5rem"}}>
                Fundada em <strong style={{color:"var(--brand)",fontFamily:"'Syne',sans-serif",fontSize:"1rem"}}>09 Jan 2025</strong>
              </div>
              {[{n:"7+",l:"Projetos Finalizados"},{n:"23+",l:"Clientes satisfeitos"},{n:"6",l:"Integrantes no time"}].map(item=>(
                <div key={item.l} className="stat-chip">
                  <span className="stat-chip-num">{item.n}</span>
                  <span style={{fontSize:".875rem",color:"var(--text-secondary)"}}>{item.l}</span>
                </div>
              ))}
              
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="values-section">
          <div style={{maxWidth:"1160px",margin:"0 auto"}}>
            <span className="section-label">O que nos guia</span>
            <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.5rem)"}}>Nossos <span className="grad-text">valores</span></h2>
            <div className="values-grid">
              {VALUES.map((v,i)=>(
                <div key={i} className="value-card">
                  <div style={{fontSize:"1.4rem",color:"var(--brand)",marginBottom:".875rem"}}>{v.icon}</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:".95rem",fontWeight:700,marginBottom:".5rem"}}>{v.title}</div>
                  <p style={{fontSize:".845rem",color:"var(--text-secondary)",lineHeight:1.65}}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EQUIPE */}
        <section className="team-section">
          <div style={{maxWidth:"1160px",margin:"0 auto"}}>
            <span className="section-label">Quem somos</span>
            <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.5rem)"}}>Nossa <span className="grad-text">equipe</span></h2>
            <div className="team-grid">
              {TEAM.map((m,i)=>(
                <div key={i} className="member-card">
                  <div className="member-photo-wrap">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} className="member-photo"
                        onError={e=>{
                          e.target.style.display="none";
                          e.target.nextSibling.style.display="flex";
                        }}/>
                    ) : null}
                    <div className="member-avatar"
                      style={{
                        display: m.photo ? "none" : "flex",
                        background:`linear-gradient(135deg,${m.color}30,${m.color}10)`,
                        border:`2px solid ${m.color}50`,
                        color:m.color,
                      }}>
                      {m.isAI ? "🤖" : m.initials}
                    </div>
                    {m.isAI && <div className="ai-badge">Agente IA</div>}
                    <div style={{position:"absolute",bottom:0,left:0,right:0,height:"3px",background:m.color}}/>
                  </div>
                  <div className="member-info">
                    <div className="member-name">{m.name}</div>
                    <div className="member-role" style={{color:m.color}}>{m.role}</div>
                    <div className="member-role-en">{m.roleEn}</div>
                    <p className="member-bio">{m.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
