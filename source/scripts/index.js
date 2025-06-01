const toggleBtn = document.querySelector('.main-nav__toggle');
const navMenu = document.querySelector('.main-nav');
document.documentElement.classList.remove('no-js');
if (toggleBtn && navMenu) {
  navMenu.classList.remove('main-nav--opened');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('main-nav__toggle--open');
    navMenu.classList.toggle('main-nav--opened');
  });
}

document.addEventListener('DOMContentLoaded', () => {

  const ymaps = window.ymaps;
  ymaps.ready(() => {
    const myMap = new ymaps.Map('map', {
        center: [59.938679, 30.3230044],
        zoom: 14,
        controls: []
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/cooperation-map-pin@1x.webp',
        iconImageSize: [57, 53],
        iconImageOffset: [-26, -42]
      });

    myMap.geoObjects.add(myPlacemark);
  });

});
