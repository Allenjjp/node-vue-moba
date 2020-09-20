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
      <div class="swiper-pagination text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end-of-swiper -->
    <div class="nav-icons bg-white mt-2 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-card icon="menu" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="n in 5" :key="n">
            <div class="py-2" v-for="n in 5" :key="n">
              <span>[活动]</span>
              <span>|</span>
              <span>【探秘新版本，巅峰赢豪礼】活动开启公告</span>
              <span>09/19</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>

    <m-card title="英雄列表" icon="menu"></m-card>
    <m-card title="精彩视频" icon="menu"></m-card>
    <m-card title="图文攻略" icon="menu"></m-card>
    <m-card title="英雄列表" icon="menu"></m-card>
    <m-card title="英雄列表" icon="menu"></m-card>
    <m-card title="英雄列表" icon="menu"></m-card>
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
      },
    };
  },
  components: {},
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.swiper-pagination {
  .swiper-pagination-bullet {
    background-color: map-get($colors, "white");
    border-radius: 0.1538rem;
    opacity: 1;
    margin-bottom: -1rem;
    &.swiper-pagination-bullet-active {
      background-color: map-get($colors, "info");
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-right: 1px solid $border-color;
    &:nth-child(4n) {
      border-right: none;
    }
  }
}
</style>
