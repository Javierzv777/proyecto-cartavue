<template>
  <div>
    <div style="clear: both">
      <h1 :id="idDinamico">{{ this.convertir(component.name) }}</h1>
    </div>
    <div :class="style.campo">
      <div
        :class="style.principal"
        class="container ml-2 d-flex justify-contend-lg-end"
      >
        <div class="d-lg-flex">
          <!---------signo----------------->
          <div class="row">
            <form
              class="col-lg-4"
              action
              v-on:submit.prevent="cargarInput1()"
              method="POST"
            >
              <div class="row mb-2 justify-content-center">
                <b-form-select
                  class="col-3 col-md-6 mb-2"
                  v-model="dato1"
                  style="width: 175px"
                  :class="style.select"
                >
                  <option disabled value>
                    __{{ component.name }} en signo
                  </option>
                  <option v-for="signo in signos" :key="signo.id">
                    {{ `${component.name} en ${signo}` }}
                  </option>
                </b-form-select>
                <!--input list="opciones1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__sol en signo">
                      <datalist id="opciones1">
                          <option v-for="signo in signos" :key="signo.id">{{signo}}</option> 
                          </datalist-->
                <span
                  class="col-12 col-md-6 col-md-6 d-flex justify-content-center"
                >
                  <b-button class="mx-1" id="cargar1" type="submit"
                    >cargar</b-button
                  >
                  <b-button id="borrar1" @click.prevent="deleteInput1()">
                    borrar
                  </b-button>
                </span>
              </div>
            </form>

            <form
              class="col-lg-4"
              :class="style.casa"
              v-on:submit.prevent="cargarInput2()"
              action
              method="POST"
            >
              <div class="row mb-2 justify-content-center">
                <b-form-select
                  v-model="dato2"
                  style="width: 175px"
                  :class="style.select"
                >
                  <option disabled value>__{{ component.name }} en casa</option>
                  <option v-for="(signo, index) in signos" :key="signo.id">
                    {{ `${component.name} en casa ${index + 1}` }}
                  </option>
                </b-form-select>
                <!--input list="opciones2" type="text" v-model="dato2" name="nombre" id="imput2" placeholder="__sol en casa">
                              <datalist id="opciones2">
                                  <option v-for="casa in casas" :key="casa.id">{{casa}}</option>
                              </datalist-->
                <span
                  class="col-12 col-sm-6 d-flex mb-2 justify-content-center"
                >
                  <b-button id="cargar2" type="submit">cargar</b-button>
                  <b-button id="borrar2" @click.prevent="deleteInput2()">
                    borrar
                  </b-button>
                </span>
              </div>
            </form>
            <div class="col-lg-4 d-flex mb-2 justify-content-center">
              <div class="">
                <div class="mb-2">
                  <b-button @click="cargarCampo">cargar campo</b-button>
                </div>

                <div class="">
                  <b-button id="limpiar" v-on:click="limpiarCampo">
                    limpiar campo
                  </b-button>
                </div>
              </div>
            </div>
          </div>
          <!-------------casa---------------->

          <!------------aspecto------------->
          <!---------------------------------------------------------------------------------------------------->
        </div>
      </div>
      <div class="row mb-2 justify-content-center">
        <div class="mb-2 justify-content-center">
          <b-button class="" @click.prevent="addAspecto">agregar</b-button>
          <b-button @click.prevent="deleteAspecto">borrar</b-button>
        </div>

        <div
          class="row justify-content-center"
          v-for="(find, index) in dato3"
          :key="find.id"
        >
          <div class="col-4">
            <b-form-select
              :class="style.select"
              v-model="find.value1"
              :key="index"
            >
              <option v-if="component.name === 'luna'" disabled value>
                __aspectos de la
              </option>
              <option v-else-if="component.name === 'sol'" disabled value>
                __aspectos del
              </option>
              <option v-else disabled value>__aspectos de</option>
              <option v-for="aspecto in aspectos" :key="aspecto.id">
                {{ aspecto }}
              </option>
            </b-form-select>
          </div>
          <div class="col-3">
            <b-form-select v-model="find.value2" :key="index">
              <option disabled value>__{{ component.name }}</option>
              <option v-for="aspecto in aspectos2" :key="aspecto.id">
                {{ aspecto }}
              </option>
            </b-form-select>
          </div>
          <!--input class='aspectos5' list="opcionesPluton" v-model="find.value" :key="index" placeholder="__aspectos del" >
                              <datalist id="opcionesPluton">
                                  <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                                  </datalist-->
        </div>
      </div>
    </div>
    <div>
      <b-button @click="bajar(convertir(component.name))">
        deslizar al campo cargado
      </b-button>
    </div>
  </div>
</template>

<script>
import style from "./molde.module.css";
import { aspectos, astrosArray, signos } from "../variables";
import { methodsChildComponents as methods } from "../../methods.js";
import store from "../../store";

export default {
  name: "molde",
  props: ["component", "index"],
  methods: {
    ...methods,
    bajar(ref) {
      const baj = document.getElementById(`bajar${ref}`);
      if (baj) {
        baj.scrollIntoView();
      } else {
        let flashName = "Aún no hay ninguna definición que mostrar";
        this.$emit("alertaFlashtwo", flashName);
      }
    },

    shiftAspecto() {
      let aux = this.astrosArray.filter((x) => x != this.astrosArray[0]);
      this.aspectos2 = aux;
      this.astrosArray.shift();
    },
    cargarCampo() {
      this.cargarInput1();
      this.cargarInput2();
      this.cargarInput3();
    },
    async cargarInput1() {
      if (this.dato1 != "") {
        let peticionTipo = { nombre: "sol_ensigno" };
        await axios.post("/carta", peticionTipo).then((response) => {
          let texto = {
            id: 6 + this.index * 2,
            nombre: this.component.name + " en el signo",
            definicion: response.data,
          };

          this.$emit("tipo1", texto);
        });
        let peticion = {
          nombre: this.dato1,
        };
        await axios.post("/carta", peticion).then((response) => {
          let texto = {
            id: 6 + this.index * 2,
            nombre: this.dato1,
            definicion: response.data,
          };

          this.$emit("first", texto);
        });
      }
    },
    async cargarInput2() {
      if (this.dato2 != "") {
        let peticionTipo = { nombre: "sol_encasa" };
        await axios.post("/carta", peticionTipo).then((response) => {
          let texto = {
            id: 6 + this.index * 2,
            nombre: "Sol en la Casa",
            definicion: response.data,
          };

          this.$emit("tipo2", texto);
        });
        let peticion = {
          nombre: this.dato2,
        };
        await axios.post("/carta", peticion).then((response) => {
          let texto = {
            id: 6 + this.index * 2,
            nombre: this.dato2,
            definicion: response.data,
          };

          this.$emit("second", texto);
        });
      }
    },
    async cargarInput3() {
      let f = 0;
      for (f = 0; f <= this.dato3?.length; f++) {
        let dato5 = this.dato3[f]?.value1.concat(" ", this.dato3[f]?.value2);

        this.dato5[f].value = dato5;
        console.log(this.dato5[0]);
        this.consultarAspecto();
      }
    },
    async consultarAspecto() {
      let { value } = this.dato5[0];

      if (value != " ") {
        await axios.post("/aspectos", this.dato5).then((response) => {
          let nombre = response.data.value;
          let definicion = response.data.respuestas;
          let data = new Array(definicion.length);
          let i = 0;
          nombre.forEach((element) => {
            if (definicion[i] != "") {
              data[i] = {
                nombre: element,
                definicion: definicion[i],
              };
            } else {
              data[i] = { nombre: "", definicion: "" };
            }
            i++;
          });
          let texto = {
            id: 6 + this.index * 2,
            aspectos: data,
          };
          this.$emit("third", texto);
        });
      }
    },

    addAspecto: function () {
      this.dato3.push({ value1: "", value2: "" });
      this.dato5.push({ value: "" });
    },
    deleteAspecto: function () {
      let ind = this.dato3.length;
      this.dato3.splice(ind - 1, 1);
      let ind5 = this.dato4.length;
      this.dato5.splice(ind5 - 1, 1);
      let texto = { id: 6 + this.index * 2 };
      this.$emit("deleteAspecto", texto);
    },
    deleteInput1() {
      this.dato1 = "";
      let texto = { id: 6 + this.index * 2 };
      this.$emit("deleteDefinicion1", texto);
    },
    deleteInput2() {
      this.dato2 = "";
      let texto = { id: 6 + this.index * 2 };
      this.$emit("deleteDefinicion2", texto);
    },
    deleteAspectos() {
      this.dato3 = [];
      this.dato5 = [];
      let texto = { id: 6 + this.index * 2 };
      this.$emit("deleteAspectos", texto);
    },
    limpiarCampo() {
      this.deleteInput1();
      this.deleteInput2();
      this.deleteAspectos();
      this.addAspecto();
    },
    convertir(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },

  data() {
    return {
      style,
      idDinamico: `subir${this.convertir(this.component.name)}`,
      dato1: store.fillData[this.component.name].signo,
      dato2: store.fillData[this.component.name].casa,
      count: 0,
      dato3: [],
      dato5: [],
      casas: signos.map((e, i) => `${this.component.name} en casa ${i}`),
      signos,
      aspectos: aspectos.map((x) => `${this.component.name} ${x}`),
      astrosArray,
      aspectos2: "",
    };
  },
  mounted() {
    this.addAspecto();
  },
  beforeMount() {
    this.shiftAspecto();
  },

  created: function () {
    this.$root.$on("clean", this.limpiarCampo);

    this.$root.$on("update", this.cargarCampo);
  },
};

import axios from "axios";
</script>
