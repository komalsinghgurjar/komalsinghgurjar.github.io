
document.addEventListener('DOMContentLoaded', async function () {
// ADDING GTAG
var gtagScript = document.createElement('script'); // Include Google Tag Manager script
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-T9FR54RE8L';
gtagScript.async = true;
document.head.appendChild(gtagScript);

window.dataLayer = window.dataLayer || []; // Your Google Analytics code
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T9FR54RE8L');

});


//FOOTER

//ADDING FOOTER
document.addEventListener('DOMContentLoaded', async function () {
  // Check if a footer element is present in the current DOM
  const footerExists = document.querySelector('footer');

  // If no footer element is found, add it to the body
  if (!footerExists) {
    const dataLocal = `
      <footer class="global-footer">
        <nav class="footer-nav">
          <a href="https://gurjartech.in/RES/privacy-policy.html" class="footer-link">Privacy</a>
          <a href="https://gurjartech.in/RES/contact-us.html" class="footer-link">Contact</a>
          <a href="https://gurjartech.in/RES/terms-services.html" class="footer-link">Terms</a>
          <!-- Add more links as needed -->
        </nav>
      </footer>
      
      <style>
  .global-footer {
    background-color: #000;
    color: #fff;
    padding: 5px;
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .footer-nav {
    display: flex;
  }

  .footer-link {
    text-decoration: none;
    color: inherit;
    margin-right: 10px;
    font-size: 90%; 
  }

  .footer-link:last-child {
    margin-right: 0;
  }

  .global-footer.show {
    opacity: 1;
  }
</style>

    `;

    document.body.insertAdjacentHTML('beforeend', dataLocal);

    // Add the 'show' class after a short delay to trigger the transition
    setTimeout(async function () {
      document.querySelector('.global-footer').classList.add('show');
    }, 50); // Adjust the delay (in milliseconds) as needed
  }
});


//HEADER
document.addEventListener('DOMContentLoaded', async function () {
  // Check if a header element is present in the current DOM
  const headerExists = document.querySelector('header');

  // If no header element is found, add it to the body
  if (!headerExists) {
    const dataLocal = `
      <header class="global-header">
        <a href="https://gurjartech.in/index.html" class="header-link">
          <img src="https://gurjartech.in/logo.png" class="header-img" alt="LOGO">
          <h2 class="header-text">GURJAR TECH</h2>
        </a>
      </header>
      
      <style>
        .global-header {
          background-color: #000;
          color: #fff;
          padding: 0px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          transition: opacity 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), max-height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          opacity: 0;
          max-height: 0;
        }

        .header-img {
          outline: none;
          border: none;
          height: 0; /* Set initial height to 0 */
          width: auto;
          margin-right: 2px;
          display: inline-block;
          vertical-align: middle;
          transition: height 0.5s cubic-bezier(0.25, 0.1, 0.25, 1); /* Add transition for height */
        }

        .header-text {
          white-space: nowrap;
          display: inline;
          margin: 0;
          vertical-align: middle;
          font-weight: bold;
        }

        .header-link:link,
        .header-link:visited {
          text-decoration: none;
          color: inherit;
        }

        .global-header.show {
          opacity: 1;
          max-height: 100px; /* Adjust the max-height value based on your needs */
        }

        .global-header.show .header-img {
          height: 50px; /* Adjust the final height of the image */
        }
      </style>
    `;

    document.body.insertAdjacentHTML('afterbegin', dataLocal);

    // Add the 'show' class after a short delay to trigger the transition
    setTimeout(async function () {
      document.querySelector('.global-header').classList.add('show');
    }, 50); // Adjust the delay (in milliseconds) as needed
  }
});
