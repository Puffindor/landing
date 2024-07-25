const nav = document.querySelectorAll('.nav');
const navFooter = document.querySelectorAll('.nav-f');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav__out');
const closeMobileNav = document.querySelector('.cross');

const closeNav = function () {
 mobileNav.classList.remove('active');
};

burger.addEventListener('click', function () {
 if (!mobileNav.classList[1]) mobileNav.classList.add('active');
});

closeMobileNav.addEventListener('click', closeNav);

const scrollTo = function () {
 document
  .querySelector(`.${this.dataset.element}`)
  .scrollIntoView({ behavior: 'smooth' });
 closeNav();
};

for (let el of nav) {
 el.addEventListener('click', scrollTo);
}

for (let el of navFooter) {
 el.addEventListener('click', scrollTo);
}
