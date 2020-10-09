<template> 
<div class="principal">

    <button class="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    <div class="contenedorLuna"> 
 <!---------signo----------------->               
       
        <form class="signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >
         <input list="opcionesPalas1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__palas en signo">
            <datalist id="opcionesPalas1">
                <option v-for="signo in signosPalas" :key="signo.id">{{signo}}</option> 
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
        <form class="casa" v-on:submit.prevent="cargarInput2()" action="" method="POST"  >

            <input list="opcionesPalas2" type="text" v-model="dato2" name="nombre" id="imput2" placeholder="__palas en casa">
                <datalist id="opcionesPalas2">
                    <option v-for="casa in casasPalas" :key="casa.id">{{casa}}</option>
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
                        <div v-for="(find,index) in dato3" :key="find.id">
                            <input list="opcionesPalas" v-model="find.value" :key="index" placeholder="__aspectos del palas">
                                <datalist id="opcionesPalas">
                                    <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                                </datalist>
                        </div>
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



export default {
  name: 'palas',
  methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'palas_ensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':32,
                'nombre':'palas en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':32,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'palas_encasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':32,
                'nombre':'palas en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':32,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('second',texto);
       })}
    
    },
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
            'id':32,
            'aspectos':data
        }
        this.$emit('third',texto);
        
      });
       }
    }
    
    ,
    addAspecto:function(){
        this.dato3.push({value:''})
        
    }
    ,
    deleteAspecto:function(index){
        console.log(index);
        console.log(this.dato3);
        let ind=this.dato3.length;
        this.dato3.splice(ind-1,1);
        let texto={'id':32}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        let texto={'id':32}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        let texto={'id':32}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        let texto={'id':32}
        this.$emit('deleteAspectos',texto)
    }
    ,
    limpiarCampo(){
     this.deleteInput1();
     this.deleteInput2();   
     this.deleteAspectos();
     this.addAspecto();   
    }
     
    
},

data(){
    return{
        dato1:'',
        dato2:'',
        count:0,
        dato3:[],
        casasPalas:[
          "palas en casa 1",
            "palas en casa 2",
            "palas en casa 3",
            "palas en casa 4",
            "palas en casa 5",
            "palas en casa 6",
            "palas en casa 7",
            "palas en casa 8",
            "palas en casa 9",
            "palas en casa 10",
            "palas en casa 11",
            "palas en casa 12"
        ],
      signosPalas:[
         "palas en aries",
            "palas en tauro",
            "palas en géminis",
            "palas en cáncer",
            "palas en leo",
            "palas en virgo",
            "palas en libra",
            "palas en escorpio",
            "palas en sagitario",
            "palas en capricornio",
            "palas en acuario",
            "palas en piscis"
      ],
       aspectos:[
       ]         
    }
}
,
mounted(){
    this.addAspecto()
},


  created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
    this.$parent.$on('update', this.cargarCampo);
  }
}

import axios from 'axios'
  

</script>