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
     
   

    <h1 style="margin-top:80px;" id='subirAscendente'> Ascendente y Medio Cielo</h1>
        <div class="campo"  style="" >
    <ascendenteMedioCielo
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
        </div>

    <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Ascendente')">deslizar al campo cargado</button>           
    </div>    

        <div style="clear:both;">
        <h1 id='subirSol'>Sol </h1>
        </div>
        
        <div class="campo"   >
    <sol
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
        </div>
        
        <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Sol')">deslizar al campo cargado</button>           
        </div>

        <div style="clear:both;">
        <h1 id='subirLuna'>Luna</h1>
        </div>

        <div class="campo"   >
    <luna
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
        <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Luna')">deslizar al campo cargado</button>           
        </div>

        <div   style="clear:both;">
        <h1 id='subirMercurio'>Mercurio</h1>
        </div>

        <div class="campo"   >
    <mercurio
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Mercurio')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirVenus'>Venus</h1>
        </div>

        <div class="campo"   >
    <venus
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Venus')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirMarte'>Marte</h1>
        </div>

        <div class="campo"   >
    <marte
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Marte')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirJupiter'>Júpiter</h1>
        </div>

        <div class="campo"   >
    <jupiter
        @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
          <div id="box">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime voluptas repudiandae. Porro laudantium temporibus eveniet nesciunt quidem ex accusamus perspiciatis aperiam veniam dicta, esse praesentium quasi fugit sit! Fugit?</p>
    </div>
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Jupiter')">deslizar al campo cargado</button>           
        </div>

        <div style="clear:both;">
        <h1 id='subirSaturno'>Saturno</h1>
        </div>

        <div class="campo"   >
    <saturno
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Saturno')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirUrano'>Urano</h1>
        </div>

        <div class="campo"   >
    <urano
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Urano')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirNeptuno'>Neptuno</h1>
        </div>

        <div class="campo"   >
    <neptuno
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Neptuno')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirPluton'>Plutón</h1>
        </div>

        <div class="campo" >
    <pluton
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Pluton')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirLilith'>Lilith</h1>
        </div>

        <div class="campo"   >
    <lilith
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Lilith')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirQuiron'>Quirón</h1>
        </div>

        <div class="campo"   >
    <quiron
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Quiron')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirCeres'>Ceres</h1>
        </div>
        
        <div class="campo"   >
    <ceres
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Ceres')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirPalas'>Palas</h1>
        </div>

        <div class="campo"   >
    <palas
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Palas')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirJuno'>Juno</h1>
        </div>

        <div class="campo"   >
    <juno
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Juno')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirVesta'>Vesta</h1>
        </div>

        <div class="campo"   >
    <vesta
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Vesta')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirNodos'>Nodos Lunares</h1>
        </div>

        <div class="campo">
    <nodoNorte
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Nodos')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirFortuna'>Parte de la fortuna</h1>
        </div>

        <div class="campo"   >
    <parteFortuna
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Fortuna')">deslizar al campo cargado</button>           
        </div>

        <div style="clear:both;">
         <h1 id='subirInfortunio'>Parte del Infortunio</h1>
        </div>
        <div class="campo"   >
    <parteInfortunio
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Infortunio')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirRetrogrados'>Planetas retrogrados</h1>
        </div>
        <div class="campo"  >
    <planetasRetrogrados
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Retrogrados')">deslizar al campo cargado</button>           
        </div>

        <div style="clear:both;">
        <h1 id='subirInfluencias'>Influencias venideras</h1>
        </div>
        
        <div class="campo"  >
    <influencias
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Influencias')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirHemisferios'>Hemisferio</h1>
        </div>

        <div class="campo"   >
    <hemisferio
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
         <div>
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click="bajar('Hemisferios')">deslizar al campo cargado</button>           
        </div>
        
        <div style="clear:both;">
        <h1 id='subirNakshatras'>Nakshatra (Jyotish-Astrología Védica)</h1>
        </div>
        
        <div class="campo"   >
    <nakshatra
    @first="agregarDefinicion1"
        @second="agregarDefinicion2"
        @third="agregarDefinicion3"
        @deleteAspecto="limpiarAspecto"
        @deleteAspectos="limpiarAspectos"         
        @deleteDefinicion1="limpiarDef1"
        @deleteDefinicion2="limpiarDef2"
        @tipo1="agregarTipo1"
        @tipo2="agregarTipo2"
        ref="childComponent"
    />
    </div>
        
        <div>
        <button style='float:right; margin-right:60px; margin-top:5px' @click="bajar('Nakshatra')">deslizar al campo cargado</button>           
        </div>
      

        <div  style='clear:both; margin-top:30px;'>
        <capitulos         
        @deleteDefinicion1="limpiarDef1"
        @first="agregarDefinicion1"
        ref="childComponent"
        />
        </div>
        
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
import sol from './sol.vue'
import luna from './luna.vue'
import mercurio from './mercurio.vue'
import venus from './venus.vue'
import marte from './marte.vue'
import jupiter from './jupiter.vue'
import saturno from './saturno.vue'
import urano from './urano.vue'
import neptuno from './neptuno.vue'
import pluton from './pluton.vue'
import lilith from './lilith.vue'
import quiron from './quiron.vue'
import ceres from './ceres.vue'
import palas from './palas.vue'
import juno from './juno.vue'
import vesta from './vesta.vue'
import nodoNorte from './nodoNorte.vue'
import parteFortuna from './parteFortuna.vue'
import parteInfortunio from './parteInfortunio.vue'
import ascendenteMedioCielo from './ascendenteMedioCielo.vue'
import planetasRetrogrados from './planetasRetrogrados.vue'
import capitulos from './capitulos.vue'
import hemisferio from './hemisferio.vue'
import nakshatra from './nakshatra.vue'
import influencias from './influencias.vue'
import consul from './consult.js'  


export default {
  name: 'hijo',
  components: { 
    consulta,
    sol, 
    luna, 
    mercurio, 
    venus,
    marte,
    jupiter,
    saturno,
    urano,
    neptuno,
    pluton,
    lilith,
    quiron,
    ceres,
    palas,
    juno,
    vesta,
    nodoNorte,
    nakshatra,
    parteFortuna,
    parteInfortunio,
    planetasRetrogrados,
    ascendenteMedioCielo,
    capitulos,
    hemisferio,
    influencias
    
 
        
  },
  props: {
    
  },
  data(){
      return{
          consul
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
        this.$emit('clean');
        let flashName='Todas las definiciones han sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);
         this.consul.forEach(element=>{
            element.volver=false;   
        });   
    },
    cargarCarta: function() {
        this.$emit('update');
        let flashName='Todas las definiciones marcadas han sido cargadas al final del formulario';
        this.$emit('alertaFlash',flashName);   
        setTimeout(()=>{
            this.consul.forEach(element=>{
            element.volver=false; 
        });   
        },9000);
    },
    

    limpiarAspecto(def){
        this.consul.forEach(element => {
            if(element.id==def.id){
                let aspecto=element.aspectos.length;
                element.aspectos.splice(aspecto-1,1);
                 if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 
            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    },
    limpiarAspectos(def){
        this.consul.forEach(element => {
            if(element.id==def.id){
               element.aspectos=[];
                if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 
            }
        });
        let flashName='Las definiciones de este campo han sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    }
    ,
    limpiarDef1(def){
        this.consul.forEach(element => {
            if(element.id==def.id){                                
                element.tipo1="";
                element.descripcionTipo1="";
                element.nombre1="";
                element.definicion1="";
                 if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 

            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);           
    },
    limpiarDef2(def){
        this.consul.forEach(element => {
            if(element.id==def.id){                                
                element.tipo2="";
                element.descripcionTipo2="";
                element.nombre2="";
                element.definicion2="";
                 if(element.definicion1==""&&element.definicion2==""&&element.aspectos==false){element.volver=false;} 

            }
        });
        let flashName='La definicion de este campo ha sido removidas correctamente';
        this.$emit('alertaFlashtwo',flashName);   
    },
    agregarTipo1(){
        /*this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.tipo1=def.nombre;
                element.descripcionTipo1=def.definicion;
                element.volver=true;  
              }
        }); */
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);   
    },
    agregarTipo2(){
        /*this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.tipo2=def.nombre;
                element.descripcionTipo2=def.definicion;
                element.volver=true;  
              }
        });*/
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);      
    }
    ,
    agregarDefinicion1(def){
      this.consul.forEach(element => {
          if(element.id==def.id){ 
              element.nombre1=def.nombre;
              element.definicion1=def.definicion;
              element.volver=true;  
            }
      });
        
    },
    agregarDefinicion2(def){
        this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.nombre2=def.nombre;
                element.definicion2=def.definicion;
                element.volver=true;  
              }
        });
    
    },
    agregarDefinicion3(def){
        
        this.consul.forEach(element => {
            if(element.id==def.id){ 
                element.aspectos=def.aspectos;
                element.volver=true;  
              }
        });
        let flashName='la definición se ha cargado al final del formulario ';
        this.$emit('alertaFlash',flashName);   
    
    }
}
}

</script>