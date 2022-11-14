<template>
  <div>
    <Country /><State /><City /><Location /><Date />
    <button @click="submit">search</button>
  </div>
</template>

<script>
import Country from "./country.vue";
import State from "./state.vue";
import City from "./city.vue";
import Location from "./location.vue";
import Date from "./date.vue";
import store from "./store";

export default {
  name: "search",
  components: {
    Date,
    Country,
    State,
    City,
    Location,
  },
  methods: {
    submit() {},
  },
  created: function () {
    console.log(store);
  },
};
</script>

<style></style>
