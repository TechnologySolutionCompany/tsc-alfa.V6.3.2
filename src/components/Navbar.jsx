import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { label: "Início",      href: "/" },
  { label: "Serviços",    href: "/servicos" },
  { label: "Sobre",       href: "/sobre" },
  { label: "Agendamento", href: "/agendamento" },
];

export default function Navbar() {
  const { toggle, isDark } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{`
        .navbar-root {
          position:fixed; top:0; left:0; right:0; z-index:200;
          height:68px; display:flex; align-items:center;
          padding:0 clamp(1.25rem,5vw,3rem);
          justify-content:space-between;
          transition:background .3s,box-shadow .3s,backdrop-filter .3s;
          background:${scrolled ? "var(--bg-overlay)" : "transparent"};
          backdrop-filter:${scrolled ? "blur(20px)" : "none"};
          box-shadow:${scrolled ? "0 1px 0 var(--border)" : "none"};
        }
        .nav-brand {
          display:flex; align-items:center; gap:.6rem; text-decoration:none;
        }
        .nav-brand img {
          width:42px; height:42px; object-fit:contain;
        }
        .nav-brand-text {
          font-family:'Syne',sans-serif; font-weight:800; font-size:1rem;
          letter-spacing:-.01em; line-height:1;
        }
        .nav-brand-tsc { color:#ffffff; }
        .nav-brand-br  { color:var(--brand); }
        .nav-links-desktop { display:flex; gap:2.25rem; align-items:center; }
        .nav-link {
          font-family:'Syne',sans-serif; font-size:.8rem; font-weight:600;
          letter-spacing:.08em; text-transform:uppercase;
          color:var(--text-secondary); text-decoration:none;
          padding:.4rem 0; position:relative; transition:color .2s;
        }
        .nav-link::after {
          content:''; position:absolute; bottom:0; left:0;
          width:0; height:1.5px; background:var(--brand); transition:width .3s;
        }
        .nav-link:hover,.nav-link.active { color:var(--brand); }
        .nav-link:hover::after,.nav-link.active::after { width:100%; }
        .theme-toggle {
          width:44px; height:24px; background:var(--bg-elevated);
          border:1px solid var(--border-strong); border-radius:100px;
          position:relative; cursor:pointer; transition:background .3s; flex-shrink:0;
        }
        .theme-knob {
          position:absolute; top:3px; left:3px;
          width:16px; height:16px; border-radius:50%;
          background:var(--brand); transition:transform .3s;
          display:flex; align-items:center; justify-content:center; font-size:9px;
        }
        .theme-knob.light { transform:translateX(20px); }
        .hamburger {
          background:none; border:none; display:none;
          flex-direction:column; gap:5px; cursor:pointer; padding:4px;
        }
        .hamburger span {
          display:block; width:22px; height:2px;
          background:var(--text-primary); border-radius:2px; transition:all .3s;
        }
        .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
        .hamburger.open span:nth-child(2){opacity:0}
        .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
        .mobile-menu {
          position:fixed; top:68px; left:0; right:0;
          background:var(--bg-surface); border-bottom:1px solid var(--border);
          padding:1.5rem clamp(1.25rem,5vw,3rem) 2rem;
          display:flex; flex-direction:column; gap:1.25rem; z-index:199;
          animation:fadeUp .2s ease;
        }
        .mobile-menu .nav-link { font-size:1rem; color:var(--text-primary); }
        @media(max-width:768px){
          .nav-links-desktop,.nav-cta-desktop{display:none!important}
          .hamburger{display:flex!important}
        }
      `}</style>

      <nav className="navbar-root">
        <a href="/" className="nav-brand">
          <img src="/logo.png" alt="TSC Brasil" onError={e => e.target.style.display="none"} />
          <span className="nav-brand-text">
            <span className="nav-brand-tsc">TSC</span>
            <span className="nav-brand-br">Br</span>
          </span>
        </a>

        <div className="nav-links-desktop">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className={`nav-link${path===l.href?" active":""}`}>{l.label}</a>
          ))}
        </div>

        <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
          <button className="theme-toggle" onClick={toggle} title="Alternar tema">
            <span className={`theme-knob${isDark?"":" light"}`}>{isDark?"🌙":"☀️"}</span>
          </button>
          <a href="/agendamento" className="btn btn-brand nav-cta-desktop" style={{padding:".6rem 1.25rem",fontSize:".75rem"}}>
            Agendar Call
          </a>
          <button className={`hamburger${menuOpen?" open":""}`} onClick={()=>setMenuOpen(o=>!o)}>
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} className="nav-link" onClick={()=>setMenuOpen(false)}>{l.label}</a>
          ))}
          <a href="/agendamento" className="btn btn-brand" style={{justifyContent:"center",marginTop:".5rem"}}>Agendar Call</a>
        </div>
      )}
    </>
  );
}
