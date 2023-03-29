"use strict";

// handle html
const generateHTML = (pageName) => {
  return ``;
};

// handle styling
const generateCSS = () => {
  return ``;
};

// handle pomodoro timer

// handle blocking social media apps

const domains = [
  { host: "www.facebook.com", name: "Facebook" },
  { host: "www.youtube.com", name: "Youtube" },
  { host: "www.twitter.com", name: "Twitter" },
  { host: "www.reddit.com", name: "Reddit" },
  { host: "www.instagram.com", name: "Instagram" },
  { host: "www.tiktok.com", name: "TikTok" },
  { host: "www.whatsapp.com", name: "WhatsApp" },
  { host: "www.wechat.com", name: "WeChat" },
  { host: "telegram.org", name: "Telegram" },
  { host: "discord.com", name: "Discord" },
  { host: "www.pornhub.com", name: "Pornhub" },
  { host: "www.amazon.ca", name: "Amazon" },
  { host: "disneyplus.com", name: "Disneyplus" },
  { host: "jalencameron.com", name: "Jalen Cameron's portfolio" },
];

domains.map((domain) => {
  if (window.location.hostname === domain.host) {
    document.head.innerHTML = generateCSS();
    document.body.innerHTML = generateHTML(domain.name);
  }
});
