const nav = document.querySelectorAll('.nav');
const navFooter = document.querySelectorAll('.nav-f');
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav__out');
const closeMobileNav = document.querySelectorAll('.cross');

const speakersOrangeBtn = document.querySelector('.speakers__btns__b2');
const speakersBlueBtn = document.querySelector('.speakers__btns__b1');
const popupOut = document.querySelector('.popup-out');
const orangePopup = document.querySelector('.popup-in__orange');
const bluePopup = document.querySelector('.popup-in__blue');

speakersOrangeBtn.addEventListener('click', openOrangePopup);
speakersBlueBtn.addEventListener('click', openBluePopup);

function openOrangePopup() {
 openPopup();
 orangePopup.classList.add('active');
}

function openBluePopup() {
 openPopup();
 bluePopup.classList.add('active');
}

function openPopup() {
 popupOut.classList.add('active');
}

const closeNav = function () {
 mobileNav.classList.remove('active');
 orangePopup.classList.remove('active');
 bluePopup.classList.remove('active');
 popupOut.classList.remove('active');
};

burger.addEventListener('click', function () {
 if (!mobileNav.classList[1]) mobileNav.classList.add('active');
});

for (let el of closeMobileNav) {
 el.addEventListener('click', closeNav);
}

// closeMobileNav.addEventListener('click', closeNav);

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
