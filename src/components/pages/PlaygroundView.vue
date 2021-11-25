<template>
  <div id="playground">
    <block-button
      label="Add new"
      :primary="true"
      :rounded="false"
    />
    <block-button
      label="ボタン"
      :primary="true"
      :textOnly="true"
      :outlined="false"
      style="width: 100px;"
    />
    <plain-content bg="inherit">
      <label-button
        label="films"
        :primary="true"
        :focused="true"
      />
      <label-button
        label="blog"
        :primary="true"
      />
    </plain-content>
    <v-btn
      text
      color="primary"
    >
      Primary
    </v-btn>
    <user-info-mini-section
      width="300px"
      size="small"
      createdAt="2日前"
    />
    <plain-content bg="secondary">
      <film-content :filmReviewList="filmReviewList" />
    </plain-content>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import UtilMixin from "@/mixins/utilMixin";
import BlockButton from "@/components/atoms/BlockButton.vue";
import LabelButton from "@/components/atoms/LabelButton.vue";
import PlainContent from "@/components/atoms/PlainContent.vue";
import UserInfoMiniSection from '@/components/molecules/UserInfoMiniSection.vue';
import Card from '@/components/molecules/Card.vue';
import { FilmReviewList, FilmReview } from '@/models/filmReview';
import { User } from '@/models/user';
import FilmContent from '@/components/organisms/FilmContent.vue';

@Component({
  components: {
    BlockButton,
    LabelButton,
    PlainContent,
    UserInfoMiniSection,
    Card,
    FilmContent,
  },
})
export default class PlaygroundView extends mixins(UtilMixin) {
  user1: User = {
    userId: 'riku',
    name: 'Riku Hashiki',
    mail: 'rikkyrice@gmail.com',
    password: 'rikky',
    imageURL: require('@/assets/icon.jpg'),
    createdAt: '2021-11-18-00.00.00.000000',
  }
  filmReviews: FilmReview[] = [
    { id: '1', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2020-11-18 00:00:00' },
    { id: '2', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-10-19 00:00:00' },
    { id: '3', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-11-20 00:00:00' },
    { id: '4', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-11-21 00:00:00' },
    { id: '5', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-11-21 16:00:00' },
    { id: '6', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-11-21 16:22:00' },
    { id: '7', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-11-21 16:23:00' },
    { id: '8', title: '「君の名は」をこの前の休日に観てきました！軽くレビュ～', content: '中身', createdBy: this.user1, createdAt: '2020-11-18 00:00:00', updatedAt: '2021-11-21 00:00:00' },
  ]
  filmReviewList: FilmReviewList = {
    matched: 8,
    filmReviews: this.filmReviews,
  }
}
</script>

<style scoped lang="scss">
@import "@/style.scss";
</style>
