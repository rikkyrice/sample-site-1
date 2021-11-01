<template>
  <div id="app">
    <v-app>
      <v-main id="main">
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/style.scss";
#app {
  font-family: Lato, "Noto Sans Japanese", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666;
  min-height: 100vh;
}
#main {
  max-height: 100vh;
}
</style>
