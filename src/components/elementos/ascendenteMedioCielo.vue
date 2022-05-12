<template> 
<div class="principal">

    <button class="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    <div class="contenedorLuna"> 
 <!---------signo----------------->               
       
        <form class="signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >

            <select   v-model="dato1" style="width:175px;" class="select">
                <option disabled value=""  >__ascendente
                </option>
                <option v-for="ascendente in ascendentes" :key="ascendente.id">{{ascendente}}
                </option>
            </select>

            <div class="cargar1">
                <button  id="cargar1" type="submit">
                    cargar
                </button>
                <button  id="borrar1" @click.prevent="deleteInput1()">
                    borrar
                </button>
            </div> 

        </form>
 <!-------------casa---------------->     
        <form class="casa" v-on:submit.prevent="cargarInput2()" action="" method="POST"  >

             <select   v-model="dato2" style="width:175px;" class="select" >
                <option disabled value=""  >__medio cielo
                </option>
                <option v-for="medioCielo in medioCielos" :key="medioCielo.id">{{medioCielo}}       
                </option>
            </select>
          

            <div class="cargar2">
                <button  id="cargar2" type="submit">
                    cargar
                </button>
                <button  id="borrar2" @click.prevent="deleteInput2()">
                    borrar
                </button>
            </div>

        </form>

      
    

        
<!------------aspecto------------->       
           <form class="aspectos" v-on:submit.prevent="cargarInput3()" action="" >
            <div class="contenedorAspectosInvisibles">


                <div class='botonAspec' style="display:none;"  >
                    <button   @click.prevent= "addAspecto">
                        agregar
                    </button>
                    <button   @click.prevent="deleteAspecto">
                        borrar
                    </button>
                </div>


                <div class="aspectos2"  >
                    <div class="aspectos6" style="display:none;" >
                        <!-- <div v-for="(find,index) in dato3" :key="find.id">
                            <input class="aspectos5unido" list="opcionesLilith" v-model="find.value" :key="index" placeholder="__aspectos del lilith">
                            <datalist id="opcionesLilith">
                                <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                            </datalist>
                        </div> -->
                    </div>
                    <div  style="width:200px;" > 
                        <div class="cargarAspectos2" style="display:none;" >
                            <button   type="submit">
                                    cargar aspectos
                            </button>
                        </div>
        
                        
                            <div class="cargarCampo2">
                                        <button  @click="cargarCampo">
                                            cargar campo
                                        </button>  
                            </div>

                            <div class="limpiarCamp2">
                                <button id='limpiar' v-on:click="limpiarCampo">
                                    limpiar campo
                                </button>
                            </div>
                        
                    </div> 

                </div>
            
            </div>
            </form>
<!---------------------------------------------------------------------------------------------------->
        
            </div>
               <div class="limpiarCamp">
                        <button id='limpiar' v-on:click="limpiarCampo">
                            limpiar campo
                        </button>
                </div>

        
    
            
    </div>



</template>



<script>
import axios from 'axios'
import {signos} from './variables'

export default {
  name: 'ascendenteMedioCielo',
  data(){
    return{
      dato1:'',
        dato2:'',
      ascendentes:signos.map(e=>`ascendente en ${e}`),
      medioCielos:signos.map(e=>`medio cielo en ${e}`)


    }

 },
  methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'ascendente'};
 
        await axios.post('/carta',peticionTipo).then((response)=>{
        // await axios.post('/carta',peticionTipo).then((response)=>{
            console.log(response)
            let texto={
                'id':2,
                'nombre':'Ascendente en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':2,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'medio_cielo'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':4,
                'nombre':'Medio Cielo en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato2
        }
         await axios.post('http://localhost:3000/carta',peticion).then((response)=>{
        let texto={
            'id':4,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    }
    ,
    deleteInput1(){
        this.dato1="";
        let texto={'id':2}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        let texto={'id':4}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    limpiarCampo(){
     this.deleteInput1();
     this.deleteInput2();   
       
    }
     
    
},
created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
}


</script>