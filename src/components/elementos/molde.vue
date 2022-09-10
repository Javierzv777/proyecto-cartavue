

<template>
    <div>

        <div style="clear:both;">
            <h1 :id="idDinamico">{{this.convertir(component.name)}}</h1>
        </div>
        <div class="campo">
    
            <div class="principal">
                <button class="cargarCampo" @click="cargarCampo">cargar campo</button>
                <div class="contenedorLuna">
                    <!---------signo----------------->
    
                    <form class="signo" action v-on:submit.prevent="cargarInput1()" method="POST">
                        <select v-model="dato1" style="width:175px;" class="select">
                            <option disabled value>__{{ component.name }} en signo</option>
    
                            <option
                                v-for="signo in signos"
                                :key="signo.id"
                            >{{ `${component.name} en ${signo}` }}</option>
                        </select>
                        <!--input list="opciones1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__sol en signo">
                    <datalist id="opciones1">
                        <option v-for="signo in signos" :key="signo.id">{{signo}}</option> 
                        </datalist-->
                        <div class="cargar1">
                            <button id="cargar1" type="submit">cargar</button>
                            <button id="borrar1" @click.prevent="deleteInput1()">borrar</button>
                        </div>
                    </form>
                    <!-------------casa---------------->
                    <form class="casa" v-on:submit.prevent="cargarInput2()" action method="POST">
                        <select v-model="dato2" style="width:175px; " class="select">
                            <option disabled value>__{{ component.name }} en casa</option>
                            <option
                                v-for="(signo, index) in signos"
                                :key="signo.id"
                            >{{ `${component.name} en casa ${index + 1}` }}</option>
                        </select>
                        <!--input list="opciones2" type="text" v-model="dato2" name="nombre" id="imput2" placeholder="__sol en casa">
                        <datalist id="opciones2">
                            <option v-for="casa in casas" :key="casa.id">{{casa}}</option>
                        </datalist-->
                        <div class="cargar2">
                            <button id="cargar2" type="submit">cargar</button>
                            <button id="borrar2" @click.prevent="deleteInput2()">borrar</button>
                        </div>
                    </form>
    
                    <!------------aspecto------------->
                    <form class="aspectos" v-on:submit.prevent="cargarInput3()" action>
                        <div class="botonAspec">
                            <button @click.prevent="addAspecto">agregar</button>
                            <button @click.prevent="deleteAspecto">borrar</button>
                        </div>
    
                        <div class="aspectos2">
                            <div class="aspectos6">
                                <div v-for="(find,index) in dato3" :key="find.id">
                                    <select class="aspectos5 select" v-model="find.value" :key="index">
                                        <option
                                            v-if="component.name === 'luna'"
                                            disabled
                                            value
                                        >__aspectos de la</option>
                                        <option
                                            v-else-if="component.name === 'sol'"
                                            disabled
                                            value
                                        >__aspectos del</option>
                                        <option v-else disabled value>__aspectos de</option>
                                        <option
                                            v-for="aspecto in aspectos"
                                            :key="aspecto.id"
                                        >{{ aspecto }}</option>
                                    </select>
                                    <!--input class='aspectos5' list="opcionesPluton" v-model="find.value" :key="index" placeholder="__aspectos del" >
                                <datalist id="opcionesPluton">
                                    <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                                    </datalist-->
                                </div>
                            </div>
                            <div class="aspectos3">
                                <div v-for="(find,index) in dato4" :key="find.id">
                                    <select class="aspectos4 select" v-model="find.value" :key="index">
                                        <option disabled value>__{{ component.name }}</option>
                                        <option
                                            v-for="aspecto in aspectos2"
                                            :key="aspecto.id"
                                        >{{ aspecto }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="cargarAspectos">
                                <div class="cargarAspectos2">
                                    <button type="submit">cargar aspectos</button>
                                </div>
    
                                <div class="cargarCampo2">
                                    <button @click="cargarCampo">cargar campo</button>
                                </div>
    
                                <div class="limpiarCamp2">
                                    <button id="limpiar" v-on:click="limpiarCampo">limpiar campo</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <!---------------------------------------------------------------------------------------------------->
                </div>
                <div class="limpiarCamp">
                    <button id="limpiar" v-on:click="limpiarCampo">limpiar campo</button>
                </div>
            </div>
    
        </div>
        <div>
            <button
                style="float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;"
                @click="bajar(convertir(component.name))"
            >deslizar al campo cargado</button>
        </div>
    </div>
</template>



<script>


import { signos } from './variables';
import { aspectos, astrosArray } from './variables'
import {methodsChildComponents as methods} from '../methods.js'

export default {
    name: 'molde',
    props: ['component', 'index'],
    methods: {...methods,
        bajar(ref){
            const baj=document.getElementById(`bajar${ref}`);
            if(baj){
                baj.scrollIntoView();
            }else {let flashName='Aún no hay ninguna definición que mostrar';
            this.$emit('alertaFlashtwo',flashName);
            }
        },


        shiftAspecto() {

            let aux = this.astrosArray.filter(x => x != this.astrosArray[0])
            this.aspectos2 = aux
            this.astrosArray.shift()


        },
        cargarCampo() {
            this.cargarInput1();
            this.cargarInput2();
            this.cargarInput3();
        }
        ,
        async cargarInput1() {

            if (this.dato1 != "") {
                let peticionTipo = { nombre: 'sol_ensigno' };
                await axios.post('/carta', peticionTipo).then((response) => {
                    let texto = {
                        'id':  5+this.index,
                        'nombre': this.component.name + ' en el signo',
                        'definicion': response.data
                    }

                    this.$emit('tipo1', texto);
                })
                let peticion = {
                    nombre: this.dato1
                }
                await axios.post('/carta', peticion).then((response) => {
                    let texto = {
                        'id':  5+this.index,
                        'nombre': this.dato1,
                        'definicion': response.data
                    }

                    this.$emit('first', texto);
                })
            }

        },
        async cargarInput2() {
            if (this.dato2 != "") {
                let peticionTipo = { nombre: 'sol_encasa' };
                await axios.post('/carta', peticionTipo).then((response) => {
                    let texto = {
                        'id': 5+this.index,
                        'nombre': 'Sol en la Casa',
                        'definicion': response.data
                    }

                    this.$emit('tipo2', texto);
                })
                let peticion = {
                    nombre: this.dato2
                }
                await axios.post('/carta', peticion).then((response) => {
                    let texto = {
                        'id': 5+this.index,
                        'nombre': this.dato2,
                        'definicion': response.data
                    }

                    this.$emit('second', texto);
                })
            }

        },
        async cargarInput3() {
            let f = 0;
            for (f = 0; f <= this.dato3.length; f++) {
                let dato3 = this.dato3[f].value;

                let dato4 = this.dato4[f].value;
                let dato5 = dato3.concat(' ', dato4);

                this.dato5[f].value = dato5;
                console.log(this.dato5[0]);
                this.consultarAspecto();
            }
        },
        async consultarAspecto() {


            let { value } = this.dato5[0];

            if (value != ' ') {

                await axios.post('/aspectos', this.dato5).then((response) => {
                    let nombre = response.data.value;
                    let definicion = response.data.respuestas;
                    let data = new Array(definicion.length);
                    let i = 0;
                    nombre.forEach(element => {
                        if (definicion[i] != "") {
                            data[i] = {
                                'nombre': element,
                                'definicion': definicion[i]
                            }
                        } else {
                            data[i] = { 'nombre': '', 'definicion': '' }
                        }
                        i++;
                    });
                    let texto = {
                        'id': 5+this.index,
                        'aspectos': data
                    }
                    this.$emit('third', texto);

                });
            }
        }

        ,
        addAspecto: function () {
            this.dato3.push({ value: '' });
            this.dato4.push({ value: '' });
            this.dato5.push({ value: '' });

        }
        ,
        deleteAspecto: function () {


            let ind = this.dato3.length;
            this.dato3.splice(ind - 1, 1);
            let ind4 = this.dato4.length;
            this.dato4.splice(ind4 - 1, 1);
            let ind5 = this.dato4.length;
            this.dato5.splice(ind5 - 1, 1);
            let texto = { 'id': 5+this.index }
            this.$emit('deleteAspecto', texto);
        }
        ,
        deleteInput1() {
            this.dato1 = "";
            let texto = { 'id': 5+this.index }
            this.$emit('deleteDefinicion1', texto);
        }
        ,
        deleteInput2() {
            this.dato2 = "";
            let texto = { 'id': 5+this.index }
            this.$emit('deleteDefinicion2', texto);
        },
        deleteAspectos() {
            this.dato3 = [];
            this.dato4 = [];
            this.dato5 = [];
            let texto = { 'id': 5+this.index }
            this.$emit('deleteAspectos', texto)
        }
        ,
        limpiarCampo() {
            this.deleteInput1();
            this.deleteInput2();
            this.deleteAspectos();
            this.addAspecto();
        },
        convertir(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } 


    },

    data() {
        return {
            idDinamico: `subir${this.convertir(this.component.name)}`,
            dato1: '',
            dato2: '',
            count: 0,
            dato3: [],
            dato4: [],
            dato5: [],
            casas: signos.map((e,i)=>`${this.component.name} en casa ${i}`),
            signos,
            aspectos: aspectos.map((x) => `${this.component.name} ${x}`),
            astrosArray,
            aspectos2: ''

        }
    }
    ,
    mounted() {
        this.addAspecto()

    },
    beforeMount() {
        this.shiftAspecto()
    },

    created: function () {
        this.$root.$on('clean', this.limpiarCampo);


        this.$root.$on('update', this.cargarCampo);
    }
}

import axios from 'axios'


</script>