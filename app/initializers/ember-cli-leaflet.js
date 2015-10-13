/* jshint esnext: true */
/* global L */
export default {
  name: 'ember-cli-leaflet',
  initialize: function () {
    L.Icon.Default.imagePath = 'leaflet/dist/images';
  }
};
