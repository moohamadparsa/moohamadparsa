function getSettings(){return JSON.parse(localStorage.getItem('hooshmand_settings')||'{}')}
function saveSettings(s){localStorage.setItem('hooshmand_settings',JSON.stringify(s))}
function toggleSetting(key){const s=getSettings();s[key]=!s[key];saveSettings(s)}
function saveMessage(){const n=document.querySelector('.notice');if(n){n.style.display='block';setTimeout(()=>n.style.display='none',2200)}}
