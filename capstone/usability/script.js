/* BACK4APP */
Parse.initialize("2S7yQ0dtCNV9Y7Q1daaKg9va4ls5OWifFRqIDSzm", "iR40DKGf2TkIEPBbcDQl26VyGYdwus3foadW3vXf");
Parse.serverURL = "https://parseapi.back4app.com/";

/*ENDINGS */
var endings = {
  1:{ name:"The Slow Build", desc:"You took a job that wasn't perfect. Three years later, you're leading projects you actually care about." },
  2:{ name:"The Side Door", desc:"A freelance gig you almost turned down became your main career. The 'real' path never happened." },
  3:{ name:"The Pivot", desc:"You left design entirely. Turns out, the way you think is more valuable than the title." },
  4:{ name:"The Grind That Paid Off", desc:"You said yes to everything for two years. Now you can finally say no." },
  5:{ name:"The Unexpected Community", desc:"The job was fine. The people you met changed everything." },
  6:{ name:"The Long Way Around", desc:"Grad school, a residency, a move, a gap year. You got there. Just not directly." },
  7:{ name:"The Permission Slip", desc:"You stopped waiting to feel ready and made the thing anyway. That was the career." },
  8:{ name:"Still Figuring It Out", desc:"Five years later, you're still asking the questions. So is everyone else. That's okay." }
};

/*  QUESTIONS  */
var questions = {
  1:{ step:1, track:null, text:"How do you feel leaving school?", sub:"There is no wrong answer here.", illus:"[ illustration: three figures — excited / uncertain / numb ]",
      choices:[{l:"A",t:"Excited — I can't wait to start",next:2},{l:"B",t:"Scared — I'm not sure I'm ready",next:2},{l:"C",t:"Numb — I haven't processed it yet",next:2}] },
  2:{ step:2, track:null, text:"Do you have a financial safety net?", sub:"This shapes how much risk you can take on early.", illus:"[ illustration: safety net ]",
      choices:[{l:"A",t:"Yes — I have runway to be selective",next:3},{l:"B",t:"No — I need income soon",next:3}] },
  3:{ step:3, track:null, text:"Your portfolio right now feels...", sub:"Be honest with yourself.", illus:"[ illustration: open portfolio ]",
      choices:[{l:"A",t:"Proud — I'd send it to anyone today",next:4},{l:"B",t:"Embarrassed — it doesn't show what I can do",next:4},{l:"C",t:"Unfinished — I know what's missing",next:4}] },
  4:{ step:4, track:null, text:"What's your first move?", sub:"This is the fork. Every path leads somewhere real.", illus:"[ illustration: four paths branching ]",
      choices:[{l:"A",t:"Apply for jobs",next:"A5",track:"Job Search"},{l:"B",t:"Find freelance clients",next:"B5",track:"Freelance"},{l:"C",t:"Apply to grad school",next:"C5",track:"Grad School"},{l:"D",t:"Start a personal project",next:"D5",track:"Make Something"}] },

  A5:{ step:5, track:"Job Search", text:"Are you applying broadly or narrowly?", sub:"Both work — they build different careers.", illus:"[ illustration: wide vs. narrow funnel ]",
       choices:[{l:"A",t:"Broadly — getting my name out there",next:"A6b"},{l:"B",t:"Narrowly — only the roles I really want",next:"A6n"}] },
  A6b:{ step:6, track:"Job Search", text:"A wave of rejections hits. How do you respond?", sub:"Every job hunter faces this moment.", illus:"[ illustration: pile of rejection letters ]",
        choices:[{l:"A",t:"Adjust my approach and keep going",next:"A7"},{l:"B",t:"I spiral — the applying stops",next:null,ending:2}] },
  A6n:{ step:6, track:"Job Search", text:"The narrow search is slow. What do you do?", sub:"Patience has a cost. So does abandoning your standards.", illus:"[ illustration: figure waiting ]",
        choices:[{l:"A",t:"Wait it out — the right thing will come",next:"A7"},{l:"B",t:"Widen my search a little",next:"A7"}] },
  A7:{ step:7, track:"Job Search", text:"An offer comes in. Not perfect, but it's real.", sub:"First offers rarely are what we imagined.", illus:"[ illustration: offer letter ]",
      choices:[{l:"A",t:"Take it — I'll grow into it",next:"A8"},{l:"B",t:"Hold out for something better",next:"A8"}] },
  A8:{ step:8, track:"Job Search", text:"Six months in. Are you learning or coasting?", sub:"What you do in year one tends to compound.", illus:"[ illustration: upward chart ]",
      choices:[{l:"A",t:"Learning — getting better every week",next:null,ending:1},{l:"B",t:"Coasting — it pays but doesn't challenge me",next:null,ending:2}] },

  B5:{ step:5, track:"Freelance", text:"First: passion projects or paying clients?", sub:"Both build a career. They build different ones.", illus:"[ illustration: heart vs. dollar ]",
       choices:[{l:"A",t:"Passion projects first",next:"B6"},{l:"B",t:"Paying clients first",next:"B6"}] },
  B6:{ step:6, track:"Freelance", text:"A dry month arrives. Nothing's coming in.", sub:"Every freelancer faces this. The response matters more than the month.", illus:"[ illustration: empty inbox ]",
       choices:[{l:"A",t:"Pick up any work to survive",next:"B7"},{l:"B",t:"Protect my time and trust the process",next:"B7"}] },
  B7:{ step:7, track:"Freelance", text:"It's been a year. Do you raise your rates?", sub:"Undercharging is a statement about your own worth.", illus:"[ illustration: price tag ]",
       choices:[{l:"A",t:"Yes — my work is worth more now",next:"B8"},{l:"B",t:"No — I'm afraid of losing clients",next:"B8"}] },
  B8:{ step:8, track:"Freelance", text:"What does the future of this look like?", sub:"Freelancing can be the destination or the transit.", illus:"[ illustration: solo figure vs. studio ]",
       choices:[{l:"A",t:"Stay solo — this is exactly what I want",next:null,ending:4},{l:"B",t:"Grow or shift — it revealed something bigger",next:null,ending:3}] },

  C5:{ step:5, track:"Grad School", text:"What's actually driving this decision?", sub:"The reason shapes what you get out of it.", illus:"[ illustration: figure thinking ]",
       choices:[{l:"A",t:"Genuine curiosity — there's more I want to learn",next:"C6"},{l:"B",t:"Honestly? Fear of the job market",next:"C6"}] },
  C6:{ step:6, track:"Grad School", text:"How do you approach it once you're in?", sub:"The same program delivers very different things to different people.", illus:"[ illustration: student at desk ]",
       choices:[{l:"A",t:"Like a career move — building something real",next:"C7"},{l:"B",t:"Like school still — attending and surviving",next:"C7"}] },
  C7:{ step:7, track:"Grad School", text:"Who are you building relationships with?", sub:"The network usually outlasts the degree.", illus:"[ illustration: people connecting ]",
       choices:[{l:"A",t:"Peers and mentors — I'm invested in these connections",next:"C8"},{l:"B",t:"Mostly keeping to myself, honestly",next:"C8"}] },
  C8:{ step:8, track:"Grad School", text:"It's ending. What happens next?", sub:"The answer reveals the journey.", illus:"[ illustration: open door ]",
       choices:[{l:"A",t:"A role born directly from the program",next:null,ending:5},{l:"B",t:"Starting the search again — changed but from scratch",next:null,ending:6}] },

  D5:{ step:5, track:"Make Something", text:"Do you share the work publicly?", sub:"Keeping it private is a choice too. Both are valid.", illus:"[ illustration: figure at computer ]",
       choices:[{l:"A",t:"Yes — I put it out there",next:"D6"},{l:"B",t:"No — it's just for me right now",next:"D6"}] },
  D6:{ step:6, track:"Make Something", text:"The response — or the silence. How does it hit you?", sub:"Knowing your relationship with validation matters.", illus:"[ illustration: notification bubble ]",
       choices:[{l:"A",t:"A lot — I need feedback to keep going",next:"D7"},{l:"B",t:"Not much — I make regardless",next:"D7"}] },
  D7:{ step:7, track:"Make Something", text:"No one's paying attention. Do you keep going?", sub:"The most honest question about creative work.", illus:"[ illustration: lone figure making ]",
       choices:[{l:"A",t:"Yes — the work is reason enough",next:"D8"},{l:"B",t:"I stall — the silence gets to me",next:"D8"}] },
  D8:{ step:8, track:"Make Something", text:"Does the work start to support you — or stay personal?", sub:"Both are real outcomes. Neither is failure.", illus:"[ illustration: scales ]",
       choices:[{l:"A",t:"It starts to support me",next:null,ending:7},{l:"B",t:"It stays personal — and I've made peace with that",next:null,ending:8}] }
};

/*  STATE  */
var currentTrack = null;
var myChips      = [];
var myChartInst  = null;

/*  SHOW A SCREEN  */
function showScreen(name) {
  var all = document.querySelectorAll('.screen');
  for (var i = 0; i < all.length; i++) { all[i].classList.remove('active'); }
  document.querySelector('#screen-' + name).classList.add('active');
}

/* TYPEWRITER */
function typeWriter(el, text, speed, done) {
  var i = 0;
  el.textContent = "";
  function tick() {
    if (i < text.length) { el.textContent += text[i++]; setTimeout(tick, speed); }
    else if (done) { done(); }
  }
  tick();
}

/* VANTA BIRDS */
function startVanta() {
  if (typeof VANTA !== "undefined") {
    VANTA.BIRDS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      backgroundColor: 0xffffff,
      color1: 0x222222,
      color2: 0x888888,
      birdSize: 1.2,
      wingSpan: 22,
      speedLimit: 3,
      quantity: 3
    });
  }
}

/*  BACK4APP: save one result*/
function saveResult(endingId) {
  var Obj = Parse.Object.extend("GameResult");
  var r   = new Obj();
  r.set("endingId", endingId);
  r.set("track",    currentTrack || "");
  r.set("choices",  myChips);
  return r.save();
}

/* BACK4APP: get counts for all 8 endings */
function getCounts() {
  var Obj    = Parse.Object.extend("GameResult");
  var counts = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0};
  var jobs   = [];
  for (var i = 1; i <= 8; i++) {
    (function(id) {
      var q = new Parse.Query(Obj);
      q.equalTo("endingId", id);
      jobs.push(q.count().then(function(c){ counts[id] = c; }));
    })(i);
  }
  return Promise.all(jobs).then(function(){ return counts; });
}

/* LOCAL FALLBACK */
function localCounts() {
  try { var s = localStorage.getItem('nw_stats'); return s ? JSON.parse(s) : {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0}; }
  catch(e){ return {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0}; }
}
function localSave(id) {
  var s = localCounts(); s[id] = (s[id]||0)+1;
  localStorage.setItem('nw_stats', JSON.stringify(s));
}

/* DRAW CHART */
function drawChart(counts, myId) {
  document.querySelector('#chart-loading').style.display = "none";
  document.querySelector('#chart-wrap').style.display    = "block";
  if (myChartInst) { myChartInst.destroy(); }

  var total = 0;
  for (var k in counts) { total += counts[k]; }
  if (total === 0) total = 1;

  var labels=[], data=[], colors=[];
  for (var i = 1; i <= 8; i++) {
    labels.push(endings[i].name);
    data.push(Math.round((counts[i]/total)*100));
    colors.push(i === myId ? "#000" : "#ccc");
  }

  var ctx = document.querySelector('#my-chart').getContext('2d');
  myChartInst = new Chart(ctx, {
    type: 'bar',
    data: { labels:labels, datasets:[{ data:data, backgroundColor:colors, borderWidth:0 }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display:false },
        tooltip: { callbacks: { label: function(c){ return c.raw+'%'; } } }
      },
      scales: {
        x: { max:100, ticks:{ font:{family:'Special Elite',size:11}, callback:function(v){ return v+'%'; } }, grid:{color:'rgba(0,0,0,.07)'} },
        y: { ticks:{ font:{family:'Special Elite',size:10.5} }, grid:{display:false} }
      }
    }
  });
}

/* RENDER QUESTION */
function showQuestion(id) {
  var q = questions[id];
  if (!q) return;

  document.querySelector('#q-num').textContent         = q.step + " / 8";
  document.querySelector('#progress-fill').style.width = (q.step/8*100)+"%";
  document.querySelector('#q-stamp').textContent       = "Question " + q.step;

  var badge = document.querySelector('#q-badge');
  if (q.track) { badge.textContent = q.track; badge.style.visibility = "visible"; }
  else          { badge.style.visibility = "hidden"; }

  document.querySelector('#q-illus').textContent = q.illus;
  document.querySelector('#q-text').textContent  = q.text;
  document.querySelector('#q-sub').textContent   = q.sub;

  var choicesEl = document.querySelector('#choices');
  choicesEl.innerHTML = "";
  for (var i = 0; i < q.choices.length; i++) {
    (function(c, delay){
      var btn = document.createElement('button');
      btn.className = 'choice';
      btn.style.animationDelay = delay + 's';
      btn.innerHTML =
        '<span class="choice-bubble"></span>' +
        '<span class="choice-ltr">'  + c.l + '</span>' +
        '<span class="choice-text">' + c.t + '</span>';
      btn.onclick = function(){ handleChoice(q, c); };
      choicesEl.appendChild(btn);
    })(q.choices[i], i * 0.07);
  }
}

/* HANDLE CHOICE */
function handleChoice(q, c) {
  if (c.track) { currentTrack = c.track; }
  myChips.push(c.t);
  if (c.ending) { showEnding(c.ending); return; }
  showQuestion(c.next);
}

/* SHOW ENDING */
function showEnding(id) {
  var e = endings[id];
  document.querySelector('#ending-title').textContent = e.name;
  document.querySelector('#ending-desc').textContent  = e.desc;

  var chipsEl = document.querySelector('#chips');
  chipsEl.innerHTML = "";
  for (var i = 0; i < myChips.length; i++) {
    var s = document.createElement('span');
    s.className = 'chip';
    s.textContent = myChips[i];
    chipsEl.appendChild(s);
  }

  document.querySelector('#chart-loading').style.display = "block";
  document.querySelector('#chart-loading').textContent   = "Loading results from Back4App...";
  document.querySelector('#chart-wrap').style.display    = "none";

  showScreen('ending');
  localSave(id);

  saveResult(id)
    .then(function(){ return getCounts(); })
    .then(function(counts){ drawChart(counts, id); })
    .catch(function(){
      document.querySelector('#chart-loading').textContent = "Showing local results.";
      drawChart(localCounts(), id);
    });
}

/* GAME CONTROLS */
function startGame() {
  currentTrack = null;
  myChips = [];
  showScreen('question');
  showQuestion(1);
}
function restartGame() { showScreen('start'); }
function shareResult() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
      .then(function(){ alert("Link copied — share it with a classmate."); });
  }
}
/* TESTER OVERLAY */
function dismissOverlay() {
  var overlay = document.querySelector('#tester-overlay');
  overlay.classList.add('hidden');
  setTimeout(function(){ overlay.style.display = 'none'; }, 350);
}
/*  ON PAGE LOAD */
window.addEventListener('load', function(){
  startVanta();
  var titleEl = document.querySelector('#typed-title');
  typeWriter(titleEl, "Now What?", 100, function(){
    setTimeout(function(){
      document.querySelector('#start-tagline').classList.add('show');
      document.querySelector('#start-body').classList.add('show');
      document.querySelector('#start-btn').classList.add('show');
    }, 200);
  });
});