const LANGS=['en','fr','nl'];
let lang=localStorage.getItem('tradLang')||'en';
let quiz=[],current=0,score=0,answered=false,timer=null,timeLeft=20,mode='classic',teamA=0,teamB=0;
const TOTAL=30;
const app=document.getElementById('app');
function safeText(value){
  if(value===null||value===undefined) return '';
  if(typeof value==='string'||typeof value==='number') return String(value);
  if(typeof value==='object') return value[lang]||value.en||Object.values(value).find(v=>typeof v==='string')||'';
  return String(value);
}
function t(k){return safeText((TRANSLATIONS[lang]&&TRANSLATIONS[lang][k])||(TRANSLATIONS.en&&TRANSLATIONS.en[k])||k)}
function shuffle(a){const arr=[...(Array.isArray(a)?a:[])];for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr}
function normaliseQuestion(raw){
  return {
    id:safeText(raw.id), country:safeText(raw.country), region:safeText(raw.region), theme:safeText(raw.theme), difficulty:safeText(raw.difficulty),
    question:safeText(raw.question), answers:(Array.isArray(raw.answers)?raw.answers:[]).map(safeText).filter(Boolean), correctAnswer:safeText(raw.correctAnswer), explanation:safeText(raw.explanation)
  };
}
function pick(){
  const selected=[], countryCounts={};
  for(const raw of shuffle(QUESTIONS).map(normaliseQuestion)){
    if(!raw.question||raw.answers.length!==3||!raw.correctAnswer) continue;
    if((countryCounts[raw.country]||0)>=2) continue;
    selected.push(raw); countryCounts[raw.country]=(countryCounts[raw.country]||0)+1;
    if(selected.length===TOTAL) break;
  }
  if(selected.length<TOTAL){
    for(const raw of shuffle(QUESTIONS).map(normaliseQuestion)){
      if(selected.find(q=>q.id===raw.id)) continue;
      if(!raw.question||raw.answers.length!==3||!raw.correctAnswer) continue;
      selected.push(raw); if(selected.length===TOTAL) break;
    }
  }
  return shuffle(selected);
}
function langs(){return `<div class="langs">${LANGS.map(l=>`<button type="button" class="${l===lang?'active':''}" data-lang="${l}">${l.toUpperCase()}</button>`).join('')}</div>`}
function topBar(){return `<div class="top"><div class="logoBox"><img class="corLogo" src="assets/CoR_logo.png" alt="CoR logo"></div><h1 class="mainTitle">${t('title')}</h1>${langs()}</div>`}
function bindLang(){document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{lang=b.dataset.lang;localStorage.setItem('tradLang',lang);quiz.length?render():home()})}
function home(){
  clearInterval(timer); quiz=[]; current=0; score=0; answered=false;
  app.innerHTML=`<div class="shell"><div class="stage">${topBar()}<div class="content homeContent"><div><h2 class="headline">${t('title')}</h2><p class="subtitle">${t('questionCount')}</p><div class="modeRow"><button type="button" class="modeBtn ${mode==='classic'?'active':''}" data-mode="classic">${t('classic')}</button><button type="button" class="modeBtn ${mode==='teams'?'active':''}" data-mode="teams">${t('teams')}</button></div></div><div class="startPanel"><div class="duelPreview"><div class="duelBtn">A</div><div class="duelBtn">B</div></div><button id="start" class="primary blueBtn" type="button">${t('start')}</button></div></div><div class="footer"><span>CoR gamification prototype V1.3</span><span>120 questions / 27 EU Member States</span></div></div></div>`;
  bindLang();
  document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{mode=b.dataset.mode;document.querySelectorAll('[data-mode]').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
  document.getElementById('start').onclick=start;
}
function start(){quiz=pick();current=0;score=0;teamA=0;teamB=0;if(!quiz.length){showLoadError();return}render()}
function showLoadError(){app.innerHTML=`<div class="shell"><div class="stage">${topBar()}<div class="content"><h2 class="headline">Question database loading error</h2><p>No valid questions were found in questions-i18n.js.</p><button class="primary blueBtn" onclick="home()">Back</button></div></div></div>`;bindLang()}
function render(){
  clearInterval(timer); answered=false; const q=quiz[current];
  app.innerHTML=`<div class="shell"><div class="stage">${topBar()}<div class="content"><div class="status"><div class="pill">${t('question')} ${current+1} ${t('of')} ${quiz.length}</div><div class="pill">${t('score')}: <strong>${score}</strong></div><div class="pill timer" id="timerBox">20</div></div><div class="progress"><div style="width:${(current/quiz.length)*100}%"></div></div>${mode==='teams'?`<div class="teamScores"><button id="teamA" type="button">${t('teamA')}: ${teamA}</button><button id="teamB" type="button">${t('teamB')}: ${teamB}</button></div>`:''}<div class="meta"><span>${q.country}</span><span>${q.theme}</span><span>${q.difficulty}</span></div><h2 class="questionText">${q.question}</h2><div class="answers" id="answers"></div><div id="feedback" class="feedback hidden"></div><div class="nextArea"><button id="nextButton" class="primary hidden" type="button">${current+1===quiz.length?t('finish'):t('next')}</button></div></div><div class="footer"><span>${t('title')}</span><span>CoR visual style</span></div></div></div>`;
  bindLang();
  if(mode==='teams'){
    document.getElementById('teamA').onclick=()=>{teamA++;document.getElementById('teamA').textContent=`${t('teamA')}: ${teamA}`};
    document.getElementById('teamB').onclick=()=>{teamB++;document.getElementById('teamB').textContent=`${t('teamB')}: ${teamB}`};
  }
  const box=document.getElementById('answers');
  shuffle(q.answers).forEach(answer=>{const btn=document.createElement('button');btn.type='button';btn.className='answer';btn.textContent=safeText(answer);btn.onclick=()=>reveal(safeText(answer));box.appendChild(btn)});
  document.getElementById('nextButton').onclick=next;
  startTimer();
}
function startTimer(){timeLeft=20;const el=document.getElementById('timerBox');if(el)el.textContent=timeLeft;timer=setInterval(()=>{timeLeft--;const live=document.getElementById('timerBox');if(live)live.textContent=timeLeft;if(timeLeft<=0){clearInterval(timer);reveal(null)}},1000)}
function reveal(selected){
  if(answered) return; answered=true; clearInterval(timer); const q=quiz[current]; const ok=selected===q.correctAnswer; if(ok)score++;
  document.querySelectorAll('.answer').forEach(btn=>{btn.classList.add('disabled');btn.disabled=true;if(btn.textContent===q.correctAnswer)btn.classList.add('correct');if(selected&&btn.textContent===selected&&!ok)btn.classList.add('wrong')});
  const fb=document.getElementById('feedback');fb.innerHTML=`<strong>${selected===null?t('timeout'):ok?t('correct'):t('wrong')}.</strong><br>${q.explanation}`;fb.classList.remove('hidden');
  document.getElementById('nextButton').classList.remove('hidden');
}
function next(){current<quiz.length-1?(current++,render()):results()}
function results(){clearInterval(timer);const pct=Math.round(score/quiz.length*100);app.innerHTML=`<div class="shell"><div class="stage">${topBar()}<div class="content" style="text-align:center"><h2 class="headline">${t('finalTitle')}</h2><p class="subtitle">${t('finalText')}</p><div class="finalScore">${score} / ${quiz.length}</div><p class="subtitle">${pct}%</p><button id="restart" class="primary blueBtn" type="button">${t('restart')}</button></div><div class="footer"><span>CoR gamification prototype V1.3</span><span>Ready for GitHub Pages</span></div></div></div>`;bindLang();document.getElementById('restart').onclick=start}
document.addEventListener('DOMContentLoaded',home);
