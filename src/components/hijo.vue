<template> 
  <div  style="clear: both;">
    <div  style="height:80px;">
       
        
        <h1 class="justify"  style="color:white; font-style:italic; position:relative; 
        margin-bottom:250px; padding-top:30px; " >Carta Astral</h1>
        </div>

        <div  class="justify" style=" color:white; font-style:italic;">
        <h3>El informe natal, Es un informe detallado de tus potenciales y de tu vida, incluye relaciones, inclinación vocacional, identidad y objetivos, panorama general de personalidad, salud, trabajo, inversiones e ingresos, dificultades y ventajas, etc.
         Se obtiene a partir de diferentes interpretaciones que se toman de la ubicación de los astros al momento del nacimiento. Este formulario y aplicación es solo de definiciones, para saber la ubicación de los planetas puedes cargar un radix o rueda natal en páginas que ofrecen ese servicio como:</h3>
        <a href="https://astro.com" target="_blank" >https://astro.com</a>
        <br>
        <a href="https://carta-natal.es" target="_blank" >https://carta-natal.es</a>
        <h3>o tambiés puedes descargar la aplicación aquarius2go en el celular y cargar el radix con todos los planetas y asteroides. 
        Si no sabes nada de astrología puedes aprender lo básico que son las casas, los signos, y los planetas con sus aspectos en los siguientes links:</h3>
        <a href="https://carta-natal.es/casas.php" target="_blank">casas</a>
        <br>
        <a href="https://carta-natal.es/signos_del_zodiaco.php" target="_blank">signos</a>
        <br>
        <a href="https://carta-natal.es/planetas.php" target="_blank">planetas</a>
        <br>
        <a href="https://carta-natal.es/aspectos.php" target="_blank">aspectos</a>
        <br>
        <a href="https://carta-natal.es/asteroides.php" target="_blank">asteroides</a>
        <br>
        </div>
     
   

   
        
      
        
       <ChildComponents 
          @alertaFlash="primerFlash"
        @alertaFlashtwo="segundoFlash"
        @bajar='bajar'/>
        
        
      

 
        
          <br>
  

        <div id="parrafo3" style="margin-top:45px; position:absolute;">
            <button @click="cargarCarta">cargar Carta</button>  
        </div>
        <div  style="margin-top:70px; position:absolute;">
            <button @click="limpiarCarta">limpiar Carta</button>  
        </div>


    <div id="abajo" style="margin-top:200px;">
    </div>

   <consulta
        @volver="volver"
        id="consulta" style="position:relative; margin-top:50px;"
        v-for="consult in consul" 
       :key="consult.id"
        :consul="consult" 

   />

        <div>
        <button style='float:right; margin-right:60px; margin-bottom:10px;' @click="subir()">volver al formulario</button> 
        <button style='float:right; margin-right:5px; margin-bottom:80px' @click="subirYLimpiar()">limpiar y volver al formulario</button>           
        </div>

  </div>
</template>


<script>
import consulta from './consulta.vue'
import ChildComponents from './childComponents.vue'  
import consul from './consult.js'
// import molde from './elementos/molde.vue'


    export default {
        name: 'hijo',
        components: {
            consulta,
            ChildComponents,
            // molde
    },
    props: {
        
      },
    data(){
        return{
            consul,
            //   componentsArray
        };
    },
 
    methods:{
        subirYLimpiar(){
            this.limpiarCarta();
            const el=document.getElementById('subirAscendente');
            if(el){
            
                el.scrollIntoView();
            }
        },
        subir(){
            const el=document.getElementById('subirAscendente');
            if(el){
                el.scrollIntoView();
            }
        },
        bajar(ref){
            const baj=document.getElementById(`bajar${ref}`);
            if(baj){
                baj.scrollIntoView();
            }else {let flashName='Aún no hay ninguna definición que mostrar';
            this.$emit('alertaFlashtwo',flashName);
            }
        },
        volver(ref){
            const sub=document.getElementById(`subir${ref}`);
            if(sub){
                sub.scrollIntoView();
            }
        }
        ,
        limpiarCarta:function(){ 
            this.$root.$emit('clean');
            let flashName='Todas las definiciones han sido removidas correctamente';
            this.$emit('alertaFlashtwo',flashName);
            // this.consul.forEach(element=>{
            //     element.volver=false;   
            // });   
        },
        cargarCarta: function() {
            this.$root.$emit('update');
            let flashName='Todas las definiciones marcadas han sido cargadas al final del formulario';
            this.$emit('alertaFlash',flashName);   
            setTimeout(()=>{
                this.consul.forEach(element=>{
                element.volver=false; 
            });   
            },9000);
        },
        primerFlash(ref){
            let flashName=ref;
            this.$emit('alertaFlash',flashName);  
        },
        segundoFlash(ref){
            let flashName=ref;
            this.$emit('alertaFlashtwo',flashName);  
        }
        



    
    }
}

</script>