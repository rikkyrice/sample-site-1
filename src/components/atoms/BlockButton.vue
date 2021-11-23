<template>
  <v-btn
    :depressed="textOnly"
    :loading="loading"
    :disabled="disabled"
    :text="textOnly"
    :rounded="rounded"
    :color="_color"
    :height="MdSmXsUtil(height, height, '')"
    :dark="dark"
    :ripple="{class: 'white--text'}"
    :x-large="size === 'x-large'"
    :large="size === 'large'"
    :small="size === 'small'"
    :x-small="size === 'x-small'"
    :class="{
      bold,
      'hover-animation-button': isDesktop && primary && !textOnly,
    }"
    :style="style"
    @click="handleClick()"
    @click.stop="handleClickStopOption()"
  >
    <div class="d-flex align-center">
      <v-icon v-if="prependIcon" left :style="{ fontSize: iconSize }">{{
        `mdi-${prependIcon}`
      }}</v-icon>
      <img
        v-else-if="prependSrc"
        class="mr-2"
        :src="prependSrc"
        :height="iconSize"
      />
      <span>{{ label }}</span>
      <v-icon v-if="appendIcon" right :style="{ fontSize: iconSize }">{{
        `mdi-${appendIcon}`
      }}</v-icon>
      <img
        v-else-if="appendSrc"
        class="ml-2"
        :src="appendSrc"
        :height="iconSize"
      />
    </div>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import { DeviceType, deviceType } from '@/models/types/deviceType';

@Component
export default class BlockButton extends mixins(UtilMixin) {
  @Prop() label!: string;
  @Prop() primary!: boolean;
  @Prop() secondary!: boolean;
  @Prop() textOnly!: boolean;
  @Prop() dark!: boolean;
  @Prop() prependIcon!: string;
  @Prop() appendIcon!: string;
  @Prop() prependSrc!: string;
  @Prop() appendSrc!: string;
  @Prop() disabled!: boolean;
  @Prop() loading!: boolean;
  @Prop() size!: string;
  @Prop({ default: '36px' }) height!: string;
  @Prop({ default: true }) outlined!: boolean;
  @Prop({ default: true }) rounded!: boolean;
  @Prop({ default: true }) bold!: boolean;

  baseColor = '#666666';
  primaryColor = '#666666';
  secondaryColor = '#EEEEEE';

  get isDesktop() {
    return deviceType === DeviceType.DESKTOP;
  }

  get _color() {
    return this.outlined && !this.textOnly
      ? 'white'
      : this.primary
      ? this.primaryColor
      : this.secondary
      ? this.secondaryColor
      : this.baseColor;
  }

  get style() {
    const color = this.primary
      ? this.primaryColor
      : this.secondary
      ? this.secondaryColor
      : this.baseColor;
    return this.outlined && !this.textOnly && !this.disabled
      ? `color: ${this.baseColor}; border: solid 2px ${color} !important;`
      : '';
  }

  get iconSize() {
    return this.size === 'x-small'
      ? '14px'
      : this.size === 'small'
      ? '16px'
      : this.size === 'large'
      ? '20px'
      : this.size === 'x-large'
      ? '22px'
      : '20px';
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
// 左右で1pxだけ余白ができるので追加
.hover-animation-button:hover::before {
  transform: scale(1.01, 1) !important;
}
</style>
