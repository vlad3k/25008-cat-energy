ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
      center: [59.938934, 30.319455],
      zoom: 17
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
