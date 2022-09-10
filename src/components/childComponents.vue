<template> 
  <div  style="clear: both;">
    
    

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
    
     
    <molde
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
      

        
        id="" style="position:relative; margin-top:50px;"
        v-for="(components, index) in componentsArray" 
       :key="index"
        :component="components" 
        :index="index"
        
        
   />
        
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

        <div>
        <button style='float:right; margin-right:60px; margin-top:5px' @click="bajar('Nakshatra')">deslizar al campo cargado</button>           
        </div>
    </div>
         <div  style='clear:both; margin-top:30px;'>
        <capitulos         
        @deleteDefinicion1="limpiarDef1"
        @first="agregarDefinicion1"
        ref="childComponent"
        />
        </div>


  </div>
</template>



<script>

import consul from './consult.js'  
import {methodsChildComponents as methods} from './methods.js'
import {components} from './elementos/componentsHijos' //importa todos los componentes
import {componentsArray} from './elementos/componentsHijos'


export default {
components,


  props: {
    
  },
  data(){
      return{
          consul,
          componentsArray
      };
  },
 
    methods 
}

</script>