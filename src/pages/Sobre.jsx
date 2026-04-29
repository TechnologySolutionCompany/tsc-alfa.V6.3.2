const VALUES = [
  {icon:"◈",title:"Inovação",desc:"Buscamos constantemente as melhores soluções, mesmo quando elas ainda não existem."},
  {icon:"⬡",title:"Excelência",desc:"Cada detalhe importa. Entregamos com qualidade e comprometimento total."},
  {icon:"⌬",title:"Transparência",desc:"Comunicação clara e honesta em todas as etapas do projeto."},
  {icon:"⊕",title:"Parceria",desc:"Somos mais que fornecedores — somos parceiros no crescimento do seu negócio."},
];

const DIRECTORS = [
  {
    name:"Estevão Miguel dos Santos",
    role:"CEO - Criador",
    desc:"Responsável pela visão estratégica, criação da TSC e direção dos projetos digitais da empresa.",
    color:"#10bfe1",
  },
  {
    name:"Wanderson Vasconcelos Barbosa de Aguiar",
    role:"CFO - Sócio Financeiro",
    desc:"Responsável pela estratégia financeira, apoio societário e estrutura de crescimento da TSC.",
    color:"#7c3aed",
  },
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
        @media(max-width:560px){.values-grid{grid-template-columns:1fr}}
        .value-card{border:1px solid var(--card-border);border-radius:10px;padding:1.75rem;background:var(--card-bg);transition:all .3s}
        .value-card:hover{border-color:var(--border-brand);transform:translateY(-3px);box-shadow:var(--shadow-brand)}
        .director-card{
          background:var(--card-bg);border:1px solid var(--card-border);
          border-radius:10px;padding:1.5rem;position:relative;overflow:hidden;
          transition:all .3s;
        }
        .director-card::before{
          content:'';position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,var(--director-color),transparent);
        }
        .director-card:hover{
          transform:translateY(-4px);
          border-color:var(--border-brand);
          box-shadow:var(--shadow-md);
        }
        .director-role{
          font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;
          color:var(--director-color);margin-bottom:.5rem;
        }
        .director-name{
          font-family:'Syne',sans-serif;font-size:1.02rem;font-weight:800;
          color:var(--text-primary);margin-bottom:.7rem;
        }
        .director-desc{font-size:.86rem;color:var(--text-secondary);line-height:1.65}
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
        <section className="sobre-hero">
          <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 50% 60% at 80% 50%,var(--brand-glow),transparent)"}}/>
          <div className="sobre-hero-inner" style={{position:"relative",zIndex:1}}>
            <div>
              <span className="section-label">Nossa história</span>
              <h1 style={{fontSize:"clamp(2.2rem,5vw,3.6rem)",marginBottom:"1.5rem"}}>
                Sobre a <span className="grad-text">TSC</span>
              </h1>
              {[
                "Fundada em 09 de janeiro de 2025, a Technology Solution Company BR nasceu da união entre visão estratégica e paixão por tecnologia, fundada e liderada por <strong>Estevão Miguel dos Santos</strong>, CEO e criador, com o apoio estratégico e financeiro de <strong>Wanderson Vasconcelos Barbosa de Aguiar</strong>, CFO e sócio financeiro.",
                "Não criamos apenas softwares de ponta — desenvolvemos estratégias digitais que se tornam o motor para o crescimento de negócios. Acreditamos que a tecnologia é uma ponte para conectar ideias e construir um futuro melhor para nossos clientes.",
                "Com direção focada em inovação, atendemos startups em fase inicial e empresas consolidadas que buscam modernizar seus processos digitais.",
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
              {[{n:"7+",l:"Projetos finalizados"},{n:"23+",l:"Clientes satisfeitos"}].map(item=>(
                <div key={item.l} className="stat-chip">
                  <span className="stat-chip-num">{item.n}</span>
                  <span style={{fontSize:".875rem",color:"var(--text-secondary)"}}>{item.l}</span>
                </div>
              ))}
              {DIRECTORS.map((d)=>(
                <div key={d.name} className="director-card" style={{"--director-color":d.color}}>
                  <div className="director-role">{d.role}</div>
                  <div className="director-name">{d.name}</div>
                  <p className="director-desc">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
      </div>
    </>
  );
}
