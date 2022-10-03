const menu = document.querySelector('.menu');
const header = document.querySelector('.page-header');
const toggle = document.querySelector('.menu__toggle');

toggle.classList.add('menu__toggle--oppened');
menu.classList.add('menu--hide');
header.classList.add('page-header--hide');


toggle.addEventListener('click', () => {
  menu.classList.toggle('menu--hide');
  menu.classList.toggle('menu--show');
  toggle.classList.toggle('menu__toggle--oppened');
  toggle.classList.toggle('menu__toggle--closed');
  header.classList.toggle('page-header--hide');
  header.classList.toggle('page-header--show');
});
