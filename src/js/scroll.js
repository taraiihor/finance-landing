const refs = {
  link: document.querySelectorAll('.menu__link'),
  anchors: document.querySelectorAll('header a[href*="#"]'),
  hederSectiot: document.querySelector('.header__section'),
  form: document.querySelector('.form'),
  worning: document.getElementById('error'),
  input: document.querySelector('#email'),
};

//добавляє активний клас на кнопку
// document.addEventListener('click', activeMenu);
// function activeMenu(event) {
//   if (!event.target.classList.contains('menu__link')) return;
//   event.target.classList.add('active');
//   let links = refs.link;
//   links.forEach(item => {
//     if (item === event.target) {
//       return;
//     }
//     item.classList.remove('active');
//   });
// }
//smooth scroll по меню
refs.anchors.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = refs.hederSectiot.offsetHeight;
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
      refs.hederSectiot.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else {
      refs.hederSectiot.style.backgroundColor = 'Transparent';
    }
  });
}

const screenSize = window.matchMedia('(max-width: 767px)');
addStyleMenu(screenSize);
screenSize.addListener(addStyleMenu);

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  validateEmail();

  console.log('форма отправлена');
}

function testEmail(value) {
  const regExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return regExp.test(value);
}

function validateEmail() {
  if (testEmail(refs.input.value)) {
    console.log('YESSS');
    refs.worning.style.opacity = 0;
  } else {
    refs.worning.style.opacity = 1;
    console.log('NOOO');
  }
}
