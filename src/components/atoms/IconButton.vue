<template>
  <v-btn
    :icon="!fab"
    :fab="fab"
    :elevation="fab ? elevation : 0"
    :loading="loading"
    color="white"
    :width="width"
    :height="height"
    :style="style"
    @click="handleClick()"
    @click.stop="handleClickStopOption()"
  >
    <img
      v-if="src"
      :src="src"
      :width="width"
      :height="width"
      :style="{ 
        fill: color || '#666666',
        'object-fit': 'cover',
        'border-radius': '50%',
      }"
    />
    <v-icon v-else :size="iconHeight" :color="color || '#666666'"
      >mdi-{{ icon }}</v-icon
    >
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';

@Component
export default class IconButton extends mixins(UtilMixin) {
  @Prop() icon!: string;
  @Prop() src!: string;
  @Prop() fab!: boolean;
  @Prop() outlined!: boolean;
  @Prop() color!: string;
  @Prop({ default: 2 }) elevation!: number | string;
  @Prop() loading!: boolean;
  @Prop() size!: string;
  @Prop() disabled!: boolean;
  @Prop() width!: string;
  @Prop() height!: string;
  @Prop() iconHeight!: string;

  get style() {
    return this.outlined
      ? `color: ${this.color} !important; border: solid 2px ${this.color} !important;`
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
</style>
