<template> 
  <div>

    <div style="float: left; margin-top:10px;">
        <button v-on:click="cargarCampo()"  >
            formato con capitulos
        </button>
    </div>
        
    <div>
        <div  style="clear:both; float: left; margin-top:5px; ">
            <button id='limpiar' v-on:click="limpiarCampo()">
                formato sin capitulos
            </button>
        </div>
        
    </div>
    
    
</div>

</template>



<script>

import consul from '../consult.js'

export default {
  name: 'capitulos',
  
  methods:{
    cargarCampo(){
        this.cargarInput1();
    },
    
    limpiarCampo(){
        this.deleteInput1();
    },


   
    async cargarInput1(){
        this.consul.forEach(element=>{
                element.volver=false;   
            });   
        
            let capitulo1={
                'id':1,
                'nombre':'Capitulo 1: Su perspectiva ante la vida y como lo ven los demás:',
                'definicion': ''
            };
             this.$emit('first',capitulo1);

             let capitulo2={
                'id':3,
                'nombre':'Capitulo 2: Sus posibilidades sociales y de crecimiento profesional:',
                'definicion': ''
            };
             this.$emit('first',capitulo2);

             let capitulo3={
                'id':5,
                'nombre':'Capitulo 3: Su yo intimo:su verdadera Motivación:',
                'definicion': ''
            };
             this.$emit('first',capitulo3);
           
             let capitulo4={
                'id':7,
                'nombre':'Capitulo 4: Emociones, Apegos, sentimientos:',
                'definicion': ''
            };
             this.$emit('first',capitulo4);

             let capitulo5={
                'id':9,
                'nombre':'Capitulo 5: Intereses y Habilidades Mentales:',
                'definicion': ''
            };
             this.$emit('first',capitulo5);

             let capitulo6={
                'id':11,
                'nombre':'Capitulo 6: Áreas que usted disfruta:',
                'definicion': ''
            };
             this.$emit('first',capitulo6);
    
             let capitulo7={
                'id':13,
                'nombre':'Capitulo 7: Su disposición a la acción:',
                'definicion': ''
            };
             this.$emit('first',capitulo7);

             let capitulo8={
                'id':15,
                'nombre':'Capitulo 8: Áreas que le producen crecimiento y Expansión:',
                'definicion': ''
            };
             this.$emit('first',capitulo8);

             let capitulo9={
                'id':17,
                'nombre':'Capitulo 9: Áreas que son un desafío para usted:',
                'definicion': ''
            };
             this.$emit('first',capitulo9);
    
             let capitulo10={
                'id':19,
                'nombre':'Capitulo 10: Influencias generacionales:',
                'definicion': ''
            };
             this.$emit('first',capitulo10);

             let capitulo11={
                'id':21,
                'nombre':'',
                'definicion': ''
            };
             this.$emit('first',capitulo11);

             let capitulo12={
                'id':23,
                'nombre':'',
                'definicion': ''
            };
             this.$emit('first',capitulo12);
    
             let capitulo13={
                'id':25,
                'nombre':'Capitulo 11: Su lado Oscuro:',
                'definicion': ''
            };
             this.$emit('first',capitulo13);

             let capitulo14={
                'id':27,
                'nombre':'Capitulo 12: La herida más profunda:',
                'definicion': ''
            };
             this.$emit('first',capitulo14);

             let capitulo15={
                'id':29,
                'nombre':'Capitulo 13: Los asteroides Ceres, Palas, Juno y Vesta:',
                'definicion': ''
            };
             this.$emit('first',capitulo15);
    
             let capitulo16={
                'id':31,
                'nombre':'',
                'definicion': ''
            };
             this.$emit('first',capitulo16);

             let capitulo17={
                'id':33,
                'nombre':'',
                'definicion': ''
            };
             this.$emit('first',capitulo17);

             let capitulo18={
                'id':35,
                'nombre':'',
                'definicion': ''
            };
             this.$emit('first',capitulo18);
    
             let capitulo19={
                'id':37,
                'nombre':'Capitulo 14: La ruta debe tomar su alma para evolucionar:',
                'definicion': ''
            };
             this.$emit('first',capitulo19);

             let capitulo20={
                'id':39,
                'nombre':'Capitulo 15: Su zona de felicidad y vitalidad:',
                'definicion': ''
            };
             this.$emit('first',capitulo20);

             let capitulo21={
                'id':41,
                'nombre':'Capitulo 16: Ifortunio, el parte de la desgracia:',
                'definicion': ''
            };
             this.$emit('first',capitulo21);
    
             let capitulo22={
                'id':43,
                'nombre':'Capitulo 17: Planetas retrógrados:',
                'definicion': ''
            };
             this.$emit('first',capitulo22);

             let capitulo23={
                'id':45,
                'nombre':'Capitulo 18: Influencias astrológicas que debe tener en cuenta este año:',
                'definicion': ''
            };
             this.$emit('first',capitulo23);

             let capitulo24={
                'id':47,
                'nombre':'Capitulo 19: Hemisferio dominante en la carta',
                'definicion': ''
            };
             this.$emit('first',capitulo24);

             let capitulo25={
                'id':49,
                'nombre':'Capitulo 20: Nakshatras y anexos interesantes de Astrología Hindu o Jyotish:',
                'definicion': ''
            };
             this.$emit('first',capitulo25); 
     
             
    
    },
    
    
    
    
    deleteInput1(){

        this.consul.forEach(element=>{
            if(element.definicion1 != "" || element.definicion2 != "" || element.aspectos.length > 0)
                element.volver=true;   
            });   
        for (let i = 1; i <= 49 ; i ++){
           
            this.$emit('deleteDefinicion1',{'id':i++});
        }
        
    }


    
   
     
    
},
created: function(){
    this.$parent.$on('clean', this.limpiarCampo);
    
    
   
},
data() {
    return {
        consul
    }
},
}


</script>