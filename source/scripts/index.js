const toggleBtn = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.main-nav');

toggleBtn.onclick = function(){
  toggleBtn.classList.toggle('main-nav__toggle--open');
  navMenu.classList.toggle('main-nav--opened');
};
