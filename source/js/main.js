var menu = document.getElementById("menu");
var hamb = document.getElementById("hamb");
menu.classList.remove("main-nav--no-js");
menu.classList.add("main-nav--close");
hamb.classList.remove("page-header__toggle--no-js");

hamb.addEventListener("click", function() {
  if (menu.classList.contains("main-nav--open")) {
    menu.classList.remove("main-nav--open");
    menu.classList.add("main-nav--close");
    hamb.classList.remove("page-header__toggle--open")
    hamb.classList.add("page-header__toggle--close")
  } else {
    menu.classList.remove("main-nav--close");
    menu.classList.add("main-nav--open");
    hamb.classList.remove("page-header__toggle--close")
    hamb.classList.add("page-header__toggle--open")
  }
});

ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.938934, 30.319455],
      zoom: 14,
      controls: []
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myPlacemark = new ymaps.Placemark([59.938631, 30.323030], {
    }, {
      iconLayout: 'default#imageWithContent',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [124, 106],
      iconImageOffset: [-54, -106],
    });

  myMap.geoObjects
    .add(myPlacemark);
});
