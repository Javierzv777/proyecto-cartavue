<template>
  <div>
    <Country /><State /><City /><Location /><Date /><TimeZone />
    <button @click="submit">search</button>
  </div>
</template>

<script>
import Axios from "axios";
import Country from "./country.vue";
import State from "./state.vue";
import City from "./city.vue";
import Location from "./location.vue";
import Date from "./date.vue";
import TimeZone from "./timezone.vue";
import store from "./store";

export default {
  name: "search",
  components: {
    Date,
    Country,
    State,
    City,
    Location,
    TimeZone,
  },
  methods: {
    submit() {
      let date = this.store.date.split("-");
      let time = this.store.time.split(":");
      // "YYYYMMDDhhmmss",
      Axios.post("http://ephemeris.kibo.cz/api/v1/planets", {
        event: `${date[2]}${date[1]}${date[0]}${time[0]}${time[1]}00`,
        planets: ["Sun", "Moon"],
        topo: [this.store.longitud, this.store.latitud],
        zodiac: "Lahiri",
      });
    },
  },
  created: function () {
    console.log(store);
  },
};
</script>

<style></style>
