const FOOTER_DATA = {
  tagline:  "Transformando ideias em soluções tecnológicas desde 2025.",
  phone:    "+55 (81) 99724-3724",
  whatsapp: "5581997243724",
  email:    "techsocompany@gmail.com",
  socials: [
    { label:"Instagram", short:"IG", url:"https://www.instagram.com/techsolution.company/" },
    { label:"YouTube",   short:"YT", url:"https://www.youtube.com/@technologySolutionCompany" },
    { label:"GitHub",    short:"GH", url:"https://github.com/TechnologySolutionCompany" },
    { label:"Discord",   short:"DC", url:"https://discord.gg/K7HHTSaz5A" },
  ],
  links: [
    { label:"Início",      href:"/" },
    { label:"Serviços",    href:"/servicos" },
    { label:"Sobre",       href:"/sobre" },
    { label:"Agendamento", href:"/agendamento" },
  ],
  policies: [
    { label:"Privacidade", href:"/politicas/privacidade.html" },
    { label:"Segurança",   href:"/politicas/seguranca.html" },
    { label:"Cookies",     href:"/politicas/cookies.html" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <style>{`
        .footer-root {
          background:var(--bg-surface); border-top:1px solid var(--border);
          padding:3.5rem clamp(1.25rem,5vw,3rem) 2rem;
        }
        .footer-grid {
          max-width:1160px; margin:0 auto;
          display:grid; grid-template-columns:1.6fr 1fr 1fr;
          gap:3rem; padding-bottom:2.5rem;
          border-bottom:1px solid var(--border);
        }
        @media(max-width:768px){.footer-grid{grid-template-columns:1fr;gap:2rem}}
        .footer-col-title {
          font-family:'Syne',sans-serif; font-size:.7rem; font-weight:700;
          letter-spacing:.15em; text-transform:uppercase;
          color:var(--text-muted); margin-bottom:1rem;
        }
        .footer-link {
          display:block; font-size:.875rem; color:var(--text-secondary);
          text-decoration:none; margin-bottom:.6rem; transition:color .2s;
        }
        .footer-link:hover{color:var(--brand)}
        .footer-soc {
          display:inline-flex; align-items:center; justify-content:center;
          width:34px; height:34px; border:1px solid var(--border-strong);
          border-radius:6px; font-size:.62rem; font-weight:700;
          font-family:'Syne',sans-serif; color:var(--text-secondary);
          text-decoration:none; transition:all .2s;
        }
        .footer-soc:hover{border-color:var(--brand);color:var(--brand);background:var(--brand-glow)}
        .footer-bottom {
          max-width:1160px; margin:1.75rem auto 0;
          display:flex; justify-content:space-between; align-items:center;
          flex-wrap:wrap; gap:1rem; font-size:.78rem; color:var(--text-muted);
        }
        .footer-policies{display:flex;gap:1.5rem;flex-wrap:wrap}
        .footer-policies a{font-size:.78rem;color:var(--text-muted);text-decoration:none;transition:color .2s}
        .footer-policies a:hover{color:var(--brand)}
      `}</style>

      <footer className="footer-root">
        <div className="footer-grid">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:".6rem",marginBottom:".875rem"}}>
              <img src="/logo.png" alt="TSC" style={{width:"36px",height:"36px",objectFit:"contain"}}
                onError={e=>e.target.style.display="none"}/>
              <span style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:".95rem"}}>
                <span style={{color:"#ffffff"}}>TSC</span>
                <span style={{color:"var(--brand)"}}> Br</span>
              </span>
            </div>
            <p style={{fontSize:".875rem",color:"var(--text-secondary)",lineHeight:1.7,maxWidth:"260px",marginBottom:"1.25rem"}}>
              {FOOTER_DATA.tagline}
            </p>
            <div style={{display:"flex",gap:".5rem",flexWrap:"wrap"}}>
              {FOOTER_DATA.socials.map(s=>(
                <a key={s.short} href={s.url} target="_blank" rel="noopener noreferrer" className="footer-soc" aria-label={s.label}>{s.short}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer-col-title">Navegação</p>
            {FOOTER_DATA.links.map(l=>(
              <a key={l.href} href={l.href} className="footer-link">{l.label}</a>
            ))}
          </div>

          <div>
            <p className="footer-col-title">Contato</p>
            <a href={`https://wa.me/${FOOTER_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-link">{FOOTER_DATA.phone}</a>
            <a href={`mailto:${FOOTER_DATA.email}`} className="footer-link">{FOOTER_DATA.email}</a>
            <a href={`https://wa.me/${FOOTER_DATA.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="btn btn-brand" style={{marginTop:"1rem",padding:".6rem 1.2rem",fontSize:".75rem",display:"inline-flex"}}>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Technology Solution Company BR — Todos os direitos reservados.</span>
          <div className="footer-policies">
            {FOOTER_DATA.policies.map(p=>(
              <a key={p.href} href={p.href}>{p.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
