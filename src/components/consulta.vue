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
    
    <div v-if="editFlag===true ">
      <h3 class="justify" >{{consul.tipo1}}</h3>
      <p class="justify" >{{consul.descripcionTipo1}}</p>
      <div v-if="consul.definicion1 != ''">
        <h3 class="justify"  style="margin-top:40px">{{consul.nombre1}}</h3>
        <!-- <p class="justify" >{{consul.definicion1}}</p> -->
        <textarea @input="resize()" ref="textarea"
          class="justify textarea" v-model="definicion1"> 
        </textarea>
      </div>

      <h3 class="justify"  style="margin-top:40px">{{consul.tipo2}}</h3>
      <p class="justify" >{{consul.descripcionTipo2}}</p>
      <div v-if="consul.definicion2 != ''">
        <h3 class="justify" style="margin-top:40px">{{consul.nombre2}}</h3>
        <textarea @input="resize()" ref="textarea2"
          class="justify textarea" v-model="definicion2"> 
        </textarea>
      </div>
      <!-- <p class="justify" >{{consul.definicion2}}</p> -->
    </div>

    <div v-if="editFlag === false">
      <div v-for="aspecto of consul.aspectos" :key="aspecto.id">
          <h3 class="justify" >{{aspecto.nombre}}</h3>
          <p class="justify" >{{aspecto.definicion}}</p>
      </div>
    </div>
    <div v-if="editFlag === true">
      <div v-for="(aspecto, index) in definicion3" :key="aspecto.id">
          <h3 class="justify" >{{aspecto.nombre}}</h3>
          <textarea @input="resize()" :ref="`textarea`+index+2"
          class="justify textarea" v-model="definicion3[index].definicion"> 
        </textarea>
      </div>
    </div>
    <button v-if="consul.status==true && consul.volver==true && editFlag == false" @click="volver(convertir(consul.name))">formulario</button>
    <button v-if="consul.status==true && consul.volver==true && editFlag == false"  @click="editar()">editar</button>
    
    <button v-if="consul.status==true && consul.volver==true && editFlag == true" @click="editar()">cancelar</button>
    <button v-if="consul.status==true && consul.volver==true && editFlag == true"  @click="putDb()">aceptar</button>

</div>
</template>

<script>
import './consulta.module.css';
import axios from 'axios';

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
          this.definicion2 = this.consul.definicion2
          this.definicion3 = [...this.consul.aspectos]
        },
        limpiarCampo(){
          this.editFlag = false,
          this.definicion1 = ""
        },
        resize() {
          let element = this.$refs["textarea"];
          element.style.height = "18px";
          element.style.height = element.scrollHeight + "px";
          let element2 = this.$refs["textarea2"];
          element2.style.height = "18px";
          element2.style.height = element2.scrollHeight + "px";

          this.definicion3?.length>0 && this.definicion3.forEach((asp,i) => {
            let element = this.$refs[`textarea${i+2}`];
            element.style.height = "18px";
            element.style.height = element.scrollHeight + "px";
          })
        },
        putDb(){
          let query = {
            title1: this.consul.nombre1,
            body1: this.definicion1,
            title2: this.consul.nombre2,
            body2: this.definicion2,
            aspectos: this.definicion3
          }
          console.log(query)
          axios.put('/update', query)
        }

  },

  props:['consul'],
  data(){
    return{
      editFlag: false,
      definicion1: "",
      definicion2: "",
      definicion3: []
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

<style module>
  textarea {
    width: 100%;
    min-height: 72px;
    padding: 2px;
    resize: none;
    overflow: hidden;
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 4px;
    font-family: "Inconsolata", monospace;
    /* font-size: 1rem; */
    color: rgb(255, 255, 255);
  }

  textarea:focus {
    outline: none;
  }
</style>