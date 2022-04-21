<template>

  <div id="app">
      <div class="container">
            <div id="box">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maxime voluptas repudiandae. Porro laudantium temporibus eveniet nesciunt quidem ex accusamus perspiciatis aperiam veniam dicta, esse praesentium quasi fugit sit! Fugit?</p>
            </div>

            <!--img alt="Vue logo" src="./assets/logo.png"-->
            <padre msg="Welcome to Your Vue.js App"/>
        </div>
    </div>    
</template>

<script  >
import padre from './components/padre.vue'
import './estilos.css'

export default {
  name: 'App',
  components: {
    padre
  }
}

 
</script>




