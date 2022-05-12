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
        <button style='float:right; margin-right:60px; margin-top:5px; margin-bottom:20px;' @click.prevent="bajar()">deslizar al campo cargado</button>           
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

export default {
components,
  props: {
    
  },
  data(){
      return{
          consul
      };
  },
 
    methods //métodos vienen de methodos.js
}

</script>