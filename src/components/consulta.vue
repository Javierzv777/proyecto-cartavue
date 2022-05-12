<template> 
  <div >
<div v-if= "consul.ascendente==true" id="bajarAscendente"></div>  
<div v-if= "consul.sol==true" id="bajarSol"></div>
<div v-if= "consul.luna==true" id="bajarLuna"></div>
<div v-if= "consul.mercurio==true" id="bajarMercurio"></div>
<div v-if= "consul.venus==true" id="bajarVenus"></div>
<div v-if= "consul.marte==true" id="bajarMarte"></div>
<div v-if= "consul.jupiter==true" id="bajarJupiter"></div>
<div v-if= "consul.saturno==true" id="bajarSaturno"></div>
<div v-if= "consul.urano==true" id="bajarUrano"></div>
<div v-if= "consul.neptuno==true" id="bajarNeptuno"></div>
<div v-if= "consul.pluton==true" id="bajarPluton"></div>
<div v-if= "consul.lilith==true" id="bajarLilith"></div>
<div v-if= "consul.quiron==true" id="bajarQuiron"></div>
<div v-if= "consul.ceres==true" id="bajarCeres"></div>
<div v-if= "consul.palas==true" id="bajarPalas"></div>
<div v-if= "consul.juno==true" id="bajarJuno"></div>
<div v-if= "consul.vesta==true" id="bajarVesta"></div>
<div v-if= "consul.nodos==true" id="bajarNodos"></div>
<div v-if= "consul.fortuna==true" id="bajarFortuna"></div>
<div v-if= "consul.infortunio==true" id="bajarInfortunio"></div>
<div v-if= "consul.retrogrados==true" id="bajarRetrogrados"></div>
<div v-if= "consul.influencias==true" id="bajarInfuencias"></div>
<div v-if= "consul.hemisferios==true" id="bajarHemisferios"></div>
<div v-if= "consul.nakshatra==true" id="bajarNakshatra"></div>

    <h3 class="justify" >{{consul.tipo1}}</h3>
    <p class="justify" >{{consul.descripcionTipo1}}</p>
    <h3 class="justify"  style="margin-top:40px">{{consul.nombre1}}</h3>
    <p class="justify" >{{consul.definicion1}}</p>

    <h3 class="justify"  style="margin-top:40px">{{consul.tipo2}}</h3>
    <p class="justify" >{{consul.descripcionTipo2}}</p>
    <h3 class="justify" style="margin-top:40px">{{consul.nombre2}}</h3>
    <p class="justify" >{{consul.definicion2}}</p>

    <div v-for="aspecto of consul.aspectos" :key="aspecto.id">
        <h3 class="justify" >{{aspecto.nombre}}</h3>
        <p class="justify" >{{aspecto.definicion}}</p>
    </div>
    <button v-if="consul.ascendente==true && consul.volver==true"  @click="volver('Ascendente')">volver</button>
    <button v-if="consul.medioCielo==true && consul.volver==true"  @click="volver('Ascendente')">volver</button>
    <button v-if="consul.sol==true && consul.volver==true" @click="volver('Sol')">volver</button>
    <button v-if="consul.luna==true && consul.volver==true" @click="volver('Luna')">volver</button>
    <button v-if="consul.mercurio==true && consul.volver==true" @click="volver('Mercurio')">volver</button>
    <button v-if="consul.venus==true && consul.volver==true" @click="volver('Venus')">volver</button>
    <button v-if="consul.marte==true && consul.volver==true" @click="volver('Marte')">volver</button>
    <button v-if="consul.jupiter==true && consul.volver==true" @click="volver('Jupiter')">volver</button>
    <button v-if="consul.saturno==true && consul.volver==true" @click="volver('Saturno')">volver</button>
    <button v-if="consul.urano==true && consul.volver==true" @click="volver('Urano')">volver</button>
    <button v-if="consul.neptuno==true && consul.volver==true" @click="volver('Neptuno')">volver</button>
    <button v-if="consul.pluton==true && consul.volver==true" @click="volver('Pluton')">volver</button>
    <button v-if="consul.lilith==true && consul.volver==true" @click="volver('Lilith')">volver</button>
    <button v-if="consul.quiron==true && consul.volver==true" @click="volver('Quiron')">volver</button>
    <button v-if="consul.ceres==true && consul.volver==true" @click="volver('Ceres')">volver</button>
    <button v-if="consul.palas==true && consul.volver==true" @click="volver('Palas')">volver</button>
    <button v-if="consul.juno==true && consul.volver==true" @click="volver('Juno')">volver</button>
    <button v-if="consul.vesta==true && consul.volver==true" @click="volver('Vesta')">volver</button>
    <button v-if="consul.nodos==true && consul.volver==true" @click="volver('Nodos')">volver</button>
    <button v-if="consul.fortuna==true && consul.volver==true" @click="volver('Fortuna')">volver</button>
    <button v-if="consul.infortunio==true && consul.volver==true" @click="volver('Infortunio')">volver</button>
    <button v-if="consul.retrogrados==true && consul.volver==true" @click="volver('Retrogrados')">volver</button>
    <button v-if="consul.influencias==true && consul.volver==true" @click="volver('influencias')">volver</button>
    <button v-if="consul.hemisferios==true && consul.volver==true" @click="volver('Hemisferios')">volver</button>
    <button v-if="consul.nakshatra==true && consul.volver==true" @click="volver('Nakshatras')">volver</button>
    

</div>
</template>

<script>
export default {
  name: 'consulta',
  methods:{

      volver(ref){
        let texto=ref;
        this.$emit('volver',texto)
      }

  },

  props:['consul']
  
}
</script>