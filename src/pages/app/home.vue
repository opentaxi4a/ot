<template>
  <div>
    <div id="map" style="height:86vh;"></div>
  </div>
  <v-fab @click="removeAllMarkers()" color="primary" icon="$vuetify" class="ms-4 mb-4" location="bottom center"
    size="64" absolute app appear></v-fab>

  <v-bottom-sheet v-model="sheet">
    <v-card class="text-center" height="200">
      <v-card-text>
        <v-btn variant="text" @click="sheet = !sheet">
          close
        </v-btn>

        <br>
        <br>

        <div>
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script setup>
import { ref, watch, onMounted, reactive } from 'vue';
import { LocateControl } from "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css";

import "leaflet/dist/leaflet.css";
import * as L from 'leaflet';

const initialMap = ref(null);


onMounted(() => {
  initialMap.value = L.map('map', {
    zoomDelta: 0.75,
    zoomSnap: 0
  }).setView([35.69975547249546, 51.33803292808358], 15).on('click', onClick);
  L.tileLayer('https://memaps.ir/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <span>Memaps power of OSM</span>'
  }).addTo(initialMap.value);
  initialMap.value.attributionControl.setPrefix();
  var gps = new LocateControl().addTo(initialMap.value);
});


const points = reactive([]);
var markerList = new Array();
var lineList = new Array();
function onClick(e) {
  var marker = new L.Marker(e.latlng).on('click', markerOnClick).addTo(initialMap.value).bindPopup("مقصد سفر").openPopup();;
  points.push({
    LatLng: {
      lat: e.latlng.lat,
      lng: e.latlng.lng,
    }
  });
  markerList.push(marker);
}

watch(() => points, (newval) => {
  //drow lines
  for (let i = 0; i < newval.length; i++) {
    if (i >= 1) {
      var pointA = new L.LatLng(newval[i - 1].LatLng.lat, newval[i - 1].LatLng.lng);
      var pointB = new L.LatLng(newval[i].LatLng.lat, newval[i].LatLng.lng);
      var pointList = [pointA, pointB];
      var firstpolyline = new L.Polyline(pointList, {
        color: 'blue',
        weight: 3,
        opacity: 0.9,
        smoothFactor: 1
      });
      firstpolyline.addTo(initialMap.value);
      lineList.push(firstpolyline);
    }
  }
}, { deep: true });

function markerOnClick(e) {

}

function removeAllMarkers() {
  for (let i = 0; i < markerList.length; i++) {
    initialMap.value.removeLayer(markerList[i]);
  };
  points.length = 0;
}
const sheet = ref(true);
</script>
