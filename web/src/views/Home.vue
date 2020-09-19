<template>
  <div>
    <swiper :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/imgs/banner/banner1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/imgs/banner/banner2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/imgs/banner/banner3.jpeg" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  components: {},
};
</script>

<style lang="scss">
@import '../assets/scss/variables';
.swiper-pagination {
  .swiper-pagination-bullet {
    background-color: map-get($colors, 'white');
    border-radius: 0.1538rem;
    opacity: 1;
    &.swiper-pagination-bullet-active {
      background-color: map-get($colors, 'info');
    }
  }
}
</style>
