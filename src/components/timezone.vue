<template>
  <div>
    <select v-model="store.timeZone">
      <option v-for="(item, i) of items" :key="{ i }">{{ item }}</option>
    </select>
  </div>
</template>
<script>
import zonasHorarias from "./Json/timezones";
import store from "./store.js";

export default {
  data() {
    return { items: zonasHorarias, store };
  },
};
</script>
