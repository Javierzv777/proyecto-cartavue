<template>
  <div>
    <input v-model="store.date" type="date" />
    <input v-model="store.time" type="time" />
  </div>
</template>
<script>
import store from "./store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>
