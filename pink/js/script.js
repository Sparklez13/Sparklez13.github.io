'use-strict';
var burgerButton = document.querySelector('.main-nav__burger-box');
var navMenu = document.querySelector('.main-nav__menu');
var mainNav = document.querySelector('.main-nav');
// var navWrapper = document.querySelector('.main-nav__wrapper');
var closeButton = document.querySelector('.main-nav__close-button-box');
var buttonNext = document.getElementById('button-next');
var buttonPrev = document.getElementById('button-prev');
var reviewSlides = document.getElementsByClassName('review__item-list');
var slide1 = document.getElementById('slide1');
var slide2 = document.getElementById('slide2');
var slide3 = document.getElementById('slide3');
var currentSlide;

burgerButton.addEventListener('click', function() {
  event.preventDefault();
  if (mainNav.classList.contains('main-nav--menu-closed') && navMenu.classList.contains('main-nav__menu--closed')) {
    mainNav.classList.remove('main-nav--menu-closed');
    mainNav.classList.add('main-nav--menu-opened');
    navMenu.classList.remove('main-nav__menu--closed');
    navMenu.classList.add('main-nav__menu--opened');
    burgerButton.classList.remove('main-nav__burger-box--opened');
    burgerButton.classList.add('main-nav__burger-box--closed');
    closeButton.classList.remove('main-nav__close-button-box--closed');
    closeButton.classList.add('main-nav__close-button-box--opened');
  }
});
closeButton.addEventListener('click', function() {
  event.preventDefault();
  if (mainNav.classList.contains('main-nav--menu-opened') && navMenu.classList.contains('main-nav__menu--opened')) {
    mainNav.classList.remove('main-nav--menu-opened');
    mainNav.classList.add('main-nav--menu-closed');
    navMenu.classList.remove('main-nav__menu--opened');
    navMenu.classList.add('main-nav__menu--closed');
    burgerButton.classList.remove('main-nav__burger-box--closed');
    burgerButton.classList.add('main-nav__burger-box--opened');
    closeButton.classList.remove('main-nav__close-button-box--opened');
    closeButton.classList.add('main-nav__close-button-box--closed');
  }
});
function slideLeft() {
  if (!currentSlide) {
      currentSlide = 0;
  }
  reviewSlides[currentSlide].style.display = 'block';
  reviewSlides[currentSlide].classList.add('slide-left');
  setTimeout(function() {
    reviewSlides[currentSlide].style.display = 'none';
    if (!reviewSlides[(currentSlide + 1)]) {
      reviewSlides[currentSlide].classList.remove('slide-left');
      currentSlide = 0;
      return reviewSlides[currentSlide].style.display = 'block';
    }
    ++currentSlide;
    reviewSlides[currentSlide].style.display = 'block';
    reviewSlides[currentSlide - 1].classList.remove('slide-left');
    }, 700);
}
function slideRight() {
  if (!currentSlide) {
      currentSlide = 0;
  }
  reviewSlides[currentSlide].classList.add('slide-right');
  setTimeout(function() {
    reviewSlides[currentSlide].style.display = 'none';
    if (!reviewSlides[(currentSlide - 1)]) {
      reviewSlides[currentSlide].classList.remove('slide-right');
      currentSlide = reviewSlides.length - 1;
      return reviewSlides[currentSlide].style.display = 'block';
    }
    --currentSlide;
    reviewSlides[currentSlide].style.display = 'block';
    reviewSlides[currentSlide + 1].classList.remove('slide-right');
    }, 700);
}
buttonNext.addEventListener('click', slideLeft);
buttonPrev.addEventListener('click', slideRight);