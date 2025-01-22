<template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 800px"
  >
    <ol-view
      ref="view"
      :center="[40,40]"
      :zoom="9"
      projection="EPSG:4326"
    />

    <ol-tile-layer>
      <ol-source-xyz url="https://memaps.ir/hot/{z}/{x}/{y}.png" />
    </ol-tile-layer>
  </ol-map>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
export default {
  data() {
    const self = this;
    return {
      loading: false,
      dialog: {
        active: false,
        title: '',
        msg: '',
        type: ''
      },
      plan: {
        zoom: 18
      }
    }
  },
  components: {
    LMap,
    LTileLayer,
  },
}
</script>
