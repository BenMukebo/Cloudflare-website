const html = document.getElementsByTagName('html')[0];
const showBtn = document.querySelector('nav .show-menu-btn');
const closedBtn = document.querySelector('nav .closed-menu-btn');
const navMenu = document.querySelector('nav .nav_menu');
const navLinks = document.querySelectorAll('nav .nav_menu li');


function showMenu() {
  navMenu.classList.add('open');
  navMenu.classList.remove('hide');
  setTimeout(() => {
    closedBtn.style.display = 'block';
  }, 1000);
  html.style.overflow = 'hidden';
}
