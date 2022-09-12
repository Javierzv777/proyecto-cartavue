<template> 
  <div >
<div v-if= "consul.status==true" :id="'bajar'+convertir(consul.name)"></div>  

    <div v-if="editFlag===false">
      <h3 class="justify" >{{consul.tipo1}}</h3>
      <p class="justify" >{{consul.descripcionTipo1}}</p>
      <h3 class="justify"  style="margin-top:40px">{{consul.nombre1}}</h3>
      <p class="justify" >{{consul.definicion1}}</p>

      <h3 class="justify"  style="margin-top:40px">{{consul.tipo2}}</h3>
      <p class="justify" >{{consul.descripcionTipo2}}</p>
      <h3 class="justify" style="margin-top:40px">{{consul.nombre2}}</h3>
      <p class="justify" >{{consul.definicion2}}</p>
    </div>
    
    <div v-if="editFlag===true">
      <h3 class="justify" >{{consul.tipo1}}</h3>
      <p class="justify" >{{consul.descripcionTipo1}}</p>
      <h3 class="justify"  style="margin-top:40px">{{consul.nombre1}}</h3>
      <!-- <p class="justify" >{{consul.definicion1}}</p> -->
      <textarea 
      @input="resize()" ref="textarea"
      class="justify textarea" v-model="definicion1"></textarea>

      <h3 class="justify"  style="margin-top:40px">{{consul.tipo2}}</h3>
      <p class="justify" >{{consul.descripcionTipo2}}</p>
      <h3 class="justify" style="margin-top:40px">{{consul.nombre2}}</h3>
      <p class="justify" >{{consul.definicion2}}</p>
    </div>

    <div v-if="editFlag === false">
      <div v-for="aspecto of consul.aspectos" :key="aspecto.id">
          <h3 class="justify" >{{aspecto.nombre}}</h3>
          <p class="justify" >{{aspecto.definicion}}</p>
      </div>
    </div>
    <button v-if="consul.status==true && consul.volver==true"  @click="volver(convertir(consul.name))">volver</button>
    <button v-if="consul.status==true && consul.volver==true"  @click="editar()">editar</button>
    

</div>
</template>

<script>
import './consulta.css'

export default {
  name: 'consulta',
  methods:{

      volver(ref){
        const sub=document.getElementById(`subir${ref}`);
        console.log(sub)
            if(sub){
                sub.scrollIntoView();
            }
      },
        convertir(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        editar(){
          this.editFlag = !this.editFlag
          this.definicion1 = this.consul.definicion1

        },
        limpiarCampo(){
          this.editFlag = false,
          this.definicion1 = ""
        },
        resize() {
          let element = this.$refs["textarea"];
          element.style.height = "18px";
          element.style.height = element.scrollHeight + "px";
        },

  },

  props:['consul'],
  data(){
    return{
      editFlag: false,
      definicion1: ""
    }
  },
  created: function () {
        this.$root.$on('clean', this.limpiarCampo);
        
  },
  updated() {
    this.resize();
  },
  
}
</script>