<template> 
  <div  >

    


        
        <div id='global'>
        <transition name="fade"
        >
        <div  v-if ="show"  >
            <p id='flashes'> {{flash}}
            </p>

        </div>
        </transition>
        <transition name="fade"
        >
        <div  v-if ="showtwo"  >
            <p id='flashestwo'> {{flash}}
            </p>

        </div>
        </transition>


        <div id='alerta' :style="{display:display}" >
        
            <button @click="thirdFlash" id="button">X</button>
            <p >Esta es una aplicacion web dinámica fácil de manejar en donde podrás buscar significados de posiciones astrológicas con la ayuda del mapa natal,
o elaborar tu propio informe natal, dentro de las opciones se encuentra la luna negra Lilith, el planetoide Quiron, el parte de la fortuna, y los asteroides Ceres, Palas, Juno y Vesta, el mapa natal lo puede cargar en sitios web como www.astro.com o carta-natal.es, es probable que algunos significados no se encuentren disponibles. Para cargar aspectos debe seguir el patron: planeta mas cercano desde el sol hacia afuera según este orden; sol-luna-mercurio..., seguido del nombre del aspecto y finalizando por el planeta que lo aspecta. Ejemplo: 'sol trigono pluton','luna cuadratura ceres', 'mercurio conjuncion nodo norte'. Utilice solo minusculas.  </p>
        <button @click="thirdFlash" style="margin-top:20px;" >Cerrar</button>
        
        </div>


        <hijo id="padre"  
        @alertaFlash="primerFlash"
        @alertaFlashtwo="segundoFlash"
        ref="childComponent"
        ></hijo>
        </div>
    
    
</div>

</template>



<script>
import hijo from './hijo.vue'


export default {
  name: 'padre',
  components: {
    hijo
  },
  
  data(){
    return {
        
        flash:'',
        show:false,
        showtwo:false,
        display:"none"
        
        
    }
}
/*,
mounted(){
    this.addAlerta()
}*/,

methods:{
   addAlerta(){
        setTimeout(()=>{
            this.display="block";
        },4000);
   },
    primerFlash (ref){
        
        setTimeout(()=>{
         
            this.show=false;
        },2500);
        this.flash=ref;
        if(this.show==false){this.show=true;}
    
    },
    segundoFlash (ref){
        
        setTimeout(()=>{
         
            this.showtwo=false;
        },2500);
        
        if(this.showtwo==false){this.showtwo=true;
            this.flash=ref;}
        
    },
    thirdFlash (){
        
        this.display="none";
        
    }
}

}

</script>
