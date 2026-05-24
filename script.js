const DEFAULT = {
  siteName:'OverState',
  logoText:'OS',
  bannerUrl:'OverState.png',
  fondUrl:'',
  c1:'#15bfff',
  c2:'#147eea',
  adminHash:'', // créé au premier démarrage avec overstate2026
  userHash:'', // mot de passe utilisateur créé au premier démarrage avec overstateuser2026
  tabs:[
    ['detention','🚔 Mise en détention'],
    ['casiers','📁 Casiers'],
    ['warning','⚠️ Avertissement / VH volé'],
    ['saisie','📦 Saisie'],
    ['dispatch','📡 Dispatch'],
    ['bracelets','🔗 Bracelets'],
    ['stats','📊 Statistiques'],
    ['admin','⚙️ Accès Admin']
  ],
  infractions:[
    {category:"Infraction",name:"Amende excès de vitesse",time:0,fine:100000},
    {category:"Infraction",name:"Amende feu rouge",time:0,fine:75000},
    {category:"Infraction",name:"Stationnement interdit",time:0,fine:50000},
    {category:"Infraction",name:"Conduite sans permis",time:0,fine:200000},
    {category:"Infraction",name:"Conduite en état d'ivresse",time:0,fine:300000},
    {category:"Infraction",name:"Refus d'obtempérer",time:0,fine:250000},
    {category:"Infraction",name:"Course-poursuite",time:0,fine:400000},
    {category:"Infraction",name:"Conduite dangereuse",time:0,fine:180000},
    {category:"Infraction",name:"Non-port de la ceinture",time:0,fine:25000},
    {category:"Infraction",name:"Téléphone au volant",time:0,fine:80000},
    {category:"Infraction",name:"Franchissement ligne continue",time:0,fine:90000},
    {category:"Infraction",name:"Non-respect priorité",time:0,fine:120000},
    {category:"Infraction",name:"Circulation véhicule non homologué",time:0,fine:150000},
    {category:"Infraction",name:"Défaut d'assurance",time:0,fine:220000},
    {category:"Infraction",name:"Véhicule non conforme",time:0,fine:110000},
    {category:"Délit mineur",name:"Vol mineur",time:0,fine:350000},
    {category:"Délit mineur",name:"Trouble à l'ordre public",time:0,fine:280000},
    {category:"Délit mineur",name:"Dégradation de biens",time:0,fine:200000},
    {category:"Délit mineur",name:"Tapage nocturne",time:0,fine:80000},
    {category:"Délit mineur",name:"Outrage à agent",time:0,fine:400000},
    {category:"Délit mineur",name:"Rébellion mineure",time:0,fine:320000},
    {category:"Délit mineur",name:"Port d'arme sans permis",time:0,fine:500000},
    {category:"Délit mineur",name:"Menaces",time:0,fine:250000},
    {category:"Délit mineur",name:"Harcèlement",time:0,fine:300000},
    {category:"Délit mineur",name:"Falsification de documents",time:0,fine:450000},
    {category:"Délit mineur",name:"Usage de faux papiers",time:0,fine:380000},
    {category:"Délit mineur",name:"Recel mineur",time:0,fine:220000},
    {category:"Délit mineur",name:"Escroquerie mineure",time:0,fine:350000},
    {category:"Délit mineur",name:"Fraude",time:0,fine:280000},
    {category:"Délit mineur",name:"Non-respect couvre-feu",time:0,fine:150000},
    {category:"Délit majeur",name:"Agression",time:0,fine:800000},
    {category:"Délit majeur",name:"Détention de drogue",time:0,fine:1200000},
    {category:"Délit majeur",name:"Trafic de drogue mineur",time:0,fine:1500000},
    {category:"Délit majeur",name:"Coups et blessures",time:0,fine:700000},
    {category:"Délit majeur",name:"Vol à main armée",time:0,fine:1800000},
    {category:"Délit majeur",name:"Chantage",time:0,fine:900000},
    {category:"Délit majeur",name:"Extorsion",time:0,fine:1100000},
    {category:"Délit majeur",name:"Séquestration",time:0,fine:2000000},
    {category:"Délit majeur",name:"Prise d'otage mineure",time:0,fine:2200000},
    {category:"Délit majeur",name:"Corruption d'agent",time:0,fine:1300000},
    {category:"Délit majeur",name:"Blanchiment d'argent",time:0,fine:1600000},
    {category:"Délit majeur",name:"Trafic d'armes mineur",time:0,fine:1400000},
    {category:"Délit majeur",name:"Association de malfaiteurs",time:0,fine:1000000},
    {category:"Délit majeur",name:"Rébellion armée",time:0,fine:1700000},
    {category:"Délit majeur",name:"Sabotage",time:0,fine:1200000},
    {category:"Crime",name:"Braquage",time:0,fine:3000000},
    {category:"Crime",name:"Tentative de meurtre",time:0,fine:4500000},
    {category:"Crime",name:"Meurtre",time:0,fine:5000000},
    {category:"Crime",name:"Braquage de banque",time:0,fine:3500000},
    {category:"Crime",name:"Enlèvement",time:0,fine:4000000},
    {category:"Crime",name:"Terrorisme",time:0,fine:5000000},
    {category:"Crime",name:"Trafic de drogue majeur",time:0,fine:3800000},
    {category:"Crime",name:"Trafic d'armes majeur",time:0,fine:4200000},
    {category:"Crime",name:"Corruption majeure",time:0,fine:2800000},
    {category:"Crime",name:"Organisation criminelle",time:0,fine:3200000},
    {category:"Crime",name:"Assassinat",time:0,fine:5000000},
    {category:"Crime",name:"Prise d'otage majeure",time:0,fine:4300000},
    {category:"Crime",name:"Braquage de convoi",time:0,fine:3600000},
    {category:"Crime",name:"Attaque contre l'État",time:0,fine:4800000},
    {category:"Crime",name:"Haute trahison",time:0,fine:5000000},
    {category:"Crime",name:"Génocide",time:0,fine:5000000},
    {category:"Crime",name:"Crimes contre l'humanité",time:0,fine:5000000}
  ],
  casiers:[], warnings:[], saisies:[], dispatch:[], bracelets:[], activity:[]
};

let data = JSON.parse(localStorage.getItem('mdtDataV2') || 'null') || structuredClone(DEFAULT);
let db = null;
let remoteReady = false;
let syncingRemote = false;
let mdtDoc = null;
let auth = null;
let remoteRef = null;
let authReady = false;
let current = localStorage.getItem('mdtPage') || 'detention';
let admin = localStorage.getItem('mdtAccessV2') === 'admin' || localStorage.getItem('mdtAdminV2') === '1';
let authenticated = localStorage.getItem('mdtAccessV2') === 'user' || admin;
let added = [];
let activeDetentionCat = localStorage.getItem('mdtDetentionCat') || 'Infraction';
let dark = localStorage.getItem('mdtTheme') !== 'light';

function normalizeInfractions(){
  const cats = ["Infraction", "Délit mineur", "Délit majeur", "Crime"];
  data.infractions = (data.infractions || []).map(x=>({category: cats.includes(x.category) ? x.category : 'Infraction', name: x.name || 'Sans nom', time:+x.time||0, fine:+x.fine||0}));
  const defaults = DEFAULT.infractions || [];
  defaults.forEach(d=>{
    if(!data.infractions.some(x=>x.name === d.name)) data.infractions.push({...d});
  });
  sortInfractions();
}
function sortInfractions(){
  const order = Object.fromEntries(infractionCats().map((c,i)=>[c,i]));
  data.infractions.sort((a,b)=>(order[a.category]??99)-(order[b.category]??99) || (a.name||'').localeCompare(b.name||'', 'fr'));
}
normalizeInfractions();

async function sha256(text){
  const enc = new TextEncoder().encode(text);
  const buf = await crypto.subtle.digest('SHA-256', enc);
  return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
}

async function initPassword(){
  let changed = false;
  if(!data.adminHash){
    data.adminHash = await sha256('overstate2026');
    changed = true;
  }
  if(!data.userHash){
    data.userHash = await sha256('overstateuser2026');
    changed = true;
  }
  if(changed) save(false);
}

function objectToArray(obj){
  if(Array.isArray(obj)) return obj;
  if(!obj || typeof obj !== 'object') return [];
  return Object.values(obj).sort((a,b)=>(b.id||0)-(a.id||0));
}

function splitDataForFirebase(){
  return {
    settings:{
      siteName:data.siteName, logoText:data.logoText, bannerUrl:data.bannerUrl, fondUrl:data.fondUrl,
      c1:data.c1, c2:data.c2, adminHash:data.adminHash, userHash:data.userHash
    },
    tabs:data.tabs || [],
    infractions:data.infractions || [],
    casiers:Object.fromEntries((data.casiers||[]).map(x=>[String(x.id||Date.now()+Math.random()), x])),
    warnings:Object.fromEntries((data.warnings||[]).map(x=>[String(x.id||Date.now()+Math.random()), x])),
    saisies:Object.fromEntries((data.saisies||[]).map(x=>[String(x.id||Date.now()+Math.random()), x])),
    dispatch:Object.fromEntries((data.dispatch||[]).map(x=>[String(x.id||Date.now()+Math.random()), x])),
    bracelets:Object.fromEntries((data.bracelets||[]).map(x=>[String(x.id||Date.now()+Math.random()), x])),
    activity:Object.fromEntries((data.activity||[]).map(x=>[String(x.id||Date.now()+Math.random()), x])),
    updatedAt:new Date().toISOString()
  };
}

function mergeFirebaseData(root){
  root = root || {};
  const settings = root.settings || {};
  data = {
    ...structuredClone(DEFAULT),
    ...settings,
    tabs: root.tabs || settings.tabs || data.tabs || DEFAULT.tabs,
    infractions: root.infractions || settings.infractions || data.infractions || DEFAULT.infractions,
    casiers: objectToArray(root.casiers),
    warnings: objectToArray(root.warnings),
    saisies: objectToArray(root.saisies),
    dispatch: objectToArray(root.dispatch),
    bracelets: objectToArray(root.bracelets),
    activity: objectToArray(root.activity)
  };
  normalizeInfractions();
  localStorage.setItem('mdtDataV2', JSON.stringify(data));
}

async function isCurrentUserAdmin(){
  if(!auth || !auth.currentUser || !db) return false;
  const snap = await db.ref('overstate/admins/' + auth.currentUser.uid).once('value');
  return snap.val() === true;
}

async function startRemoteListener(){
  if(!db || !auth || !auth.currentUser) return false;
  remoteRef = db.ref('overstate');
  mdtDoc = remoteRef;
  admin = await isCurrentUserAdmin();
  authenticated = true;
  localStorage.setItem('mdtAccessV2', admin ? 'admin' : 'user');
  if(admin) localStorage.setItem('mdtAdminV2','1'); else localStorage.removeItem('mdtAdminV2');

  const snap = await remoteRef.once('value');
  if(!snap.exists() && admin){
    await remoteRef.set(splitDataForFirebase());
  }

  remoteReady = true;
  remoteRef.on('value', snap=>{
    const root = snap.val();
    if(!root) return;
    syncingRemote = true;
    mergeFirebaseData(root);
    render();
    syncingRemote = false;
  });
  return true;
}

async function save(renderNow=true){
  localStorage.setItem('mdtDataV2', JSON.stringify(data));
  if(remoteReady && db && auth && auth.currentUser && !syncingRemote){
    try{
      if(admin){
        await db.ref('overstate').set(splitDataForFirebase());
      }
    }catch(e){
      console.error(e);
      toast('Erreur sauvegarde Firebase');
    }
  }
  if(renderNow) render();
}

async function initFirebaseSync(){
  const cfg = window.firebaseConfig || {};
  if(!window.firebase || !cfg.apiKey || cfg.apiKey.includes('REMPLACE')){
    console.warn('Firebase non configuré : mode local uniquement');
    return false;
  }
  try{
    if(!firebase.apps.length) firebase.initializeApp(cfg);
    db = firebase.database();
    auth = firebase.auth();
    auth.onAuthStateChanged(async user=>{
      if(user){
        await startRemoteListener();
      }else{
        remoteReady = false;
        authenticated = false;
        admin = false;
        localStorage.removeItem('mdtAccessV2');
        localStorage.removeItem('mdtAdminV2');
        render();
      }
    });
    authReady = true;
    return true;
  }catch(e){
    console.error(e);
    alert('Firebase mal configuré. Vérifie firebase-config.js');
    return false;
  }
}

function quickSave(){
  save(false);
  toast('Sauvegarde effectuée');
}

function apply(){
  document.documentElement.style.setProperty('--c1', data.c1);
  document.documentElement.style.setProperty('--c2', data.c2);
  document.documentElement.style.setProperty('--fond', data.fondUrl ? `url(${data.fondUrl})` : 'none');
  document.getElementById('siteName').textContent = data.siteName;
  document.getElementById('logo').textContent = data.logoText;
  document.body.className = (authenticated ? '' : 'lockedOut ') + (admin?'unlocked ':'locked ') + (dark?'dark':'light');
  if(document.getElementById('loginGate')) document.getElementById('loginGate').classList.toggle('hidden', authenticated);
  adminState.textContent = admin ? 'Administrateur' : 'Utilisateur';
  adminText.textContent = (admin ? 'Accès total activé' : 'Accès MDT autorisé') + (remoteReady ? ' • partagé en direct' : ' • local');
  logoutBtn.classList.toggle('hidden', !authenticated);
  renderNav();
}

function renderNav(){
  nav.innerHTML = '';
  data.tabs.forEach(t=>{
    const b = document.createElement('button');
    b.className = 'navbtn ' + (current===t[0]?'active':'');
    b.textContent = t[1];
    b.onclick = ()=>{ current=t[0]; localStorage.setItem('mdtPage', current); render(); };
    nav.appendChild(b);
  });
}

function renderStats(){
  const fineTotal = data.casiers.reduce((a,c)=>a+(+c.totalFine||0),0);
  const timeTotal = data.casiers.reduce((a,c)=>a+(+c.totalTime||0),0);
  stats.innerHTML = `
    <div class="stat"><span>📁</span><b>${data.casiers.length}</b><p>Casiers</p></div>
    <div class="stat"><span>🚔</span><b>${Math.floor(timeTotal/60)}h${String(timeTotal%60).padStart(2,'0')}</b><p>Détention totale</p></div>
    <div class="stat"><span>💵</span><b>${fineTotal.toLocaleString('fr-FR')}$</b><p>Amendes</p></div>
    <div class="stat"><span>📖</span><b>${data.infractions.length}</b><p>Faits triés</p></div>`;
}

function render(){
  apply();
  if(!authenticated){ page.innerHTML=''; stats.innerHTML=''; return; }
  renderStats();
  if(current==='admin') return adminPage();
  if(current==='detention') return detentionPage();
  if(current==='casiers') return casiersPage();
  if(current==='warning') return genericPage('Avertissement / VH volé','warnings');
  if(current==='saisie') return genericPage('Saisie','saisies');
  if(current==='dispatch') return genericPage('Dispatch','dispatch');
  if(current==='bracelets') return braceletsPage();
  if(current==='stats') return statsPage();
  page.innerHTML = '<div class="card"><h2>Page</h2></div>';
}


function infractionCats(){ return ["Infraction", "Délit mineur", "Délit majeur", "Crime"]; }
function catLabel(cat){ return cat; }

function groupedInfractionOptions(){
  return infractionCats().map(cat=>{
    const opts = data.infractions.map((x,i)=>({x,i})).filter(o=>o.x.category===cat).map(({x,i})=>`<option value="${i}">${x.name} — ${x.time}min — ${x.fine.toLocaleString('fr-FR')}$</option>`).join('');
    return opts ? `<optgroup label="${catLabel(cat)}">${opts}</optgroup>` : '';
  }).join('');
}

function groupedInfractionsHtml(){
  return infractionCats().map(cat=>{
    const rows = data.infractions.filter(x=>x.category===cat).map(x=>`<div class="mini"><b><span class="catBadge">${cat}</span> ${escapeHtml(x.name)}</b><span>${x.time} min • ${x.fine.toLocaleString('fr-FR')}$</span></div>`).join('');
    return rows ? `<h3 class="catTitle">${catLabel(cat)}</h3>${rows}` : '';
  }).join('');
}

function setDetentionCat(cat){
  activeDetentionCat = cat;
  localStorage.setItem('mdtDetentionCat', cat);
  renderInfractionPicker();
}

function renderInfractionPicker(){
  const box = document.getElementById('infractionPicker');
  if(!box) return;
  const q = (document.getElementById('infSearch')?.value || '').toLowerCase();
  const list = data.infractions
    .map((x,i)=>({x,i}))
    .filter(({x})=>x.category === activeDetentionCat)
    .filter(({x})=>!q || x.name.toLowerCase().includes(q));
  const tabs = infractionCats().map(cat=>`<button class="catTab ${activeDetentionCat===cat?'active':''}" onclick="setDetentionCat('${cat}')">${catLabel(cat)}</button>`).join('');
  const rows = list.map(({x,i})=>`
    <div class="infPickItem">
      <div><b>${escapeHtml(x.name)}</b><span>${x.time} min • ${x.fine.toLocaleString('fr-FR')}$</span></div>
      <button class="small green" onclick="addInfByIndex(${i})">Ajouter</button>
    </div>`).join('') || `<div class="empty">Aucun résultat dans ${catLabel(activeDetentionCat)}.</div>`;
  box.innerHTML = `
    <div class="catTabs">${tabs}</div>
    <label>Recherche rapide dans ${catLabel(activeDetentionCat)}</label>
    <input id="infSearch" class="infSearch" placeholder="Tape le nom de l'infraction..." value="${escapeHtml(q)}" oninput="renderInfractionPicker()">
    <div class="infPickList">${rows}</div>`;
  const search = document.getElementById('infSearch');
  if(search) { const pos = search.value.length; search.focus(); search.setSelectionRange(pos,pos); }
}

function addInfByIndex(i){
  const x = data.infractions[i];
  const q = +document.getElementById('qty')?.value || 1;
  for(let n=0;n<q;n++) added.push({...x});
  updateTotals();
}


function formatMoney(n){ return (+n||0).toLocaleString('fr-FR').replace(/\u202f/g, ' ') + '$'; }
function formatTimeMin(minutes){ minutes=+minutes||0; return `${String(Math.floor(minutes/60)).padStart(2,'0')}h${String(minutes%60).padStart(2,'0')}`; }
function categoryIcon(cat){
  if(cat === 'Crime') return '🚨';
  if(cat === 'Délit majeur') return '🔴';
  if(cat === 'Délit mineur') return '⚠️';
  return '📄';
}
function formatFaits(list){
  list = list || [];
  if(!list.length) return '<span class="muted">Aucun fait ajouté.</span>';
  return list.map(x=>`${escapeHtml(x.name)} (${escapeHtml(x.category||'Infraction')})`).join(', ');
}
function formatFaitsText(list){
  list = list || [];
  return list.map(x=>`${x.name} (${x.category||'Infraction'})`).join(', ');
}
function line(){ return '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬'; }
function nextUniqueId(){
  const ids = (data.casiers||[]).map(c=>parseInt(c.uniqueId,10)).filter(n=>!isNaN(n));
  return (ids.length ? Math.max(...ids)+1 : 1);
}

function detentionPage(){
  page.innerHTML = `
  <div class="layout">
    <div>
      <div class="card">
        <h2>Créer une mise en détention</h2>
        <div class="formGrid">
          <div>
            <h3>Informations générales</h3>
            ${input('nom','Nom et prénom','Nom du suspect')}
            ${input('saisis','Objets saisis','Liste des objets saisis')}
            ${input('rendre','Objets à rendre','Liste des objets à rendre')}
            ${input('mail','Mail','mail@example.com')}
            ${input('discord','ID Discord','ID Discord')}
            ${input('uniqueId','ID unique','Ex: 5', 'number')}
            ${input('agent','Agent','Nom de l’agent')}
          </div>
          <div>
            <h3>Détails de l’infraction</h3>
            ${input('qty','Quantité','1','number')}
            <div id="infractionPicker" class="infractionPicker"></div>
            <div id="selectedFactsPreview" class="selectedFactsPreview"></div>
            <div class="row">
              <button class="secondary" onclick="added=[];updateTotals()">Reset</button>
            </div>
            <div class="triple">
              <div><label>Avocat</label><select id="avocat"><option>Non</option><option>Oui</option></select></div>
              <div><label>Comparution</label><select id="comp"><option>Non</option><option>Oui</option></select></div>
              <div><label>Amende</label><select id="amende"><option>Impayée</option><option>Payée</option></select></div>
            </div>
            <div class="totals">
              <div>⏱️ <p>Temps total</p><b id="totT">00h00</b></div>
              <div>💵 <p>Amende totale</p><b id="totF">0$</b></div>
            </div>
            <button class="green full" onclick="createCasier()">✓ Créer le casier</button>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>Infractions ajoutées</h2>
        <div id="added" class="list"></div>
      </div>
    </div>
    <aside class="rightPanel">
      <div class="card">
        <h2>Infractions disponibles <button class="small adminOnly" onclick="current='admin';render()">+ Ajouter</button></h2>
        <div>${groupedInfractionsHtml()}</div>
      </div>
      <div class="card">
        <h2>Actions rapides</h2>
        <div class="quick">
          <button onclick="current='casiers';render()">📁 Voir casiers</button>
          <button onclick="current='dispatch';render()">📡 Dispatch</button>
          <button onclick="current='stats';render()">📊 Statistiques</button>
          <button onclick="current='admin';render()">⚙️ Admin</button>
        </div>
      </div>
    </aside>
  </div>`;
  renderInfractionPicker();
  updateTotals();
}

function input(id,label,placeholder,type='text',value=''){
  return `<label>${label}</label><input id="${id}" type="${type}" placeholder="${placeholder}" value="${escapeHtml(value)}">`;
}

function addInf(){
  const select = document.getElementById('inf');
  if(!select) return;
  const x = data.infractions[+select.value];
  const q = +qty.value || 1;
  for(let i=0;i<q;i++) added.push({...x});
  updateTotals();
}

function updateTotals(){
  const t = added.reduce((a,b)=>a+(+b.time||0),0);
  const f = added.reduce((a,b)=>a+(+b.fine||0),0);
  if(totT) totT.textContent = `${String(Math.floor(t/60)).padStart(2,'0')}h${String(t%60).padStart(2,'0')}`;
  if(totF) totF.textContent = `${f.toLocaleString('fr-FR')}$`;

  const html = added.length ? added.map((x,i)=>`
    <div class="item selectedFactItem">
      <div><b>Fait numéro ${i+1} :</b> ${escapeHtml(x.name)} <span class="catBadge">${categoryIcon(x.category)} ${escapeHtml(x.category||'Infraction')}</span></div>
      <span>${x.time} min • ${x.fine.toLocaleString('fr-FR')}$</span>
      <button class="danger small" onclick="added.splice(${i},1);updateTotals()">✕</button>
    </div>`).join('') : '<div class="empty">ℹ️ Aucune infraction ajoutée.</div>';

  if(document.getElementById('added')) added.innerHTML = html;
  if(document.getElementById('selectedFactsPreview')){
    selectedFactsPreview.innerHTML = added.length ? `<h3>Faits sélectionnés</h3>${html}` : '<div class="empty smallEmpty">ℹ️ Les faits choisis apparaîtront ici.</div>';
  }
}

async function createCasier(){
  if(!nom.value.trim()) return alert('Ajoute le nom du suspect.');
  const t = added.reduce((a,b)=>a+(+b.time||0),0), f=added.reduce((a,b)=>a+(+b.fine||0),0);
  const id = Date.now();
  const casier = {id, createdBy: auth?.currentUser?.uid || 'local', uniqueId: uniqueId.value || nextUniqueId(), date:new Date().toLocaleString('fr-FR'), nom:nom.value, saisis:saisis.value, rendre:rendre.value, mail:mail.value, discord:discord.value, agent:agent.value, avocat:avocat.value, comp:comp.value, amende:amende.value, infractions:added, totalTime:t, totalFine:f};
  data.casiers.unshift(casier);
  addActivity('Nouveau casier créé', nom.value);
  try{
    if(remoteReady && db && auth?.currentUser){
      await db.ref('overstate/casiers/' + id).set(casier);
      await db.ref('overstate/activity/' + id).set({id,title:'Nouveau casier créé',text:nom.value,date:new Date().toLocaleString('fr-FR'),createdBy:auth.currentUser.uid});
    }else{
      await save(false);
    }
  }catch(e){
    console.error(e);
    alert('Erreur Firebase : casier non envoyé. Vérifie les règles et la connexion.');
  }
  added=[]; current='casiers'; render();
}

function casiersPage(){
  const cards = data.casiers.map((c,i)=>casierHtml(c,i)).join('');
  page.innerHTML = `<div class="card"><h2>Casiers judiciaires</h2><div class="toolbar"><input id="filterC" placeholder="Filtrer par nom, agent, fait..." oninput="filterItems('casierItem',this.value)"><button onclick="exportCasiers()">Exporter</button></div>${cards || '<div class="empty">Aucun casier.</div>'}</div>`;
}

function casierHtml(c,i){
  const unique = c.uniqueId || c.id || '';
  return `<div class="item casierItem renduCasier detentionRp" data-search="${escapeHtml(JSON.stringify(c)).toLowerCase()}">
    <div class="rpLine">${line()}</div>
    <p><b>🗓️ Date:</b> ${escapeHtml(c.date||'')}</p>
    <p><b>👤 Nom du suspect :</b> ${escapeHtml(c.nom||'Sans nom')}</p>
    <p><b>⏳ Temps de la détention :</b> ${formatTimeMin(c.totalTime)}</p>
    <p><b>📖 Faits :</b> ${formatFaits(c.infractions)}</p>
    <p><b>💵 Amende :</b> ${formatMoney(c.totalFine)} &nbsp; (${escapeHtml((c.amende||'impayée').toLowerCase())})</p>
    <p><b>💼 Biens personnels saisis :</b> ${escapeHtml(c.saisis||'')}</p>
    <p><b>👨‍🎓 Avocat :</b> ${escapeHtml((c.avocat||'non').toLowerCase())}</p>
    <p><b>⚖️ Comparution :</b> ${escapeHtml((c.comp||'non').toLowerCase())}</p>
    <p><b>✉️ Mail de l'individu :</b> ${escapeHtml(c.mail||'')}</p>
    <p><b>🆔 ID Discord :</b> ${escapeHtml(c.discord||'')}</p>
    <p><b>🔢 ID unique :</b> ${escapeHtml(unique)}</p>
    <p><b>👮‍♂️ Cloturé par :</b> ${escapeHtml(c.agent||'')}</p>
    <div class="rpLine">${line()}</div>
    <div class="row">
      <button onclick="copyCasier(${i})">Copier modèle</button>
      <button class="adminOnly" onclick="editCasier(${i})">Modifier</button>
      <button class="danger adminOnly" onclick="deleteItem('casiers',${i})">Supprimer</button>
    </div>
  </div>`;
}

function editCasier(i){
  const c = data.casiers[i];
  openModal(`<h2>Modifier le casier</h2>
    ${input('mNom','Nom','', 'text', c.nom)}
    ${input('mSaisis','Objets saisis','', 'text', c.saisis)}
    ${input('mRendre','Objets à rendre','', 'text', c.rendre)}
    ${input('mAgent','Agent','', 'text', c.agent)}
    ${input('mUnique','ID unique','', 'number', c.uniqueId||'')}
    ${input('mFine','Amende totale','', 'number', c.totalFine||0)}
    ${input('mTime','Temps total minutes','', 'number', c.totalTime||0)}
    <button class="green full" onclick="saveCasierEdit(${i})">Sauvegarder</button>`);
}

function saveCasierEdit(i){
  Object.assign(data.casiers[i], {nom:mNom.value, saisis:mSaisis.value, rendre:mRendre.value, agent:mAgent.value, uniqueId:mUnique.value, totalFine:+mFine.value||0, totalTime:+mTime.value||0});
  addActivity('Casier modifié', data.casiers[i].nom);
  closeModal(); save();
}

function copyCasier(i){
  const c=data.casiers[i];
  const unique = c.uniqueId || c.id || '';
  const txt=`${line()}
🗓️ Date: ${c.date}
👤 Nom du suspect : ${c.nom}
⏳ Temps de la détention : ${formatTimeMin(c.totalTime)}
📖 Faits : ${formatFaitsText(c.infractions)}
💵 Amende : ${formatMoney(c.totalFine)}  (${(c.amende||'impayée').toLowerCase()})
💼 Biens personnels saisis : ${c.saisis}
👨‍🎓 Avocat : ${(c.avocat||'non').toLowerCase()}
⚖️ Comparution : ${(c.comp||'non').toLowerCase()}
✉️ Mail de l'individu : ${c.mail}
🆔 ID Discord : ${c.discord}
🔢 ID unique : ${unique}
👮‍♂️ Cloturé par : ${c.agent}
${line()}`;
  navigator.clipboard.writeText(txt); toast('Modèle copié');
}

function genericPage(title,key){
  page.innerHTML = `<div class="card"><h2>${title}</h2>
    <div class="formGrid">
      <div>${input('gTitle','Titre','Titre')}<label>Informations</label><textarea id="gText" placeholder="Informations..."></textarea><button class="green" onclick="addGeneric('${key}')">Ajouter</button></div>
      <div><h3>Liste</h3><div>${data[key].map((x,i)=>genericHtml(key,x,i)).join('') || '<div class="empty">Aucune entrée.</div>'}</div></div>
    </div></div>`;
}

function genericHtml(key,x,i){
  return `<div class="item"><div class="itemTop"><h3>${escapeHtml(x.title||'Sans titre')}</h3><span>${x.date||''}</span></div><p>${escapeHtml(x.text||'')}</p>
  <div class="row"><button class="adminOnly" onclick="editGeneric('${key}',${i})">Modifier</button><button class="danger adminOnly" onclick="deleteItem('${key}',${i})">Supprimer</button></div></div>`;
}
async function addGeneric(key){ const id=Date.now(); const item={id,createdBy:auth?.currentUser?.uid||'local',date:new Date().toLocaleString('fr-FR'), title:gTitle.value, text:gText.value}; data[key].unshift(item); addActivity('Ajout '+key, gTitle.value); try{ if(remoteReady && db && auth?.currentUser){ await db.ref('overstate/'+key+'/'+id).set(item); } else await save(false); }catch(e){ console.error(e); alert('Erreur Firebase'); } render(); }
function editGeneric(key,i){
  const x=data[key][i];
  openModal(`<h2>Modifier</h2>${input('eTitle','Titre','', 'text', x.title)}<label>Infos</label><textarea id="eText">${escapeHtml(x.text||'')}</textarea><button class="green full" onclick="saveGenericEdit('${key}',${i})">Sauvegarder</button>`);
}
function saveGenericEdit(key,i){ data[key][i].title=eTitle.value; data[key][i].text=eText.value; closeModal(); save(); }

function braceletsPage(){
  page.innerHTML = `<div class="card"><h2>Bracelets électroniques</h2>
    <div class="formGrid"><div>${input('bNom','Nom','Nom du suspect')}${input('bLoc','Localisation','Quartier / GPS')}${input('bMotif','Motif','Motif')}<button class="green" onclick="addBracelet()">Ajouter bracelet</button></div>
    <div>${data.bracelets.map((b,i)=>`<div class="item"><h3>🔗 ${escapeHtml(b.nom)}</h3><p>📍 ${escapeHtml(b.loc)}<br>📖 ${escapeHtml(b.motif)}<br><small>${b.date}</small></p><button class="danger adminOnly" onclick="deleteItem('bracelets',${i})">Supprimer</button></div>`).join('') || '<div class="empty">Aucun bracelet.</div>'}</div></div></div>`;
}
async function addBracelet(){ const id=Date.now(); const item={id,createdBy:auth?.currentUser?.uid||'local',date:new Date().toLocaleString('fr-FR'),nom:bNom.value,loc:bLoc.value,motif:bMotif.value}; data.bracelets.unshift(item); addActivity('Bracelet ajouté', bNom.value); try{ if(remoteReady && db && auth?.currentUser){ await db.ref('overstate/bracelets/'+id).set(item); } else await save(false); }catch(e){ console.error(e); alert('Erreur Firebase'); } render(); }

function statsPage(){
  const acts = data.activity.slice(0,10).map(a=>`<div class="mini"><b>${escapeHtml(a.title)}</b><span>${escapeHtml(a.text)} • ${a.date}</span></div>`).join('');
  page.innerHTML = `<div class="card"><h2>Statistiques et activité récente</h2><div class="stats big">${stats.innerHTML}</div><h3>Activité récente</h3>${acts || '<div class="empty">Aucune activité.</div>'}</div>`;
}

async function adminPage(){
  if(!admin){
    page.innerHTML=`<div class="card login"><h2>Connexion Admin</h2><p>Entre ton mot de passe administrateur.</p><label>Mot de passe</label><div class="password"><input id="pass" type="password" placeholder="Mot de passe"><button onclick="togglePass('pass')">👁️</button></div><button class="green full" onclick="login()">Connexion</button><p class="note">Par défaut : overstate2026. Change-le après connexion.</p></div>`;
    return;
  }
  page.innerHTML = `<div class="card"><h2>Accès Admin Total</h2><p>✅ Connecté admin : tu peux tout modifier.</p>
    <div class="adminGrid">
      <div class="panel"><h3>🎨 Personnalisation générale</h3>
        ${input('aSite','Nom du site','', 'text', data.siteName)}
        ${input('aLogo','Texte logo','', 'text', data.logoText)}
        ${input('aBanner','URL bannière','https://...', 'text', data.bannerUrl)}
        ${input('aFond','URL fond','https://...', 'text', data.fondUrl)}
        ${input('aC1','Couleur principale','', 'color', data.c1)}
        ${input('aC2','Couleur secondaire','', 'color', data.c2)}
        <button class="green full" onclick="saveAdminSettings()">Sauvegarder l’apparence</button>
      </div>
      <div class="panel"><h3>📋 Gestion des onglets</h3>
        <div id="tabEditor">${data.tabs.map((t,i)=>tabRow(t,i)).join('')}</div>
        <button onclick="addTab()">+ Ajouter un onglet</button>
        <button class="green full" onclick="saveTabs()">Sauvegarder les onglets</button>
      </div>
      <div class="panel"><h3>⚖️ Ajouter / modifier les faits simplement</h3>
        <label>Catégorie</label><select id="dCat"><option>Infraction</option><option>Délit mineur</option><option>Délit majeur</option><option>Crime</option></select>
        ${input('dName','Nom du fait / délit','Ex: Tir sur agent')}
        <div class="double">${input('dTime','Temps minutes','15','number')}${input('dFine','Amende $','2500','number')}</div>
        <button class="green" onclick="addDelit()">Ajouter le fait</button>
        <div id="delits">${data.infractions.map((d,i)=>delitRow(d,i)).join('')}</div>
      </div>
      <div class="panel purple"><h3>🔐 Sécurité</h3>
        <label>Nouveau mot de passe</label><div class="password"><input id="newPass" type="password" placeholder="Nouveau mot de passe"><button onclick="togglePass('newPass')">👁️</button></div>
        <label>Confirmer le mot de passe</label><div class="password"><input id="newPass2" type="password" placeholder="Confirmer"><button onclick="togglePass('newPass2')">👁️</button></div>
        <button class="purpleBtn full" onclick="changePassword()">Changer le mot de passe</button>
        <p class="note">Le mot de passe admin n’est jamais affiché dans l’admin.</p>
        <hr class="sep">
        <h3>🔑 Mot de passe utilisateurs MDT</h3>
        <p class="note">Ce mot de passe permet aux agents d’ouvrir la MDT sans pouvoir modifier/supprimer.</p>
        <label>Nouveau mot de passe utilisateur</label><div class="password"><input id="newUserPass" type="password" placeholder="Mot de passe agents"><button onclick="togglePass('newUserPass')">👁️</button></div>
        <label>Confirmer mot de passe utilisateur</label><div class="password"><input id="newUserPass2" type="password" placeholder="Confirmer"><button onclick="togglePass('newUserPass2')">👁️</button></div>
        <button class="purpleBtn full" onclick="changeUserPassword()">Changer le mot de passe utilisateur</button>
      </div>
      <div class="panel"><h3>🧰 Outils</h3>
        <button class="orange full" onclick="exportData()">Exporter les données</button>
        <label>Importer une sauvegarde JSON</label><input type="file" id="importFile" accept=".json" onchange="importData(event)">
        <button class="danger full" onclick="resetAll()">Réinitialiser toutes les données</button>
      </div>
    </div></div>`;
}

function tabRow(t,i){ return `<div class="tabRow"><input value="${escapeHtml(t[0])}" id="tid${i}"><input value="${escapeHtml(t[1])}" id="tlab${i}"><button class="danger small" onclick="data.tabs.splice(${i},1);save()">🗑</button></div>`; }
function addTab(){ data.tabs.push(['nouveau','⭐ Nouvel onglet']); save(); }
function saveTabs(){ data.tabs=data.tabs.map((t,i)=>[document.getElementById('tid'+i).value,document.getElementById('tlab'+i).value]); save(); }
function delitRow(d,i){ return `<div class="item"><label>Catégorie</label><select id="dc${i}"><option ${d.category==='Infraction'?'selected':''}>Infraction</option><option ${d.category==='Délit mineur'?'selected':''}>Délit mineur</option><option ${d.category==='Délit majeur'?'selected':''}>Délit majeur</option><option ${d.category==='Crime'?'selected':''}>Crime</option></select><label>Nom</label><input id="dn${i}" value="${escapeHtml(d.name)}"><div class="double"><div><label>Temps minutes</label><input id="dt${i}" type="number" value="${d.time}"></div><div><label>Amende $</label><input id="df${i}" type="number" value="${d.fine}"></div></div><div class="row"><button onclick="updateDelit(${i})">Modifier</button><button class="danger" onclick="data.infractions.splice(${i},1);save()">Supprimer</button></div></div>`; }
function addDelit(){ if(!dName.value.trim()) return alert('Nom du fait obligatoire'); data.infractions.push({category:dCat.value,name:dName.value,time:+dTime.value||0,fine:+dFine.value||0}); sortInfractions(); addActivity('Fait ajouté', dName.value); save(); }
function updateDelit(i){ data.infractions[i]={category:document.getElementById('dc'+i).value,name:document.getElementById('dn'+i).value,time:+document.getElementById('dt'+i).value||0,fine:+document.getElementById('df'+i).value||0}; sortInfractions(); addActivity('Fait modifié', data.infractions[i].name); save(); }
function saveAdminSettings(){ Object.assign(data,{siteName:aSite.value,logoText:aLogo.value,bannerUrl:aBanner.value,fondUrl:aFond.value,c1:aC1.value,c2:aC2.value}); save(); }

async function accessLogin(){
  const value = document.getElementById('accessPass').value;

  if(!authReady || !auth){
    alert('Firebase Auth non prêt.');
    return;
  }

  try{

    await auth.signInWithEmailAndPassword(
      'admin@overstate.com',
      value
    );

    admin = true;
    authenticated = true;

    localStorage.setItem('mdtAccessV2', 'admin');
    localStorage.setItem('mdtAdminV2', '1');

    await startRemoteListener();

    render();

  }catch(eAdmin){

    try{

      await auth.signInWithEmailAndPassword(
        'user@overstate.com',
        value
      );

      admin = false;
      authenticated = true;

      localStorage.setItem('mdtAccessV2', 'user');
      localStorage.removeItem('mdtAdminV2');

      await startRemoteListener();

      render();

    }catch(eUser){

      console.error(eAdmin);
      console.error(eUser);

      alert('Mot de passe incorrect.');
    }
  }
}

async function login(){
  const value = document.getElementById('pass')?.value || '';
  if(!authReady || !auth) return alert('Firebase Auth n’est pas prêt.');
  try{
    await auth.signInWithEmailAndPassword('admin@overstate.local', value);
    await startRemoteListener();
    render();
  }catch(e){
    console.error(e);
    alert('Mot de passe admin incorrect ou compte admin Firebase Auth absent.');
  }
}
function logout(){
  admin=false;
  authenticated=false;
  localStorage.removeItem('mdtAccessV2');
  localStorage.removeItem('mdtAdminV2');
  const passInput = document.getElementById('accessPass');
  if(passInput) passInput.value = '';
  render();
}
async function changePassword(){
  if(!newPass.value || newPass.value !== newPass2.value) return alert('Les mots de passe ne correspondent pas.');
  data.adminHash = await sha256(newPass.value);
  save(false); newPass.value=''; newPass2.value=''; toast('Mot de passe admin changé');
}
async function changeUserPassword(){
  if(!newUserPass.value || newUserPass.value !== newUserPass2.value) return alert('Les mots de passe utilisateurs ne correspondent pas.');
  data.userHash = await sha256(newUserPass.value);
  save(false); newUserPass.value=''; newUserPass2.value=''; toast('Mot de passe utilisateur changé');
}

function exportData(){ const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='sauvegarde-mdt-overstate-v2.json'; a.click(); }
function exportCasiers(){ const blob=new Blob([JSON.stringify(data.casiers,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='casiers-overstate.json'; a.click(); }
function importData(e){ const f=e.target.files[0]; if(!f) return; const r=new FileReader(); r.onload=()=>{ try{ data=JSON.parse(r.result); save(); }catch{ alert('Fichier invalide'); } }; r.readAsText(f); }
function resetAll(){ if(confirm('Tout supprimer ?')){ localStorage.removeItem('mdtDataV2'); location.reload(); } }

function deleteItem(key,i){ if(!admin) return; if(confirm('Supprimer ?')){ data[key].splice(i,1); save(); } }
function addActivity(title,text){ data.activity.unshift({title,text,date:new Date().toLocaleString('fr-FR')}); data.activity=data.activity.slice(0,30); }
function filterItems(cls,q){ q=q.toLowerCase(); document.querySelectorAll('.'+cls).forEach(el=>el.style.display=el.dataset.search.includes(q)?'block':'none'); }
function globalSearch(){ const q=searchBox.value.toLowerCase(); if(!q) return; current='casiers'; render(); setTimeout(()=>{ if(document.getElementById('filterC')){ filterC.value=q; filterItems('casierItem',q); }},50); }
function toggleTheme(){ dark=!dark; localStorage.setItem('mdtTheme', dark?'dark':'light'); render(); }
function toggleMenu(){ document.body.classList.toggle('menuOpen'); }
function togglePass(id){ const el=document.getElementById(id); el.type = el.type==='password'?'text':'password'; }
function openModal(html){ modalContent.innerHTML=html; modal.classList.remove('hidden'); }
function closeModal(){ modal.classList.add('hidden'); modalContent.innerHTML=''; }
function escapeHtml(s){ return String(s??'').replace(/[&<>"']/g, m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
function toast(msg){ const t=document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.appendChild(t); setTimeout(()=>t.remove(),2200); }

initPassword().then(async()=>{ await initFirebaseSync(); render(); });
