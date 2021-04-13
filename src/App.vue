<template>
  <div id="app">
    
    <TestComp :name="name" :surName="surName"/>
    <TestComp name="Craig" surName="Hctor"/>
    <AddTodo/>
  </div>
</template>

<script>

import AddTodo from './components/AddTodo.vue'
import TestComp from './components/TestComp.vue'

export default {
  name: 'App',
  data() {
    return {
      name: "Margo",
      surName: "Robbie"
    }
  },
  components: {
    TestComp,
    AddTodo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
