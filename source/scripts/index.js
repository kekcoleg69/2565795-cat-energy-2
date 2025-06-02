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
    });

    const screenWidth = window.innerWidth;

    let iconSize;
    let iconOffset;

    if (screenWidth >= 768) {
      iconSize = [113, 106];
      iconOffset = [-56, -93];
    } else {
      iconSize = [57, 53];
      iconOffset = [-26, -42];
    }

    const myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: '/images/cooperation-map-pin@2x.png',
      iconImageSize: iconSize,
      iconImageOffset: iconOffset
    });

    myMap.geoObjects.add(myPlacemark);
  });

});
