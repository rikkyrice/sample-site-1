<template>
  <div
    id="filmContent"
    class="secondary-bg"
    style="height: 100%; width: 100%;"
  >
    <div class="px-12 py-6">
      <div 
        class="bold text-left mb-4 mx-2"
        :style="fontSizeUtil(32, 16, 12)"
      >
        <span>All Film Review</span>
      </div>
      <div class="d-flex flex-wrap">
        <div
          v-for="(review, i) in filmReviewList.filmReviews"
          :key="i"
          class="ma-1"
        >
          <card
            bg="inherit"
            :width="width"
            height="100px"
            :title="review.title"
            :user="review.createdBy"
            :createdAt="review.createdAt"
            :updatedAt="review.updatedAt"
            class="mb-6 mx-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import UtilMixin from '@/mixins/utilMixin';
import Card from '@/components/molecules/Card.vue';
import { FilmReviewList } from '@/models/filmReview';
import { DeviceType, deviceType } from '@/models/types/deviceType';

@Component({
  components: {
    Card,
  }
})
export default class FilmContent extends mixins(UtilMixin) {
  @Prop() filmReviewList!: FilmReviewList;

  get width() {
    return deviceType === DeviceType.DESKTOP
      ? '450px'
      : '300px';
  }
}
</script>

<style scoped lang="scss">
@import '@/style.scss';
</style>