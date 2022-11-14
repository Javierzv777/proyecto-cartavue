<template>
  <div>
    <!-- optional indicators -->
    <i class="fa fa-spinner fa-spin" v-if="loading"></i>
    <template v-else>
      <i class="fa fa-search" v-show="isEmpty"></i>
      <i class="fa fa-times" v-show="isDirty" @click="reset"></i>
    </template>

    <!--the input field -->
    <input
      type="text"
      placeholder="..."
      autocomplete="off"
      v-model="store.state"
      @keydown.down="down"
      @keydown.up="up"
      @keydown.enter="hit(current)"
      @keydown.esc="reset"
      @input="update"
      @blur="reset"
      @focus="getInitialData"
    />
    <div></div>
    <!-- the list -->
    <ul v-show="hasItems">
      <!-- for vue@1.0 use: ($item, item) -->
      <li
        v-for="(item, $item) in items"
        :key="$item"
        :class="activeClass($item)"
        @mousedown="hit($item)"
        @mousemove="setActive($item)"
      >
        <span v-text="item.name"></span>
      </li>
    </ul>
  </div>
</template>

<script>
import VueTypeahead from "vue-typeahead";
import store from "./store";
import states from "./Json/states";
export default {
  extends: VueTypeahead, // vue@1.0.22+
  // mixins: [VueTypeahead], // vue@1.0.21-

  data() {
    return {
      current: 1,
      selectedItem: "",
      store: store,
      items: [],
      // The source url
      // (required)
      src: "...",

      // The data that would be sent by request
      // (optional)
      data: {},

      // Limit the number of items which is shown at the list
      // (optional)
      limit: 5,

      // The minimum character length needed before triggering
      // (optional)
      minChars: 3,

      // Highlight the first item in the list
      // (optional)
      selectFirst: false,

      // Override the default value (`q`) of query parameter name
      // Use a falsy value for RESTful query
      // (optional)
      queryParamName: "search",
    };
  },

  methods: {
    // The callback function which is triggered when the user hits on an item
    // (required)

    reset() {
      this.items = [];
    },
    onHit(item) {
      alert(item);
    },
    hit(item) {
      this.store.state = this.items.at(item).name;
      this.items = [];
      this.current = -1;
      return;
    },

    // The callback function which is triggered when the response data are received
    // (optional)
    prepareResponseData(data) {
      data = ["dfd", "dfd"];
      return data;
    },
    update() {
      this.items = [
        ...this.store.states.filter(
          (i) => i.name.indexOf(this.store.state) !== -1
        ),
      ];
      this.current = -1;
    },
    getInitialData() {
      this.items = states.filter(
        (state) => state.country_name === store.countrie
      );
      store.states = [...this.items];
    },
    setActive(index) {
      this.current = index;
    },
    down() {
      if (this.current < this.items.length - 1)
        this.setActive(this.current + 1);
    },
    up() {
      if (this.current > 0) this.setActive(this.current - 1);
    },

    activeClass(index) {
      return {
        active: this.current === index,
      };
    },
  },
  created: function () {
    this.getInitialData();
  },
};
</script>

<style>
li:hover {
  cursor: pointer;
}
li.active {
  color: red;
}
ul {
  list-style-type: none;
  width: 177px;
  clear: both;
  display: inline-block;
  background-color: antiquewhite;
  overflow: scroll;
  max-height: 10rem;
  overflow-x: hidden;
}
</style>
