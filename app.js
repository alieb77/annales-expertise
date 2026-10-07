/* Annales ISCAE — Cycle d'expertise comptable : moteur de l'application (hors-ligne, localStorage) */
(function(){
"use strict";

const SUBJECTS=[
  {key:"cpt",  short:"Comptabilité", long:"Comptabilité générale et analytique", color:"var(--cpt)"},
  {key:"droit",short:"Droit",        long:"Droit des affaires et droit fiscal",   color:"var(--droit)"},
  {key:"gest", short:"Gestion",      long:"Étude de cas de gestion",               color:"var(--gest)"},
  {key:"tec",  short:"TEC",          long:"Techniques d'expression et de communication", color:"var(--tec)"}
];
const subj=k=>SUBJECTS.find(s=>s.key===k)||SUBJECTS[0];
const THEMES=window.THEMES||[];
const thm=k=>THEMES.find(t=>t.k===k);
const FICHES=window.FICHES||[];
const LS_ATT="cec_attempts_v1", LS_RUN="cec_running_v1", LS_THEME="cec_theme", LS_FC="cec_flash_v1", LS_REV="cec_rev_prefs";

const $app=document.getElementById("app"), $top=document.getElementById("topbar"), $modal=document.getElementById("modal");
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const byId=id=>EXAMS.find(e=>e.id===id);
const r2=x=>Math.round(x*100)/100;
const nf=new Intl.NumberFormat("fr-FR",{maximumFractionDigits:2});
const fnum=v=>nf.format(v).replace(/ /g," ");

function load(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}}
function save(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
let attempts=load(LS_ATT,[]);
let running=load(LS_RUN,null);
try{const t=localStorage.getItem(LS_THEME); if(t) document.documentElement.dataset.theme=t;}catch(e){}

/* ---------- rendu "markdown" léger : tableaux |…|, listes, titres ####, citations >, **gras**, ==résultat== ---------- */
function inl(s){
  return esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/==(.+?)==/g,'<span class="res">$1</span>')
    .replace(/__(.+?)__/g,"<u>$1</u>").replace(/`([^`]+)`/g,"<code>$1</code>");
}
const NUMCELL=/^[-−+]?\s*[(]?[\d\s  .,]+[)]?\s*(%|DH|MDH|KDH|‰)?$/;
function mdTable(rows){
  const cells=rows.map(r=>{let t=r.trim(); if(t.startsWith("|")) t=t.slice(1); if(t.endsWith("|")) t=t.slice(0,-1); return t.split("|").map(c=>c.trim())});
  let head=null, body=cells;
  if(cells.length>1&&cells[1].every(c=>/^:?-{2,}:?$/.test(c))){head=cells[0]; body=cells.slice(2)}
  const td=(c,tag)=>{const tot=/^\*\*.*\*\*$/.test(c); return `<${tag}${tag==="td"&&NUMCELL.test(c.replace(/\*\*/g,""))&&/\d/.test(c)?' class="n"':""}>${inl(c)}</${tag}>`};
  let h=`<div class="tw"><table>`;
  if(head) h+=`<thead><tr>${head.map(c=>td(c,"th")).join("")}</tr></thead>`;
  h+=`<tbody>${body.map(r=>`<tr${r.length&&/^\*\*.*\*\*$/.test(r[0])?' class="tot"':""}>${r.map(c=>td(c,"td")).join("")}</tr>`).join("")}</tbody></table></div>`;
  return h;
}
function md(src){
  const L=String(src??"").replace(/\r/g,"").split("\n"); let h="", i=0;
  while(i<L.length){
    const ln=L[i];
    if(!ln.trim()){i++;continue}
    if(/^\s*\|/.test(ln)){const rows=[];while(i<L.length&&/^\s*\|/.test(L[i]))rows.push(L[i++]);h+=mdTable(rows);continue}
    if(/^#{1,4}\s/.test(ln)){h+=`<h4>${inl(ln.replace(/^#+\s*/,""))}</h4>`;i++;continue}
    if(/^>\s?/.test(ln)){const b=[];while(i<L.length&&/^>\s?/.test(L[i]))b.push(L[i++].replace(/^>\s?/,""));h+=`<blockquote>${b.map(inl).join("<br>")}</blockquote>`;continue}
    if(/^\s*[-•]\s/.test(ln)){const b=[];while(i<L.length&&/^\s*[-•]\s/.test(L[i]))b.push(L[i++].replace(/^\s*[-•]\s/,""));h+=`<ul>${b.map(x=>`<li>${inl(x)}</li>`).join("")}</ul>`;continue}
    const p=[];while(i<L.length&&L[i].trim()&&!/^\s*\||^#{1,4}\s|^>\s?|^\s*[-•]\s/.test(L[i]))p.push(L[i++]);
    h+=`<p>${p.map(inl).join("<br>")}</p>`;
  }
  return `<div class="md">${h}</div>`;
}

/* ---------- modèle ---------- */
function flatQ(exam,only){
  const out=[]; let n=0;
  exam.sections.forEach((s,si)=>s.questions.forEach((q,qi)=>{n++; if(only==null||only===si) out.push({q,s,si,qi,key:si+"-"+qi,num:q.n!=null?q.n:(s.questions.length>1?qi+1:"")});}));
  return out;
}
const qMax=q=>q.pts!=null?q.pts:1;
const secPts=s=>s.pts!=null?s.pts:s.questions.reduce((a,q)=>a+qMax(q),0);
const examPts=e=>e.sections.reduce((a,s)=>a+secPts(s),0);
function parseNum(v){return parseFloat(String(v).replace(/[\s  ]/g,"").replace(/−/g,"-").replace(",","."))}
function chkState(c,val){
  if(val==null||String(val).trim()==="") return null;
  const v=parseNum(val); if(isNaN(v)) return false;
  return [c.v,...(c.alt||[])].some(x=>Math.abs(v-x)<=(c.tol!=null?c.tol:Math.max(0.011,Math.abs(x)*0.005)));
}
/* résultat d'une question : {status: ok|done|pending|empty, pts, max, frac} */
const L="ABCDEFGH";
function mcqOk(q,a){
  const A=[].concat(q.a);
  if(q.multi) return Array.isArray(a)&&a.length===A.length&&[...a].sort().join()===[...A].sort().join();
  return A.includes(a);
}
function gradeQ(it,run){
  const q=it.q,max=qMax(q),kp=q.kp||[],ck=q.chk||[];
  const a=(run.answers||{})[it.key], s=(run.self||{})[it.key], cv=(run.chk||{})[it.key]||{};
  if(q.o){
    if(a==null||(Array.isArray(a)&&!a.length)) return {status:"empty",pts:0,max};
    return mcqOk(q,a)?{status:"ok",pts:max,max,frac:1}:{status:"ko",pts:0,max,frac:0};
  }
  const nOk=ck.filter((c,i)=>chkState(c,cv[i])===true).length;
  const anyChk=ck.some((c,i)=>cv[i]!=null&&String(cv[i]).trim()!=="");
  const typed=a&&String(a).trim();
  if(!kp.length){
    if(!anyChk) return {status:"empty",pts:0,max,nOk};
    const frac=ck.length?nOk/ck.length:0; return {status:frac===1?"ok":"done",pts:r2(frac*max),max,frac,nOk};
  }
  if(!s){
    if(!typed&&!anyChk) return {status:"empty",pts:0,max,nOk};
    return {status:"pending",pts:ck.length?r2(nOk/(kp.length+ck.length)*max):0,max,nOk};
  }
  const frac=(s.length+nOk)/(kp.length+ck.length);
  return {status:frac>=0.999?"ok":"done",pts:r2(frac*max),max,frac,nOk};
}
function gradeRun(exam,run){
  let pts=0,max=0,pending=0,empty=0,ok=0; const bySec={};
  flatQ(exam,run.only).forEach(it=>{
    const g=gradeQ(it,run); pts+=g.pts; max+=g.max;
    if(g.status==="pending") pending++; if(g.status==="empty") empty++; if(g.status==="ok") ok++;
    const b=bySec[it.si]||(bySec[it.si]={pts:0,max:0}); b.pts+=g.pts; b.max+=g.max;
  });
  return {pts:r2(pts),max:r2(max),on20:max?r2(pts/max*20):0,pending,empty,ok,bySec};
}
function runDuration(exam,only){return only==null?exam.duration:Math.max(10,Math.round(exam.duration*secPts(exam.sections[only])/examPts(exam)))}
function label(exam,only){return `${subj(exam.subject).short} ${exam.year}`+(only!=null?` · ${shortSec(exam.sections[only])}`:"")}
const shortSec=s=>String(s.title||"").replace(/\s*\(.*?\)\s*$/,"").replace(/\s*[:—–-].*$/,"").trim()||s.title;

/* ---------- barre du haut ---------- */
function topbar(extra){
  $top.innerHTML=`<div class="brand" data-go="home">Annales ISCAE — Expertise comptable<small>Concours d'accès 2004 → 2025 · ${EXAMS.length} épreuves corrigées</small></div>
  <div class="spacer"></div>${extra||""}
  <button class="btn ghost sm" data-go="home">Épreuves</button>
  ${THEMES.length?`<button class="btn ghost sm" data-go="themes">🎯 Thèmes</button>`:""}
  ${FICHES.length?`<button class="btn ghost sm" data-go="fiches">📚 Fiches</button>`:""}
  <button class="btn ghost sm" data-go="history">Mes résultats</button>
  ${location.protocol==="https:"?`<button class="btn ghost sm" id="shareBtn" title="Partager le lien (WhatsApp…)">📤 Partager</button>`:""}
  <button class="btn ghost sm" id="themeBtn" title="Thème clair / sombre">◐</button>`;
  $top.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>({home,themes,fiches,history})[b.dataset.go]());
  const sb=document.getElementById("shareBtn"); if(sb) sb.onclick=()=>shareApp(sb);
  document.getElementById("themeBtn").onclick=()=>{
    const cur=document.documentElement.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");
    const nx=cur==="dark"?"light":"dark"; document.documentElement.dataset.theme=nx; try{localStorage.setItem(LS_THEME,nx)}catch(e){}
  };
}
function leave(){stopTimer(); window.scrollTo(0,0)}
function shareApp(btn){
  const url=location.origin+location.pathname, text="Annales corrigées du concours d'accès au Cycle d'expertise comptable (ISCAE) — épreuves, corrigés et entraînement : ";
  if(navigator.share){navigator.share({title:"Annales Expertise comptable",text,url}).catch(()=>{});return}
  $modal.innerHTML=`<div class="modal" style="align-items:center;justify-content:center"><div class="card" style="max-width:420px;width:calc(100% - 32px);text-align:center">
    <b>Partager l'application</b><p class="mini" style="word-break:break-all">${esc(url)}</p>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <a class="btn primary" href="https://wa.me/?text=${encodeURIComponent(text+url)}" target="_blank" rel="noopener">WhatsApp</a>
      <button class="btn" id="cpLink">Copier le lien</button><button class="btn ghost" id="clShare">Fermer</button></div></div></div>`;
  document.getElementById("clShare").onclick=()=>{$modal.innerHTML=""};
  document.getElementById("cpLink").onclick=e=>{const b=e.target;const done=()=>{b.textContent="Copié ✓"};
    try{navigator.clipboard.writeText(url).then(done)}catch(err){const t=document.createElement("textarea");t.value=url;document.body.appendChild(t);t.select();document.execCommand("copy");t.remove();done()}};
}

/* ---------- accueil ---------- */
let homeFilter="all";
const attOf=(id,only)=>attempts.filter(x=>x.examId===id&&(only===undefined||(x.only??null)===only));
function bestOf(id,only){const a=attOf(id,only);return a.length?Math.max(...a.map(x=>x.on20)):null}
function home(){
  leave(); topbar();
  const nQ=EXAMS.reduce((s,e)=>s+flatQ(e).length,0), nS=EXAMS.reduce((s,e)=>s+e.sections.length,0);
  const avg=attempts.length?(attempts.reduce((s,a)=>s+a.on20,0)/attempts.length):null;
  let h=`<div class="stats">
    <div class="stat"><b>${EXAMS.length}</b><span>épreuves corrigées</span></div>
    <div class="stat"><b>${nS}</b><span>exercices</span></div>
    <div class="stat"><b>${nQ}</b><span>questions</span></div>
    <div class="stat"><b>${attempts.length}</b><span>copies rendues</span></div>
    <div class="stat"><b>${avg==null?"—":avg.toFixed(1)+"/20"}</b><span>moyenne de vos copies</span></div>
  </div>`;
  if(running&&byId(running.examId)){
    const e=byId(running.examId);
    h+=`<div class="card" style="margin-top:12px;display:flex;gap:10px;align-items:center;flex-wrap:wrap">
      <span>Copie en cours : <b>${esc(label(e,running.only))}</b> (${running.mode==="train"?"entraînement":"épreuve"})</span><div class="spacer"></div>
      <button class="btn primary sm" id="resume">Reprendre</button><button class="btn sm" id="drop">Abandonner</button></div>`;
  }
  h+=`<div class="tabs">${[["all","Toutes les matières"],...SUBJECTS.map(s=>[s.key,s.short])].map(([k,l])=>`<button class="tab ${homeFilter===k?"on":""}" data-f="${k}">${esc(l)}</button>`).join("")}</div>`;
  const years=[...new Set(EXAMS.map(e=>e.year))].sort((a,b)=>b-a);
  years.forEach(y=>{
    const list=EXAMS.filter(e=>e.year===y&&(homeFilter==="all"||e.subject===homeFilter)).sort((a,b)=>SUBJECTS.findIndex(s=>s.key===a.subject)-SUBJECTS.findIndex(s=>s.key===b.subject));
    if(!list.length) return;
    h+=`<div class="yearhead"><h2>Session ${y}</h2><span class="mini">${esc(list[0].session||"")}</span></div><div class="grid">`;
    list.forEach(e=>{
      const s=subj(e.subject), b=bestOf(e.id,null), nq=flatQ(e).length;
      h+=`<div class="card ecard" style="--c:${s.color}">
        <h3><span class="sdot"></span>${esc(s.short)} ${e.year}</h3>
        <div class="meta">${esc(e.title)}</div>
        <div class="meta">${esc(e.date||"")}${e.date?" · ":""}${fmtDur(e.duration)} · ${e.sections.length} exercice${e.sections.length>1?"s":""} · ${nq} question${nq>1?"s":""}</div>
        <div class="row">${b!=null?`<span class="pill ${b>=10?"ok":"ko"}">meilleure note ${b.toFixed(1)}/20</span>`:`<span class="pill">jamais passée</span>`}</div>
        <div class="row">
          <button class="btn primary sm" data-start="${e.id}" data-mode="exam">Passer l'épreuve</button>
          <button class="btn sm" data-start="${e.id}" data-mode="train">Entraînement</button>
          <button class="btn ghost sm" data-pages="${e.id}">Sujet original</button>
        </div>
        <details><summary>Exercice par exercice</summary><ul class="exlist">${e.sections.map((x,si)=>{const bs=bestOf(e.id,si);
          return `<li><span>${esc(x.title)} <span class="mini">· ${secPts(x)} pts</span></span>${bs!=null?`<span class="pill ${bs>=10?"ok":"ko"}">${bs.toFixed(1)}</span>`:""}<button class="btn sm" data-start="${e.id}" data-mode="train" data-only="${si}">▶</button></li>`}).join("")}</ul></details>
      </div>`;
    });
    h+=`</div>`;
  });
  h+=`<p class="note" style="margin-top:28px">Mode <b>Épreuve</b> : chronomètre, corrigé à la fin. Mode <b>Entraînement</b> : corrigé question par question. Chaque exercice peut aussi être fait seul (▶).
    Les résultats clés (montants, taux…) sont vérifiés automatiquement ; le reste se corrige avec le corrigé-type et une grille de points clés que vous cochez — vous pouvez rédiger sur papier et seulement cocher la grille.
    Vos copies restent dans ce navigateur. Corrigés proposés par Claude à partir du recueil de M. Kabbadj (sujets originaux consultables) : en droit et en fiscalité, vérifiez toujours le texte en vigueur (CGI, loi 17-95, loi 5-96, Code de commerce).</p>`;
  $app.innerHTML=h;
  $app.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{homeFilter=b.dataset.f;home()});
  bindStarts($app);
  $app.querySelectorAll("[data-pages]").forEach(b=>b.onclick=()=>{const e=byId(b.dataset.pages);showPages(e.pages[0],e.pages[1],`${subj(e.subject).short} ${e.year} — sujet original`)});
  const r=document.getElementById("resume"); if(r) r.onclick=()=>renderExam();
  const d=document.getElementById("drop"); if(d) d.onclick=()=>{if(confirm("Abandonner la copie en cours ?")){running=null;save(LS_RUN,null);home();}};
}
function bindStarts(root){root.querySelectorAll("[data-start]").forEach(b=>b.onclick=()=>startExam(b.dataset.start,b.dataset.mode,b.dataset.only!=null?+b.dataset.only:null))}
function fmtDur(m){return m>=60?(Math.floor(m/60)+" h"+(m%60?" "+String(m%60).padStart(2,"0"):"")):m+" min"}

/* ---------- passage d'une épreuve ---------- */
let timerId=null;
function stopTimer(){if(timerId){clearInterval(timerId);timerId=null}}
function startExam(id,mode,only){
  only=only==null?null:only;
  if(running&&!(running.examId===id&&running.mode===mode&&(running.only??null)===only)){
    const cur=byId(running.examId);
    if(cur&&!confirm(`Une copie est en cours (${label(cur,running.only)}). La remplacer ?`)) return;
    running=null;
  }
  if(!running) running={examId:id,mode,only,start:Date.now(),answers:{},chk:{},revealed:{},self:{}};
  save(LS_RUN,running); renderExam();
}
function persist(){save(LS_RUN,running)}
function renderExam(){
  const exam=byId(running.examId), train=running.mode==="train", only=running.only??null, items=flatQ(exam,only);
  topbar(`<span class="timer" id="timer"></span><button class="btn sm" id="origBtn">Sujet original</button><button class="btn primary sm" id="submitTop">Rendre la copie</button>`);
  leave();
  const dur=runDuration(exam,only);
  let h=`<div class="examhead"><h1>${esc(subj(exam.subject).short)} ${exam.year} — ${esc(only!=null?exam.sections[only].title:exam.title)}</h1>
    <span class="pill">${train?"Entraînement":"Épreuve chronométrée"} · ${fmtDur(dur)}</span>
    ${exam.note?`<span class="pill warn">${esc(exam.note)}</span>`:""}
    <div class="progress"><i id="prog"></i></div></div>`;
  if(exam.intro&&only==null) h+=`<div class="card" style="margin-top:12px">${md(exam.intro)}</div>`;
  exam.sections.forEach((s,si)=>{
    if(only!=null&&si!==only) return;
    h+=`<section class="section"><h2>${esc(s.title)} <span class="pill">${secPts(s)} pts</span>
      ${s.pages?`<button class="btn ghost sm" data-scan="${si}">Scan p. ${s.pages[0]}${s.pages[1]!==s.pages[0]?"–"+s.pages[1]:""}</button>`:""}</h2>`;
    if(s.ctx) h+=`<details class="card ctx" open><summary>Énoncé</summary>${md(s.ctx)}</details>`;
    items.filter(it=>it.si===si).forEach(it=>{h+=qHTML(it,train)});
    h+=`</section>`;
  });
  h+=`<div class="foot"><button class="btn" id="homeBtn">Enregistrer et quitter</button><button class="btn primary" id="submitBottom">Rendre la copie</button></div>`;
  $app.innerHTML=h;
  bindExam(exam,train);
  document.getElementById("origBtn").onclick=()=>{const p=only!=null&&exam.sections[only].pages||exam.pages;showPages(p[0],p[1],"Sujet original")};
  document.getElementById("submitTop").onclick=document.getElementById("submitBottom").onclick=()=>submitExam();
  document.getElementById("homeBtn").onclick=()=>home();
  updateProgress(exam);
  stopTimer(); const tick=()=>{
    const el=document.getElementById("timer"); if(!el){stopTimer();return}
    const used=(Date.now()-running.start)/1000, left=dur*60-used;
    if(train){el.textContent="⏱ "+mmss(used);}
    else {el.textContent=(left>=0?"⏳ ":"⌛ +")+mmss(Math.abs(left)); el.classList.toggle("late",left<0); el.title=left<0?"Temps réglementaire dépassé":"Temps restant";}
  }; tick(); timerId=setInterval(tick,1000);
}
function mmss(s){s=Math.floor(s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+":"+String(m).padStart(2,"0"):m)+":"+String(x).padStart(2,"0")}
function chkHTML(it,run,editable,showRes){
  const ck=it.q.chk||[]; if(!ck.length) return "";
  const cv=(run.chk||{})[it.key]||{};
  return `<div class="chk"><span class="ttl">Vos résultats clés</span>${ck.map((c,i)=>{
    const st=chkState(c,cv[i]);
    const res=showRes?(st===true?`<span class="res" style="color:var(--ok)">✓ juste</span>`:`<span class="res" style="color:${st===false?"var(--ko)":"var(--muted)"}">${st===false?"✗ ":""}attendu : <b>${fnum(c.v)}</b>${c.u?" "+esc(c.u):""}</span>`):"";
    return `<div class="chkrow"><label for="ck-${it.key}-${i}">${esc(c.l)}</label><input type="text" inputmode="decimal" id="ck-${it.key}-${i}" data-ck="${it.key}" data-i="${i}" value="${esc(cv[i]??"")}" ${editable?"":"disabled"} placeholder="—"><span class="mini">${esc(c.u||"")}</span>${res}</div>`}).join("")}</div>`;
}
function optsHTML(it,a,editable,show){
  const q=it.q,A=[].concat(q.a);
  return `<div class="opts">${q.o.map((o,i)=>{
    const sel=q.multi?(a||[]).includes(i):a===i, corr=A.includes(i);
    const cls=show?(corr?"good":sel?"bad":""):(sel?"sel":"");
    return `<label class="opt ${cls} ${editable?"":"locked"}"><input type="${q.multi?"checkbox":"radio"}" name="o-${it.key}" data-o="${it.key}" data-i="${i}" ${sel?"checked":""} ${editable?"":"disabled"}><span class="l">${L[i]}</span><span>${inl(o)}</span></label>`}).join("")}</div>`;
}
function mcqFeedback(q){return `<div class="expl"><b>Réponse${[].concat(q.a).length>1?"s":""} : ${[].concat(q.a).map(i=>L[i]).join(q.multi?" + ":" ou ")}</b>${q.model?md(q.model):""}</div>`}
function qHTML(it,train){
  const q=it.q,a=running.answers[it.key],rev=train&&running.revealed[it.key];
  let h=`<div class="card q" id="q-${it.key}"><div>${it.num!==""?`<span class="qn">${esc(it.num)}.</span>`:""}<span class="pill">${qMax(q)} pt${qMax(q)>1?"s":""}</span>${q.multi?' <span class="pill">plusieurs réponses</span>':""} <span class="qt">${md(q.q)}</span></div>`;
  if(q.o){
    h+=optsHTML(it,a,!rev,rev);
    if(train&&!rev&&q.multi) h+=`<div style="margin-top:8px"><button class="btn sm" data-check="${it.key}">Valider</button></div>`;
    if(rev) h+=mcqFeedback(q);
    return h+`</div>`;
  }
  h+=chkHTML(it,running,!rev,rev);
  h+=`<textarea data-open="${it.key}" placeholder="Votre réponse (facultatif : vous pouvez rédiger sur papier puis cocher la grille du corrigé)…">${esc(a||"")}</textarea>`;
  if(train&&!rev) h+=`<div style="margin-top:8px"><button class="btn sm" data-check="${it.key}">Voir le corrigé</button></div>`;
  if(rev) h+=feedbackHTML(it,running,true);
  return h+`</div>`;
}
function feedbackHTML(it,run,editable){
  const q=it.q,s=(run.self||{})[it.key]||[],g=gradeQ(it,run);
  let h=`<div class="expl"><b>Corrigé proposé</b>${md(q.model||"")}`;
  if(q.kp&&q.kp.length){
    h+=`<div style="margin-top:10px"><b>Grille d'auto-évaluation</b> <span class="mini">— cochez ce qui figure dans votre réponse (${g.max} pt${g.max>1?"s":""}${q.chk&&q.chk.length?", résultats clés compris":""})</span></div><div class="kp">`;
    q.kp.forEach((k,i)=>{h+=`<label><input type="checkbox" data-kp="${it.key}" data-i="${i}" ${s.includes(i)?"checked":""} ${editable?"":"disabled"}> <span>${inl(k)}</span></label>`});
    h+=`</div><div class="mini" style="margin-top:6px" data-kpscore="${it.key}">${(run.self||{})[it.key]?`Note : ${g.pts} / ${g.max}`:"Grille non encore cochée"}</div>`;
  }
  return h+`</div>`;
}
function bindExam(exam,train){
  const items=flatQ(exam,running.only??null), find=k=>items.find(x=>x.key===k);
  const rerender=k=>{const it=find(k);const el=document.getElementById("q-"+k);const tmp=document.createElement("div");tmp.innerHTML=qHTML(it,train);el.replaceWith(tmp.firstChild);bindExam(exam,train);updateProgress(exam)};
  $app.querySelectorAll("[data-check]").forEach(b=>b.onclick=()=>{running.revealed[b.dataset.check]=true;persist();rerender(b.dataset.check)});
  $app.querySelectorAll("input[data-o]").forEach(inp=>inp.onchange=()=>{
    const k=inp.dataset.o,i=+inp.dataset.i,q=find(k).q;
    if(q.multi){const cur=new Set(running.answers[k]||[]); inp.checked?cur.add(i):cur.delete(i); running.answers[k]=[...cur].sort();}
    else {running.answers[k]=i; if(train) running.revealed[k]=true;}
    persist(); if(!q.multi) rerender(k); else updateProgress(exam);
  });
  $app.querySelectorAll("[data-scan]").forEach(b=>b.onclick=()=>{const s=exam.sections[+b.dataset.scan];showPages(s.pages[0],s.pages[1],s.title)});
  $app.querySelectorAll("input[data-ck]").forEach(inp=>inp.oninput=()=>{const k=inp.dataset.ck;(running.chk[k]||(running.chk[k]={}))[inp.dataset.i]=inp.value;persist();updateProgress(exam)});
  $app.querySelectorAll("textarea[data-open]").forEach(ta=>ta.oninput=()=>{running.answers[ta.dataset.open]=ta.value;persist();updateProgress(exam)});
  $app.querySelectorAll("input[data-kp]").forEach(cb=>cb.onchange=()=>{
    const k=cb.dataset.kp,i=+cb.dataset.i; const cur=new Set(running.self[k]||[]); cb.checked?cur.add(i):cur.delete(i); running.self[k]=[...cur]; persist();
    const g=gradeQ(find(k),running); const el=$app.querySelector(`[data-kpscore="${k}"]`); if(el) el.textContent=`Note : ${g.pts} / ${g.max}`;
  });
}
function updateProgress(exam){
  const items=flatQ(exam,running.only??null); const n=items.filter(it=>gradeQ(it,running).status!=="empty"||running.revealed[it.key]).length;
  const p=document.getElementById("prog"); if(p) p.style.width=(items.length?n/items.length*100:0)+"%";
}
function submitExam(){
  const exam=byId(running.examId), only=running.only??null;
  stopTimer();
  const g=gradeRun(exam,running);
  const att={id:"a"+Date.now(),examId:exam.id,only,mode:running.mode,date:new Date().toISOString(),durationSec:Math.round((Date.now()-running.start)/1000),
    answers:running.answers,chk:running.chk||{},self:running.self||{},...pick(g)};
  attempts.push(att); save(LS_ATT,attempts); running=null; save(LS_RUN,null);
  resFilter="all"; results(att.id);
}
function pick(g){return {pts:g.pts,max:g.max,on20:g.on20,pending:g.pending,empty:g.empty,ok:g.ok}}

/* ---------- résultats ---------- */
let resFilter="all";
function results(attId){
  const att=attempts.find(a=>a.id===attId); if(!att) return home();
  const exam=byId(att.examId); if(!exam) return home();
  const only=att.only??null;
  topbar(`<button class="btn sm" id="origBtn">Sujet original</button>`); leave();
  const items=flatQ(exam,only);
  const regrade=()=>{const g=gradeRun(exam,att);Object.assign(att,pick(g));save(LS_ATT,attempts);return g};
  const g=regrade();
  const prev=attOf(exam.id,only).filter(a=>a.id!==att.id);
  const secs=exam.sections.map((s,si)=>({s,si})).filter(x=>only==null||x.si===only);
  let h=`<div class="examhead"><h1>Résultats — ${esc(label(exam,only))}</h1><span class="pill">${att.mode==="train"?"Entraînement":"Épreuve"}</span><span class="mini">${new Date(att.date).toLocaleString("fr-FR")} · durée ${mmss(att.durationSec)} / ${fmtDur(runDuration(exam,only))}</span></div>
  <div class="card" style="margin-top:12px"><div class="score">
    <div><div class="big" id="bigNote">${g.on20.toFixed(2)}<small>/20</small></div><div class="mini" id="ptsLine">${g.pts} / ${g.max} points</div></div>
    <div class="bars">${secs.map(({s,si})=>{const b=g.bySec[si]||{pts:0,max:0};const p=b.max?Math.max(0,b.pts)/b.max:0;return `<div class="bar"><span>${esc(s.title)}</span><span class="t"><i style="width:${p*100}%"></i></span><span data-secp="${si}">${r2(b.pts)}/${r2(b.max)}</span></div>`}).join("")}</div>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:12px">
    <span class="pill ok">${g.ok} parfaites</span><span class="pill">${g.empty} sans réponse</span>
    <span class="pill warn" id="pendPill" ${g.pending?"":"hidden"}>${g.pending} question(s) à auto-évaluer — cochez les grilles ci-dessous</span>
    ${prev.length?`<span class="pill">tentatives précédentes : ${prev.map(p=>p.on20.toFixed(1)).join(" · ")}</span>`:""}
  </div></div>${revCTA(att,exam)}
  <div class="filters">${[["all","Toutes"],["miss","À revoir"],["pending","À auto-évaluer"]].map(([k,l])=>`<button class="tab ${resFilter===k?"on":""}" data-rf="${k}">${l}</button>`).join("")}
    <div class="spacer"></div><button class="btn sm" id="again">Refaire</button><button class="btn sm" id="back">Toutes les épreuves</button></div>`;
  secs.forEach(({s,si})=>{
    const its=items.filter(it=>it.si===si).filter(it=>{
      const st=gradeQ(it,att).status;
      if(resFilter==="miss") return st!=="ok"; if(resFilter==="pending") return st==="pending"; return true;});
    if(!its.length) return;
    h+=`<section class="section"><h2>${esc(s.title)}${s.pages?` <button class="btn ghost sm" data-scan="${si}">Scan</button>`:""}</h2>
      ${s.ctx?`<details class="card ctx"><summary>Énoncé</summary>${md(s.ctx)}</details>`:""}`;
    its.forEach(it=>{
      const q=it.q,a=att.answers[it.key],st=gradeQ(it,att);
      if(q.o){h+=`<div class="card q" id="r-${it.key}"><div><span class="qstatus">${badge(st)}</span>${it.num!==""?`<span class="qn">${esc(it.num)}.</span>`:""}<span class="qt">${md(q.q)}</span></div>${optsHTML(it,a,false,true)}${mcqFeedback(q)}</div>`;return}
      h+=`<div class="card q" id="r-${it.key}"><div><span class="qstatus" data-badge="${it.key}">${badge(st)}</span>${it.num!==""?`<span class="qn">${esc(it.num)}.</span>`:""}<span class="qt">${md(q.q)}</span></div>
        ${chkHTML(it,att,false,true)}
        <div class="two" style="margin-top:10px"><div><div class="mini">Votre réponse</div><div class="card" style="background:var(--bg)">${a&&a.trim()?`<div class="md" style="white-space:pre-wrap">${esc(a)}</div>`:'<span class="mini">— rien de saisi (réponse sur papier ?) —</span>'}</div></div>
        <div>${feedbackHTML(it,att,true)}</div></div></div>`;
    });
    h+=`</section>`;
  });
  $app.innerHTML=h+`<div style="height:40px"></div>`;
  document.getElementById("origBtn").onclick=()=>{const p=only!=null&&exam.sections[only].pages||exam.pages;showPages(p[0],p[1],"Sujet original")};
  $app.querySelectorAll("[data-rf]").forEach(b=>b.onclick=()=>{resFilter=b.dataset.rf;results(attId)});
  $app.querySelectorAll("[data-scan]").forEach(b=>b.onclick=()=>{const s=exam.sections[+b.dataset.scan];showPages(s.pages[0],s.pages[1],s.title)});
  const rb=document.getElementById("revGo"); if(rb) rb.onclick=()=>revision(att.id);
  document.getElementById("again").onclick=()=>{running=null;startExam(exam.id,att.mode,only)};
  document.getElementById("back").onclick=()=>home();
  $app.querySelectorAll("input[data-kp]").forEach(cb=>cb.onchange=()=>{
    const k=cb.dataset.kp,i=+cb.dataset.i; const cur=new Set(att.self[k]||[]); cb.checked?cur.add(i):cur.delete(i); att.self[k]=[...cur];
    const g2=regrade(); const it=items.find(x=>x.key===k), st=gradeQ(it,att);
    const sc=$app.querySelector(`[data-kpscore="${k}"]`); if(sc) sc.textContent=`Note : ${st.pts} / ${st.max}`;
    const bd=$app.querySelector(`[data-badge="${k}"]`); if(bd) bd.innerHTML=badge(st);
    document.getElementById("bigNote").innerHTML=`${g2.on20.toFixed(2)}<small>/20</small>`;
    document.getElementById("ptsLine").textContent=`${g2.pts} / ${g2.max} points`;
    secs.forEach(({si})=>{const b=g2.bySec[si]||{pts:0,max:0};const el=$app.querySelector(`[data-secp="${si}"]`);if(el){el.textContent=`${r2(b.pts)}/${r2(b.max)}`;el.previousElementSibling.firstChild.style.width=(b.max?Math.max(0,b.pts)/b.max*100:0)+"%"}});
    const pp=document.getElementById("pendPill"); if(pp){pp.hidden=!g2.pending;pp.textContent=`${g2.pending} question(s) à auto-évaluer — cochez les grilles ci-dessous`}
  });
}
function badge(st){return {ko:`<span class="pill ko">faux · 0/${st.max}</span>`,ok:`<span class="pill ok">${st.pts}/${st.max}</span>`,done:`<span class="pill ${st.frac>=0.5?"warn":"ko"}">${st.pts}/${st.max}</span>`,empty:'<span class="pill">sans réponse</span>',pending:'<span class="pill warn">à auto-évaluer</span>'}[st.status]}

/* ---------- révision des points manqués ---------- */
const revPrefs=Object.assign({flash:false},load(LS_REV,{}));
function revItems(att,exam){return flatQ(exam,att.only??null).map(it=>({it,g:gradeQ(it,att)})).filter(({g})=>g.status!=="ok")}
function revCTA(att,exam){
  const cards=revItems(att,exam);
  if(!cards.length) return `<div class="card revcta"><span style="font-size:22px">🎉</span><div><b>Copie parfaite</b><div class="mini">Rien à réviser sur cette copie.</div></div></div>`;
  const lost=r2(cards.reduce((a,c)=>a+c.g.max-c.g.pts,0));
  return `<div class="card revcta"><span style="font-size:26px">🔁</span><div style="flex:1;min-width:200px"><b>Révision ciblée</b> — ${cards.length} question${cards.length>1?"s":""} à revoir (${lost} pts perdus)
    <div class="mini">Uniquement les points clés manqués et les résultats faux, avec le corrigé. Option « me tester d'abord ».</div></div>
    <button class="btn primary" id="revGo">Réviser</button></div>`;
}
function revision(attId){
  const att=attempts.find(a=>a.id===attId); if(!att) return home();
  const exam=byId(att.examId); if(!exam) return home();
  topbar(`<button class="btn sm" id="revRes">Correction complète</button>`); leave();
  const cards=revItems(att,exam); att.reviewedAt=Date.now(); save(LS_ATT,attempts);
  let h=`<div class="examhead"><h1>Révision — ${esc(label(exam,att.only??null))}</h1><span class="pill ${cards.length?"ko":"ok"}">${cards.length} question${cards.length>1?"s":""} à revoir</span>
    <span class="mini">copie du ${new Date(att.date).toLocaleDateString("fr-FR")} · ${att.on20.toFixed(2)}/20</span></div>
    <div class="filters"><label class="tog"><input type="checkbox" id="rvFlash" ${revPrefs.flash?"checked":""}> Me tester d'abord (correction cachée)</label></div>`;
  let prev=null;
  cards.forEach(({it,g},i)=>{
    if(it.si!==prev){prev=it.si; h+=`<h2 style="font-size:16px;margin:22px 0 8px">${esc(exam.sections[it.si].title)}</h2>`}
    const q=it.q,cv=(att.chk||{})[it.key]||{},s=(att.self||{})[it.key]||[];
    if(q.o){h+=`<div class="card q rcard ${revPrefs.flash?"flash":""}" id="rc-${i}"><div><span class="qstatus">${badge(g)}</span>${it.num!==""?`<span class="qn">${esc(it.num)}.</span>`:""}<span class="qt">${md(q.q)}</span></div>
      <div class="rcorr">${optsHTML(it,att.answers[it.key],false,true)}${mcqFeedback(q)}</div><button class="btn sm revealbtn" data-reveal="${i}">Afficher la correction</button></div>`;return}
    const missKP=(q.kp||[]).filter((_,k)=>!s.includes(k)), badCk=(q.chk||[]).map((c,k)=>({c,k,st:chkState(c,cv[k])})).filter(x=>x.st!==true);
    h+=`<div class="card q rcard ${revPrefs.flash?"flash":""}" id="rc-${i}"><div><span class="qstatus">${badge(g)}</span>${it.num!==""?`<span class="qn">${esc(it.num)}.</span>`:""}<span class="qt">${md(q.q)}</span></div>
      ${exam.sections[it.si].ctx?`<details class="rpass"><summary class="mini">Relire l'énoncé</summary>${md(exam.sections[it.si].ctx)}</details>`:""}
      <div class="rcorr">
      ${badCk.length?`<div class="rline ko"><b>Résultats à retenir :</b><ul>${badCk.map(x=>`<li>${esc(x.c.l)} : <b>${fnum(x.c.v)}</b>${x.c.u?" "+esc(x.c.u):""}${x.st===false?` <span class="mini">(vous : ${esc(cv[x.k])})</span>`:""}</li>`).join("")}</ul></div>`:""}
      ${missKP.length?`<div class="rline ko"><b>${(att.self||{})[it.key]?"Points clés manqués":"Points clés attendus"} :</b><ul>${missKP.map(k=>`<li>${inl(k)}</li>`).join("")}</ul></div>`:""}
      <details class="rpass" ${revPrefs.flash?"":""}><summary class="mini">Corrigé complet</summary>${md(q.model)}</details></div>
      <button class="btn sm revealbtn" data-reveal="${i}">Afficher la correction</button></div>`;
  });
  h+=`<div class="foot"><button class="btn" id="rvRes2">Correction complète</button><button class="btn primary" id="rvAgain">Refaire</button></div>`;
  $app.innerHTML=h;
  const back=()=>results(att.id);
  document.getElementById("revRes").onclick=document.getElementById("rvRes2").onclick=back;
  document.getElementById("rvAgain").onclick=()=>{running=null;startExam(exam.id,att.mode,att.only??null)};
  $app.querySelectorAll("[data-reveal]").forEach(b=>b.onclick=()=>document.getElementById("rc-"+b.dataset.reveal).classList.remove("flash"));
  document.getElementById("rvFlash").onchange=e=>{revPrefs.flash=e.target.checked;save(LS_REV,revPrefs);$app.querySelectorAll(".rcard").forEach(c=>c.classList.toggle("flash",revPrefs.flash))};
}

/* ---------- thèmes : ce qui tombe ---------- */
let thFilter="all";
function secsOfTheme(k){const out=[];EXAMS.forEach(e=>e.sections.forEach((s,si)=>{if((s.th||[]).includes(k)) out.push({e,s,si})}));return out.sort((a,b)=>b.e.year-a.e.year)}
function themes(sel){
  leave(); topbar();
  const years=[...new Set(EXAMS.map(e=>e.year))].sort((a,b)=>a-b);
  if(sel){
    const t=thm(sel), list=secsOfTheme(sel), s=subj(t.s);
    let h=`<div class="examhead"><h1>🎯 ${esc(t.l)}</h1><span class="pill">${esc(s.short)}</span><span class="pill">${list.length} exercice${list.length>1?"s":""} · ${new Set(list.map(x=>x.e.year)).size} session${new Set(list.map(x=>x.e.year)).size>1?"s":""} sur ${years.length}</span>
      <div class="spacer"></div><button class="btn sm" id="thBack">Tous les thèmes</button></div>`;
    if(t.d) h+=`<div class="card" style="margin-top:12px">${md(t.d)}</div>`;
    const fl=FICHES.flatMap(g=>g.cards.filter(c=>(c.th||[]).includes(sel)).map(c=>({g,c})));
    if(fl.length) h+=`<div class="card" style="margin-top:12px"><b>📚 Fiches liées</b><div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">${fl.map(({g,c})=>`<button class="btn sm" data-fiche="${esc(g.key)}" data-card="${esc(c.t)}">${esc(c.t)}</button>`).join("")}</div></div>`;
    h+=`<div class="card" style="margin-top:12px;overflow:auto"><table class="list"><thead><tr><th>Session</th><th>Exercice</th><th>Points</th><th>Meilleure note</th><th></th></tr></thead><tbody>`;
    list.forEach(({e,s,si})=>{const b=bestOf(e.id,si);
      h+=`<tr><td><b>${e.year}</b></td><td>${esc(s.title)}<div class="mini">${esc(subj(e.subject).short)} — ${esc(e.title)}</div></td><td>${secPts(s)}</td><td>${b!=null?`<span class="pill ${b>=10?"ok":"ko"}">${b.toFixed(1)}/20</span>`:"—"}</td>
        <td style="white-space:nowrap"><button class="btn primary sm" data-start="${e.id}" data-mode="train" data-only="${si}">S'entraîner</button> ${s.pages?`<button class="btn ghost sm" data-sp="${e.id}|${si}">Scan</button>`:""}</td></tr>`});
    h+=`</tbody></table></div>`;
    $app.innerHTML=h;
    document.getElementById("thBack").onclick=()=>themes();
    bindStarts($app);
    $app.querySelectorAll("[data-sp]").forEach(b=>b.onclick=()=>{const [id,si]=b.dataset.sp.split("|");const s=byId(id).sections[+si];showPages(s.pages[0],s.pages[1],s.title)});
    $app.querySelectorAll("[data-fiche]").forEach(b=>b.onclick=()=>fiches(b.dataset.fiche,b.dataset.card));
    return;
  }
  let h=`<div class="examhead"><h1>🎯 Ce qui tombe — entraînement par thème</h1></div>
    <p class="note">Chaque exercice des ${EXAMS.length} épreuves est classé par thème. Les thèmes les plus fréquents sont ceux à maîtriser en priorité ; cliquez pour enchaîner tous les exercices d'un thème.</p>
    <div class="tabs">${[["all","Toutes les matières"],...SUBJECTS.map(s=>[s.key,s.short])].map(([k,l])=>`<button class="tab ${thFilter===k?"on":""}" data-tf="${k}">${esc(l)}</button>`).join("")}</div>`;
  SUBJECTS.filter(s=>thFilter==="all"||thFilter===s.key).forEach(s=>{
    const ths=THEMES.filter(t=>t.s===s.key).map(t=>({t,list:secsOfTheme(t.k)})).filter(x=>x.list.length).sort((a,b)=>new Set(b.list.map(x=>x.e.year)).size-new Set(a.list.map(x=>x.e.year)).size||b.list.length-a.list.length);
    if(!ths.length) return;
    h+=`<div class="yearhead"><h2>${esc(s.long)}</h2></div><div class="thgrid">`;
    ths.forEach(({t,list})=>{const ys=new Set(list.map(x=>x.e.year));
      h+=`<div class="card thcard" style="--c:${s.color}" data-th="${t.k}"><b>${esc(t.l)}</b><span class="mini">${ys.size} session${ys.size>1?"s":""} / ${years.length} · ${list.length} exercice${list.length>1?"s":""} · dernier : ${Math.max(...ys)}</span>
        <div class="freq" title="${years.join(" ")}">${years.map(y=>`<i class="${ys.has(y)?"on":""}" title="${y}"></i>`).join("")}</div></div>`});
    h+=`</div>`;
  });
  $app.innerHTML=h;
  $app.querySelectorAll("[data-tf]").forEach(b=>b.onclick=()=>{thFilter=b.dataset.tf;themes()});
  $app.querySelectorAll("[data-th]").forEach(b=>b.onclick=()=>themes(b.dataset.th));
}

/* ---------- fiches de cours + flashcards ---------- */
let fTab=null, fQ="", fc=null;
function fiches(tab,openCard){
  leave(); topbar();
  if(tab) fTab=tab; if(!fTab) fTab=FICHES[0]&&FICHES[0].key;
  const tabs=[...FICHES.map(g=>[g.key,g.title]),["flash","🃏 Flashcards"]];
  let h=`<div class="examhead"><h1>📚 Fiches de révision</h1><div class="spacer"></div><input type="text" class="searchbox" id="fSearch" placeholder="Rechercher dans les fiches (ex. prorata, commissaire aux apports, VAN…)" value="${esc(fQ)}"></div>
    <div class="tabs">${tabs.map(([k,l])=>`<button class="tab ${fTab===k&&!fQ?"on":""}" data-ft="${esc(k)}">${esc(l)}</button>`).join("")}</div><div id="fbody"></div>`;
  $app.innerHTML=h;
  $app.querySelectorAll("[data-ft]").forEach(b=>b.onclick=()=>{fQ="";fiches(b.dataset.ft)});
  const inp=document.getElementById("fSearch");
  inp.oninput=()=>{fQ=inp.value;drawF()};
  const body=document.getElementById("fbody");
  const norm=s=>String(s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
  function drawF(){
    $app.querySelectorAll("[data-ft]").forEach(b=>b.classList.toggle("on",!fQ&&b.dataset.ft===fTab));
    if(fQ.trim()){
      const w=norm(fQ).split(/\s+/).filter(Boolean);
      const hits=FICHES.flatMap(g=>g.cards.filter(c=>{const t=norm(c.t+" "+c.md);return w.every(x=>t.includes(x))}).map(c=>({g,c})));
      body.innerHTML=hits.length?hits.map(({g,c})=>ficheHTML(c,true,g.title)).join(""):`<div class="empty">Aucune fiche ne contient « ${esc(fQ)} ».</div>`;
      return bindF();
    }
    if(fTab==="flash") return flash(body);
    const g=FICHES.find(x=>x.key===fTab)||FICHES[0];
    body.innerHTML=(g.intro?`<p class="note">${inl(g.intro)}</p>`:"")+g.cards.map(c=>ficheHTML(c,c.t===openCard)).join("");
    bindF();
    if(openCard){const el=[...body.querySelectorAll("details.fiche")].find(d=>d.dataset.t===openCard); if(el) el.scrollIntoView({block:"start"})}
  }
  function bindF(){body.querySelectorAll("[data-th]").forEach(b=>b.onclick=()=>themes(b.dataset.th))}
  drawF();
}
function ficheHTML(c,open,grp){
  return `<details class="card fiche" data-t="${esc(c.t)}" ${open?"open":""}><summary>${esc(c.t)}${grp?` <span class="mini">· ${esc(grp)}</span>`:""}</summary>${md(c.md)}
    ${(c.th||[]).length?`<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">${c.th.filter(thm).map(k=>`<button class="btn sm" data-th="${k}">🎯 S'entraîner : ${esc(thm(k).l)}</button>`).join("")}</div>`:""}</details>`;
}
function flash(el){
  const deck=FICHES.flatMap(g=>(g.flash||[]).map(([q,a],i)=>({id:g.key+":"+i,q,a,g:g.title})));
  if(!deck.length){el.innerHTML=`<div class="empty">Pas encore de flashcards.</div>`;return}
  const st=load(LS_FC,{});
  if(!fc||!fc.q){
    const due=deck.filter(c=>!st[c.id]||st[c.id].next<=Date.now());
    const pool=due.length?due:deck; fc={q:pool[Math.floor(Math.random()*pool.length)],shown:false};
  }
  const known=deck.filter(c=>st[c.id]&&st[c.id].box>=3).length;
  const c=fc.q;
  el.innerHTML=`<div class="mini" style="text-align:center">${deck.length} cartes · ${known} maîtrisées · répétition espacée (une carte ratée revient vite, une carte sue s'espace)</div>
    <div class="card fcard"><span class="pill">${esc(c.g)}</span><div class="fcf">${inl(c.q)}</div>
    ${fc.shown?`<div class="fcb">${md(c.a)}</div><div style="display:flex;gap:8px;justify-content:center;margin-top:16px"><button class="btn" id="fcKo">✗ À revoir</button><button class="btn primary" id="fcOk">✓ Je savais</button></div>`
    :`<button class="btn primary" id="fcShow" style="margin-top:14px">Voir la réponse</button>`}</div>
    <p style="text-align:center"><button class="btn ghost sm" id="fcReset">Réinitialiser la progression</button></p>`;
  const on=(id,f)=>{const b=document.getElementById(id); if(b) b.onclick=f};
  on("fcShow",()=>{fc.shown=true;flash(el)});
  const grade=ok=>{const s=st[c.id]||{box:0}; s.box=ok?Math.min(5,s.box+1):0; s.next=Date.now()+(ok?[0,1,3,7,15,30][s.box]*864e5:60e3); st[c.id]=s; save(LS_FC,st); fc.q=null; flash(el)};
  on("fcOk",()=>grade(true)); on("fcKo",()=>grade(false));
  on("fcReset",()=>{if(confirm("Oublier la progression des flashcards ?")){save(LS_FC,{});fc=null;flash(el)}});
}

/* ---------- historique ---------- */
function history(){
  leave(); topbar();
  if(!attempts.length){$app.innerHTML=`<div class="empty">Aucune copie rendue pour l'instant.<br><br><button class="btn primary" id="go">Choisir une épreuve</button></div>`;document.getElementById("go").onclick=home;return}
  let h=`<h2 style="margin:10px 0">Mes résultats</h2><div class="stats">`;
  SUBJECTS.forEach(s=>{const a=attempts.filter(x=>{const e=byId(x.examId);return e&&e.subject===s.key});
    h+=`<div class="stat" style="border-left:4px solid ${s.color}"><b>${a.length?(a.reduce((t,x)=>t+x.on20,0)/a.length).toFixed(1)+"/20":"—"}</b><span>${esc(s.short)} · ${a.length} copie${a.length>1?"s":""}</span></div>`});
  h+=`</div><div class="card" style="margin-top:12px"><div class="mini">Évolution de vos notes (/20)</div>${chart()}</div>
  <div class="card" style="margin-top:12px;overflow:auto"><table class="list"><thead><tr><th>Date</th><th>Épreuve / exercice</th><th>Mode</th><th>Note</th><th>Durée</th><th></th></tr></thead><tbody>`;
  [...attempts].reverse().forEach(a=>{const e=byId(a.examId); if(!e) return;
    h+=`<tr><td>${new Date(a.date).toLocaleDateString("fr-FR")}</td><td>${esc(label(e,a.only??null))}</td><td>${a.mode==="train"?"Entraînement":"Épreuve"}</td>
      <td><b style="color:${a.on20>=10?"var(--ok)":"var(--ko)"}">${a.on20.toFixed(2)}</b>${a.pending?` <span class="pill warn">${a.pending} à évaluer</span>`:""}</td><td>${mmss(a.durationSec)}</td>
      <td style="white-space:nowrap"><button class="btn sm" data-see="${a.id}">Correction</button> <button class="btn sm" data-rev="${a.id}">🔁 Réviser${a.reviewedAt?" ✓":""}</button> <button class="btn ghost sm" data-del="${a.id}" title="Supprimer">✕</button></td></tr>`});
  h+=`</tbody></table></div><p style="margin:16px 0 40px"><button class="btn sm" id="exp">Exporter mes résultats (JSON)</button> <button class="btn ghost sm" id="wipe">Effacer tout l'historique</button></p>`;
  $app.innerHTML=h;
  $app.querySelectorAll("[data-see]").forEach(b=>b.onclick=()=>{resFilter="all";results(b.dataset.see)});
  $app.querySelectorAll("[data-rev]").forEach(b=>b.onclick=()=>revision(b.dataset.rev));
  $app.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{if(confirm("Supprimer cette copie ?")){attempts=attempts.filter(a=>a.id!==b.dataset.del);save(LS_ATT,attempts);history()}});
  document.getElementById("wipe").onclick=()=>{if(confirm("Effacer tout l'historique ? Cette action est définitive.")){attempts=[];save(LS_ATT,attempts);history()}};
  document.getElementById("exp").onclick=()=>{const b=new Blob([JSON.stringify(attempts,null,1)],{type:"application/json"});const u=URL.createObjectURL(b);const x=document.createElement("a");x.href=u;x.download="resultats-annales-expertise.json";x.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
}
function chart(){
  const pts=attempts.map(a=>({v:a.on20,e:byId(a.examId),o:a.only??null})).filter(p=>p.e);
  const W=900,H=160,P=24,n=pts.length; if(!n) return "";
  const x=i=>n===1?W/2:P+i*(W-2*P)/(n-1), y=v=>H-P-(v/20)*(H-2*P);
  let s=`<svg class="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label="Évolution des notes">`;
  [0,10,20].forEach(v=>{s+=`<line x1="${P}" x2="${W-P}" y1="${y(v)}" y2="${y(v)}" stroke="var(--line)" ${v===10?'stroke-dasharray="4 4"':""}/><text x="2" y="${y(v)+4}" font-size="11" fill="var(--muted)">${v}</text>`});
  s+=`<polyline fill="none" stroke="var(--accent)" stroke-width="2" points="${pts.map((p,i)=>x(i)+","+y(p.v)).join(" ")}"/>`;
  pts.forEach((p,i)=>{s+=`<circle cx="${x(i)}" cy="${y(p.v)}" r="4" fill="${subj(p.e.subject).color}"><title>${esc(label(p.e,p.o))} : ${p.v.toFixed(1)}/20</title></circle>`});
  return s+`</svg>`;
}

/* ---------- visionneuse des pages originales ---------- */
function showPages(from,to,title){
  let cur=from;
  const draw=()=>{
    const hosted=location.protocol==="https:"&&window.PAGE_ASSETS&&window.PAGE_ASSETS[cur];
    const src=hosted||`pages/${String(cur).padStart(3,"0")}.jpg`;
    $modal.innerHTML=`<div class="modal"><div class="mbar"><b>${esc(title)}</b><span class="mini">page ${cur} (${from}–${to})</span><div class="spacer"></div>
      <button class="btn sm" id="pv" ${cur<=from?"disabled":""}>◀</button><button class="btn sm" id="nx" ${cur>=to?"disabled":""}>▶</button>
      <button class="btn sm" id="zm">Zoom</button><button class="btn primary sm" id="cl">Fermer</button></div>
      <div class="mbody"><img id="pimg" src="${esc(src)}" alt="Page ${cur} du recueil"></div></div>`;
    document.getElementById("pv").onclick=()=>{cur--;draw()}; document.getElementById("nx").onclick=()=>{cur++;draw()};
    document.getElementById("zm").onclick=()=>document.getElementById("pimg").classList.toggle("zoom");
    document.getElementById("cl").onclick=close;
  };
  const close=()=>{$modal.innerHTML="";document.removeEventListener("keydown",key)};
  const key=ev=>{if(ev.key==="Escape")close(); if(ev.key==="ArrowRight"&&cur<to){cur++;draw()} if(ev.key==="ArrowLeft"&&cur>from){cur--;draw()}};
  document.addEventListener("keydown",key); draw();
}

window.addEventListener("beforeunload",()=>{if(running) persist()});
window.__md=md;
home();
})();
