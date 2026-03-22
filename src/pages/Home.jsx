import { useEffect, useRef, useState } from "react";

const PILLARS = [
  { icon:"◈", title:"Idealização",    desc:"Planejamento técnico antes do primeiro commit." },
  { icon:"⌬", title:"Desenvolvimento",desc:"Engenharia de ponta a ponta com foco em escala." },
  { icon:"⬡", title:"Criação",        desc:"Interfaces e experiências que encantam usuários." },
  { icon:"⚙", title:"Funcionamento",  desc:"Suporte contínuo, monitoramento e evolução." },
];

const STATS = [
  { value:7,  suffix:"+",  label:"Projetos Concluídos" },
  { value:23, suffix:"+",  label:"Clientes Satisfeitos" },
  { value:6,  suffix:"",   label:"Team Atual" },
  { value:35, suffix:"", label:"Bate papo" },
];

function useCountUp(target, dur=1600, active=false) {
  const [val, setVal] = useState(0);
  useEffect(()=>{
    if (!active) return;
    let start=null;
    const step=ts=>{
      if (!start) start=ts;
      const p=Math.min((ts-start)/dur,1);
      const e=1-Math.pow(1-p,3);
      setVal(Math.floor(e*target));
      if (p<1) requestAnimationFrame(step); else setVal(target);
    };
    requestAnimationFrame(step);
  },[active,target,dur]);
  return val;
}

function StatItem({ value, suffix, label, active }) {
  const n = useCountUp(value,1500,active);
  return (
    <div style={{textAlign:"center",padding:"2rem 1rem"}}>
      <div style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(2.2rem,4vw,3rem)",fontWeight:800,
        background:"linear-gradient(135deg,var(--brand),#7dd4f0)",WebkitBackgroundClip:"text",
        WebkitTextFillColor:"transparent",lineHeight:1}}>
        {n}{suffix}
      </div>
      <div style={{marginTop:".4rem",fontSize:".78rem",color:"var(--text-muted)",fontWeight:500,
        letterSpacing:".08em",textTransform:"uppercase"}}>
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef(null);
  const [statsOn, setStatsOn] = useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{if(e.isIntersecting)setStatsOn(true)},{threshold:.3});
    if (statsRef.current) obs.observe(statsRef.current);
    return ()=>obs.disconnect();
  },[]);

  return (
    <>
      <style>{`
        .home-page{padding-top:68px}
        .hero-wrap{
          min-height:calc(100vh - 68px);
          display:flex;align-items:center;
          padding:5rem clamp(1.25rem,5vw,3rem) 4rem;
          position:relative;overflow:hidden;
        }
        .hero-inner{
          max-width:1160px;margin:0 auto;width:100%;
          display:grid;grid-template-columns:1fr 1fr;
          gap:4rem;align-items:center;
        }
        @media(max-width:900px){.hero-inner{grid-template-columns:1fr}.hero-orbit{display:none}}
        .hero-badge{
          display:inline-flex;align-items:center;gap:.5rem;
          background:var(--brand-glow);border:1px solid var(--border-brand);
          border-radius:100px;padding:.3rem 1rem;margin-bottom:1.75rem;
        }
        .hero-badge-dot{width:6px;height:6px;border-radius:50%;background:var(--brand);animation:pulse-ring 2s ease-in-out infinite}
        .hero-badge-text{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--brand)}
        .hero-h1{font-size:clamp(2.6rem,5.5vw,4.5rem);font-weight:800;line-height:1.04;
          letter-spacing:-.03em;margin-bottom:1.25rem;animation:fadeUp .7s ease both}
        .hero-sub{font-size:clamp(.9rem,1.5vw,1.05rem);color:var(--text-secondary);line-height:1.75;
          max-width:480px;margin-bottom:2.25rem;animation:fadeUp .7s ease .1s both}
        .hero-btns{display:flex;gap:.875rem;flex-wrap:wrap;animation:fadeUp .7s ease .2s both}
        .hero-socials{display:flex;gap:.6rem;margin-top:2rem;animation:fadeUp .7s ease .3s both}
        .soc-btn{
          display:inline-flex;align-items:center;justify-content:center;
          width:34px;height:34px;border:1px solid var(--border-strong);border-radius:4px;
          font-size:.62rem;font-weight:700;font-family:'Syne',sans-serif;
          color:var(--text-secondary);text-decoration:none;transition:all .2s;
        }
        .soc-btn:hover{border-color:var(--brand);color:var(--brand);background:var(--brand-glow)}
        .bg-grid{
          position:absolute;inset:0;pointer-events:none;
          background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);
          background-size:60px 60px;
          mask-image:radial-gradient(ellipse 70% 70% at 60% 40%,black 0%,transparent 100%);
        }
        .bg-glow{position:absolute;pointer-events:none;border-radius:50%;filter:blur(80px)}
        .orbit-scene{position:relative;width:340px;height:340px;margin:0 auto;animation:fadeUp .7s ease .15s both}
        .orbit-ring{position:absolute;border-radius:50%;border:1px solid var(--border-brand)}
        .orbit-ring-1{inset:0;animation:orbit 20s linear infinite}
        .orbit-ring-2{inset:36px;animation:orbit 13s linear infinite reverse}
        .orbit-ring-3{inset:72px;animation:orbit 8s linear infinite}
        .orbit-dot{position:absolute;border-radius:50%;width:8px;height:8px;top:-4px;left:50%;transform:translateX(-50%)}
        .orbit-center{
          position:absolute;inset:112px;border-radius:50%;
          background:var(--brand-glow);border:1px solid var(--border-brand);
          display:flex;align-items:center;justify-content:center;animation:float 4s ease-in-out infinite;
        }
        .pillars-section{padding:5rem clamp(1.25rem,5vw,3rem);border-top:1px solid var(--border)}
        .pillars-grid{
          max-width:1160px;margin:0 auto;
          display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem;
        }
        @media(max-width:900px){.pillars-grid{grid-template-columns:1fr 1fr}}
        @media(max-width:480px){.pillars-grid{grid-template-columns:1fr}}
        .pillar-card{
          border:1px solid var(--card-border);border-radius:10px;padding:1.75rem;
          background:var(--card-bg);backdrop-filter:blur(12px);
          transition:all .3s;position:relative;overflow:hidden;
        }
        .pillar-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;
          background:linear-gradient(90deg,transparent,var(--brand),transparent);
          transform:scaleX(0);transition:transform .4s}
        .pillar-card:hover{border-color:var(--border-brand);box-shadow:var(--shadow-brand);transform:translateY(-4px)}
        .pillar-card:hover::before{transform:scaleX(1)}
        .stats-section{
          padding:4rem clamp(1.25rem,5vw,3rem);
          background:var(--bg-surface);
          border-top:1px solid var(--border);border-bottom:1px solid var(--border);
        }
        .stats-grid{display:grid;grid-template-columns:repeat(4,1fr)}
        @media(max-width:768px){.stats-grid{grid-template-columns:1fr 1fr}}
        .stats-divider{border-left:1px solid var(--border)}
        .about-section{padding:5rem clamp(1.25rem,5vw,3rem);border-top:1px solid var(--border)}
        .about-inner{
          max-width:1160px;margin:0 auto;
          display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;
        }
        @media(max-width:900px){.about-inner{grid-template-columns:1fr}.timeline-card{display:none}}
        .timeline-card{
          background:var(--card-bg);border:1px solid var(--card-border);
          border-radius:12px;padding:2rem;position:relative;overflow:hidden;
        }
        .timeline-top{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--brand),#7c3aed)}
        .tl-item{display:flex;gap:1rem;padding:1rem 0;border-bottom:1px solid var(--border)}
        .tl-item:last-child{border-bottom:none;padding-bottom:0}
        .cta-strip{padding:5rem clamp(1.25rem,5vw,3rem);border-top:1px solid var(--border)}
        .cta-box{
          max-width:740px;margin:0 auto;text-align:center;
          background:linear-gradient(135deg,var(--brand-glow),rgba(124,58,237,.07));
          border:1px solid var(--border-brand);border-radius:16px;
          padding:4rem 3rem;position:relative;overflow:hidden;
        }
        .cta-box-line{
          position:absolute;top:0;left:50%;transform:translateX(-50%);
          width:160px;height:1px;
          background:linear-gradient(90deg,transparent,var(--brand),transparent);
        }
        .cta-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
      `}</style>

      <div className="home-page">

        {/* HERO */}
        <section className="hero-wrap">
          <div className="bg-grid"/>
          <div className="bg-glow" style={{top:"10%",left:"55%",width:"520px",height:"520px",background:"radial-gradient(circle,var(--brand-glow) 0%,transparent 70%)"}}/>
          <div className="bg-glow" style={{top:"65%",left:"5%",width:"340px",height:"340px",background:"radial-gradient(circle,rgba(124,58,237,.07) 0%,transparent 70%)"}}/>
          <div className="hero-inner" style={{position:"relative",zIndex:1}}>
            <div>
              <div className="hero-badge">
                <span className="hero-badge-dot"/>
                <span className="hero-badge-text">Inovação · Tecnologia · Resultados</span>
              </div>
              <h1 className="hero-h1">
                TSC{""}
                <span className="grad-text">Br</span>
              </h1>
              <p className="hero-sub">
                Soluções tecnológicas personalizadas que impulsionam negócios. Transformamos sua visão em sistemas robustos, escaláveis e prontos para o futuro.
              </p>
              <div className="hero-btns">
                <a href="/servicos" className="btn btn-brand">Ver Serviços →</a>
                <a href="/agendamento" className="btn btn-ghost">Agendar Call</a>
              </div>
              <div className="hero-socials">
                {[{s:"IG",u:"https://www.instagram.com/techsolution.company/"},{s:"YT",u:"https://www.youtube.com/@technologySolutionCompany"},{s:"GH",u:"https://github.com/TechnologySolutionCompany"},{s:"DC",u:"https://discord.gg/K7HHTSaz5A"}].map(x=>(
                  <a key={x.s} href={x.u} target="_blank" rel="noopener noreferrer" className="soc-btn">{x.s}</a>
                ))}
              </div>
            </div>
            <div className="hero-orbit">
              <div className="orbit-scene">
                <div className="orbit-ring orbit-ring-1"><div className="orbit-dot" style={{background:"var(--brand)",boxShadow:"0 0 10px var(--brand)"}}/></div>
                <div className="orbit-ring orbit-ring-2"><div className="orbit-dot" style={{background:"#7c3aed",boxShadow:"0 0 8px #7c3aed",width:"6px",height:"6px",top:"-3px"}}/></div>
                <div className="orbit-ring orbit-ring-3"><div className="orbit-dot" style={{background:"#10b981",boxShadow:"0 0 7px #10b981",width:"5px",height:"5px",top:"-2.5px"}}/></div>
                <div className="orbit-center">
                  <img src="/logo.png" alt="TSC" style={{width:"58px",height:"58px",objectFit:"contain"}}
                    onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="block"}}/>
                  <div style={{display:"none",fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:"1.1rem",color:"var(--brand)"}}>TSC</div>
                </div>
                {[0,60,120,180,240,300].map((deg,i)=>(
                  <div key={i} style={{position:"absolute",top:"50%",left:"50%",width:"4px",height:"4px",borderRadius:"50%",background:i%2?"#7c3aed":"var(--brand)",opacity:.4,transform:`rotate(${deg}deg) translateX(160px) translateY(-50%)`}}/>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="pillars-section">
          <div style={{maxWidth:"1160px",margin:"0 auto"}}>
            <span className="section-label">O que nos move</span>
            <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.5rem)",marginBottom:"2.5rem"}}>
              Nossos <span className="grad-text">pilares</span>
            </h2>
            <div className="pillars-grid">
              {PILLARS.map((p,i)=>(
                <div key={i} className="pillar-card">
                  <div style={{fontSize:"1.5rem",color:"var(--brand)",marginBottom:"1rem"}}>{p.icon}</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1rem",fontWeight:700,marginBottom:".5rem"}}>{p.title}</div>
                  <p style={{fontSize:".845rem",color:"var(--text-secondary)",lineHeight:1.65}}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats-section" ref={statsRef}>
          <div style={{maxWidth:"1160px",margin:"0 auto"}}>
            <div style={{textAlign:"center",marginBottom:"1rem"}}>
              <span className="section-label">Nossos números</span>
              <h2 style={{fontSize:"clamp(1.6rem,3vw,2.2rem)"}}>Resultados que <span className="grad-text">falam por si</span></h2>
            </div>
            <div className="stats-grid">
              {STATS.map((s,i)=>(
                <div key={i} className={i>0?"stats-divider":""}>
                  <StatItem {...s} active={statsOn}/>
                </div>
              ))}
            </div>
            <div style={{textAlign:"center",marginTop:"2rem"}}>
              <a href="/agendamento" className="btn btn-brand">Agendar reunião →</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section">
          <div className="about-inner">
            <div>
              <span className="section-label">Nossa história</span>
              <h2 style={{fontSize:"clamp(1.75rem,3.5vw,2.6rem)",marginBottom:"1.5rem"}}>
                Saiba mais sobre a <span className="grad-text">TSCBr</span>
              </h2>
              <p style={{fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"1rem"}}>
                Fundada em 09 de janeiro de 2025, a Technology Solution Company BR nasceu da união entre visão estratégica e paixão por tecnologia, liderada por <strong style={{color:"var(--text-primary)"}}>Estevão Miguel dos Santos</strong> com o apoio de <strong style={{color:"var(--text-primary)"}}>Wanderson Vasconcelos Barbosa de Aguiar</strong>.
              </p>
              <p style={{fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.8,marginBottom:"1rem"}}>
                Desenvolvemos estratégias digitais que se tornam o motor para o crescimento de negócios. Transformamos suas ideias em realidade, otimizando processos e impulsionando resultados.
              </p>
              <a href="/sobre" className="btn btn-ghost" style={{marginTop:"1.25rem"}}>Conheça a TSC →</a>
            </div>
            <div className="timeline-card">
              <div className="timeline-top"/>
              {[
                {year:"Jan 2025",label:"Fundação da TSC Brasil",color:"#10bfe1"},
                {year:"Mar 2025",label:"Primeiros projetos entregues",color:"#7c3aed"},
                {year:"Jun 2025",label:"Expansão para 6 integrantes",color:"#10b981"},
                {year:"2026+",  label:"Crescimento contínuo",color:"#f59e0b"},
              ].map((item,i)=>(
                <div key={i} className="tl-item">
                  <div style={{width:"8px",height:"8px",borderRadius:"50%",background:item.color,boxShadow:`0 0 7px ${item.color}`,marginTop:"5px",flexShrink:0}}/>
                  <div>
                    <div style={{fontSize:".65rem",fontWeight:700,letterSpacing:".1em",textTransform:"uppercase",color:item.color,marginBottom:".2rem"}}>{item.year}</div>
                    <div style={{fontSize:".875rem",color:"var(--text-primary)",fontWeight:500}}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-strip">
          <div className="cta-box">
            <div className="cta-box-line"/>
            <span className="section-label">Pronto para começar?</span>
            <h2 style={{fontSize:"clamp(1.7rem,3.5vw,2.6rem)",margin:".75rem 0 1rem"}}>
              Vamos construir algo <span className="grad-text">incrível</span> juntos
            </h2>
            <p style={{fontSize:".95rem",color:"var(--text-secondary)",lineHeight:1.7,marginBottom:"2rem"}}>
              Entre em contato com a equipe TSC e descubra como a tecnologia certa pode transformar seu negócio.
            </p>
            <div className="cta-btns">
              <a href="/agendamento" className="btn btn-brand">Agendar Call →</a>
              <a href="/servicos"    className="btn btn-ghost">Ver Serviços</a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
