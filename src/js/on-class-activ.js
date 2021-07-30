'use strict';
const links = document.querySelectorAll('.menu__link');
// добавляє активний клас на кнопку
document.addEventListener('click', activeMenu);

function activeMenu(event) {
  if (!event.target.classList.contains('menu__link')) return;
  event.target.classList.add('active');
  let link = links;
  link.forEach(item => {
    if (item === event.target) {
      return;
    }
    item.classList.remove('active');
  });
}
