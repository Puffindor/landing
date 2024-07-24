const nav = document.querySelectorAll('.nav');
const navFooter = document.querySelectorAll('.nav-f');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav__out');
const closeMobileNav = document.querySelector('.cross');

burger.addEventListener('click', function () {
 if (!mobileNav.classList[1]) mobileNav.classList.add('active');
});

closeMobileNav.addEventListener('click', function () {
 mobileNav.classList.remove('active');
});

const scrollTo = function () {
 document
  .querySelector(`.${this.dataset.element}`)
  .scrollIntoView({ behavior: 'smooth' });
};

for (let el of nav) {
 el.addEventListener('click', scrollTo);
}

for (let el of navFooter) {
 el.addEventListener('click', scrollTo);
}
