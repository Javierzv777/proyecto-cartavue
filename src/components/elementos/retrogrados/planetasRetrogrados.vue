
<template>

     <div style="position:relative;">

        <button :class="style.cargarCampo" @click="cargarCampo">
            cargar campo
        </button> 
            <div :class="style.contenedorRetrogrado">
 <!----------------------------------------------------------------------------------------------------->               
                    <form :class="style.uniaspecto"   v-on:submit.prevent="cargarInput3()" action="" >

                        <div class='uniaspecto1'  >
                            <button   @click.prevent= "addAspecto3">
                                agregar
                            </button>
                            <button   @click.prevent="deleteAspecto3">
                                borrar
                            </button>
                        </div>


                        <div :class="style.uniaspecto2">
                            <div  >
                                <div  v-for="(find,index) in dato3"  :key="find.id">
                                    <div :class="style.uniaspecto3">
                                        <select :class="style.select"  v-model="find.value" :key="index">
                                            <option disabled value=""  >__planetas retrogrados
                                            </option>
                                            <option v-for="retrogrado in retrogrados" :key="retrogrado.id">{{retrogrado}}
                                            </option>
                                        </select>
                                    </div>
                                    <!--input :class="style.uniaspecto3"  list="PRetrogrados" v-model="find.value" :key="index" placeholder="__planetas retrogrados">
                                        <datalist id="PRetrogrados">
                                            <option v-for="retrogrado in retrogrados" :key="retrogrado.id">{{retrogrado}}</option>
                                        </datalist-->
                                </div>
                            </div>
                        </div>
                    
                        <div :class="style.uniaspecto4" >    
                            
                            <div :class="style.uniaspecto5"  > 
                                <div :class="style.cargarPlanetas" >
                                    <button   type="submit">
                                            cargar planetas
                                    </button>
                                </div>
                
                            
                                <div :class="style.cargarCampo2" style="width:120px;">
                                            <button  @click="cargarCampo">
                                                cargar campo
                                            </button>  
                                </div>

                                <div :class="style.limpiarCamp2" style="width:120px;">
                                    <button id='limpiar' v-on:click="limpiarCampo">
                                        limpiar campo
                                    </button>
                                </div>
                            </div> 

                        </div>
                    

                    </form>
<!----------------------------------------------------------------------------------------------------->
                </div>
                <div style=" clear:both;"> 

                </div>

                <div :class="style.limpiarCamp" style="position:absolute; top:20px;" >
                            <button id='limpiar' v-on:click="limpiarCampo">
                                limpiar campo
                            </button>
                </div>

         </div>
    



                



    
</template>



<script>
import style from "./retrogrados.module.css"


export default {
  name: 'panetasRetrogrados',
  methods:{
    

    addAspecto3:function(){
        this.dato3.push({value:''})
    },
    cargarCampo(){
        this.cargarInput3();
    }
    ,
    async cargarInput3(){
        
         let {value}=this.dato3[0];
        
       if (value!=''){
      
        await axios.post('/aspectos',this.dato3).then((response)=>{        
            let nombre=response.data.value;
            let definicion=response.data.respuestas;
            let data=new Array(definicion.length);
            let i=0;
            nombre.forEach(element => {
               if(definicion[i]!=""){
                data[i]={
                    'nombre':element,
                    'definicion':definicion[i]
                }}else{data[i]={'nombre':'','definicion':''}
            }
                i++;
            });
            let texto={
                'id':44,
                'aspectos':data
            }
            this.$emit('third',texto);
            
          });
       }
    },
    
    
    
    
    deleteAspecto3:function(index){
        console.log(index);
        console.log(this.dato3);
        let ind=this.dato3.length;
        this.dato3.splice(ind-1,1);
        let texto={'id':44}
        this.$emit('deleteAspecto',texto);
    }
    
    ,
    limpiarCampo(){
     this.deleteInput3();
             
      
    }
     
    
},
mounted(){
    this.addAspecto3();
    
}
,
data(){
    return{
        style,
        dato3:[],
        
        retrogrados:[
         "mercurio retrogrado",
            "venus retrogrado",
            "marte retrogrado",
            "jupiter retrogrado",
            "saturno retrogrado",
            "urano retrogrado",
            "neptuno retrogrado",
            "pluton retrogrado"
      ]
                
    }
},

created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
}
  
}
import axios from 'axios'
</script>

