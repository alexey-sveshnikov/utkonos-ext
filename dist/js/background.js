(()=>{"use strict";console.log("[utkonos-ext] background script started"),chrome.commands.onCommand.addListener((o=>{console.log(`Command "${o}" triggered`),"reload"===o&&(console.log("Reloading"),chrome.runtime.reload())}))})();