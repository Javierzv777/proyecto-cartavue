<template>
  <div>
    <input v-model="store.date" type="date" />
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
