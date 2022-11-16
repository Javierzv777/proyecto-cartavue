<template>
  <div>
    <input v-model="store.latitud" />
    <input v-model="store.longitud" />
    <button @click="getLocation">obtener coordenadas</button>
  </div>
</template>

<script>
import Axios from "axios";
import store from "./store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    getLocation() {
      console.log("location");
      let apikey = "AIzaSyC-acTaqrFqZSsUlxM2o6xWkxpO6aAKXRY";
      let address =
        this.store.countrie + " " + this.store.state + " " + this.store.city;
      // AIzaSyBxakUv1-pzXBjg_6_849Iw33fRPKCbzUM
      Axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
          address +
          "&key=" +
          apikey
      )
        .then((response) => {
          console.log(response.data);
          const { lat, lng } = response.data.results[0].geometry.location;
          this.store.latitud = lat;
          this.store.longitud = lng;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
