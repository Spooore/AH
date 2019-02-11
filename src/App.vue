<template>
  <div id="app">
    <v-flex>
      <img src="@/assets/logo-header02.png" alt="logo" height="60">
    </v-flex >
    <router-view/>
  </div>
</template>

<style>

  html { height: 100%; }
  body {height: 100%; }

  @import url('https://fonts.googleapis.com/css?family=Varela+Round');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #86af49;
  }
</style>
