'use strict';
//smooth scroll по меню
const hederSectiot = document.querySelector('.header__section');
const anchors = document.querySelectorAll('header a[href*="#"]');

anchors.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = document.querySelector('.header__section').offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

//додаэться backgroundColor на header
function addStyleMenu(screenSize) {
  if (screenSize.matches) {
    addBackgroundColor(120);
  } else {
    addBackgroundColor(70);
  }
}
function addBackgroundColor(value) {
  window.addEventListener('scroll', function () {
    if (pageYOffset >= value) {
      hederSectiot.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
      hederSectiot.style.backgroundColor = 'Transparent';
    }
  });
}

const screenSize = window.matchMedia('(max-width: 767px)');
addStyleMenu(screenSize);
screenSize.addListener(addStyleMenu);
