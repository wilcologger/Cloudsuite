/** Hamburger */
let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('.page-body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  body.classList.toggle('navbar-open');
});

/** Window scroll */
const scrollPosition = window.scrollY;
const logoContainer = document.getElementsByClassName('js-logo')[0];

window.addEventListener('scroll', function () {
  // scrollPosition = window.scrollY;

  if (scrollPosition >= 500) {
    logoContainer.classList.add('c-logo--scrolled');
    console.log('hallow');
  } else {
    logoContainer.classList.remove('c-logo--scrolled');
    console.log('bye!!');
  }
});
