<template> 
  <div >
<div v-if= "consul.ascendente==true" :id="'bajar'+this.convertir(consul.name)"></div>  


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
    <button v-if="consul.ascendente==true && consul.volver==true"  @click="volver(this.convertir(consul.name))">volver</button>
    

</div>
</template>

<script>
export default {
  name: 'consulta',
  methods:{

      volver(ref){
        let texto=ref;
        this.$emit('volver',texto)
      },
        convertir(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } 

  },

  props:['consul']
  
}
</script>