<template> 

<div class="principal">

    <button class="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    <div class="contenedorLuna"> 
 <!---------signo----------------->               
       
        <form class="signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >
             <select   v-model="dato1" style="width:175px;" class="select" >
                <option disabled value=""  >__quirón en signo
                </option>
                <option v-for="signo in signos" :key="signo.id">{{signo}}
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

            <select   v-model="dato2" style="width:175px; " class="select" >
                <option disabled value=""  >__quirón en casa
                </option>
                <option v-for="casa in casas" :key="casa.id" >{{casa}}
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
           <form class="aspectos"  v-on:submit.prevent="cargarInput3()" action="" >

                <div class='botonAspec' >
                    <button   @click.prevent= "addAspecto">
                        agregar
                    </button>
                    <button   @click.prevent="deleteAspecto">
                        borrar
                    </button>
                </div>


                <div class="aspectos2" >
                    <div class="aspectos6" >
                        <div v-for="(find,index) in dato3" :key="find.id">
                            <select class='aspectos5unido select'  v-model="find.value" :key="index">
                                <option disabled value=""  >__aspectos de quirón
                                </option>
                                <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}
                                </option>
                            </select>
                            <!--input class="aspectos5unido" list="opcionesQuiron" v-model="find.value" :key="index" placeholder="__aspectos del quiron">
                                <datalist id="opcionesQuiron">
                                    <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                                </datalist-->
                        </div>
                    </div>  
                    
                    <div class="cargarAspectos"  > 
                        <div class="cargarAspectos2">
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
  name: 'quiron',
  methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'quiron_ensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':28,
                'nombre':'quiron en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':28,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'quiron_encasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':28,
                'nombre':'quiron en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':28,
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
            'id':28,
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
        let texto={'id':28}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        let texto={'id':28}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        let texto={'id':28}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        let texto={'id':28}
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
        casas:[
          "quirón en casa 1",
            "quirón en casa 2",
            "quirón en casa 3",
            "quirón en casa 4",
            "quirón en casa 5",
            "quirón en casa 6",
            "quirón en casa 7",
            "quirón en casa 8",
            "quirón en casa 9",
            "quirón en casa 10",
            "quirón en casa 11",
            "quirón en casa 12"
        ],
      signos:[
         "quirón en aries",
            "quirón en tauro",
            "quirón en géminis",
            "quirón en cáncer",
            "quirón en leo",
            "quirón en virgo",
            "quirón en libra",
            "quirón en escorpio",
            "quirón en sagitario",
            "quirón en capricornio",
            "quirón en acuario",
            "quirón en piscis"
      ],
       aspectos:[
         "quirón conjunción nodos",
                   
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