<template>
  <div id="app">
    <div class="navigation">
      <router-link to="/" exact>Empty</router-link>
      <router-link to="functional" exact>Functional</router-link>
      <router-link to="local">Locale vars</router-link>
      <router-link to="keep">Keep alive</router-link>
    </div>
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view class="route"/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation > * {
  font-size: 24px;
  color: black;
  padding: 0 15px;
}
</style>
