 var ENDINGS = {
    1: { name: "The Slow Build", desc: "You took a job that wasn't perfect. Three years later, you're leading projects you actually care about." },
    2: { name: "The Side Door", desc: "A freelance gig you almost turned down became your main career. The 'real' path never happened." },
    3: { name: "The Pivot", desc: "You left design entirely. Turns out, the way you think is more valuable than the title." },
    4: { name: "The Grind That Paid Off", desc: "You said yes to everything for two years. Now you can finally say no." },
    5: { name: "The Unexpected Community", desc: "The job was fine. The people you met changed everything." },
    6: { name: "The Long Way Around", desc: "Grad school, a residency, a move, a gap year. You got there. Just not directly." },
    7: { name: "The Permission Slip", desc: "You stopped waiting to feel ready and made the thing anyway. That was the career." },
    8: { name: "Still Figuring It Out", desc: "Five years later, you're still asking the questions. So is everyone else. That's okay." },
  };

  var QUESTIONS = [
    {
      id: 1, step: 1, track: null, question: "How do you feel leaving school?", subtext: "No right answer — this is your starting point.", illustration: "[ three figures: excited / uncertain / numb ]",
      choices: [{ l: "A", t: "Excited — I can't wait to start", next: 2 }, { l: "B", t: "Scared — I'm not sure I'm ready", next: 2 }, { l: "C", t: "Numb — I haven't processed it yet", next: 2 }]
    },
    {
      id: 2, step: 2, track: null, question: "Do you have a financial safety net?", subtext: "This shapes how much risk you can take early on.", illustration: "[ illustration: safety net ]",
      choices: [{ l: "A", t: "Yes — I have runway to be selective", next: 3 }, { l: "B", t: "No — I need income soon", next: 3 }]
    },
    {
      id: 3, step: 3, track: null, question: "Your portfolio right now feels...", subtext: "Be honest with yourself here.", illustration: "[ illustration: portfolio ]",
      choices: [{ l: "A", t: "Proud — I'd send it to anyone", next: 4 }, { l: "B", t: "Embarrassed — it doesn't show what I can do", next: 4 }, { l: "C", t: "Unfinished — I know what's missing", next: 4 }]
    },
    {
      id: 4, step: 4, track: null, question: "What's your first move?", subtext: "This is the fork. Every path leads somewhere real.", illustration: "[ illustration: four paths ]",
      choices: [{ l: "A", t: "Apply for jobs", next: "A5", track: "A" }, { l: "B", t: "Find freelance clients", next: "B5", track: "B" }, { l: "C", t: "Apply to grad school", next: "C5", track: "C" }, { l: "D", t: "Start a personal project", next: "D5", track: "D" }]
    },

    {
      id: "A5", step: 5, track: "Job search", question: "Are you applying broadly or narrowly?", subtext: "Both work — they build different careers.", illustration: "[ illustration: wide vs narrow ]",
      choices: [{ l: "A", t: "Broadly — getting my name out there", next: "A6b" }, { l: "B", t: "Narrowly — only the work I want", next: "A6n" }]
    },
    {
      id: "A6b", step: 6, track: "Job search", question: "A wave of rejections hits. How do you respond?", subtext: "Every job hunter faces this moment.", illustration: "[ illustration: rejection letters ]",
      choices: [{ l: "A", t: "Adjust my approach and keep going", next: "A7" }, { l: "B", t: "I spiral — the applying stops", next: null, ending: 2 }]
    },
    {
      id: "A6n", step: 6, track: "Job search", question: "The narrow search is slow. What do you do?", subtext: "Patience has a cost. So does abandoning standards.", illustration: "[ illustration: waiting ]",
      choices: [{ l: "A", t: "Wait it out — the right thing will come", next: "A7" }, { l: "B", t: "Widen my search a little", next: "A7" }]
    },
    {
      id: "A7", step: 7, track: "Job search", question: "An offer comes in. Not perfect, but it's real.", subtext: "First offers rarely are what we imagined.", illustration: "[ illustration: offer letter ]",
      choices: [{ l: "A", t: "Take it — I'll grow into it", next: "A8" }, { l: "B", t: "Hold out for something better", next: "A8" }]
    },
    {
      id: "A8", step: 8, track: "Job search", question: "Six months in. Are you learning or coasting?", subtext: "Year one tends to compound.", illustration: "[ illustration: growth chart ]",
      choices: [{ l: "A", t: "Learning — getting better every week", next: null, ending: 1 }, { l: "B", t: "Coasting — the job pays but doesn't challenge me", next: null, ending: 2 }]
    },

    {
      id: "B5", step: 5, track: "Freelance", question: "First: passion projects or paying clients?", subtext: "Both build a career. They build different ones.", illustration: "[ illustration: passion vs money ]",
      choices: [{ l: "A", t: "Passion projects first", next: "B6" }, { l: "B", t: "Paying clients first", next: "B6" }]
    },
    {
      id: "B6", step: 6, track: "Freelance", question: "A dry month arrives. Nothing's coming in.", subtext: "Every freelancer faces this.", illustration: "[ illustration: empty inbox ]",
      choices: [{ l: "A", t: "Pick up any work to survive", next: "B7" }, { l: "B", t: "Protect my time and trust the process", next: "B7" }]
    },
    {
      id: "B7", step: 7, track: "Freelance", question: "It's been a year. Do you raise your rates?", subtext: "Undercharging is a statement about your own worth.", illustration: "[ illustration: price tag ]",
      choices: [{ l: "A", t: "Yes — my work is worth more now", next: "B8" }, { l: "B", t: "No — I'm afraid of losing clients", next: "B8" }]
    },
    {
      id: "B8", step: 8, track: "Freelance", question: "What does the future of this look like?", subtext: "Freelancing can be the destination or the transit.", illustration: "[ illustration: solo vs studio ]",
      choices: [{ l: "A", t: "Stay solo — this is exactly what I want", next: null, ending: 4 }, { l: "B", t: "Grow or shift — freelance revealed something bigger", next: null, ending: 3 }]
    },

    {
      id: "C5", step: 5, track: "Grad school", question: "What's actually driving the grad school decision?", subtext: "The reason shapes what you get out of it.", illustration: "[ illustration: thinking figure ]",
      choices: [{ l: "A", t: "Genuine curiosity — there's more I want to understand", next: "C6" }, { l: "B", t: "Honestly? Fear of the job market", next: "C6" }]
    },
    {
      id: "C6", step: 6, track: "Grad school", question: "How do you approach it once you're in?", subtext: "The same program delivers very different things.", illustration: "[ illustration: student at desk ]",
      choices: [{ l: "A", t: "Like a career move — building something real", next: "C7" }, { l: "B", t: "Like school still — attending and surviving", next: "C7" }]
    },
    {
      id: "C7", step: 7, track: "Grad school", question: "Who are you actually building relationships with?", subtext: "The network outlasts the degree.", illustration: "[ illustration: people connecting ]",
      choices: [{ l: "A", t: "Peers and mentors — I'm invested in these connections", next: "C8" }, { l: "B", t: "Mostly keeping to myself", next: "C8" }]
    },
    {
      id: "C8", step: 8, track: "Grad school", question: "It's ending. What happens next?", subtext: "The answer reveals the journey.", illustration: "[ illustration: open door ]",
      choices: [{ l: "A", t: "A role born from the program itself", next: null, ending: 5 }, { l: "B", t: "Starting the search again — changed but from scratch", next: null, ending: 6 }]
    },

    {
      id: "D5", step: 5, track: "Make something", question: "Do you share the work publicly?", subtext: "Keeping it private is a choice too.", illustration: "[ illustration: figure at computer ]",
      choices: [{ l: "A", t: "Yes — I put it out there", next: "D6" }, { l: "B", t: "No — it's just for me right now", next: "D6" }]
    },
    {
      id: "D6", step: 6, track: "Make something", question: "The response — or the silence — how does it hit you?", subtext: "Knowing your relationship with validation matters.", illustration: "[ illustration: notification ]",
      choices: [{ l: "A", t: "A lot — I need feedback to keep going", next: "D7" }, { l: "B", t: "Not much — I make regardless", next: "D7" }]
    },
    {
      id: "D7", step: 7, track: "Make something", question: "No one's paying attention. Do you keep going?", subtext: "The most honest question about creative work.", illustration: "[ illustration: lone figure making ]",
      choices: [{ l: "A", t: "Yes — the work is reason enough", next: "D8" }, { l: "B", t: "I stall — the silence gets to me", next: "D8" }]
    },
    {
      id: "D8", step: 8, track: "Make something", question: "Does the work start to support you — or stay personal?", subtext: "Both are real outcomes. Neither is failure.", illustration: "[ illustration: scales ]",
      choices: [{ l: "A", t: "It starts to support me", next: null, ending: 7 }, { l: "B", t: "It stays personal — and I've made peace with that", next: null, ending: 8 }]
    },
  ];