
  <template>
     <div style="position:relative;">

        <button class="cargarCampo" @click="cargarCampo">
            cargar campo
        </button> 
            <div class="contenedorRetrogrado">
 <!----------------------------------------------------------------------------------------------------->               
                    <form class="uniaspecto"   v-on:submit.prevent="cargarInput3()" action="" >

                        <div class='uniaspecto1'  >
                            <button   @click.prevent= "addAspecto3">
                                agregar
                            </button>
                            <button   @click.prevent="deleteAspecto3">
                                borrar
                            </button>
                        </div>


                        <div class="uniaspecto2">
                            <div class=""  >
                                <div v-for="(find,index) in dato3"  :key="find.id">
                                    <select class="uniaspecto3 select" style="width:170px;" v-model="find.value" :key="index">
                                        <option   disabled value=""  >__influencias
                                        </option>
                                        <option v-for="influencia in influencias" :key="influencia.id">{{influencia}}
                                        </option>
                                    </select>
                                    <!--input class="uniaspecto3" list="influencias" v-model="find.value" :key="index" placeholder="__inluencias">
                                        <datalist id="influencias">
                                            <option v-for="influencia in influencias" :key="influencia.id">{{influencia}}</option>
                                        </datalist-->
                                </div>                                 
                            </div>
                        </div>
                    
                        <div class="uniaspecto4" >    
                            
                            <div class="uniaspecto5"  > 
                                <div class="cargarPlanetas"  style="visibility:hidden;" >
                                    <button   type="submit">
                                            cargar predicción
                                    </button>
                                </div>
                
                            
                                <div class="cargarCampo2" style="width:120px;">
                                            <button  @click="cargarCampo">
                                                cargar campo
                                            </button>  
                                </div>

                                <div class="limpiarCamp2" style="width:120px;">
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

                <div class="limpiarCamp" style="position:absolute; top:20px;" >
                            <button id='limpiar' v-on:click="limpiarCampo">
                                limpiar campo
                            </button>
                </div>

         </div>
    




  
                
            
</template>



<script>



export default {
  name: 'influencias',
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
                'id':46,
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
        let texto={'id':46}
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
        dato3:[],
        
        influencias:[
            "primer retorno de saturno",
            "segundo retorno de saturno",
            "mercurio retrogrado transito",
            "jupiter mercurio transito",
            "saturno mercurio transito",
            "jupiter luna transito",
            "saturno luna transito",
            "jupiter sol transito",
            "saturno sol transito",
            "jupiter venus transito",
            "saturno venus transito",
            "urano mercurio transito",
            "urano sol transito",
            "urano luna transito",
            "urano venus transito"  
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