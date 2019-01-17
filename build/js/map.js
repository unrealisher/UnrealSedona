ymaps.ready(init);

function init(){
  myMap = new ymaps.Map("map", {
    center: [34.869497, -111.760186],
    zoom: 7,
    controls: []
  });

  myPlacemark = new ymaps.Placemark(
    [34.869497, -111.760186],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/icon-map-marker.svg",
      iconImageSize: [30, 30],
      iconImageOffset: [-10, -20]
    }
  );

  myMap.geoObjects.add(myPlacemark);
}
