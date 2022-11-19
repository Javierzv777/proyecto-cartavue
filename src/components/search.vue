<template>
  <div>
    <Country /><State /><City /><Location /><Date /><TimeZone />
    <button @click="submit">search</button>
  </div>
</template>

<script>
import axios from "axios";
import Country from "./country.vue";
import State from "./state.vue";
import City from "./city.vue";
import Location from "./location.vue";
import Date from "./date.vue";
import TimeZone from "./timezone.vue";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
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
  data() {
    return {
      store,
    };
  },
  methods: {
    submit() {
      dayjs.extend(utc);
      dayjs.extend(timezone);
      let date = this.store.date;
      let time = this.store.time;
      let dateToSend = dayjs
        .tz(`${date}T${time}:00`, this.store.timezone)
        .format("YYYYMMDDhhmmss");
      console.log(dateToSend);
      // "YYYYMMDDhhmmss",
      // axios
      //   .post(
      //     "http://private-17a36a-astrologyapi.apiary-mock.com/api/v1/planets",
      //     {
      //       event: dateToSend,
      //       planets: ["Moon", "Venus"],
      //       topo: [this.store.longitud, "6.2476376", null],
      //       zodiac: "Lahiri",
      //     },
      //     {
      //       headers: {
      //         Accept: "application/json",
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //   .then((response) => console.log(response.data))
      //   .catch((e) => console.log(e));
      const options = {
        method: "GET",
        url: "https://astronomy.p.rapidapi.com/api/v2/bodies/positions",
        params: {
          latitude: "33.775867",
          longitude: "-84.39733",
          from_date: "2017-12-20",
          to_date: "2017-12-21",
          elevation: "166",
          time: "12:00:00",
        },
        headers: {
          "X-RapidAPI-Key":
            "52becf1054msh91a3130923d63f8p1d9468jsn33bea1c8b790",
          "X-RapidAPI-Host": "astronomy.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  created: function () {
    console.log(store);
  },
};
</script>

<style></style>
