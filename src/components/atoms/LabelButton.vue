<template>
  <v-btn
    depressed
    text
    tile
    :ripple="false"
    :color="_color"
    :plain="!focused"
    :height="MdSmXsUtil(height, height, '')"
    :x-large="size === 'x-large'"
    :large="size === 'large'"
    :small="size === 'small'"
    :x-small="size === 'x-small'"
    :class="{
      bold,
    }"
    :style="underlined"
    class="mx-0"
    @click="handleClick()"
    @click.stop="handleClickStopOption()"
  >
    <span>{{ label }}</span>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';

@Component
export default class LabelButton extends mixins(UtilMixin) {
  @Prop() label!: string;
  @Prop() primary!: boolean;
  @Prop() secondary!: boolean;
  @Prop() size!: string;
  @Prop() focused!: boolean;
  @Prop({ default: '36px' }) height!: string;
  @Prop({ default: true }) bold!: boolean;

  baseColor = '#666666';
  primaryColor = '#666666';
  secondaryColor = '#EEEEEE';

  get _color() {
    return this.focused && this.primary
      ? this.primaryColor
      : this.secondary
      ? this.secondaryColor
      : this.baseColor;
  }

  get underlined() {
    const color = this.primary
      ? this.primaryColor
      : this.secondary
      ? this.secondaryColor
      : this.baseColor;
    return this.focused
        ? `border-bottom: solid 2px ${color} !important;`
        : '';
  }     

  handleClick(ev: any) {
    this.$emit('click', ev);
  }

  handleClickStopOption(ev: any) {
    this.$emit('clickStop', ev);
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
.v-btn::before {
  background-color: inherit;
}
</style>
