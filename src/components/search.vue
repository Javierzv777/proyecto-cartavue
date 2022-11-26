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
import consul from "./consult";

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
      consul,
    };
  },
  methods: {
    submit() {
      dayjs.extend(utc);
      dayjs.extend(timezone);
      let date = this.store.date;
      let time = this.store.time;
      let dateToSend = dayjs.tz(`${date}T${time}:00`, this.store.timezone);
      dateToSend = dayjs(dateToSend).tz("UTC");
      console.log(dateToSend);
      // "YYYYMMDDhhmmss",

      var api = "planets/tropical";
      var userId = "621240";
      var apiKey = "60e32bb6fd80a708031a0620a78dbf08";
      var data = {
        day: dateToSend.$D,
        month: dateToSend.$M + 1,
        year: dateToSend.$y,
        hour: dateToSend.$H,
        min: dateToSend.$m,
        lat: Number(this.store.latitud),
        lon: Number(this.store.longitud),
        tzone: 0.0,
      };
      function getSigno(signo) {
        if (signo === "Aquarius") return "acuario";
        if (signo === "Taurus") return "tauro";
        if (signo === "Gemini") return "géminis";
        if (signo === "Cancer") return "cáncer";
        if (signo === "Aries") return "aries";
        if (signo === "Leo") return "leo";
        if (signo === "Virgo") return "virgo";
        if (signo === "Libra") return "libra";
        if (signo === "Scorpio") return "scorpio";
        if (signo === "Sagittarius") return "sagitario";
        if (signo === "Capricorn") return "capricornio";
        if (signo === "Pisces") return "piscis";
      }
      axios
        .post("https://json.astrologyapi.com/v1/" + api, data, {
          headers: {
            authorization: "Basic " + btoa(userId + ":" + apiKey),
            "Content-Type": "application/json",
          },
        })
        .then((e) => {
          if (e.data?.length && this.consul?.length) {
            // this.consul[1].nombre1 =
            let fillData = this.store.fillData;
            //signos
            fillData.ascendente.signo = `ascendente en ${getSigno(
              e.data[10].sign
            )}`;
            fillData.pluton.signo = `plutón en ${getSigno(e.data[9].sign)}`;
            fillData.neptuno.signo = `neptuno en ${getSigno(e.data[8].sign)}`;
            fillData.urano.signo = `urano en ${getSigno(e.data[7].sign)}`;
            fillData.saturno.signo = `saturno en ${getSigno(e.data[6].sign)}`;
            fillData.jupiter.signo = `júpiter en ${getSigno(e.data[4].sign)}`;
            fillData.marte.signo = `marte en ${getSigno(e.data[2].sign)}`;
            fillData.venus.signo = `venus en ${getSigno(e.data[5].sign)}`;
            fillData.mercurio.signo = `mercurio en ${getSigno(e.data[3].sign)}`;
            fillData.luna.signo = `luna en ${getSigno(e.data[1].sign)}`;
            fillData.sol.signo = `sol en ${getSigno(e.data[0].sign)}`;
            //casas
            fillData.ascendente.casa = `ascendente en casa ${e.data[10].house}`;
            fillData.pluton.casa = `plutón en casa ${e.data[9].house}`;
            fillData.neptuno.casa = `neptuno en casa ${e.data[8].house}`;
            fillData.urano.casa = `urano en casa ${e.data[7].house}`;
            fillData.saturno.casa = `saturno en casa ${e.data[6].house}`;
            fillData.jupiter.casa = `júpiter en casa ${e.data[4].house}`;
            fillData.marte.casa = `marte en casa ${e.data[2].house}`;
            fillData.venus.casa = `venus en casa ${e.data[5].house}`;
            fillData.mercurio.casa = `mercurio en casa ${e.data[3].house}`;
            fillData.luna.casa = `luna en casa ${e.data[1].house}`;
            fillData.sol.casa = `sol en casa ${e.data[0].house}`;

            console.log(e);
            console.log(this.consul[1].nombre1);
            this.$router.push({ path: "/api" });
          }
        })
        .catch((e) => console.log(e));

      const options = {
        method: "GET",
        url: "https://astronomy.p.rapidapi.com/api/v2/bodies/positions",
        params: {
          latitude: this.store.latitud.substring(0, 9),
          longitude: this.store.longitud.substring(0, 9),
          from_date: date,
          to_date: date,
          elevation: "166",
          time: time + ":00",
        },
        headers: {
          "X-RapidAPI-Key":
            "52becf1054msh91a3130923d63f8p1d9468jsn33bea1c8b790",
          "X-RapidAPI-Host": "astronomy.p.rapidapi.com",
        },
      };

      // const options = {
      //   method: "GET",
      //   url: "https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list",
      //   headers: {
      //     "X-RapidAPI-Key":
      //       "52becf1054msh91a3130923d63f8p1d9468jsn33bea1c8b790",
      //     "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      //   },
      // };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      //comentario
    },
  },
  created: function () {
    console.log(store);
  },
};
</script>

<style></style>
