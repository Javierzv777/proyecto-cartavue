<template>

  <div id="app">
      <div class="container">
        <router-link to="/api">Link a la aplicacion</router-link>
        <router-view></router-view>


            <!--img alt="Vue logo" src="./assets/logo.png"-->
            
        </div>
    </div>    
</template>

<script  >

// import padre from './components/padre.vue'
import './estilos.css'



export default {
  name: 'App',
  components: {
    // padre
  }
}

 
</script>




