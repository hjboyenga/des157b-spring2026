/* BACK4APP */
Parse.initialize("2S7yQ0dtCNV9Y7Q1daaKg9va4ls5OWifFRqIDSzm", "iR40DKGf2TkIEPBbcDQl26VyGYdwus3foadW3vXf");
Parse.serverURL = "https://parseapi.back4app.com/";

/*ENDINGS */
var endings = {
  1: { name: "The Slow Build", desc: "You took a job that wasn't perfect. Three years later, you're leading projects you actually care about." },
  2: { name: "The Side Door", desc: "A freelance gig you almost turned down became your main career. The 'real' path never happened, but you are happy." },
  3: { name: "The Pivot", desc: "You left design entirely. Turns out, the way you think is more valuable than the title." },
  4: { name: "The Grind That Paid Off", desc: "You said yes to everything for two years. Now you can finally say no." },
  5: { name: "The Unexpected Community", desc: "The job was fine. The people you met changed everything." },
  6: { name: "The Long Way Around", desc: "Grad school, a residency, a move, a gap year. You got there. Just not directly." },
  7: { name: "The Permission Slip", desc: "You stopped waiting to feel ready and made the thing anyway. That was the career." },
  8: { name: "Still Figuring It Out", desc: "Five years later, you're still asking the questions. So is everyone else. That's okay." }
};

/*  QUESTIONS  */
var questions = {
  1: {
    step: 1, track: null, text: "The last day of school is behind you. How does it actually feel?", sub: "Not what you think you should feel. What you actually feel.", illus: '<img src="images/stickFigures-02.svg" alt="3 Stick Figures">',
    choices: [{ l: "A", t: "Alive — like something is finally beginning", next: 2 }, { l: "B", t: "Terrified — the structure is gone and I'm not ready", next: 2 }, { l: "C", t: "Blank — I haven't let myself feel it yet", next: 2 }]
  },
  2: {
    step: 2, track: null, text: "Before you decide anything, what does your wallet look like?", sub: "Money doesn't decide everything, but it doesn't hurt to have some savings.", illus: '<img src="images/stickFigures-03.svg" alt="Business Man Stick Figure">',
    choices: [{ l: "A", t: "I have some cushion — enough to be choosy", next: 3 }, { l: "B", t: "I need to earn something, and soon", next: 3 }]
  },
  3: {
    step: 3, track: null, text: "You open your portfolio. What do you feel in your chest?", sub: "Your gut already knows. Trust it here.", illus: '<img src="images/stickFigures-12.svg" alt="Painting Stick Figures">',
    choices: [{ l: "A", t: "Pride - this is genuinely me, and I'd show anyone", next: 4 }, { l: "B", t: "Cringe - it doesn't hold what I know I can do", next: 4 }, { l: "C", t: "Longing - I can see exactly what it's missing", next: 4 }]
  },
  4: {
    step: 4, track: null, text: "You're standing at the edge. Which direction pulls you?", sub: "Follow the one that scares you in a good way.", illus: '<img src="images/stickFigures-04.svg" alt="Four Paths Stick Figures">',
    choices: [{ l: "A", t: "Apply for jobs — find a place to grow into", next: "A5", track: "Job Search" }, { l: "B", t: "Find clients — build something on your own terms", next: "B5", track: "Freelance" }, { l: "C", t: "Go back to school — there's more you want to learn", next: "C5", track: "Grad School" }, { l: "D", t: "Make something — the idea won't leave you alone", next: "D5", track: "Make Something" }]
  },

  A5: {
    step: 5, track: "Job Search", text: "You start sending applications. How wide is the net?", sub: "Neither is wrong. But they're asking different things of you.", illus: '<img src="images/stickFigures-06.svg" alt="Stick Figure Computer Desk">',
    choices: [{ l: "A", t: "Wide — I want to see what's out there and what wants me back", next: "A6b" }, { l: "B", t: "Narrow — I'd rather wait for something that actually fits", next: "A6n" }]
  },
  A6b: {
    step: 6, track: "Job Search", text: "The rejections pile up. More than you expected.", sub: "This is the moment most people quietly give up. What do you do?", illus: '<img src="images/stickFigures-16.svg" alt="Sad Stick Figure">',
    choices: [{ l: "A", t: "Recalibrate — something in my approach needs to shift", next: "A7" }, { l: "B", t: "Freeze — the silence starts to feel like an answer", next: null, ending: 2 }]
  },
  A6n: {
    step: 6, track: "Job Search", text: "Weeks pass. The shortlist stays short.", sub: "Holding out for the right thing has a cost. So does abandoning what you want.", illus: '<img src="images/stickFigures-06.svg" alt="Stick Figure Computer Desk">',
    choices: [{ l: "A", t: "Stay patient — the right door will open", next: "A7" }, { l: "B", t: "Open the net a little — without losing the thread", next: "A7" }]
  },
  A7: {
    step: 7, track: "Job Search", text: "An offer lands. It's real, but it isn't everything you pictured.", sub: "Few first offers are. The question is what you can build from here.", illus: '<img src="images/stickFigures-11.svg" alt="Stick Figure Looking Away">',
    choices: [{ l: "A", t: "Take it — I'll become someone who deserves more inside it", next: "A8" }, { l: "B", t: "Pass — I'm not ready to settle, even a little", next: "A8" }]
  },
  A8: {
    step: 8, track: "Job Search", text: "Six months in. When you're honest with yourself, are you growing?", sub: "Year one has a way of setting the tone for everything that follows.", illus: '<img src="images/stickFigures-07.svg" alt="Stick Figure Reading">',
    choices: [{ l: "A", t: "Yes — I can feel myself getting sharper", next: null, ending: 1 }, { l: "B", t: "Not really — it's comfortable, but I'm not being stretched", next: null, ending: 2 }]
  },

  B5: {
    step: 5, track: "Freelance", text: "You're on your own now. Where do you start?", sub: "Both paths are real. One feeds the soul first, the other feeds you.", illus: '<img src="images/stickFigures-13.svg" alt="Singing Figure Computer Desk">',
    choices: [{ l: "A", t: "Make the work I believe in — clients will follow", next: "B6" }, { l: "B", t: "Find clients first — belief comes easier when the rent is covered", next: "B6" }]
  },
  B6: {
    step: 6, track: "Freelance", text: "A dry spell settles in. The inbox is quiet.", sub: "Every freelancer meets this moment. How you move through it shapes everything.", illus: '<img src="images/stickFigures-15.svg" alt="Stick Figure at Desk">',
    choices: [{ l: "A", t: "Take whatever comes — survival is a strategy too", next: "B7" }, { l: "B", t: "Hold the line — the work I want is worth waiting for", next: "B7" }]
  },
  B7: {
    step: 7, track: "Freelance", text: "A year has passed. Your work is better. Are your rates?", sub: "What you charge is a sentence about what you believe your work is worth.", illus: '<img src="images/stickFigures-19.svg" alt="Stick Figure Thinking">',
    choices: [{ l: "A", t: "Yes — I raised them, and meant it", next: "B8" }, { l: "B", t: "Not yet — I'm afraid of what I might lose", next: "B8" }]
  },
  B8: {
    step: 8, track: "Freelance", text: "Looking ahead, is this the life, or the bridge to something else?", sub: "Freelancing can be the destination or the thing that shows you what you actually want.", illus: '<img src="images/stickFigures-20.svg" alt="Stick Figure on Stage">',
    choices: [{ l: "A", t: "This is it — I built something that's mine", next: null, ending: 4 }, { l: "B", t: "It opened a door I didn't know was there", next: null, ending: 3 }]
  },

  C5: {
    step: 5, track: "Grad School", text: "Before the semester starts, why are you really here?", sub: "The honest answer to this shapes everything you'll get out of it.", illus: '<img src="images/stickFigures-21.svg" alt="Stick Figure Reading & Thinking">',
    choices: [{ l: "A", t: "Genuine hunger — there are things I need to understand", next: "C6" }, { l: "B", t: "Honestly, a little fear — the real world felt like too much", next: "C6" }]
  },
  C6: {
    step: 6, track: "Grad School", text: "You're inside it now. How are you showing up?", sub: "The same program gives completely different things to different people.", illus: '<img src="images/stickFigures-18.svg" alt="Stick Figure at Desk">',
    choices: [{ l: "A", t: "Like it's an investment — I'm building something real here", next: "C7" }, { l: "B", t: "Like school — going through the motions and getting through", next: "C7" }]
  },
  C7: {
    step: 7, track: "Grad School", text: "The people around you, are you letting them in?", sub: "The relationships you build here tend to outlast the degree itself.", illus: '<img src="images/stickFigures-10.svg" alt="Stick Figures Together">',
    choices: [{ l: "A", t: "Yes — I'm investing in these people and they feel it", next: "C8" }, { l: "B", t: "Not really — I've kept mostly to myself", next: "C8" }]
  },
  C8: {
    step: 8, track: "Grad School", text: "The program ends. You walk out a different person. Where to?", sub: "The answer tells you what the journey actually was.", illus: '<img src="images/stickFigures-17.svg" alt="Stick Figure Opening Door">',
    choices: [{ l: "A", t: "Somewhere the program made possible — a door opened from inside", next: null, ending: 5 }, { l: "B", t: "Back to the search — changed, but starting over", next: null, ending: 6 }]
  },

  D5: {
    step: 5, track: "Make Something", text: "The work is taking shape. Do you let anyone see it?", sub: "Sharing before you're ready is scary. So is never sharing at all.", illus: '<img src="images/stickFigures-18.svg" alt="Stick Figure at Desk">',
    choices: [{ l: "A", t: "Yes — I put it out into the world and watch what happens", next: "D6" }, { l: "B", t: "Not yet — this one is still just for me", next: "D6" }]
  },
  D6: {
    step: 6, track: "Make Something", text: "Silence. Or a small ripple. How do you hold that?", sub: "Your relationship with external response is something worth knowing about yourself.", illus: '<img src="images/stickFigures-15.svg" alt="Stick Figure Holding Map">',
    choices: [{ l: "A", t: "It gets to me — I need some signal to keep the fire lit", next: "D7" }, { l: "B", t: "I make either way — the work is its own reason", next: "D7" }]
  },
  D7: {
    step: 7, track: "Make Something", text: "No audience, no applause. Just you and the thing. Do you continue?", sub: "This is the most honest question creative work ever asks.", illus: '<img src="images/stickFigures-03.svg" alt="Stick Figure with Briefcase">',
    choices: [{ l: "A", t: "Yes — the making itself is enough", next: "D8" }, { l: "B", t: "I slow down — without the echo, the voice gets quieter", next: "D8" }]
  },
  D8: {
    step: 8, track: "Make Something", text: "Over time, does the work find its way into your livelihood?", sub: "There's no wrong answer here. A life with art in it takes many shapes.", illus: '<img src="images/stickFigures-22.svg" alt="Stick Figure at Desk">',
    choices: [{ l: "A", t: "Yes — it became the work I get paid for", next: null, ending: 7 }, { l: "B", t: "No — and I've made a kind of peace with that", next: null, ending: 8 }]
  }
};

/*  STATE  */
var currentTrack = null;
var myChips = [];
var myChartInst = null;

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

/* PROGRESSIVE COLOR SYSTEM
   Step 1 = near white, step 8 = rich color wash
   Each palette: [bgStart, bgEnd, accent, border, progress]
*/
var stepPalettes = [
  /* step 0 / default */ { bg: '#ffffff', accent: '#000000', border: '#dddddd', progress: '#000000' },
  /* step 1 */ { bg: '#fdfcfb', accent: '#1a1a1a', border: '#e8e8e8', progress: '#1a1a1a' },
  /* step 2 */ { bg: 'linear-gradient(160deg,#fff9f6 0%,#fff3ee 100%)', accent: '#c0392b', border: '#f5cac3', progress: '#c0392b' },
  /* step 3 */ { bg: 'linear-gradient(160deg,#fff8f0 0%,#fff0dc 100%)', accent: '#d35400', border: '#f5d6b3', progress: '#d35400' },
  /* step 4 */ { bg: 'linear-gradient(160deg,#fffdf0 0%,#fdf5c7 100%)', accent: '#b8860b', border: '#ede29e', progress: '#d4a017' },
  /* step 5 */ { bg: 'linear-gradient(160deg,#f3fff8 0%,#d4f5e3 100%)', accent: '#1a7a4a', border: '#a8e6c8', progress: '#27ae60' },
  /* step 6 */ { bg: 'linear-gradient(160deg,#f0f8ff 0%,#cde6fa 100%)', accent: '#1565c0', border: '#93c8ef', progress: '#2196f3' },
  /* step 7 */ { bg: 'linear-gradient(160deg,#f5f0ff 0%,#e0d0fa 100%)', accent: '#5b21b6', border: '#c4a8f0', progress: '#7c3aed' },
  /* step 8 */ { bg: 'linear-gradient(160deg,#fff0f8 0%,#ffd6ee 100%)', accent: '#9b1a6e', border: '#f0a8d8', progress: '#e040ab' }
];

function applyStepColors(step) {
  var p = stepPalettes[step] || stepPalettes[0];
  var root = document.documentElement;
  var qs = document.querySelector('#screen-question');
  if (qs) {
    qs.style.background = p.bg;
  }
  root.style.setProperty('--q-accent', p.accent);
  root.style.setProperty('--q-border', p.border);
  root.style.setProperty('--q-progress', p.progress);
  root.style.setProperty('--q-bg', p.bg);
}

/* VANTA BIRDS */
var vantaStartInst = null;
var vantaEndInst = null;

function startVanta() {
  if (typeof VANTA !== "undefined") {
    vantaStartInst = VANTA.BIRDS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      backgroundColor: 0xffffff,
      color1: 0xff0000,
      color2: 0x80000,
      birdSize: 1.5,
      wingSpan: 30,
      speedLimit: 5,
      quantity: 2
    });
  }
}

function startEndingVanta() {
  if (typeof VANTA === "undefined") return;
  // Destroy previous ending instance if any
  if (vantaEndInst) { try { vantaEndInst.destroy(); } catch (e) { } vantaEndInst = null; }
  var el = document.querySelector('#screen-ending #vanta-bg');
  if (!el) return;
  vantaEndInst = VANTA.BIRDS({
    el: el,
    mouseControls: true,
    touchControls: true,
    backgroundColor: 0xfef9f0,
    color1: 0xff6b6b,
    color2: 0x6c5ce7,
    colorMode: "variance",
    birdSize: 1.8,
    wingSpan: 35,
    speedLimit: 6,
    quantity: 6,
    separation: 60,
    alignment: 40,
    cohesion: 40
  });
}

/*  BACK4APP: save one result*/
function saveResult(endingId) {
  var Obj = Parse.Object.extend("GameResult");
  var r = new Obj();
  r.set("endingId", endingId);
  r.set("track", currentTrack || "");
  r.set("choices", myChips);
  return r.save();
}

/* BACK4APP: get counts for all 8 endings */
function getCounts() {
  var Obj = Parse.Object.extend("GameResult");
  var counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 };
  var jobs = [];
  for (var i = 1; i <= 8; i++) {
    (function (id) {
      var q = new Parse.Query(Obj);
      q.equalTo("endingId", id);
      jobs.push(q.count().then(function (c) { counts[id] = c; }));
    })(i);
  }
  return Promise.all(jobs).then(function () { return counts; });
}

/* LOCAL FALLBACK */
function localCounts() {
  try { var s = localStorage.getItem('nw_stats'); return s ? JSON.parse(s) : { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }; }
  catch (e) { return { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0 }; }
}
function localSave(id) {
  var s = localCounts(); s[id] = (s[id] || 0) + 1;
  localStorage.setItem('nw_stats', JSON.stringify(s));
}

/* DRAW CHART */
var chartPalette = [
  'rgba(214, 48, 49, 0.55)',   // 1 red
  'rgba(108, 92, 231, 0.55)',  // 2 purple
  'rgba(0, 184, 148, 0.55)',   // 3 green
  'rgba(225, 112, 85, 0.55)',  // 4 orange
  'rgba(9, 132, 227, 0.55)',   // 5 blue
  'rgba(253, 203, 110, 0.7)',  // 6 yellow
  'rgba(253, 121, 168, 0.55)', // 7 pink
  'rgba(85, 239, 196, 0.65)'   // 8 teal
];
var chartPaletteActive = [
  '#d63031', '#6c5ce7', '#00b894', '#e17055',
  '#0984e3', '#e6a817', '#fd79a8', '#00916e'
];

function drawChart(counts, myId) {
  document.querySelector('#chart-loading').style.display = "none";
  document.querySelector('#chart-wrap').style.display = "block";
  if (myChartInst) { myChartInst.destroy(); }

  var total = 0;
  for (var k in counts) { total += counts[k]; }
  if (total === 0) total = 1;

  var labels = [], data = [], colors = [], borderColors = [], borderWidths = [];
  for (var i = 1; i <= 8; i++) {
    labels.push(endings[i].name);
    data.push(Math.round((counts[i] / total) * 100));
    if (i === myId) {
      colors.push(chartPaletteActive[i - 1]);
      borderColors.push(chartPaletteActive[i - 1]);
      borderWidths.push(0);
    } else {
      colors.push(chartPalette[i - 1]);
      borderColors.push('transparent');
      borderWidths.push(0);
    }
  }

  var ctx = document.querySelector('#my-chart').getContext('2d');
  myChartInst = new Chart(ctx, {
    type: 'bar',
    data: { labels: labels, datasets: [{ data: data, backgroundColor: colors, borderColor: borderColors, borderWidth: borderWidths }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: function (c) { return c.raw + '%'; } } }
      },
      scales: {
        x: { max: 100, ticks: { font: { family: 'Special Elite', size: 11 }, color: '#555', callback: function (v) { return v + '%'; } }, grid: { color: 'rgba(0,0,0,.06)' } },
        y: { ticks: { font: { family: 'Special Elite', size: 10.5 }, color: '#333' }, grid: { display: false } }
      }
    }
  });
}

/* RENDER QUESTION */
function showQuestion(id) {
  var q = questions[id];
  if (!q) return;

  applyStepColors(q.step);

  document.querySelector('#q-num').textContent = q.step + " / 8";
  document.querySelector('#progress-fill').style.width = (q.step / 8 * 100) + "%";
  document.querySelector('#q-stamp').textContent = "Question " + q.step;

  var badge = document.querySelector('#q-badge');
  if (q.track) { badge.textContent = q.track; badge.style.visibility = "visible"; }
  else { badge.style.visibility = "hidden"; }

  var illustEl = document.querySelector('#q-illus');
  if (typeof q.illus === 'string' && q.illus.startsWith('<')) {
    illustEl.innerHTML = q.illus;
  } else if (q.illus instanceof HTMLElement) {
    illustEl.innerHTML = '';
    illustEl.appendChild(q.illus);
  } else {
    illustEl.textContent = q.illus;
  }
  document.querySelector('#q-text').textContent = q.text;
  document.querySelector('#q-sub').textContent = q.sub;

  var choicesEl = document.querySelector('#choices');
  choicesEl.innerHTML = "";
  for (var i = 0; i < q.choices.length; i++) {
    (function (c, delay) {
      var btn = document.createElement('button');
      btn.className = 'choice';
      btn.style.animationDelay = delay + 's';
      btn.innerHTML =
        '<span class="choice-bubble"></span>' +
        '<span class="choice-ltr">' + c.l + '</span>' +
        '<span class="choice-text">' + c.t + '</span>';
      btn.onclick = function () { handleChoice(q, c); };
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
  document.querySelector('#ending-desc').textContent = e.desc;

  var chipsEl = document.querySelector('#chips');
  chipsEl.innerHTML = "";
  for (var i = 0; i < myChips.length; i++) {
    var s = document.createElement('span');
    s.className = 'chip';
    s.textContent = myChips[i];
    chipsEl.appendChild(s);
  }

  document.querySelector('#chart-loading').style.display = "block";
  document.querySelector('#chart-loading').textContent = "Loading results from Back4App...";
  document.querySelector('#chart-wrap').style.display = "none";

  showScreen('ending');
  startEndingVanta();
  localSave(id);

  saveResult(id)
    .then(function () { return getCounts(); })
    .then(function (counts) { drawChart(counts, id); })
    .catch(function () {
      document.querySelector('#chart-loading').textContent = "Showing local results.";
      drawChart(localCounts(), id);
    });
}

/* GAME CONTROLS */
function startGame() {
  currentTrack = null;
  myChips = [];
  applyStepColors(1);
  showScreen('question');
  showQuestion(1);
}
function restartGame() {
  if (vantaEndInst) { try { vantaEndInst.destroy(); } catch (e) { } vantaEndInst = null; }
  applyStepColors(0);
  showScreen('start');
}
function shareResult() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
      .then(function () { showToast("Link copied — share it with a classmate."); });
  }
}

function showToast(msg) {
  var toast = document.querySelector('#share-toast');
  var msgEl = document.querySelector('#share-toast-msg');
  msgEl.textContent = msg;
  toast.classList.add('visible');
  setTimeout(function () { toast.classList.remove('visible'); }, 3000);
}

/*  ON PAGE LOAD */
window.addEventListener('load', function () {
  startVanta();
  var titleEl = document.querySelector('#typed-title');
  typeWriter(titleEl, "Now What?", 100, function () {
    setTimeout(function () {
      document.querySelector('#start-tagline').classList.add('show');
      document.querySelector('#start-body').classList.add('show');
      document.querySelector('#start-btn').classList.add('show');
    }, 200);
  });
});