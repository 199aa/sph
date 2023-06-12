<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in List" :key="carousel.id">
        <img :src="carousel.imgUrl" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Carsousel',

  props: ['List'],

  watch: {
    List: {
      handler() {
        this.$nextTick(() => {
          var swiper = new Swiper(this.$refs.cur, {
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 30,
            loop: true
          })
        })
      }
    }
  }
}
</script>

<style  lang="less" scoped>
</style>
