(function () {
  var header = document.getElementById('siteHeader');
  var seals = document.querySelectorAll('.cred-stack__seal');

  function onScroll() {
    if (header) header.classList.toggle('solid', window.scrollY > 40);
    if (seals.length) {
      var scrolled = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var pct = max > 0 ? scrolled / max : 0;
      var stampedCount = Math.min(seals.length, Math.floor(pct * seals.length * 1.15) + (pct > 0.02 ? 1 : 0));
      seals.forEach(function (seal, i) {
        seal.classList.toggle('stamped', i < stampedCount);
      });
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById('navToggle');
  var navClose = document.getElementById('navClose');
  var mobileNav = document.getElementById('mobileNav');
  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
    });
  }
  if (navClose && mobileNav) {
    navClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      navToggle && navToggle.setAttribute('aria-expanded', 'false');
    });
  }
  if (mobileNav) {
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'This is a preview site — the form isn\'t wired up yet. Call (214) 620-9340 directly for now.';
    });
  }
})();
