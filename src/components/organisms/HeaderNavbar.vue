<template>
  <v-app-bar
    app
    fixed
    elevation="0"
    color="white"
    style="max-height: 64px;"
  >
    <template v-if="$vuetify.breakpoint.xsOnly">
      <v-row style="position: relative;">
        <v-icon
          style="position: absolute; top: 17px; left: 16px;"
          @click="$emit('open-side-navbar')"
          >mdi-menu</v-icon
        >
        <img
          :src="require('@/assets/logo.svg')"
          height="56"
          class="mx-auto"
          @click="$router.push('/')"
        />
      </v-row>
    </template>
    <template v-else>
      <div
        class="mx-auto"
        style="width: 100%; max-width: 1200px;"
      >
        <div 
          class="d-flex justify-content-left"
          style="width: 100%;"
        >
          <div
            v-for="(navItem, index) in navItemList"
            :key="navItem.path"
            v-ripple="true"
            class="px-2 mx-2"
            :class="{
              'mr-auto': index === 0,
              'header-nav-item': !isCurrentPage(navItem.path),
              'current-nav-item': isCurrentPage(navItem.path) && index > 0,
              'main-color' : isCurrentPage(navItem.path) && index === 0,
            }"
            @click="pageTransition(navItem.path)"
          >
            <span
              v-if="navItem.type === 'span'"
              class="mx-auto bold"
              >{{ navItem.label }}</span
            >
            <img
              v-if="navItem.type === 'img'"
              :src="navItem.label"
              v-ripple="false"
              width="160"
              height="56"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import { NavItemInfo } from '@/models/types/navItemInfo';

@Component
export default class Header extends mixins(UtilMixin) {
  @Prop() navItemList!: NavItemInfo[];

  isCurrentPage(path: string) {
    return this.$route.path === path;
  }

  pageTransition(path: string) {
    if (!this.isCurrentPage(path)) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
.current-nav-item {
  color: #666666;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: normal;
}
.header-nav-item {
  color: #AAAAAA;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:hover {
    color: #666666;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
  }
}
</style>
