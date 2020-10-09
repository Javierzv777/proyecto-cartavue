<template> 
  <div class="principal">
   <button class="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    
    <div class="signoCasa">
 <!---------signo----------------->               
        
        <form class="signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >
            <input list="opcionesnakshatra1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__nakshatra">
                <datalist id="opcionesnakshatra1">
                    <option v-for="nakshatra in nakshatras" :key="nakshatra.id">{{nakshatra}}</option>
                </datalist>


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
        <div style="display:none;">
        <form class="casa" v-on:submit.prevent="cargarInput2()" action="" method="POST"  >




           <input list="opcionesMedioCielo" type="text" v-model="dato2" name="nombre" id="imput2" placeholder="__medio Cielo">
                <datalist id="opcionesMedioCielo">
                    <option v-for="medioCielo in medioCielos" :key="medioCielo.id">{{medioCielo}}</option>       
                </datalist>




            <div class="cargar2">
                <button  id="cargar2" type="submit">
                    cargar
                </button>
                <button  id="borrar2" @click.prevent="deleteInput2()">
                    borrar
                </button>
            </div>

        </form>
        </div>
<!-------------------------------->
     </div>    
         <div class="aspectos"  >

                <div class='botonAspec' >
                    
                </div>


                <div class="aspectos2"  >
                    <div class="aspectos6" >
                        <div >
                            <div  class='aspectos5' >
                                
                            </div>
                        </div>
                    </div>
                    <div class='aspectos3' >
                        <div >
                            <div class='aspectos4' >
                                
                            </div>
                        </div>
                    </div>
                    <div class="cargarAspectosAscendente"  > 
                        <div class="cargarAspectos2">
                            
                        </div>
        
                    
                        <div class="cargarCampoAscendente">
                                    <button  @click="cargarCampo">
                                        cargar campo
                                    </button>  
                        </div>

                        <div class="limpiarCampoAscendente">
                            <button id='limpiar' v-on:click="limpiarCampo">
                                limpiar campo
                            </button>
                        </div>
                    </div> 

                </div>
            
            </div>

        <div class="limpiarCamp">
                <button  v-on:click="limpiarCampo">
                    limpiar campo
                </button>
        </div>

    </div>






</template>



<script>



export default {
  name: 'nakshatra',
  methods:{
    
      cargarCampo(){
          this.cargarInput1();
      },

    
    
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'nakshatra'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':50,
                'nombre':'Nakshatra',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':50,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    
    
    
    
    deleteInput1(){
        this.dato1="";
        let texto={'id':50}
        this.$emit('deleteDefinicion1',texto);
    }
    
    ,
    limpiarCampo(){
     this.deleteInput1();
        
      
    }
     
    
},
data(){
    return{
        dato1:'',
        
        nakshatras:[
            "ashwini",
            "bharani",
            "krittika",
            "rohini",
            "mrigashira",
            "ardra",
            "punarvasu",
            "pushya",
            "ashlesha",
            "magha",
            "purva phalguni",
            "uttara phalguni",
            "hasta",
            "chitra",
            "swati",
            "visakha",
            "anuradha",
            "Jyeshtha",
            "mula",
            "purva ashadha",
            "uttara ashadha",
            "abhijit",
            "shravana",
            "dhanishta",
            "shatabhisha",
            "purva bhadrapada",
            "uttara bhadrapada",
            "revati"
        ]
                
    }
},

created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarInput1);
}
  
}
import axios from 'axios'
</script>