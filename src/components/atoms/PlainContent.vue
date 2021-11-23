<template>
  <div :class="`${bg}-bg`" :style="{ minWidth }">
    <div
      class="mx-auto"
      :style="maxWidthUtil('1120px', '720px', 'calc(100vw - 32px)')"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';

@Component
export default class PlainContent extends mixins(UtilMixin) {
  @Prop({ default: 'white' }) bg!: string;
  @Prop({ default: '100vw' }) minWidth!: string;
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>