import { useState } from "react";

const WA = "5581997243724";
const SUBJECTS = ["Desenvolvimento de Software","Página ou Aplicação Web","Agente de IA / Automação","Consultoria de T.I","Suporte & Manutenção","Outro assunto"];
const TYPES = [
  {id:"online",   label:"Reunião Online",    icon:"", desc:"Google Meet, Teams ou Zoom"},
  {id:"presencial",label:"Reunião Presencial",icon:" ", desc:"Recife – PE (a combinar)"},
];
const INIT = {name:"",email:"",phone:"",subject:"",type:"online",message:"",city:"",state:""};

function buildMsg(f) {
  return encodeURIComponent(
    `Olá, TSC Brasil! 👋\n\nMeu nome é *${f.name}* e gostaria de agendar uma reunião.\n\n`+
    `📧 E-mail: ${f.email}\n📱 Telefone: ${f.phone}\n📌 Assunto: ${f.subject}\n`+
    `🗓 Tipo: ${TYPES.find(t=>t.id===f.type)?.label}\n`+
    (f.type==='presencial' ? `📍 Local: ${f.city} — ${f.state}\n` : '') +
    `\n💬 Mensagem:\n${f.message}\n\nIremos avaliar e retornar.\n\nAguardo retorno!`
  );
}

export default function Agendamento() {
  const [form,setForm]     = useState(INIT);
  const [errors,setErrors] = useState({});
  const [done,setDone]     = useState(false);

  const set=(k,v)=>{setForm(f=>({...f,[k]:v}));setErrors(e=>({...e,[k]:""}))};

  const validate=()=>{
    const e={};
    if (!form.name.trim())   e.name="Nome obrigatório";
    if (!form.email.trim()||!/\S+@\S+\.\S+/.test(form.email)) e.email="E-mail inválido";
    if (!form.phone.trim())  e.phone="Telefone obrigatório";
    if (!form.subject)       e.subject="Selecione um assunto";
    if (!form.message.trim())e.message="Descreva sua necessidade";
    if (form.type==='presencial'){
      if (!form.city || !form.city.trim()) e.city = "Cidade obrigatória";
      if (!form.state || !form.state.trim()) e.state = "Estado obrigatório";
    }
    return e;
  };

  const submit=()=>{
    const e=validate();
    if (Object.keys(e).length){setErrors(e);return}
    window.open(`https://wa.me/${WA}?text=${buildMsg(form)}`,"_blank","noopener,noreferrer");
    setDone(true);
    setTimeout(()=>{setForm(INIT);setDone(false)},5000);
  };

  return (
    <>
      <style>{`
        .agenda-page{padding-top:68px}
        .agenda-hero{padding:4.5rem clamp(1.25rem,5vw,3rem) 3rem;text-align:center;position:relative;overflow:hidden}
        .agenda-body{padding:3rem clamp(1.25rem,5vw,3rem) 5rem}
        .agenda-inner{max-width:1020px;margin:0 auto;display:grid;grid-template-columns:1fr 1.5fr;gap:3rem;align-items:start}
        @media(max-width:820px){.agenda-inner{grid-template-columns:1fr}}
        .aside-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:12px;padding:1.5rem;margin-bottom:1.1rem}
        .aside-title{font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:1rem}
        .mt-btn{
          width:100%;display:flex;align-items:center;gap:.875rem;
          padding:.875rem 1rem;border-radius:8px;border:1px solid var(--border);
          background:transparent;cursor:pointer;margin-bottom:.5rem;transition:all .2s;text-align:left;
        }
        .mt-btn:last-child{margin-bottom:0}
        .mt-btn:hover{border-color:var(--border-brand);background:var(--brand-glow)}
        .mt-btn.active{border-color:var(--brand);background:var(--brand-glow)}
        .form-card{background:var(--card-bg);border:1px solid var(--card-border);border-radius:14px;padding:2.25rem;position:relative;overflow:hidden}
        .form-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--brand),#7c3aed)}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
        @media(max-width:580px){.form-row{grid-template-columns:1fr}}
        .form-group{margin-bottom:1.1rem}
        .form-label{display:block;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--text-secondary);margin-bottom:.4rem}
        .form-input,.form-select,.form-textarea{
          width:100%;background:var(--bg-elevated);border:1px solid var(--border-strong);
          border-radius:8px;padding:.75rem 1rem;font-size:.9rem;color:var(--text-primary);
          font-family:'DM Sans',sans-serif;transition:border-color .2s,box-shadow .2s;outline:none;
          -webkit-appearance:none;
        }
        .form-input::placeholder,.form-textarea::placeholder{color:var(--text-muted)}
        .form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--brand);box-shadow:0 0 0 3px var(--brand-glow)}
        .form-input.err,.form-select.err,.form-textarea.err{border-color:#ef4444;box-shadow:0 0 0 3px rgba(239,68,68,.12)}
        .form-select{background:var(--bg-elevated);cursor:pointer}
        .form-select option{background:var(--bg-surface)}
        .form-textarea{resize:vertical;min-height:120px}
        .form-error{font-size:.75rem;color:#ef4444;margin-top:.3rem;display:block}
        .hint-box{display:flex;align-items:flex-start;gap:.5rem;background:var(--brand-glow);border:1px solid var(--border-brand);border-radius:8px;padding:.875rem 1rem;font-size:.8rem;color:var(--text-secondary);margin-bottom:1.5rem;line-height:1.55}
        .submit-btn{
          width:100%;padding:1rem;font-size:.9rem;font-weight:700;
          background:var(--brand);color:var(--text-invert);border:none;border-radius:8px;
          cursor:pointer;font-family:'Syne',sans-serif;letter-spacing:.06em;text-transform:uppercase;
          transition:all .25s;display:flex;align-items:center;justify-content:center;gap:.5rem;
        }
        .submit-btn:hover{background:var(--brand-dim);transform:translateY(-1px);box-shadow:var(--shadow-brand)}
        .success-msg{text-align:center;padding:2rem;animation:fadeUp .4s ease}
      `}</style>

      <div className="agenda-page">
        <section className="agenda-hero">
          <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 55% 55% at 50% 0%,var(--brand-glow),transparent)"}}/>
          <div style={{maxWidth:"600px",margin:"0 auto",position:"relative",zIndex:1}}>
            <span className="section-label">Vamos conversar?</span>
            <h1 style={{fontSize:"clamp(2rem,4.5vw,3.4rem)",margin:".75rem 0 1rem"}}>
              <span className="grad-text">Agende uma reunião</span>
            </h1>
            <p style={{fontSize:"1rem",color:"var(--text-secondary)",lineHeight:1.75}}>
              Nos conte sobre suas necessidades, ideias ou planejamento. Vamos transformá-las em realidade.
            </p>
          </div>
        </section>

        <section className="agenda-body">
          <div className="agenda-inner">
            {/* Sidebar */}
            <div>
              <div className="aside-card">
                <p className="aside-title">Tipo de reunião</p>
                {TYPES.map(t=>(
                  <button key={t.id} className={`mt-btn${form.type===t.id?" active":""}`} onClick={()=>set("type",t.id)}>
                    <span style={{fontSize:"1.25rem"}}>{t.icon}</span>
                    <div>
                      <div style={{fontFamily:"'Syne',sans-serif",fontSize:".875rem",fontWeight:600,color:"var(--text-primary)"}}>{t.label}</div>
                      <div style={{fontSize:".75rem",color:"var(--text-muted)",marginTop:".1rem"}}>{t.desc}</div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="aside-card">
                <p className="aside-title">Outras formas de contato</p>
                {[
                  {icon:"",label:"WhatsApp",value:"+55 (81) 99724-3724",href:`https://wa.me/${WA}`},
                  {icon:"",label:"E-mail",value:"techsocompany@gmail.com",href:"mailto:techsocompany@gmail.com"},
                  {icon:"",label:"Localização",value:"Recife – PE, Brasil",href:null},
                ].map(item=>(
                  <div key={item.label} style={{display:"flex",gap:".75rem",marginBottom:".75rem",alignItems:"flex-start"}}>
                    <span style={{fontSize:"1rem",marginTop:".1rem"}}>{item.icon}</span>
                    <div>
                      <div style={{fontSize:".68rem",fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--text-muted)"}}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} target={item.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer" style={{fontSize:".875rem",color:"var(--brand)"}}>{item.value}</a>
                        : <div style={{fontSize:".875rem",color:"var(--text-secondary)"}}>{item.value}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="form-card">
              {done ? (
                <div className="success-msg">
                  <div style={{fontSize:"3rem",marginBottom:"1rem"}}>✅</div>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.3rem",fontWeight:700,marginBottom:".5rem"}}>Mensagem enviada!</div>
                  <p style={{fontSize:".9rem",color:"var(--text-secondary)",lineHeight:1.65}}>O WhatsApp foi aberto com sua mensagem. Em breve nossa equipe entrará em contato!</p>
                </div>
              ):(
                <>
                  <div style={{fontFamily:"'Syne',sans-serif",fontSize:"1.1rem",fontWeight:700,marginBottom:".375rem"}}>Preencha suas informações</div>
                  <div style={{fontSize:".845rem",color:"var(--text-secondary)",marginBottom:"1.75rem"}}>Todos os campos são necessários para melhor atendê-lo(a).</div>

                  <div className="hint-box">
                    <span>💬</span>
                    <span>Ao clicar em <strong>Enviar pelo WhatsApp</strong>, você será redirecionado com a mensagem já preenchida.</span>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Nome completo *</label>
                      <input className={`form-input${errors.name?" err":""}`} placeholder="Seu nome" value={form.name} onChange={e=>set("name",e.target.value)}/>
                      {errors.name&&<span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail *</label>
                      <input className={`form-input${errors.email?" err":""}`} type="email" placeholder="seu@email.com" value={form.email} onChange={e=>set("email",e.target.value)}/>
                      {errors.email&&<span className="form-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Telefone / WhatsApp *</label>
                      <input className={`form-input${errors.phone?" err":""}`} placeholder="(81) 9xxxx-xxxx" value={form.phone} onChange={e=>set("phone",e.target.value)}/>
                      {errors.phone&&<span className="form-error">{errors.phone}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Assunto *</label>
                      <select className={`form-select${errors.subject?" err":""}`} value={form.subject} onChange={e=>set("subject",e.target.value)}>
                        <option value="">Selecione...</option>
                        {SUBJECTS.map(s=><option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.subject&&<span className="form-error">{errors.subject}</span>}
                    </div>
                  </div>

                  {form.type==='presencial' && (
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Cidade *</label>
                        <input className={`form-input${errors.city?" err":""}`} placeholder="Ex.: Recife" value={form.city} onChange={e=>set("city",e.target.value)}/>
                        {errors.city&&<span className="form-error">{errors.city}</span>}
                      </div>
                      <div className="form-group">
                        <label className="form-label">Estado *</label>
                        <input className={`form-input${errors.state?" err":""}`} placeholder="Ex.: PE" value={form.state} onChange={e=>set("state",e.target.value)}/>
                        {errors.state&&<span className="form-error">{errors.state}</span>}
                      </div>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Mensagem *</label>
                    <textarea className={`form-textarea${errors.message?" err":""}`} placeholder="Descreva seu projeto, necessidade ou ideia..." value={form.message} onChange={e=>set("message",e.target.value)}/>
                    {errors.message&&<span className="form-error">{errors.message}</span>}
                  </div>

                  <button className="submit-btn" onClick={submit}>Enviar pelo WhatsApp</button>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
