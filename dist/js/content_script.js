(()=>{"use strict";chrome.storage.sync.get({promocode:""},(e=>{!function({promocode:e}){for(const t of["js/vendor.js","js/injected_script.js"]){const c=document.createElement("script");c.src=chrome.runtime.getURL(t)+"?"+new URLSearchParams({promocode:e}),document.documentElement.appendChild(c)}const t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href",chrome.runtime.getURL("styles.css")),document.documentElement.appendChild(t)}(e)}))})();