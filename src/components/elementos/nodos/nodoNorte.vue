<template> 
<div :class="style.principal">

    <button :class="style.cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    <div :class="style.contenedorMolde"> 
 <!---------signo----------------->               
       
        <form :class="style.signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >
             <select   v-model="dato1" style="width:175px;" :class="style.select" >
                <option disabled value=""  >__nodo norte en signo
                </option>
                <option v-for="signo in signos" :key="signo.id">{{signo}}
                </option>
            </select>

            <div :class="style.cargar1">
                <button  id="cargar1" type="submit">
                    cargar
                </button>
                <button  id="borrar1" @click.prevent="deleteInput1()">
                    borrar
                </button>
            </div> 

        </form>
 <!-------------casa---------------->     
        <form :class="style.casa" v-on:submit.prevent="cargarInput2()" action="" method="POST"  >

            <select   v-model="dato2" style="width:175px; " :class="style.select" >
                <option disabled value=""  >__nodo norte en casa
                </option>
                <option v-for="casa in casas" :key="casa.id" >{{casa}}
                </option>
            </select>

            <div :class="style.cargar2">
                <button  id="cargar2" type="submit">
                    cargar
                </button>
                <button  id="borrar2" @click.prevent="deleteInput2()">
                    borrar
                </button>
            </div>

        </form>

      
    


<!------------aspecto------------->       
           <form :class="style.aspectos"  v-on:submit.prevent="cargarInput3()" action="" >

                <div class='botonAspec' >
                    <button   @click.prevent= "addAspecto">
                        agregar
                    </button>
                    <button   @click.prevent="deleteAspecto">
                        borrar
                    </button>
                </div>


                <div :class="style.aspectos2"  >
                    <div :class="style.aspectos6" >
                        <div v-for="(find,index) in dato3" :key="find.id">
                            <div  :class="style.aspectos5unido">
                                <select :class="style.select"  v-model="find.value" :key="index">
                                    <option disabled value=""  >__aspectos del nodo norte
                                    </option>
                                    <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}
                                    </option>
                                </select>
                            </div>
                            <!--input :class="style.aspectos5unido" list="opcionesNodo3" v-model="find.value" :key="index" placeholder="__aspectos del nodo norte">
                                <datalist id="opcionesNodo3">
                                    <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                                </datalist-->
                        </div>
                    </div>
                    <div :class="style.cargarAspectos"  > 
                        <div :class="style.cargarAspectos2">
                            <button   type="submit">
                                    cargar aspectos
                            </button>
                        </div>
        
                    
                        <div :class="style.cargarCampo2">
                                    <button  @click="cargarCampo">
                                        cargar campo
                                    </button>  
                        </div>

                        <div :class="style.limpiarCamp2">
                            <button id='limpiar' v-on:click="limpiarCampo">
                                limpiar campo
                            </button>
                        </div>
                    </div> 

                </div>
            
            </form>
<!---------------------------------------------------------------------------------------------------->

            </div>
               <div :class="style.limpiarCamp">
                        <button id='limpiar' v-on:click="limpiarCampo">
                            limpiar campo
                        </button>
                </div>

        
    
            
    </div>









</template>



<script>
import style from "./nodo.module.css"


export default {
  name: 'nodoNorte',
  methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'nodo_norteensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':38,
                'nombre':'nodo norte en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':38,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'nodo_norteencasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':38,
                'nombre':'nodo norte en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':38,
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
            'id':38,
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
        let texto={'id':38}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        let texto={'id':38}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        let texto={'id':38}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        let texto={'id':38}
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
        style,
        dato1:'',
        dato2:'',
        count:0,
        dato3:[],
        casas:[
          "nodo norte en casa 1",
            "nodo norte en casa 2",
            "nodo norte en casa 3",
            "nodo norte en casa 4",
            "nodo norte en casa 5",
            "nodo norte en casa 6",
            "nodo norte en casa 7",
            "nodo norte en casa 8",
            "nodo norte en casa 9",
            "nodo norte en casa 10",
            "nodo norte en casa 11",
            "nodo norte en casa 12"
        ],
      signos:[
         "nodo norte en aries",
            "nodo norte en tauro",
            "nodo norte en géminis",
            "nodo norte en cáncer",
            "nodo norte en leo",
            "nodo norte en virgo",
            "nodo norte en libra",
            "nodo norte en escorpio",
            "nodo norte en sagitario",
            "nodo norte en capricornio",
            "nodo norte en acuario",
            "nodo norte en piscis"
      ],
       aspectos:[
                    "nodo norte conjunción ascendente",
                    "nodo norte trígono-sextil ascendente",
                    "nodo norte cuadratura ascendente",
                    "nodo norte oposición ascendente",
                    "nodo norte conjunción medio cielo",
                    "nodo norte trígono-sextil medio cielo",
                    "nodo norte cuadratura medio cielo",
                    "nodo norte oposición medio cielo"
                    
                   
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