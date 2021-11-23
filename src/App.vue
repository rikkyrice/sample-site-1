<template>
  <div id="app">
    <v-app>
      <header-navbar
        :nav-item-list="navItemList"
        @open-side-navbar="openSideNavbar"
      />
      <side-navbar ref="side-navbar" :nav-item-list="navItemList" />
      <v-main id="main">
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderNavbar from '@/components/organisms/HeaderNavbar.vue';
import SideNavbar from '@/components/organisms/SideNavbar.vue';
import { NavItemInfo } from '@/models/types/navItemInfo';

@Component({
  components: {
    HeaderNavbar,
    SideNavbar,
  }
})
export default class App extends Vue {
  navItems: NavItemInfo[] = [
    { type: 'span', label: 'SAMPLE', path: '/' },
    { type: 'span', label: 'FILM', path: '/film' },
    { type: 'span', label: 'PLAYGROUND', path: '/pg' },
  ];

  get navItemList() {
    return this.navItems;
  }

  openSideNavbar() {
    const sideNavbar: any = this.$refs['side-navbar'];
    sideNavbar.openSideNavbar();
  }
}
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
