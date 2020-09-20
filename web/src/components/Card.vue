<template>
  <div class="card p-3 mt-3 bg-white ai-center">
    <div class="card-header d-flex pb-3">
      <i class="iconfont" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2">{{title}}</div>
      <i class="iconfont icon-menu1"></i>
    </div>
    <div class="card-body pt-3">
        <slot></slot>
    </div>
    
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import '../assets/scss/_variables';
.card {
    .card-header {
        border-bottom: 1px solid $border-color;
    }
    border-bottom: 1px solid $border-color;
}
</style>