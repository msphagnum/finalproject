<template>
  <div class="container">
    <header><h1>Баскетбольный чат</h1></header>
    <NavComp/>
    <router-view></router-view>
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import NavComp from './components/NavComp.vue'

export default {
name: 'App',
components: {
  NavComp
}
}
</script>

<style>
*{
  border-radius: 10px;
  margin: 0;
  padding: 0;
}


#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
background-color: black;
height: 1000px;
}

.container {
color: chocolate;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: center;
height: 206vh;
background: url(./assets/istockphoto-1427997649-612x612.jpg);
background-size: cover;
}


header {
  background-color: black;
  background: url(https://www.horner.ru/assets/images/slider/4.jpg);
  color: chocolate;
  width: 100%;
  height: 100px;
}

h1 {
  background-color: black;
  height: 100%;
  margin: 0;
  opacity: 0.85;
  line-height: 89px;
}


</style>
