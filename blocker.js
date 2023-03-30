"use strict";

// handle html
const generateHTML = (pageName) => {
  return `
    <section id="main">
            <h1>Hey wait a minute... this isn't studying... this is ${pageName}!!</h1>
    </section>
`;
};

// handle styling
const generateCSS = () => {
  return `  
  <style>

    #main{
        display: flex;
        width: 100%;
        height: 100vh;
        text-align: center;
        justify-content:center;
        align-items:center
    }
    h1{
    font-size: 6rem;
    }
  </style>`;
};

const domains = [
  //   communicative social media apps
  { host: "www.facebook.com", name: "Facebook" },
  { host: "twitter.com", name: "Twitter" },
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

chrome.storage.local.get(["isRunning"], (result) => {
  let isRunning = result.isRunning;
  if (isRunning) {
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
  } else {
    return;
  }
});
