"use strict";

// handle html
const generateHTML = (pageName) => {
  return ``;
};

// handle styling
const generateCSS = () => {
  return ``;
};

const minutesToStudy = 25;

// handle pomodoro timer
const timer = {
  // timer properties
  isRunning: false,
  timeRemaining: 0,
  totalTime: 60 * minutesToStudy, //25 minutes
  intervalDuration: 1000,
  setInterval: null,
  // DOM elements
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  toggleButton: document.getElementById("start-stop"),
  quitBtn: document.getElementById("quit"),
  // event listeners
  init: () => {
    timer.toggleButton.addEventListener("click", timer.startStop);
    timer.quitBtn.addEventListener("click", timer.quitTimer);
  },
  // methods
  startStop: () => {
    timer.isRunning = !timer.isRunning;
    timer.updateTimer();
    timer.updateDOM();
    timer.blockSocialMedia();
  },
  updateTimer: () => {
    if (timer.isRunning === true) {
      clearInterval(timer.setInterval);
      timer.setInterval = setInterval(() => {
        if (timer.timeRemaining > 0) {
          timer.timeRemaining--;
          timer.updateDOM();
        } else {
          clearInterval(timer.setInterval);
          timer.quitTimer();
        }
      }, timer.intervalDuration);
    } else {
      clearInterval(timer.setInterval);
    }
  },
  quitTimer: () => {
    if (timer.isRunning === true) {
      timer.isRunning = false;
    }
    if (timer.setInterval !== undefined || null) {
      clearInterval(timer.setInterval);
    }
    timer.timeRemaining = 0;
    timer.updateDOM();
    timer.blockSocialMedia();
    timer.resetTimer();
  },
  resetTimer: () => {
    timer.timeRemaining = timer.totalTime;
  },
  updateDOM: () => {
    if (timer.isRunning === true) {
      timer.toggleButton.textContent = "Pause";
    } else {
      timer.toggleButton.textContent = "Start";
    }
    // seconds
    if (timer.timeRemaining % 60 >= 10) {
      timer.seconds.textContent = Math.floor(timer.timeRemaining % 60);
    } else {
      timer.seconds.textContent = `0${Math.floor(timer.timeRemaining % 60)}`;
    }
    // minutes
    if (timer.timeRemaining / 60 >= 10) {
      timer.minutes.textContent = Math.floor(timer.timeRemaining / 60);
    } else {
      timer.minutes.textContent = `0${Math.floor(timer.timeRemaining / 60)}`;
    }
  },
  // handle blocking social media apps
  blockSocialMedia: () => {
    const domains = [
      //   communicative social media apps
      { host: "www.facebook.com", name: "Facebook" },
      { host: "www.twitter.com", name: "Twitter" },
      { host: "www.reddit.com", name: "Reddit" },
      { host: "www.instagram.com", name: "Instagram" },
      { host: "www.wechat.com", name: "WeChat" },
      { host: "telegram.org", name: "Telegram" },
      { host: "www.whatsapp.com", name: "WhatsApp" },
      { host: "discord.com", name: "Discord" },
      //   common video streaming sites
      { host: "www.tiktok.com", name: "TikTok" },
      { host: "www.youtube.com", name: "Youtube" },
      { host: "disneyplus.com", name: "Disneyplus" },
      { host: "www.pornhub.com", name: "Pornhub" },
      //   other
      { host: "www.amazon.ca", name: "Amazon" },
      { host: "www.pinterest.com", name: "Pinterest" },
      { host: "www.tumblr.com", name: "Tumblr" },
      { host: "jalencameron.com", name: "Jalen Cameron's portfolio" },
    ];

    if (timer.isRunning === true) {
      domains.map((domain) => {
        if (window.location.hostname === domain.host) {
          if (domain.host === "jalencameron.com") {
            window.location = "https://danial.dev";
          } else {
            document.head.innerHTML = generateCSS();
            document.body.innerHTML = generateHTML(domain.name);
          }
        }
      });
    }
  },
};
timer.init();
timer.resetTimer();
