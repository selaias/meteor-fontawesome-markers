fontawesome-markers
====================

A wrapper around [fontawesome-markers](https://github.com/nathan-muir/fontawesome-markers) for use on map markers with fontawesome icons!


##Install
`$ meteor add selaias:fontawesome-markers`


##Usage
```js
new google.maps.Marker({
    map: map,
    icon: {
        path: fontawesome.markers.EXCLAMATION_CIRCLE,
        scale: 0.5,
        strokeWeight: 0.2,
        strokeColor: 'black',
        strokeOpacity: 1,
        fillColor: '#f8ae5f',
        fillOpacity: 0.7,
    },
    clickable: false,
    position: new google.maps.LatLng(lat, lng)
});
```
