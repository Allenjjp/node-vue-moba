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

    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news, i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>
    </m-list-card>
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
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: v + "活动",
            title: "【探秘新版本，巅峰赢豪礼】活动开启公告",
            date: "0919",
          })),
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: v + "新闻",
            title: "【探秘新版本，巅峰赢豪礼】活动开启公告",
            date: "0919",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: v + "活动",
            title: "【探秘新版本，巅峰赢豪礼】活动开启公告",
            date: "0919",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: v + "活动",
            title: "【探秘新版本，巅峰赢豪礼】活动开启公告",
            date: "0919",
          })),
        },
        {
          name: "热门",
          newsList: new Array(5).fill({}).map((v) => ({
            categoryName: v + "活动",
            title: "【探秘新版本，巅峰赢豪礼】活动开启公告",
            date: "0919",
          })),
        },
      ],
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
