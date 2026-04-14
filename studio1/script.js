
const lyrics = [
  // Verse 1
  { time: 5,  text: "The stars begin to fade away," },
  { time: 10, text: "In the blue-hour breath before the day." },

  // Chorus
  { time: 16, text: "And the rim awakes in a crown of gold," },
  { time: 21, text: "A story written, a truth untold." },
  { time: 26, text: "Rise up, higher than the eagle flies," },

  // Verse 2
  { time: 31, text: "Chasing the canyon ghosts away." },
  { time: 35, text: "In this cathedral, so sublime." },
];


/* GRAB HTML ELEMENTS */
const video = document.querySelector("canyon-video");
const music = document.querySelector("bg-music");
const titleCard = document.querySelector("title-card");
const lyricLine = document.querySelector("lyric-line");
const startPrompt = document.querySelector("start-prompt");


let lastLyricIndex = -1;  
let dismissTimer;          


/* SHOW A LYRIC LINE*/
function showLyric(text) {
  // First fade the current line out
  lyricLine.classList.remove("visible");

  // Wait for the fade-out to finish, then swap text and fade in
  setTimeout(function() {
    lyricLine.textContent = text;
    lyricLine.classList.add("visible");
  }, 500); // 500ms matches the CSS transition duration
}


/* HIDE THE CURRENT LYRIC LINE*/
function hideLyric() {
  lyricLine.classList.remove("visible");
}


/* VIDEO timeupdate EVENT */
video.addEventListener("timeupdate", function() {
  const currentTime = video.currentTime;

  // --- Show or hide the title card ---
  // Title card is visible for the first 4 seconds, then fades away
  if (currentTime > 4) {
    titleCard.classList.add("hidden");
  } else {
    titleCard.classList.remove("hidden");
  }

  // --- Check if a new lyric should appear ---
  // Walk through each lyric and find the latest one whose time has passed
  let newIndex = -1;
  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time) {
      newIndex = i;
    } else {
      break;
    }
  }

  if (newIndex !== lastLyricIndex && newIndex >= 0) {
    lastLyricIndex = newIndex;


    clearTimeout(dismissTimer);

    showLyric(lyrics[newIndex].text);

    dismissTimer = setTimeout(hideLyric, 4000);
  }
});


/* START THE EXPERIENCE */
document.addEventListener("click", function startExperience() {
  // Hide the "click to begin" prompt
  startPrompt.classList.add("hidden");

  // Play the video
  video.play();

  // Play the background music (it will loop)
  music.volume = 0.6;
  music.play();

  // Remove this listener so it only fires once
  document.removeEventListener("click", startExperience);
});
