<template> 
 <div class="principal">

    <button class="cargarCampo" @click="cargarCampo">
        cargar campo
    </button>   
    <div class="contenedorLuna"> 
 <!---------signo----------------->               
       
        <form class="signo"  action="" v-on:submit.prevent="cargarInput1()" method="POST" >
            <input list="opcionesMercurio1" type="text" v-model="dato1" name="nombre" id="imput1" placeholder="__mercurio en signo">
                <datalist id="opcionesMercurio1">
                    <option v-for="signo in signosMercurio" :key="signo.id">{{signo}}</option> 
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
            <input list="opcionesMercurio2" type="text" v-model="dato2" name="nombre" id="imput2" placeholder="__mercurio en casa">
                <datalist id="opcionesMercurio2">
                    <option v-for="casa in casasMercurio" :key="casa.id">{{casa}}</option>
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
           <form class="aspectos"  v-on:submit.prevent="cargarInput3()" action="" >

                <div class='botonAspec' >
                    <button   @click.prevent= "addAspecto">
                        agregar
                    </button>
                    <button   @click.prevent="deleteAspecto">
                        borrar
                    </button>
                </div>


                <div class="aspectos2"  >
                    <div class="aspectos6" >
                        <div v-for="(find,index) in dato3" :key="find.id">
                            <input  class='aspectos5' list="opcionesMercurio" v-model="find.value" :key="index" placeholder="__aspectos de" >
                            <datalist id="opcionesMercurio">
                                <option v-for="aspecto in aspectos" :key="aspecto.id">{{aspecto}}</option>
                            </datalist>
                        </div>
                    </div>
                    <div class='aspectos3' >
                        <div v-for="(find,index) in dato4" :key="find.id">
                            <input class='aspectos4' list="opcionesMercurio4" v-model="find.value" :key="index" placeholder="__mercurio" >
                                <datalist id="opcionesMercurio4">
                                <option v-for="aspecto in aspectos2" :key="aspecto.id">{{aspecto}}</option>
                                </datalist>
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
  name: 'mercurio',
  methods:{
    


    cargarCampo(){
        this.cargarInput1();
        this.cargarInput2();
        this.cargarInput3();
    }
    ,
    async cargarInput1(){
        
        if(this.dato1!=""){
        let peticionTipo={nombre:'mercurio_ensigno'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':10,
                'nombre':'mercurio en el signo',
                'definicion': response.data
            }
            
            this.$emit('tipo1',texto);
           })
        let peticion={
            nombre:this.dato1
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':10,
            'nombre':this.dato1,
            'definicion': response.data
        }
        
        this.$emit('first',texto);
       })}
    
    },
    async cargarInput2(){
        if(this.dato2!=""){
        let peticionTipo={nombre:'mercurio_encasa'};
        await axios.post('/carta',peticionTipo).then((response)=>{
            let texto={
                'id':10,
                'nombre':'mercurio en la Casa',
                'definicion': response.data
            }
            
            this.$emit('tipo2',texto);
           })
        let peticion={
            nombre:this.dato2
        }
         await axios.post('/carta',peticion).then((response)=>{
        let texto={
            'id':10,
            'nombre':this.dato2,
            'definicion': response.data
        }
        
        this.$emit('second',texto);
       })}
    
    },
    async cargarInput3(){
            let f=0;
            for (f=0;f<=this.dato3.length;f++){
            let dato3= this.dato3[f].value;

            let dato4=this.dato4[f].value;
            let dato5=dato3.concat(' ',dato4);
           
            this.dato5[f].value=dato5;
           console.log(this.dato5[0]);
            this.consultarAspecto();
            }
        },
    async consultarAspecto(){

           
         let {value}=this.dato5[0];
        
       if (value!=' '){
       
        await axios.post('/aspectos',this.dato5).then((response)=>{        
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
            'id':10,
            'aspectos':data
        }
        this.$emit('third',texto);
        
      });
       }
    }
    
    ,
    addAspecto:function(){
        this.dato3.push({value:''});
        this.dato4.push({value:''});
        this.dato5.push({value:''});
        
    }
    ,
    deleteAspecto:function(){
        
        let ind=this.dato3.length;
        this.dato3.splice(ind-1,1);
        let ind4=this.dato4.length;
        this.dato4.splice(ind4-1,1);
        let ind5=this.dato4.length;
        this.dato5.splice(ind5-1,1);
        let texto={'id':10}
        this.$emit('deleteAspecto',texto);
    }
    ,
    deleteInput1(){
        this.dato1="";
        let texto={'id':10}
        this.$emit('deleteDefinicion1',texto);
    }
    ,
    deleteInput2(){
        this.dato2="";
        let texto={'id':10}
        this.$emit('deleteDefinicion2',texto);
    },
    deleteAspectos(){
        this.dato3=[];
        this.dato4=[];
        this.dato5=[];
        let texto={'id':10}
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
        dato4:[],
        dato5:[],
        casasMercurio:[
          "mercurio en casa 1",
            "mercurio en casa 2",
            "mercurio en casa 3",
            "mercurio en casa 4",
            "mercurio en casa 5",
            "mercurio en casa 6",
            "mercurio en casa 7",
            "mercurio en casa 8",
            "mercurio en casa 9",
            "mercurio en casa 10",
            "mercurio en casa 11",
            "mercurio en casa 12"
        ],
      signosMercurio:[
         "mercurio en aries",
            "mercurio en tauro",
            "mercurio en géminis",
            "mercurio en cáncer",
            "mercurio en leo",
            "mercurio en virgo",
            "mercurio en libra",
            "mercurio en escorpio",
            "mercurio en sagitario",
            "mercurio en capricornio",
            "mercurio en acuario",
            "mercurio en piscis"
      ],
       aspectos:[
         "mercurio conjunción ",
                    "mercurio trígono ",
                    "mercurio sextil ",
                    "mercurio cuadratura ",
                    "mercurio oposición "
       ]  ,
            aspectos2:[
                    "venus",
                    "marte",
                    "júpiter",
                    "saturno",
                    "urano",
                    "neptuno",
                    "plutón",
                    "lilith",
                    "quirón",
                    "ceres",
                    "palas",
                    "juno",
                    "vesta",
                    "acendente",
                    "medio cielo",
                    "nodo norte"
                    
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