<template>
  <div
    :style="{
      width: width,
      height: height,
    }"
    :class="`${bg}-bg`"
    style="cursor: pointer;"
    @click="handleClick()"
    @click.stop="handleClickStopOption()"
  >
    <v-row
      style="width: 100%;"
      no-gutters
    >
      <div
        class="d-flex justify-center white-bg"
        style="border-radius: 10%;"
        :style="{
          width: height,
          height: height,
        }"
      >
        <icon-button
          icon="cow"
          :width="height"
          :height="height"
          iconHeight="48px"
        />
      </div>
      <div class="pl-4" :style="{ width: `calc(100% - ` + height + `)` }">
        <v-row
          style="width: 100%"
          no-gutters
        >
          <div class="bold text-left" :style="titleStyle">{{ title }}</div>
        </v-row>
        <v-row
          style="width: 100%;"
          no-gutters
        >
          <user-info-mini-section
            width="100%"
            size="small"
            :name="user.name"
            :updatedAt="updateTime"
            :src="user.imageURL"
          />
        </v-row>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Prop} from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import Moment from 'moment';
import UtilMixin from '@/mixins/utilMixin';
import IconButton from '@/components/atoms/IconButton.vue';
import UserInfoMiniSection from '@/components/molecules/UserInfoMiniSection.vue';
import { User } from '@/models/user';

@Component({
  components: {
    IconButton,
    UserInfoMiniSection,
  }
})
export default class Card extends mixins(UtilMixin) {
  @Prop({ default: 'white' }) bg!: string;
  @Prop() width!: string;
  @Prop() height!: string;
  @Prop({ default: '10px' }) border!: number;
  @Prop() primary!: boolean;
  @Prop() title!: string;
  @Prop() user!: User;
  @Prop() createdAt!: string;
  @Prop() updatedAt!: string;
  baseColor = '#666666';
  primaryColor = '#A0D0A0';

  get titleStyle() {
    return `color: #666666 important; font-size: 16px;`;
  }

  get updateTime() {
    const now = Moment(new Date);
    const updatedAt = Moment(this.updatedAt);
    return now.diff(updatedAt, 'years') > 0
      ? now.diff(updatedAt, 'years') + '年以上前'
      : now.diff(updatedAt, 'months') > 0
      ? now.diff(updatedAt, 'months') + 'ヵ月前'
      : now.diff(updatedAt, 'days') > 0
      ? now.diff(updatedAt, 'days') + '日前'
      : now.diff(updatedAt, 'hours') > 0
      ? now.diff(updatedAt, 'hours') + '時間前'
      : now.diff(updatedAt, 'minutes') > 0
      ? now.diff(updatedAt, 'minutes') + '分前'
      : '数秒前';
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
