<template>
  <div class="container">
    <div class="fb-comments" data-href="https://www.mirrormedia.mg/projects/political-contribution/" data-colorscheme="light" data-numposts="10" data-width="100%" data-order-by="reverse_time" style="width: 100%"></div>
    <div class="nav-mobile">
      <router-link class="nav-router-link" to="/explore" @click.native="toOtherSection('explore')" onclick="ga('send', 'event', 'projects', 'click', 'drawer to explore', { nonInteraction: false })">
        <img src="~assets/images/landing-nav/tool.png" alt="查找政商關係"><h2>查找政商關係</h2>
      </router-link>
      <router-link class="nav-router-link" to="/story1" @click.native="toOtherSection('story1')" onclick="ga('send', 'event', 'projects', 'click', 'drawer to article', { nonInteraction: false })">
        <img src="~assets/images/landing-nav/pen.png" alt="獻金解析文章"><h2>獻金解析文章</h2>
      </router-link>
      <a class="nav-router-link subscribe" to="/notice" @click="toggleSubscribe">
        <img src="~assets/images/landing-nav/notice-mobile.png" alt="追蹤最新進度"><h2>追蹤最新進度</h2>
      </a>
      <a class="nav-router-link" href="https://github.com/mirror-media/politicalcontribution" target="_blank" onclick="ga('send', 'event', 'projects', 'click', 'drawer to data', { nonInteraction: false })">
        <img src="~assets/images/landing-nav/paper.png" alt="原始素材資料"><h2>原始素材資料</h2>
      </a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
$.fn.sidebar = require('semantic-ui-sidebar')

export default {
  methods: {
    toOtherSection (to) {
      if (this.$route.name === to) {
        this.$scrollTo('.content')
      }
      $('#comment-hamburger-sidebar').sidebar('hide')
    },
    toggleSubscribe () {
      /* eslint-disable no-undef */
      ga('send', 'event', 'projects', 'click', 'drawer to subscription', { nonInteraction: false })
      this.$emit('toggleSubscribe')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/util.styl'

// In here, we only setting our hamburger menu styles on mobile,
// some commonly used styles of sidebar please go to src/styles/rightSidebar.styl
.container
  .nav-mobile
    flex(column, flex-start, flex-start)
    width 100%
    height 100vh
    a
      // border 1px solid white
      width 100%
      height 25%
      background-color #152438
      flex(row, center, center)
      color white
      box-sizing border-box
      padding 0.5rem
      text-decoration none
      img
        width 32px
        height 32px
      h2
        display inline
        margin 0 0 0 1rem
        font-weight normal
    a + a
      border-top 3px solid white
</style>

