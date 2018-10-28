(function () {
  var menu = document.getElementById("menu");
  var hamb = document.getElementById("hamb");
  menu.classList.remove("main-nav--no-js");
  hamb.classList.remove("page-header__toggle--no-js");

  hamb.addEventListener("click", function() {
    menu.classList.toggle("main-nav--close");
    hamb.classList.toggle("page-header__toggle--open");
  });
})();


(function () {
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

    myMap.geoObjects.add(myPlacemark);
  });
})();
