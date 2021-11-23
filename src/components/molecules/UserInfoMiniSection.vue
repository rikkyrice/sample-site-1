<template>
  <div 
    :class="`${bg}-bg`" 
    :style="{
      width: width,
      height: height,
    }"
    @click="handleClick()"
    @click.stop="handleClickStopOption()"
  >
    <v-row
      style="width: 100%;"
      no-gutters
    >
      <div
        class="d-flex align-center justify-center"
        :style="{
          width: height,
          height: height,
        }"
      >
        <icon-button
          :icon="icon"
          :src="src"
          :fab="fab"
          :outlined="outlined"
          :color="color"
          :elevation="elevation"
          :loading="loading"
          :size="size"
          :disabled="disabled"
          :width="height"
          :height="height"
          :iconHeight="height"
        />
      </div>
      <div class="pl-2" :style="{ width: `calc(100% - ` + height + `)` }">
        <v-row
          style="width: 100%;"
          no-gutters
        >
          <div :style="nameStyle">{{ name }}</div>
        </v-row>
        <v-row
          style="width: 100%;"
          no-gutters
        >
          <div :style="infoStyle">{{ updatedAt }}</div>
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import PlainContent from '@/components/atoms/PlainContent.vue';
import IconButton from '@/components/atoms/IconButton.vue';
import LabelButton from '@/components/atoms/LabelButton.vue';

@Component({
  components: {
    PlainContent,
    IconButton,
    LabelButton,
  },
})
export default class UserInfoMiniSection extends mixins(UtilMixin) {
  @Prop({ default: 'inherit' }) bg!: string;
  @Prop({ default: '100vw' }) width!: string;
  @Prop() icon!: string;
  @Prop() src!: string;
  @Prop() fab!: boolean;
  @Prop() outlined!: boolean;
  @Prop() color!: string;
  @Prop() elevation!: number | string;
  @Prop() loading!: boolean;
  @Prop() size!: string;
  @Prop() disabled!: boolean;
  @Prop({ default: 'unknown' }) name!: string;
  @Prop({ default: '-' }) updatedAt!: string;

  get height() {
    return this.size === 'x-small'
      ? '38px'
      : this.size === 'small'
      ? '42px'
      : this.size === 'large'
      ? '50px'
      : this.size === 'x-large'
      ? '54px'
      : '42px';
  }

  get nameStyle() {
    const size = this.size === 'x-small'
      ? '12px'
      : this.size === 'small'
      ? '16px'
      : this.size === 'large'
      ? '24px'
      : this.size === 'x-large'
      ? '28px'
      : '16px';
    return `color: #666666 important; font-size:` + size;
  }

  get infoStyle() {
    const size = this.size === 'x-small'
      ? '8px'
      : this.size === 'small'
      ? '12px'
      : this.size === 'large'
      ? '20px'
      : this.size === 'x-large'
      ? '24px'
      : '16px';
    return `color: #EEEEEE important; font-size:` + size;
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
