<template> 
<div :class="style.principal">

    <button :class="style.cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    <div :class="style.contenedorMolde"> 
 <!---------signo----------------->               
       
        <form :class="style.signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >
             <select   v-model="dato1" style="width:175px;" :class="style.select" >
                <option disabled value=""  >__infortunio en signo
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
                <option disabled value=""  >__infortunio en casa
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
           <form :class="style.aspectos" v-on:submit.prevent="cargarInput3()" action="" >
            <div :class="style.contenedorAspectosInvisibles">


                <div class='botonAspec' style="display:none;"  >
                    <button   @click.prevent= "addAspecto">
                        agregar
                    </button>
                    <button   @click.prevent="deleteAspecto">
                        borrar
                    </button>
                </div>


                <div :class="style.aspectos2"  >
                    <div :class="style.aspectos6" style="display:none;" >
                        <div v-for="(find,index) in dato3" :key="find.id">
                            <input list="opcionesInfortunio" v-model="find.value" :key="index" placeholder="__aspectos del Infortunio">
                            <datalist id="opcionesInfortunio">
                                <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                            </datalist>
                        </div>
                    </div>
                    <div  style="width:200px;" > 
                        <div :class="style.cargarAspectos2" style="display:none;" >
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

import style from "./parte.module.css"

export default {
  name: 'parteInfortunio',
  methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'infortunio'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':42,
                'nombre':'Infortunio en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':42,
            'nombre':`Parte de la ${this.dato1}`,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'infortunio'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':42,
                'nombre':'Infortunio en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':42,
            'nombre':`Parte de la ${this.dato2}`,
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
            'id':42,
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
        let texto={'id':42}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        let texto={'id':42}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        let texto={'id':42}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        let texto={'id':42}
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
          "infortunio en casa 1",
            "infortunio en casa 2",
            "infortunio en casa 3",
            "infortunio en casa 4",
            "infortunio en casa 5",
            "infortunio en casa 6",
            "infortunio en casa 7",
            "infortunio en casa 8",
            "infortunio en casa 9",
            "infortunio en casa 10",
            "infortunio en casa 11",
            "infortunio en casa 12"
        ],
      signos:[
         "infortunio en aries",
            "infortunio en tauro",
            "infortunio en géminis",
            "infortunio en cáncer",
            "infortunio en leo",
            "infortunio en virgo",
            "infortunio en libra",
            "infortunio en escorpio",
            "infortunio en sagitario",
            "infortunio en capricornio",
            "infortunio en acuario",
            "infortunio en piscis"
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