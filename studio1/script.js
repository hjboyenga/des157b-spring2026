(function(){
  'use strict'
  console.log("running J.S.");


const lyrics = [
  
  { time: 4,  text: "Before the world remembers light," },
  { time: 9,  text: "The canyon holds its breath." },

  { time: 14, text: "A blush of amber finds the rim," },
  { time: 17, text: "And silence turns to gold." },  

  { time: 21, text: "Rise." },

  { time: 27, text: "Ten million years of stone and sky," },
  { time: 30, text: "Washed in a single dawn." },    

  // Final peaks
  { time: 33, text: "The world is born again." },
  { time: 36, text: "This is ..." },
];


/* GRAB HTML ELEMENTS */
const video = document.querySelector("#canyon-video");
const music = document.querySelector("#bg-music");
const titleCard = document.querySelector("#title-card");
const lyricLine = document.querySelector("#lyric-line");
const startPrompt = document.querySelector("#start-prompt");
const fs = document.querySelector('.fa-solid');
const coverImage = document.querySelector('#cover-image');
const outroImage = document.querySelector("#outro-image");
const loader = document.querySelector("#loader");

let lastLyricIndex = -1;  
let dismissTimer;          


/* SHOW A LYRIC LINE*/
function showLyric(text) {
  lyricLine.classList.remove("visible", "exiting");
  setTimeout(function() {
    lyricLine.textContent = text;
    lyricLine.classList.add("visible");
  }, 500);
}


/* HIDE THE CURRENT LYRIC LINE*/
function hideLyric() {
  lyricLine.classList.remove("visible");
  lyricLine.classList.add("exiting");
  setTimeout(function() {
    lyricLine.classList.remove("exiting");
  }, 900);
}


/* VIDEO timeupdate EVENT */
video.addEventListener("timeupdate", function() {
  const currentTime = video.currentTime;

  // Show or hide the title card 
  if (currentTime > 0) {
    titleCard.classList.add("hidden");
  } else {
    titleCard.classList.remove("hidden");
  }

  // Check if a new lyric should appear
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
function startExperience() {
  startPrompt.classList.add("hidden");

  coverImage.classList.add("hidden");
  setTimeout(function() {
    video.play();
    music.volume = 0.6;
    music.play();
  }, 1500);

  document.removeEventListener("click", startExperience);
}

document.addEventListener("click", startExperience);

/* END THE EXPERIENCE */
video.addEventListener("ended", function() {
  outroImage.style.opacity = 1;

  setTimeout(function() {
    // Hide video immediately
    video.classList.add("hidden");
    video.currentTime = 0;

    // Start fading outro out AND cover in at the same time
    outroImage.style.opacity = 0;
    coverImage.classList.remove("hidden");

    setTimeout(function() {
      music.pause();
      music.currentTime = 0;
      hideLyric();
      lastLyricIndex = -1;
      titleCard.classList.remove("hidden");
      startPrompt.classList.remove("hidden");
      document.addEventListener("click", startExperience);

      // Restore video silently under the cover
      setTimeout(function() {
        video.classList.remove("hidden");
      }, 1500);

    }, 1500); // after the crossfade completes

  }, 4000); // how long outro image is displayed
});

fs.addEventListener('click', function(){
    if(!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

/* PARALLAX TITLE ON MOUSEMOVE */
document.addEventListener("mousemove", function(e) {
  const x = (e.clientX / window.innerWidth  - 0.5) * 18;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  titleCard.style.transform = "translate(" + x + "px, " + y + "px)";
});

/* LOADER */
window.addEventListener("load", function() {
  loader.style.opacity = "0";
  loader.style.transition = "opacity 1s ease";
  setTimeout(function() {
    loader.style.display = "none";
  }, 1000);
});

video.addEventListener("canplaythrough", function() {
  loader.style.opacity = "0";
  loader.style.transition = "opacity 1s ease";
  setTimeout(function() {
    loader.style.display = "none";
  }, 1000);
});

})();