//---ASYNC---
document.addEventListener('DOMContentLoaded', async function () {
//GTAG
var gtagScript = document.createElement('script'); // Include Google Tag Manager script
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-T9FR54RE8L';
gtagScript.async = true;
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || []; // Your Google Analytics code
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T9FR54RE8L');
//GTAG END

});
