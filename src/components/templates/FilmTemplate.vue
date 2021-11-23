<template>
  <div id="filmTemplate" style="height: 100%;">
    <plain-content :bg="`secondary`" style="height: 100%;">
      <slot name="film-content" />
    </plain-content>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import PlainContent from '@/components/atoms/PlainContent.vue';

@Component({
  components: {
    PlainContent,
  }
})
export default class FilmTemplate extends mixins(UtilMixin) {}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>
