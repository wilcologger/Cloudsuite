/** Hamburger */
let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('.page-body');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  body.classList.toggle('navbar-open');
});

/** Window scroll */
let scrollpos = window.scrollY;
const header = document.querySelector('.header-navbar');
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add('fade-in');
const remove_class_on_scroll = () => header.classList.remove('fade-in');

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});
